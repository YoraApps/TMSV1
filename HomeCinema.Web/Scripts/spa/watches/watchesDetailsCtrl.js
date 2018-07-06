(function (app) {
    'use strict';
    
    app.controller('watchesDetailsCtrl', watchesDetailsCtrl);

    watchesDetailsCtrl.$inject = ['$scope','$location', '$routeParams', 'apiService', 'notificationService'];

    function watchesDetailsCtrl($scope, $location, $routeParams, apiService, notificationService) {
      
                $scope.watch = {};
                $scope.loadingWatches = true; 
                $scope.loadWatch = loadWatch;
                $scope.removeWatch = removeWatch;

                function loadWatch() {
                    $scope.loadingWatches = true;
                    apiService.get('/api/watches/getById/' + $routeParams.id, null,
                        watchLoadCompleted,
                        watchLoadFailed);
                }

                function watchLoadCompleted(result) {
                    $scope.watch = result.data;
                    $scope.loadingWatches = false;
                }

                function watchLoadFailed(response) {
                    notificationService.displayError(response.data);
                }


                //delete
                function removeWatch() {
                    $scope.loadingWatches = true;
                    apiService.post('/api/watches/Delete/' + $routeParams.id, null,
                        watchRemoveCompleted,
                        watchRemoveFailed);
                }

                function watchRemoveCompleted(result) {
                    notificationService.displaySuccess(' has been removed');
                    $scope.watch = result.data;
                    $location.path('/watches');
                    $scope.loadingWatches = false;
                }

                function watchRemoveFailed(response) {
                    notificationService.displayError(response.data);
                }


        
                $scope.loadWatch();
            }        
})(angular.module('homeCinema'));
