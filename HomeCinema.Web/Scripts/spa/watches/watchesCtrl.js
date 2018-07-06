(function (app) {
    'use strict';

    app.controller('watchesCtrl', watchesCtrl);  

    watchesCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal', '$routeParams'];   

    function watchesCtrl($scope, apiService, notificationService, $modal, $routeParams) {
        $scope.title = 'watchesCtrl';
        $scope.pageClass = 'page-watches';
        $scope.loadingWatches = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.openWatchDialog = openWatchDialog;
        $scope.removeWatch = removeWatch;
      
        $scope.watches = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;

        function search(page) {
            page = page || 0;

            $scope.loadingWatches = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterMovies
                }
            };

            apiService.get('/api/watches/getallwatch', config,
                watchesLoadCompleted,
                watchesLoadFailed);
        }

        function watchesLoadCompleted(result) {
            $scope.watches = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingBooks = false;

            if ($scope.filterWatches && $scope.filterWatches.length) {
                notificationService.displayInfo(result.data.length + ' watches found');
            }

        }

        function watchesLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filterWatches = '';
            search();
        }

        $scope.modelObj = {};
        //popup for update
        $scope.openRentDialogContainer = function (data) {  
            $scope.ModelType = 'Edit'; 
            $scope.modelObj = data;     //editing
            $scope.openWatchDialog();    
        }
        //popup for save
        $scope.AddWatch = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add'; 
            $scope.openWatchDialog();
        }
        function openWatchDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/watches/add.html',
                controller:'watchesAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
                //loadMovieDetails();
            }, function () {
            });
        }
        function removeWatch(data) {
           // $scope.loadingWatches = true;
            $scope.removeID = data;
            apiService.post('/api/watches/Delete/' + $scope.removeID, null,
                watchRemoveCompleted,
                watchRemoveFailed);
        }

        function watchRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');
            $scope.search();
           // $modalInstance.dismiss();
            console.log(result);
            $scope.watch = result.data;
           // $location.path('/watches');
            //$scope.loadingWatches = false;
        }

        function watchRemoveFailed(response) {
            notificationService.displayError(response.data);
            console.log(response);
        }
       

       
        
        $scope.search();
        activate();

        function activate(){}
    
    }
})(angular.module('homeCinema'));
