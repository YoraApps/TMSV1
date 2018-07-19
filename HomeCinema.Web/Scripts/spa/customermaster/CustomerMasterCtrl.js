(function (app) {
    'use strict';

    app.controller('CustomerMasterCtrl', customerMasterCtrl);

    customerMasterCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal', '$routeParams'];

    function customerMasterCtrl($scope, apiService, notificationService, $modal, $routeParams) {
        $scope.title = 'CustomerMasterCtrl';
        $scope.pageClass = 'page-CustomerMaster';
        $scope.loadingCustomerMaster = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.openCustomerMasterDialog = openCustomerMasterDialog;
        $scope.removeCustomerMaster = removeCustomerMaster;

        $scope.customerMaster = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.openEditDialog = openEditDialog;

        function search(page) {
            page = page || 0;

            $scope.loadingCustomerMaster = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filtercustomer
                }
            };

            apiService.get('/api/CustomerMaster/getAllCustomer', config,
                CustomerMasterLoadCompleted,
                CustomerMasterLoadFailed);
        }

        function CustomerMasterLoadCompleted(result) {
            console.log("res",result);
            $scope.CustomerMaster = result.data;
            console.log("arr",$scope.CustomerMaster);
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingBooks = false;

            if ($scope.filtercustomer && $scope.filtercustomer.length) {
                notificationService.displayInfo(result.data.length + ' watches found');
            }

        }
        function openEditDialog(customer) {
            $scope.EditedCustomer = customer;
            $modal.open({
                templateUrl: 'scripts/spa/customers/AddCustomerMaster.html',
                controller: 'AddCustomerMasterCtrl',
                scope: $scope
            }).result.then(function ($scope) {
                clearSearch();
            }, function () {
            });
        }
        function CustomerMasterLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filtercustomer = '';
            search();
        }

        $scope.modelObj = {};
        //popup for update
        $scope.openRentDialogContainer = function (data) {
            $scope.ModelType = 'Edit';
            $scope.modelObj = data;     //editing
            $scope.openCustomerMasterDialog();
        }
        //popup for save
        $scope.AddCustomerMaster= function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            $scope.openCustomerMasterDialog();
        }
        function openCustomerMasterDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/CustomerMaster/AddCustomerMaster.html',
                controller: 'AddCustomerMasterCtrl',
                scope: $scope
            }).result.then(function ($scope) {
                //loadMovieDetails();
            }, function () {
            });
        }
        function removeCustomerMaster(data) {
            // $scope.loadingCustomerMaster = true;
            $scope.removeID = data;
            apiService.post('/api/CustomerMaster/Delete/' + $scope.removeID, null,
                CustomerMasterRemoveCompleted,
               CustomerMasterRemoveFailed);
        }

        function CustomerMasterRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');
            $scope.search();
            // $modalInstance.dismiss();
            console.log(result);
            $scope.CustomerMaster = result.data;
            // $location.path('/watches');
            //$scope.loadingWatches = false;
        }

        function CustomerMasterRemoveFailed(response) {
            notificationService.displayError(response.data);
            console.log(response);
        }




        $scope.search();
        activate();

        function activate() { }

    }
})(angular.module('homeCinema'));
