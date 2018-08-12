(function (app) {
    'use strict';

        app.controller('PosMasterCtrl', PosMasterCtrl);

    PosMasterCtrl.$inject = ['$scope', 'apiService','$modal', 'notificationService'];

    function PosMasterCtrl($scope, apiService, $modal, notificationService) {
        $scope.title = 'PosMasterCtrl';
        $scope.pageClass = 'page-productGroup';
        $scope.loadingPosmaster = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.posmasters = [];
        $scope.search = search;
        $scope.AddCustomerModel = AddCustomerModel;
        $scope.removeposmaster = removeposmaster;
        $scope.UpdatePosMaster = UpdatePosMaster;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit; 


        function search(page) {
            page = page || 0;

            $scope.loadingPosmaster = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 1,
                    filter: $scope.filterPosMaster
                }
            };

            apiService.get('/api/PosMAster/GetAllPosMaster', config,
                posmasterLoadCompleted,
                posmasterLoadFailed);
        }
        function posmasterLoadCompleted(result) {
            $scope.posmasters = result.data;
            $scope.adjustPosList();
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingPosmaster = false;

            if ($scope.filterPosMaster && $scope.filterPosMaster.length) {
                notificationService.displayInfo(result.data.length + ' PosMaster found');
            }

        }

        function posmasterLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        //clear search
        function clearSearch() {
            $scope.filterPosMaster = '';
            search();
        }
            //popup modal

            $scope.Modals = {
                openPosMasterDialog: function () {
                    $scope.modelInstance = $modal.open({
                        templateUrl: 'scripts/spa/PosMaster/PosMasterAdd.html',
                        size: 'md',
                        scope: $scope
                    });
                    $scope.modelInstance.result.then(function ($scope) {

                    }, function (event) {
                    });
                },

                //cnacel modal

                cancelPosMasterDialog: function () {
                    $scope.modelInstance.dismiss();
                }
            };

            //Cancel Edit popup
            function cancelEdit() {
                $scope.Modals.cancelPosMasterDialog();
            }

            //popup edit productgroup

            $scope.modelobj = {};
            $scope.openPosMasterContainer = function (data) {
                $scope.modelobj = data;
                $scope.save = 'update';
                $scope.Modals.openPosMasterDialog();
            }
        //add

        $scope.AddPosMaster = function () {
            $scope.save = 'add';
            $scope.Modals.openPosMasterDialog();
        }
            //Update ProductGroup 
            $scope.PosObj = {};
            function UpdatePosMaster() {

                debugger
                $scope.PosObj = $scope.modelobj;
                apiService.post('/api/PosMAster/Update', $scope.PosObj,
                    updatePosMasterSucceded,
                    updateposMasterFailed);
            }

            function updatePosMasterSucceded(response) {
                console.log(response);
                notificationService.displaySuccess('has been updated');
                $scope.cancelEdit();


            }

            function updateposMasterFailed(response) {
                notificationService.displayError(response);
                $scope.cancelEdit();
        }
        //save
        function AddCustomerModel() {
            apiService.post('/api/PosMAster/Update', $scope.modelobj,
                AddPosSucceded,
                AddPosFailed);
        }
        function AddPosSucceded(response) {
            notificationService.displaySuccess(' has been submitted pos');
            $scope.posmasters = response.data;
            $scope.modelobj = {};
            $scope.search();
            $scope.cancelEdit();
        }

        function AddPosFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelobj = {};
        }


            //remove
            function removeposmaster(data) {
                debugger
                $scope.Id = data;
                apiService.post('/api/PosMAster/Delete/' + $scope.Id, null,
                    posmasterremoveCompleted,
                    posmasterremoveFailed);
            }
            function posmasterremoveCompleted(result) {
                debugger
                notificationService.displaySuccess('pos has been remove');
                $scope.search();
                console.log(result);
                $scope.posmasters = result.data;


            }
            function posmasterremoveFailed(response) {
                debugger
                notificationService.displayError(response);
        }

        $scope.filteredPosData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 5
            , $scope.maxSize = 5;
        $scope.orderByField = 'Id';
        $scope.reverseSort = true;
        $scope.adjustPosList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredPosData = angular.copy($scope.posmasters.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustPosList();
        });

        $scope.showPerPageDataOptions = [3, 5, 10, 25, 50, 100];
            $scope.search();

    }
    
})(angular.module('homeCinema'));
