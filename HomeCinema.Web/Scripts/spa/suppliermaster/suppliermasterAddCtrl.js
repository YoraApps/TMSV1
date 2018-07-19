(function (app) {
    'use strict';
    app.controller('suppliermasterAddCtrl', suppliermasterAddCtrl);
    suppliermasterAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];

    function suppliermasterAddCtrl($scope, apiService, notificationService, $modalInstance) {

        $scope.supplier = {};
        $scope.SaveSupplier = SaveSupplier;
        $scope.UpdateSupplier = UpdateSupplier;
        //function Addwatch() {
        //    AddWatchModel();
        //}
        function SaveSupplier() {
            $scope.supplier = $scope.modelObj;
            
            apiService.post('/api/SupplierMaster/Create', $scope.supplier,
                addSupplierSucceded,
                addSupplierFailed);
        }

        function addSupplierSucceded(response) {
            notificationService.displaySuccess(' has been submitted to supplier');
            $scope.supplier = response.data;
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
        function UpdateSupplier() {
            debugger
            $scope.supplier = $scope.modelObj;
            apiService.post('/api/SupplierMaster/Update', $scope.supplier,
                updateSupplierSucceded,
                updateSupplierFailed);
        }


        function updateSupplierSucceded(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displaySuccess(' has been updated');
            $modalInstance.dismiss();
            // $location.path('/watches');
            // $scope.watch = response.data;

        }
        function updateSupplierFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError(response);
        }


    }
})(angular.module('homeCinema'));

