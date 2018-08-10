(function (app) {
    'use strict';


    app.controller('RegistrationCtrl', RegistrationCtrl);

    RegistrationCtrl.$inject = ['$scope', 'apiService','notificationService'];

    function RegistrationCtrl($scope, apiService, notificationService) {
        $scope.title = 'RegistrationCtrl';
        $scope.registerArry = [];
        $scope.registerfromArry = [];
        $scope.pageLoad = pageLoad;
     
       
        function pageLoad(page) {
            page = page || 0;

        
            $scope.loadingproductgroups = true;

            var config = {
                params: {
                    page: 1,
                    pageSize: 6,
                    filter: ''//$scope.filtersuppliers
                }
            };

            apiService.get('/api/Orgnization/getallcountry', config,
                RegistrationLoadCompleted,
                RegistrationLoadFailed);
        }

        $scope.countryObjFrmPostModel = function (data) {
           
            $scope.countryObj = data;

            apiService.post('/api/Orgnization/getallcountryfrom', $scope.countryObj,
                RegistrationfromLoadCompleted,
                RegistrationfromLoadFailed);

        }

        function RegistrationfromLoadCompleted(response) {
          
            $scope.registerfromArry = response.data;

        }
        function RegistrationfromLoadFailed(error) {
            console.log("error in  Get Call Service");
        }


        function RegistrationLoadCompleted(response) {
            debugger
            $scope.registerArry = response.data;

        }
        function RegistrationLoadFailed(error) {
            console.log("error in  Get Call Service");
        }

        
        $scope.pageLoad();

    }
})(angular.module('homeCinema'));
