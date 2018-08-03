(function (app) {
    'use strict';
    
    app.controller('testdevController', testdevController);

    testdevController.$inject = ['$scope', 'apiService', 'notificationService','$modal'];

    function testdevController($scope, apiService, notificationService, $modal) {
        $scope.title = 'testdevController';

        $scope.loadingtestdev = true;
        $scope.page = 0;
        $scope.pageSize = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.testdevLoadCompleted = testdevLoadCompleted;
        $scope.testdevLoadFailed = testdevLoadFailed;
        $scope.opentestdevModel = opentestdevModel;
        $scope.closetestdevModel = closetestdevModel;

        function search(page) {
            page = page || 0;

            $scope.loadingtestdev = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterPcategories
                }
            };

            apiService.get('/api/TestDev/', config,
                testdevLoadCompleted,
                testdevLoadFailed);
        }

        function testdevLoadCompleted(response) {
            $scope.objList = response.data;
            $scope.productCategoryGridList = $scope.objList.ProductCategoryGridList;
            $scope.productGroupMasterList = $scope.objList.ProductGroupMasterList;
        }

        function testdevLoadFailed(error) {
            console.log(error);
        }

        function opentestdevModel() {

            $scope.Modals.opentestdevProductCategoryDialog();
        }
        function closetestdevModel() {

            $scope.Modals.cancelProductCategoryDialog();
        }


        $scope.Modals = {
            opentestdevProductCategoryDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/testdev/testdevform.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },
            cancelProductCategoryDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };


        $scope.search();
        activate();

        function activate() { }
    }
})(angular.module('homeCinema'));
