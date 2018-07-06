(function (app) {
    'use strict';    
    app.controller('watchesEditCtrl', watchesEditCtrl);

    watchesEditCtrl.$inject = ['$scope', '$location', '$routeParams', 'apiService', 'notificationService'];

    function watchesEditCtrl($scope, $location, $routeParams, apiService, notificationService) {       
                $scope.watch = {};
                $scope.loadingWatch = true;
                $scope.UpdateWatch = UpdateWatch;

                function loadWatch() {
                    $scope.loadingWatch = true;
                    apiService.get('/api/watches/getById/' + $routeParams.id, null,                    
                        watchLoadCompleted,
                        watchLoadFailed);
                }

                function watchLoadCompleted(result) {
                    $scope.watch = result.data;
                    $scope.loadingWatch = false;


                }

                function watchLoadFailed(response) {
                    notificationService.displayError(response.data);
                }
               

                function UpdateWatch()  {
                    apiService.post('/api/watches/Update', $scope.watch,
                        updateWatchSucceded,
                        updateWatchFailed);
                }

                function updateWatchSucceded(response) {
                    console.log(response);
                    notificationService.displaySuccess(' has been updated');
                    $location.path('/watches');
                    $scope.watch= response.data;

                }

                function updateWatchFailed(response) {
                    notificationService.displayError(response);
                }

                loadWatch();
            }        
})(angular.module('homeCinema'));
