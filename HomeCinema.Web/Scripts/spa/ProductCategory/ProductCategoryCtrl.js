(function (app) {
    'use strict';

    app.controller('ProductCategoryCtrl', ProductCategoryCtrl);

    ProductCategoryCtrl.$inject = ['$scope', 'apiService','$modal','notificationService'];

    function ProductCategoryCtrl($scope, apiService, $modal, notificationService) {
        $scope.title = 'ProductCategoryCtrl';
        $scope.Pcategories = [];
        $scope.loadingProductCategory = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.Updateproduct = Updateproduct;
        $scope.SaveProduct = SaveProduct;
        $scope.cancelEdit = cancelEdit;
        $scope.removeProduct = removeProduct;
        $scope.modelObj = {};
        //Display Data

        function search(page) {
            page = page || 0;

            $scope.loadingProductCategory = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterPcategories
                }
            };

            apiService.get('/api/ProductCategoryMaster/GetAllProductCategoryMaster', config,
                ProductCategoryLoadCompleted,
                ProductCategoryLoadFailed);
        }

        function ProductCategoryLoadCompleted(result) {
            $scope.Pcategories = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingProductCategory = false;

            if ($scope.filterPcategories && $scope.filterPcategories.length) {
                notificationService.displayInfo(result.data.length + ' ProductCategory found');
            }

        }

        function ProductCategoryLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filterPcategories = '';
            search();
        }

        //popup modal

        $scope.Modals = {

            openProductCategoryDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/ProductCategory/PCategoryAdd.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },
            cancelProductCategoryDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };
            //cnacel modal



            //Cancel Edit popup
            function cancelEdit() {
                $scope.Modals.cancelProductCategoryDialog();
            }
        //popup edit productgroup


        $scope.openRentDialogContainer = function (data) {
            $scope.modelObj = data;
            $scope.ModelType = 'Edit';
            $scope.Modals.openProductCategoryDialog();
        }

        //popup Added new ProductGroup

        $scope.AddProductCategory = function () {
            $scope.ModelType = 'Add';
            $scope.Modals.openProductCategoryDialog();
        }

        //Update ProductGroup 
        $scope.ProductObj = {};
        function Updateproduct() {
            $scope.ProductObj = $scope.modelObj;
            apiService.post('/api/ProductCategoryMaster/Update', $scope.ProductObj,
                updateProductedSucceded,
                updateproductedFailed);
        }

        function updateProductedSucceded(response) {
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }

        function updateproductedFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }


        //Save ProductGroup
        function SaveProduct(data) {
            $scope.Data = data;
            debugger
            apiService.post('/api/ProductCategoryMaster/Insert', $scope.Data,
                AddProductSucceded,
                AddProductFailed);
        }
        function AddProductSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Product Category');
            $scope.Pcategories = response.data;
            $scope.modelObj = {};
            $scope.cancelEdit();
            $scope.search();

        }

        function AddProductFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelObj = {};
            $scope.cancelEdit();

        }

        //remove ProductGroup
        function removeProduct(data) {
            $scope.id = data;
            apiService.post('/api/ProductCategoryMaster/Delete/' + $scope.id, null,
                ProductCategoryremoveCompleted,
                ProductCategoryremoveFailed);
        }
        function ProductCategoryremoveCompleted(result) {
            notificationService.displaySuccess('has been remove');
            $scope.ProductGroups = result.data;
            $scope.search();

        }
        function ProductCategoryremoveFailed(response) {
            notificationService.displayError(response);
        }


            $scope.search();
        }
    
})(angular.module('homeCinema'));
