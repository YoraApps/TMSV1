(function (app) {
    'use strict';
    app.controller('AddCustomerMasterCtrl', AddCustomerMasterCtrl);
    AddCustomerMasterCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];

    function AddCustomerMasterCtrl($scope, apiService, notificationService, $modalInstance) {

        $scope.customer = {};
        $scope.SaveCustomer = SaveCustomer;
        $scope.UpdateCustomer = UpdateCustomer;
        //function Addwatch() {
        //    AddWatchModel();
        //}
        function SaveCustomer() {
            $scope.customer = {
                "Name": $scope.modelObj.Name,
                "Address": $scope.modelObj.Address,
                "EmailId": $scope.modelObj.EmailId,
                "PhoneNumber": $scope.modelObj.PhoneNumber,
                "AlternatePhoneNumber": $scope.modelObj.AlternatePhoneNumber,
                "FaxNumber": $scope.modelObj.FaxNumber,
                "CustTypeId": $scope.selectedObj.Id
            }
            $scope.selectedObj;
            apiService.post('/api/CustomerMaster/Create', $scope.customer,
                addCustomerSucceded,
                addCustomerFailed);
        }

        function addCustomerSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.customer = response.data;
            $scope.search();
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }

        function addCustomerFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError('error');
        }

        //cancel
        $scope.cancelEdit = function () {
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }

        //updating
        function UpdateCustomer() {
            $scope.customer = {
                "Id": $scope.modelObj.Id,
                "Name": $scope.modelObj.Name,
                "Address": $scope.modelObj.Address,
                "EmailId": $scope.modelObj.EmailId,
                "PhoneNumber": $scope.modelObj.PhoneNumber,
                "AlternatePhoneNumber": $scope.modelObj.AlternatePhoneNumber,
                "FaxNumber": $scope.modelObj.FaxNumber,
                "CustTypeId": $scope.selectedObj.Id
            }
            //$scope.customer = $scope.modelObj;
            $scope.cusId = $scope.modelObj;
            apiService.post('/api/CustomerMaster/Update/' +$scope.customer, $scope.cusId,              
                updateCustomerSucceded,
                updateCustomerFailed);
        }

        function updateCustomerSucceded(response) {
         
            console.log(response);
            $scope.modelObj = {};
            notificationService.displaySuccess(' has been updated');

            $modalInstance.dismiss();
            // $location.path('/watches');
            // $scope.watch = response.data;

        } 
        function updateCustomerFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError(response);
        }
        $scope.fetchCustomer = function (data) {
            $scope.selectedObj = data;

        };
    }
})(angular.module('homeCinema'));
