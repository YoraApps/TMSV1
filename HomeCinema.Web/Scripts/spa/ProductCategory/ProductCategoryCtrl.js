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
        $scope.productgroupsLoadCompleted = productgroupsLoadCompleted;
        $scope.productgroupsLoadFailed = productgroupsLoadFailed;
        $scope.ProductArry = [];
        $scope.modelObj = {};
        $scope.selectedObj = {};
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

            
            apiService.get('/api/ProductGroupMaster/GetAllProductGroups', config,
                productgroupsLoadCompleted,
                productgroupsLoadFailed);
        }

        function productgroupsLoadCompleted(response) {
            $scope.ProductArry = response.data;

        }
        function productgroupsLoadFailed(error) {
            console.log("error in Product Group Get Call Service");
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

            //Cancel Edit popup
            function cancelEdit() {
                $scope.Modals.cancelProductCategoryDialog();
            }
        //popup edit productgroup

        $scope.Id = 0;
        $scope.SelctedArry = [];

        $scope.openRentDialogContainer = function (data) {
            $scope.modelObj = data;
            $scope.SelctedArry = $scope.ProductArry.filter(x => x.Id === data.GroupId);
            $scope.selectedObj = $scope.SelctedArry[0];
            $scope.ModelType = 'Edit';
            $scope.Modals.openProductCategoryDialog();
        };
        

        //popup Added new ProductGroup

        $scope.AddProductCategory = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            $scope.Modals.openProductCategoryDialog();
        };

        //Update ProductGroup
        
        $scope.ProductObj = {};
        function Updateproduct(data) {
            debugger
            $scope.ProductObj = {
                "Id": data.Id,
                "Name": data.Name,
                "Description": data.Description,
                "Prod_Grp_Id": $scope.selectedObj.Id
            };
            apiService.post('/api/ProductCategoryMaster/Update',$scope.ProductObj,
                updateProductedSucceded,
                updateproductedFailed);
        }

        function updateProductedSucceded(response) {
            debugger
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }

        function updateproductedFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }

        $scope.fetchProduct = function (data) {
            $scope.selectedObj = data;

        };
        //Save ProductGroup
        function SaveProduct(data) {
            $scope.Data = {
                "Name": data.Name,
                "Description": data.Description,
                "Prod_Grp_Id": $scope.selectedObj.Id
            };
            //$scope.selectedObj;
            debugger;
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
