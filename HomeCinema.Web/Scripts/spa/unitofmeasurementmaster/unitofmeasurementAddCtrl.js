﻿
(function (app) {
    'use strict';
    app.controller('unitofmeasurementAddCtrl', unitofmeasurementAddCtrl);
    unitofmeasurementAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];

    function unitofmeasurementAddCtrl($scope, apiService, notificationService, $modalInstance) {

        $scope.unitofmeasurement = {};
        $scope.Saveunitofmeasurement = Saveunitofmeasurement;
        $scope.Updateunitofmeasurement = Updateunitofmeasurement;
        //function Addwatch() {
        //    AddWatchModel();
        //}
        function Saveunitofmeasurement() {
            $scope.unitofmeasurement = $scope.modelObj;

            apiService.post('/api/UnitOfMeasurementMaster/Create', $scope.unitofmeasurement,
                addUnitofmeasurementSucceded,
                addUnitofmeasurementFailed);
        }

        function addUnitofmeasurementSucceded(response) {
            notificationService.displaySuccess(' has been submitted to unitofmeasurement');
            $scope.unitofmeasurement = response.data;
            $scope.search();
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }

        function addUnitofmeasurementFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError('error');
        }
        $scope.cancelEdit = function () {
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }
        //updating
        $scope.unitofmeasurement = {};
        function Updateunitofmeasurement() {
            debugger;
            $scope.unitofmeasurement = $scope.modelObj;
            apiService.post('/api/UnitOfMeasurementMaster/Update', $scope.unitofmeasurement,
                UpdateunitofmeasurementSucceded,
                UpdateunitofmeasurementFailed);
        }


        function UpdateunitofmeasurementSucceded(response) {
            debugger;
            console.log(response);
            $scope.modelObj = {};
            notificationService.displaySuccess(' has been updated');
            $scope.cancelEdit();
        }
        function UpdateunitofmeasurementFailed(response) {
            console.log(response);
            $scope.modelObj = {};       
            notificationService.displayError('error');
        }


    }
})(angular.module('homeCinema'));

