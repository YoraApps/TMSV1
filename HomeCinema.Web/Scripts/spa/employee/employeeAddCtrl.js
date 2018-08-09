(function (app) {
    'use strict';

    app.controller('employeeAddCtrl', employeeAddCtrl);

    employeeAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];
    function employeeAddCtrl($scope, apiService, notificationService, $modalInstance) {
        $scope.title = 'employeeAddCtrl';
        $scope.Employee = {};
        $scope.SaveEmployee = SaveEmployee;
        $scope.UpdateEmployee = UpdateEmployee;

        function SaveEmployee() {
            debugger
            $scope.Employee = $scope.modelObj;
            apiService.post('/api/Employee/Create', $scope.Employee,
                addEmployeeSucceded,
                addEmployeeFailed);
        }

        function addEmployeeSucceded(response) {
            debugger
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.Employee= response.data;
            $scope.search();
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }

        function addEmployeeFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError('error');
        }

        //updating
        function UpdateEmployee() {
            $scope.Employee = $scope.modelObj;
            $scope.EmpId = $scope.modelObj;
            apiService.post('/api/Employee/Update/' + $scope.Employee, $scope.EmpId,
                updateEmployeeSucceded,
                updateEmployeeFailed);
        }

        function updateEmployeeSucceded(response) {
            $scope.modelObj = {};
            notificationService.displaySuccess(' has been updated');
            $modalInstance.dismiss();
        }
        function updateEmployeeFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError(response);
        }

        //cancel
        $scope.cancelEdit = function () {
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }        
    }
})(angular.module('homeCinema'));
