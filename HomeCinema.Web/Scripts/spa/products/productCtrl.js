﻿(function (app) {
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
        $scope.ProductCategoryLoadCompleted = ProductCategoryLoadCompleted;
        $scope.ProductCategoryLoadFailed = ProductCategoryLoadFailed;
        $scope.removeproduct = removeproduct;
        $scope.ProductArry = [];
        $scope.modelObj = {};
        $scope.selectedObj = {};
        //$scope.filteredTodos = [];
        //$scope.currentPage = 1;
        //$scope.numPerPage = 3;
        //$scope.maxSize = 2;


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

            apiService.get('/api/ProductCategoryMaster/GetAllProductCategoryMaster', config,
                ProductCategoryLoadCompleted,
                ProductCategoryLoadFailed);
        }
        function ProductCategoryLoadCompleted(response) {
            $scope.ProductArry = response.data;
        }

        function ProductCategoryLoadFailed() {
            console.log("error in Product Category Get Call Service");
        }

        function ProductCategoryLoadCompleted(response) {
            $scope.ProductArry = response.data;
        }

        function ProductCategoryLoadFailed() {
            console.log("error in Product Category Get Call Service");
        }


        function productLoadCompleted(result) {
            $scope.products = result.data;
            //$scope.paginationFunc();
            $scope.adjustProductList();
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

        $scope.Id = 0;
        $scope.SelctedArry = [];
        
        $scope.openProductDialogContainer = function (data) {
            debugger
            $scope.modelObj = data;
            $scope.SelctedArry = $scope.ProductArry.filter(x => x.Id === data.Prod_Cat_Id);
            $scope.selectedObj = $scope.SelctedArry[0];
            $scope.ModelType = 'Edit';
            $scope.openProductDialog();
        };

        //popup for save
        $scope.AddProduct = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            $scope.openProductDialog();

        };

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
        //Paging
        $scope.filteredProductData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 5
            , $scope.maxSize = 5;
        $scope.orderByField = 'Id';
        $scope.reverseSort = true;
        $scope.adjustProductList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredProductData = angular.copy($scope.products.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustProductList();
        });

        $scope.showPerPageDataOptions = [3,5, 10, 25, 50, 100];
       // $scope.paginationFunc = function () {
       //    // $scope.products = [];
       //    // for ($scope.i = 1; $scope.i <= products.length; $scope.i++) {
       //    //     debugger
       //    //     $scope.products.push({ text: "" + products[i], done: false });
       //    // }
       ////$scope.paginationFunc();  
       // $scope.$watch("currentPage + numPerPage", function () {
       //     var begin = (($scope.currentPage - 1) * $scope.numPerPage)
       //         , end = begin + $scope.numPerPage;
       //     $scope.filteredTodos = $scope.products.slice(begin, end);
          
       //     });
       // //$scope.productLoadCompleted();
        
        $scope.search();
    }
})(angular.module('homeCinema'));
