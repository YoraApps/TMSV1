(function (app) {
    'use strict';
    app.controller('ProductGroupCtrl', ProductGroupCtrl);

    ProductGroupCtrl.$inject = ['$scope','$modal', 'apiService', 'notificationService'];

    function ProductGroupCtrl($scope, $modal, apiService, notificationService) {

        $scope.title = 'ProductGroupCtrl';
        $scope.pageClass = 'page-productGroup';
        $scope.loadingproductgroups = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.ProductGroups = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit; 
        $scope.UpdatedProductGroup = UpdatedProductGroup;
        $scope.AddProductModel = AddProductModel;
        $scope.removeProductGroup = removeProductGroup;

//getall ProductGroups

        function search(page) {
            page = page || 0;

            $scope.loadingproductgroups = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 1,
                    filter: $scope.filterProductGroup
                }
            };

            apiService.get('/api/ProductGroupMaster/GetAllProductGroups', config,
                productgroupsLoadCompleted,
                productgroupsLoadFailed);
        }

        function productgroupsLoadCompleted(result) {
            $scope.ProductGroups = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingproductgroups = false;

            if ($scope.filterProductGroup && $scope.filterProductGroup.length) {
                notificationService.displayInfo(result.data.length + ' productgroup found');
            }

        }

        function productgroupsLoadFailed(response) {
            notificationService.displayError(response.data);
        }
//filter clearsearch 
        function clearSearch() {
            $scope.filterProductGroup = '';
            search();
        }

  //popup modal

        $scope.Modals = {
            openProductgroupDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/ProductGroup/Add.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },

  //cnacel modal

            cancelproductGroupDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };

  //Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancelproductGroupDialog();
        }

//popup edit productgroup

        $scope.modelobj = {};
        $scope.openProductGroupDialogContainer = function (data) {
            $scope.modelobj = data;
            $scope.save = 'update';
            $scope.Modals.openProductgroupDialog();
        }

//popup Added new ProductGroup

        $scope.AddProductGroup = function () {
            $scope.save = 'add';
            $scope.Modals.openProductgroupDialog();
        }
        



//Update ProductGroup 
        $scope.ProductObj = {};
        function UpdatedProductGroup() {
            $scope.ProductObj = $scope.modelobj;
            apiService.post('/api/ProductGroupMaster/Update', $scope.ProductObj,
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
        function AddProductModel() {
            debugger
            apiService.post('/api/ProductGroupMaster/Save', $scope.modelobj,
                AddProductSucceded,
                AddProductFailed);
        }
        function AddProductSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.ProductGroups = response.data;
            $scope.modelobj = {};
            $scope.search();
            $scope.cancelEdit();
        }

        function AddProductFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelobj = {};
        }

 //remove ProductGroup
        function removeProductGroup(data) {
            $scope.id = data;
            apiService.post('/api/ProductGroupMaster/Delete/' + $scope.id, null,
                productgroupremoveCompleted,
                productgroupremoveFailed);
        }
        function productgroupremoveCompleted(result) {
            notificationService.displaySuccess('has been remove');
            $scope.ProductGroups = result.data;
            $scope.search();

        }
        function productgroupremoveFailed(response) {
            notificationService.displayError(response);
        }
        $scope.search();
        activate();

        function activate() { }
    }
})(angular.module('homeCinema'));
