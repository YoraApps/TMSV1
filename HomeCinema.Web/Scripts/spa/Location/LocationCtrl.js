(function (app) {
    'use strict';

    app.controller('locationCtrl', locationCtrl);

    locationCtrl.$inject = ['$scope', 'apiService', '$modal', 'notificationService'];

    function locationCtrl($scope, apiService, $modal, notificationService) {
        $scope.title = 'locationCtrl';
        $scope.loadingLocations = true;
        $scope.LocationList = [];
        $scope.search = search;
        $scope.cancelEdit = cancelEdit;
        $scope.clearSearch = clearSearch;
        $scope.removeLocation = removeLocation;
        $scope.updatedLocation = updatedLocation;
        $scope.saveLocation = saveLocation;
        $scope.LocationLoadCompleted = LocationLoadCompleted;
        $scope.LocationLoadFailed = LocationLoadFailed;

        function search() {
            $scope.loadingLocations = true;
            apiService.get('/api/Location/GetAllLocation', null,
                LocationLoadCompleted,
                LocationLoadFailed);
        }
        function LocationLoadCompleted(result) {
            $scope.objList = result.data;
            $scope.LocationList = $scope.objList.LocationList;
            $scope.StoreList = $scope.objList.StoreList;
            $scope.loadingLocations = false;
            if ($scope.filterLocation && $scope.filterLocation.length) {
                notificationService.displayInfo(result.data.length + ' Location found');
            }
        }
        function LocationLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        function clearSearch() {
            $scope.filterLocation = '';
            search();
        }
        function removeLocation(data) {
            debugger
            $scope.id = data;
            apiService.post('/api/Location/Delete/' + $scope.id, null,
                LocationremoveCompleted,
                LocationremoveFailed);
        }
        function LocationremoveCompleted(result) {
            $scope.LocationList = result.data;
            notificationService.displaySuccess('has been remove');
            $scope.search();
        }
        function LocationremoveFailed(response) {
            notificationService.displayError(response);
        }
        $scope.Modals = {
            openLocationDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/Location/locationAdd.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                },
                    function (event) {
                    });
            },
            //cancel modal
            cancelLocationDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };
        //Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancelLocationDialog();
        }
        //popup edit productgroup
        $scope.modelobj = {};
        $scope.arr = [];
        $scope.openLocationContainer = function (data) {
            $scope.modelobj = data;
            $scope.arr = $scope.StoreList.filter(x => x.Id === data.StoreId);
            $scope.selectedObj = $scope.arr[0];
            $scope.ModelType = 'Edit';
            $scope.Modals.openLocationDialog();
        };  
        $scope.fetchLocation = function (data) {
            $scope.selectedObj = data;
        };
        //popup Added new ProductGroup
        $scope.AddLocation = function () {
            $scope.ModelType = 'Add';
            $scope.Modals.openLocationDialog();
        };
        //Update ProductGroup 
        $scope.LocationObj = {};
        function updatedLocation() {
            $scope.LocationObj = {
                "LocationId": $scope.modelobj.LocationId,
                "LocationName": $scope.modelobj.LocationName,
                "Description": $scope.modelobj.Description,
                "StoreId": $scope.selectedObj.Id
            };
            apiService.post('/api/Location/Update', $scope.LocationObj,
                updateLocationSucceded,
                updateLocationFailed);
        }
        function updateLocationSucceded(response) {
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }
        function updateLocationFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }
        //Save ProductGroup
        $scope.modelobj = {};
        function saveLocation() {
            $scope.modelobj = {
                "LocationName": $scope.modelobj.LocationName,
                "Description": $scope.modelobj.Description,
                "StoreId": $scope.selectedObj.Id
            };
            apiService.post('/api/Location/Insert', $scope.modelobj,
                AddedLocationSucceded,
                AddedLocationFailed);
        }
        function AddedLocationSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.LocationList = response.data;
            $scope.modelobj = {};
            $scope.search();
            $scope.cancelEdit();
        }
        function AddedLocationFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelobj = {};
        }

        $scope.search();
    }
})(angular.module('homeCinema'));
