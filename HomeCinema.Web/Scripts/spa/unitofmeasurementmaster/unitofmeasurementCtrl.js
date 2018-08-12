(function (app) {
    'use strict';

    app.controller('unitofmeasurementCtrl', unitofmeasurementCtrl);

    unitofmeasurementCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal', '$routeParams'];

    function unitofmeasurementCtrl($scope, apiService, notificationService, $modal, $routeParams) {
        $scope.title = 'unitofmeasurementCtrl';
        $scope.pageClass = 'page-unitofmeasurement';
        $scope.loadingWatches = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.openUnitOfMeasurementDialog = openUnitOfMeasurementDialog;
        $scope.removeunitofmeasurement = removeunitofmeasurement;
        // $scope.openDialog = openDialog;
        $scope.unitofmeasurements = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;

        function search(page) {
            page = page || 0;

            $scope.loadingunitofmeasurement = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterunitofmeasurement
                }
            };

            apiService.get('/api/UnitOfMeasurementMaster/getallUnit', config,
                unitofmeasurementsLoadCompleted,
                unitofmeasurementsLoadFailed);
        }

        function unitofmeasurementsLoadCompleted(result) {
            $scope.unitofmeasurements = result.data;
            $scope.adjustUOMList();
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingunitofmeasurement = false;


            if ($scope.filterunitofmeasurement && $scope.filterunitofmeasurement.length) {
                notificationService.displayInfo(result.data.length + 'unitofmeasurements found');
            }

        }

        function unitofmeasurementsLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.loadingunitofmeasurement = '';
            search();
        }
        $scope.modelObj = {};
        //popup for update
        $scope.openRentDialogContainer = function (data) {
            $scope.ModelType = 'Edit';
            $scope.modelObj = data;     //editing
            openUnitOfMeasurementDialog();
        }
        //popup for save
        $scope.AddUnitOfMeasurement = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            openUnitOfMeasurementDialog();
        }
        function openUnitOfMeasurementDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/unitofmeasurementmaster/unitofmeasurementAdd.html',
                controller: 'unitofmeasurementAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
                //loadMovieDetails();
            }, function () {
            });
        }
        function removeunitofmeasurement(data) {
            // $scope.loadingWatches = true;
            $scope.removeId = data;
            apiService.post('/api/UnitOfMeasurementMaster/Delete/' + $scope.removeId, null,
              unitofmeasurementRemoveCompleted,
              unitofmeasurementRemoveFailed);
        }

        function unitofmeasurementRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');
            $scope.search();
            // $modalInstance.dismiss();
            console.log(result);
            $scope.unitofmeasurement = result.data;

        }

        function unitofmeasurementRemoveFailed(response) {
            notificationService.displayError(response.data);
            console.log(response);
        }

        // pagination 
        $scope.filteredUOMData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 5
            , $scope.maxSize = 5;
        $scope.orderByField = 'Id';
        $scope.reverseSort = true;
        $scope.adjustUOMList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredUOMData = angular.copy($scope.unitofmeasurements.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustUOMList();
        });

        $scope.showPerPageDataOptions = [3, 5, 10, 25, 50, 100];


        $scope.search();
        activate();

        function activate() { }

    }
})(angular.module('homeCinema'));

