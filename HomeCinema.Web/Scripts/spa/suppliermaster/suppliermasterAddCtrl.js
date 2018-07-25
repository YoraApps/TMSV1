(function (app) {
    'use strict';
    app.controller('suppliermasterAddCtrl', suppliermasterAddCtrl);
    suppliermasterAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];

    function suppliermasterAddCtrl($scope, apiService, notificationService, $modalInstance) {

        $scope.supplier = {};
        $scope.SaveSupplier = SaveSupplier;
        $scope.UpdateSupplier = UpdateSupplier;
      
      
        function SaveSupplier(data) {
            $scope.supplier = {
                "Name": data.Name,
                "Address": data.Address,
                "EmailId": data.EmailId,
                "PhoneNumber": data.PhoneNumber,
                "AlternatePhoneNumber": data.AlternatePhoneNumber,
                "FaxNumber": data.FaxNumber,
                "SupplierTypeId": $scope.selectedObj.Id
            }
            $scope.selectedObj;
            apiService.post('/api/SupplierMaster/Create', $scope.supplier,
                addSupplierSucceded,
                addSupplierFailed);
        }

        function addSupplierSucceded(response) {
            debugger
            $scope.supplier = response.data;
            notificationService.displaySuccess('has been submitted to supplier');
            $scope.search();
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }

        function addSupplierFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError('error');
        }
        $scope.cancelEdit = function () {
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }
        //updating
        function UpdateSupplier(data) {

            $scope.supplier = {
                "Id": data.Id,
                "Name": data.Name,
                "Address": data.Address,
                "EmailId": data.EmailId,
                "PhoneNumber": data.PhoneNumber,
                "AlternatePhoneNumber": data.AlternatePhoneNumber,
                "FaxNumber": data.FaxNumber,
                "SupplierTypeId": $scope.selectedObj.Id
            }
            apiService.post('/api/SupplierMaster/Update', $scope.supplier,
                updateSupplierSucceded,
                updateSupplierFailed);
        }
        function updateSupplierSucceded(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displaySuccess('has been updated');
            $modalInstance.dismiss();
            // $location.path('/watches');
            // $scope.watch = response.data;

        }
        function updateSupplierFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError(response);
        }
        $scope.fetchSupplier = function (data) {
            $scope.selectedObj = data;

        }


    }
})(angular.module('homeCinema'));

