(function (app) {
    'use strict';

    app .controller('StoreMasterCtrl', StoreMasterCtrl);

    StoreMasterCtrl.$inject = ['$scope', '$modal','apiService','notificationService'];

    function StoreMasterCtrl($scope, $modal, apiService, notificationService,) {
        $scope.title = 'StoreMasterCtrl';
        $scope.loadingStoreMaster = true;
        $scope.storemasters = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit; 
        $scope.AddStoreModel = AddStoreModel;
        $scope.UpdateStoreMaster = UpdateStoreMaster;
        $scope.removestoremaster = removestoremaster;

        function search() {

            $scope.loadingStoreMaster = true;

            apiService.get('/api/StoreMaster/GetAllStoreMaster', null,
                StoremasterLoadCompleted,
                StoremasterLoadFailed);
        }

        function StoremasterLoadCompleted(result) {
            debugger
            $scope.storemasters = result.data;
            $scope.adjustStoreList();
            $scope.loadingStoreMaster = false;

            if ($scope.filterStoreMaster && $scope.filterStoreMaster.length) {
                notificationService.displayInfo(result.data.length + ' Storemaster found');
            }

        }

        function StoremasterLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filterStoreMaster = '';
            search();
        }

        $scope.Modals = {
            openStoremasterDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/StoreMaster/StoreMasterAdd.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },

            //cnacel modal

            cancelStoreMasterDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };

        //Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancelStoreMasterDialog();
        }
        $scope.modelobj = {};
        $scope.openStoreMasterContainer = function (data) {
            $scope.modelobj = data;
            $scope.save = 'update';
            $scope.Modals.openStoremasterDialog();
        }
        //add

        $scope.AddStoreMaster = function () {
            $scope.modelobj = {};
            $scope.save = 'add';
            $scope.Modals.openStoremasterDialog();
        }
        //Update ProductGroup 
        $scope.StoreObj = {};
        function UpdateStoreMaster() {

            debugger
            $scope.StoreObj = $scope.modelobj;
            apiService.post('/api/StoreMaster/Update', $scope.StoreObj,
                updatestoreSucceded,
                updatestoreFailed);
        }

        function updatestoreSucceded(response) {
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();


        }

        function updatestoreFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }
        //save
        function AddStoreModel() {
            apiService.post('/api/StoreMaster/Update', $scope.modelobj,
                AddStoreSucceded,
                AddStoreFailed);
        }
        function AddStoreSucceded(response) {
            notificationService.displaySuccess(' has been submitted Store');
            $scope.storemasters = response.data;
            $scope.modelobj = {};
            $scope.search();
            $scope.cancelEdit();
        }

        function AddStoreFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelobj = {};
        }
        function removestoremaster(data) {
            $scope.Id = data;
            apiService.post('/api/StoreMaster/Delete/' + $scope.Id, null,
               removestoremastereCompleted,
                removestoremasterFailed);
        }
        function removestoremastereCompleted(result) {
            notificationService.displaySuccess('pos has been remove');
            $scope.search();
            console.log(result);
            $scope.storemasters = result.data;


        }
        function removestoremasterFailed(response) {           
            notificationService.displayError(response);
        }

        //pagination

        $scope.filteredStoreData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 5
            , $scope.maxSize = 5;
        $scope.orderByField = 'Id';
        $scope.reverseSort = true;
        $scope.adjustStoreList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredStoreData = angular.copy($scope.storemasters.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustStoreList();
        });

        $scope.showPerPageDataOptions = [3, 5, 10, 25, 50, 100];


        $scope.search();
    }
})(angular.module('homeCinema'));
