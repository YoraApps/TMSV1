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
        $scope.CustomerArry = [];
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
                    filter: $scope.filterMovies
                }
            };

            apiService.get('/api/CustomerMaster/getAllCustomer', config,
                CustomerMasterLoadCompleted,
                CustomerMasterLoadFailed);

            apiService.get('/api/CustomerTypeMaster/GetAllCustomers', config,
                CustomertypeLoadCompleted,
                CustomerstypeLoadFailed);
        }
        function CustomertypeLoadCompleted(response) {

            $scope.CustomerArry = response.data;

        }
        function CustomerstypeLoadFailed(error) {
            console.log("error in Supplier Type Get Call Service");
        }

        function CustomerMasterLoadCompleted(result) {
            $scope.CustomerMaster = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingBooks = false;
            if ($scope.CustomerArry && $scope.CustomerArry.length) {
                notificationService.displayInfo(result.data.length + ' customer found');
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

        $scope.Id = 0;
        $scope.SelctedArry = [];
        $scope.modelObj = {};
        //popup for update
        $scope.openRentDialogContainer = function (data) {
            $scope.SelctedArry = $scope.CustomerArry.filter(x => x.Id === data.CustTypeId);
            $scope.selectedObj = $scope.CustomerArry[0];
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
            $scope.fetchCustomer= function (data) {
                $scope.selectedObj = data

        }
        function removeCustomerMaster(data) {
            debugger
            $scope.id= data;
            apiService.post('/api/CustomerMaster/Delete/' + $scope.id, null,
                CustomerMasterRemoveCompleted,
               CustomerMasterRemoveFailed);
        }
        function CustomerMasterRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');
            debugger
            $scope.search();
            console.log(result);
            debugger
            $scope.CustomerMaster = result.data;               
        }

        function CustomerMasterRemoveFailed(response) {
            notificationService.displayError(response);
           
        }

        $scope.search();
        activate();

        function activate() { }

    }
})(angular.module('homeCinema'));
