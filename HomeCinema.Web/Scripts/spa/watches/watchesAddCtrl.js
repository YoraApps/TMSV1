(function (app) {
    'use strict';
    app.controller('watchesAddCtrl', watchesAddCtrl);
    watchesAddCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modalInstance'];

    function watchesAddCtrl($scope, apiService, notificationService, $modalInstance) {
      
        $scope.watch = {};     
        $scope.SaveWatch = SaveWatch;
        $scope.UpdateWatch = UpdateWatch;
        //function Addwatch() {
        //    AddWatchModel();
        //}
        function SaveWatch() {
            $scope.watch = $scope.modelObj;  
           // console.log(watch);
            apiService.post('/api/watches/Insert', $scope.watch,
                addWatchSucceded,
                addWatchFailed);
        }
          
        function addWatchSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.watch = response.data;
            $scope.search();
            $scope.modelObj = {};
            $modalInstance.dismiss();
            }           

        function addWatchFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError('error');
        } 

        //cancel
        $scope.cancelEdit = function () {
            $scope.modelObj = {};
            $modalInstance.dismiss();
        }



        //updating
        function UpdateWatch() {
            $scope.watch =$scope.modelObj;            
            apiService.post('/api/watches/Update', $scope.watch,
                updateWatchSucceded,
                updateWatchFailed);
        }

        function updateWatchSucceded(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displaySuccess(' has been updated');
            $modalInstance.dismiss();
           // $location.path('/watches');
           // $scope.watch = response.data;

        }

        function updateWatchFailed(response) {
            console.log(response);
            $scope.modelObj = {};
            notificationService.displayError(response);
        }


        
    }
})(angular.module('homeCinema'));
