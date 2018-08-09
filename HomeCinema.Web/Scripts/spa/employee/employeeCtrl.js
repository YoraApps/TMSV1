(function (app) {
    'use strict';

    app.controller('employeeCtrl', employeeCtrl);

    employeeCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal', '$routeParams'];

    function employeeCtrl($scope, apiService, notificationService, $modal, $routeParams) {
        $scope.title = 'employeeCtrl';    
        $scope.pageClass = 'page-CustomerMaster';
        $scope.loadingEmployee = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.openEmployeeMasterDialog = openEmployeeMasterDialog;
        $scope.removeEmployee = removeEmployee;

        $scope.employees = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        //$scope.openEditDialog = openEditDialog;

        function search(page) {
            page = page || 0;
            $scope.loadingEmployee = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterMovies
                }
            };

            apiService.get('/api/Employee/getallEmployees', config,
                EmployeeMasterLoadCompleted,
                EmployeeMasterLoadFailed);
        }

        function EmployeeMasterLoadCompleted(result) {           
            $scope.employees = result.data;            
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingEmployee = false;
            if ($scope.filterEmployee && $scope.filterEmployee.length) {
                notificationService.displayInfo(result.data.length + ' Employee found');
            }
        }      
        function EmployeeMasterLoadFailed(response) {
            notificationService.displayError(response.data);
        }   

        function clearSearch() {
            $scope.filterEmployee = '';
            search();
        }

        $scope.modelObj = {};
        //popup for update
        $scope.openEmployeeDialogContainer = function (data) {
            $scope.ModelType = 'Edit';
            $scope.modelObj = data;     //editing
            $scope.openEmployeeMasterDialog();
        }
        //popup for save
        $scope.AddEmployee = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            $scope.openEmployeeMasterDialog();
        }
        function openEmployeeMasterDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/employee/employeeAdd.html',
                controller: 'employeeAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
            }, function () {
            });
        }
        function removeEmployee(data) {           
            $scope.id = data;
            apiService.post('/api/Employee/Delete/' + $scope.id, null,
                EmployeeMasterRemoveCompleted,
               EmployeeMasterRemoveFailed);
        }
        function EmployeeMasterRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');           
            $scope.search();           
            $scope.employees= result.data;
        }

        function EmployeeMasterRemoveFailed(response) {
            notificationService.displayError(response);
        }
        $scope.search(); 
    }
   
})(angular.module('homeCinema'));
