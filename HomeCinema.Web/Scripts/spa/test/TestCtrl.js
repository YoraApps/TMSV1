(function (app) {
    'use strict';
    
    app.controller('TestCtrl', TestCtrl);

    TestCtrl.$inject = ['$scope', 'apiService','$modal', 'notificationService'];

    function TestCtrl($scope, apiService, $modal, notificationService) {
        $scope.title = 'TestCtrl';
        $scope.loadingTests = true;
        $scope.Tests = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit; 
        $scope.removeTest = removeTest;
        $scope.updatedtest = updatedtest;
        $scope.saveTest = saveTest;

        function search() {
            $scope.loadingTests = true;
            apiService.get('/api/Test/GetAllTest/', null,
                TestLoadCompleted,
                TestLoadFailed);
        }
        function TestLoadCompleted(result) {
            $scope.Tests = result.data;
            $scope.loadingTests = false;
            if ($scope.filterTest && $scope.filterTest.length) {
                notificationService.displayInfo(result.data.length + ' Test found');
            }
        }
        function TestLoadFailed(response) {
            notificationService.displayError(response.data);
        } 
        function clearSearch() {
            $scope.filterTest = '';
            search();
        }
        //remove ProductGroup
        function removeTest(data) {
            $scope.id = data;
            apiService.post('/api/Test/Delete/' + $scope.id, null,
                TestremoveCompleted,
                TestremoveFailed);
        }
        function TestremoveCompleted(result) {
            notificationService.displaySuccess('has been remove');
            $scope.Tests = result.data;
            $scope.search();

        }
        function TestremoveFailed(response) {
            notificationService.displayError(response);
        }
        //popup modal
        $scope.Modals = {
            openTestDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/Test/TestAdd.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                },
                    function (event) {
                });
            },                                                                                                                                                                                                                      
            //cancel modal
            cancelTestDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };
        //Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancelTestDialog();
        }

        //popup edit productgroup
        $scope.modelobj = {};
        $scope.openTestContainer = function (data) {
            $scope.modelobj = data;
            $scope.ModelType ='Edit';
            $scope.Modals.openTestDialog();
        }

        //popup Added new ProductGroup
        $scope.AddTest = function () {
            $scope.ModelType = 'Add';
            $scope.Modals.openTestDialog();
        }

        //Update ProductGroup 
        $scope.ProductObj = {};
        function updatedtest() {
            $scope.ProductObj = $scope.modelobj;
            apiService.post('/api/Test/Update', $scope.ProductObj,
                updateTestSucceded,
                updateTestFailed);
        }
        function updateTestSucceded(response) {
            debugger
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }
        function updateTestFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }

        //Save ProductGroup
        function saveTest() {
            apiService.post('/api/Test/Insert', $scope.modelobj,
                AddTestSucceded,
                AddTestFailed);
        }
        function AddTestSucceded(response) {
            debugger
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.Tests = response.data;
            $scope.modelobj = {};
            $scope.search();
            $scope.cancelEdit();
        }
        function AddTestFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelobj = {};
        }


       $scope.search();
    }
})(angular.module('homeCinema'));
