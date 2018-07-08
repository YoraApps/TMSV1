(function (app) {
    'use strict';
    app.controller('productCtrl', productCtrl);
    productCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal', '$routeParams'];
    function productCtrl($scope, apiService, notificationService, $modal, $routeParams) {
        $scope.title = 'productCtrl';
        $scope.pageClass = 'page-products';
        $scope.loadingProduct = true;
        $scope.products = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.openProductDialog = openProductDialog;
        $scope.removeproduct = removeproduct;
        $scope.modelObj = {};
        //getting data and filtering data

        function search(page) {
            page = page || 0;
            $scope.loadingProduct = true;
            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterMovies
                }
            };
            apiService.get('/api/Product/getallproduct', config,
                productLoadCompleted,
                productLoadFailed);
        }
        function productLoadCompleted(result) {
            $scope.products = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingProduct = false;
            if ($scope.filterProduct && $scope.filterProduct.length) {
                notificationService.displayInfo(result.data.length + 'Product found');
            }
        }
        function productLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        function clearSearch() {
            $scope.filterProduct = '';
            search();
        }  
        
        $scope.openProductDialogContainer = function (data) {
            $scope.modelObj = data;  
            $scope.ModelType = 'Edit';
            debugger          
            $scope.openProductDialog();
        }
        //popup for save
        $scope.AddProduct = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            $scope.openProductDialog();
        }
        //modified
        function openProductDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/products/productAdd.html',
                controller: 'productAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
            }, function () {
            });
        }
        //remove
        function removeproduct(data) {            
            $scope.removeID = data;
            apiService.post('/api/Product/Delete/' + $scope.removeID, null,
                productRemoveCompleted,
                productRemoveFailed);
        }
        function productRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');
            $scope.search();           
            console.log(result);
            $scope.products = result.data;            
        }
        function productRemoveFailed(response) {
            notificationService.displayError(response.data);
            console.log(response);
        }       
        $scope.search();
        activate();
        function activate() { }
    }
})(angular.module('homeCinema'));
