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
            $scope.customer = $scope.modelObj;
            // console.log(watch);
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
            $scope.customer = $scope.modelObj;
            apiService.post('/api/CustomerMaster/Update', $scope.customer,
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



    }
})(angular.module('homeCinema'));
