(function (app) {
    'use strict';

    app.controller('LocationCtrl', LocationCtrl);

    LocationCtrl.$inject = ['$scope', '$modal','apiService', 'notificationService'];

    function LocationCtrl($scope, $modal, apiService, notificationService) {
        $scope.title = 'LocationCtrl';
        $scope.pageClass = 'page-Location';
        $scope.loadinglocatons = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.locations = [];
        $scope.modelobj = {};
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit; 
        $scope.saveLoaction = saveLoaction;
        $scope.UpdatedLocation = UpdatedLocation;
        $scope.removeLocation = removeLocation;


        function search(page) {
            page = page || 0;

            $scope.loadinglocatons = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterLocation
                }
            };

            apiService.get('/api/Location/getallLocations/', config,
               locationsLoadCompleted,
               locationsLoadFailed);
        }
        function locationsLoadCompleted(result) {

            $scope.locations = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadinglocatons = false;

            if ($scope.filterLocation && $scope.filterLocation.length) {

                notificationService.displayInfo(result.data.length + ' location found');
            }
        }
        function locationsLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        $scope.Modals = {
            openlocationDialog: function () {

                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/Location/AddLocation.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },
            //cnacel modal
            cancellocationDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };
        //Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancellocationDialog();
        }

        $scope.AddLocation = function () {
            $scope.save = 'add';
            $scope.Modals.openlocationDialog();
        }
        $scope.openLocationDialogContainer = function (data) {
            debugger
            $scope.modelobj = data;
            $scope.save = 'update';
            $scope.Modals.openlocationDialog();
        }

        function saveLoaction() {
            apiService.post('/api/Location/Create', $scope.modelobj,
                AddlocationSucceded,
                AddlocationFailed);
        }
        function AddlocationSucceded(response) {

            debugger

            $scope.locations = response.data;
            $scope.modelobj = {};
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.search();
            $scope.cancelEdit();
        }
        function AddlocationFailed(response) {
            console.log(response);
            $scope.modelobj = {};
            notificationService.displayError(response.statusText);
        
        }
        $scope.LocationObj = {};
        function UpdatedLocation() {
            $scope.LocationObj = $scope.modelobj;
            apiService.post('/api/Location/Update', $scope.LocationObj,
                updatelocationSucceded,
                updatelocationFailed);
        }
        function updatelocationSucceded(response) {
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }
        function updatelocationFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }

        function removeLocation(data) {
            $scope.id = data;
            apiService.post('/api/Location/Delete/' + $scope.id, null,
               locationremoveCompleted,
                locationremoveFailed);
        }
        function locationremoveCompleted(result) {
            $scope.locations = result.data;
            notificationService.displaySuccess('has been remove');
            $scope.search();

        }
        function locationremoveFailed(response) {
            notificationService.displayError(response);
        }
     
        function clearSearch() {
            $scope.filterLocation = '';
            search();
        }
        $scope.search();
    }
})(angular.module('homeCinema'));
