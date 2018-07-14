(function (app) {
    'use strict';

    
    app.controller('PurchaseReportCtrl', PurchaseReportCtrl);

    PurchaseReportCtrl.$inject = ['$scope', 'apiService', 'notificationService'];

    function PurchaseReportCtrl($scope, apiService,notificationService) {
        $scope.title = 'PurchaseReportCtrl';
        $scope.pageClass = 'page-Purchase';
        $scope.Purchases = [];
        $scope.loadingPurchase = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.clearSearch = clearSearch;


        function search(page) {
            page = page || 0;

            //$scope.loadingPurchase = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 1
                }
                   
            };

            apiService.get('/api/PurchaseReport/GetAllPurchaseReport', config,
                PurchaseReportLoadCompleted,
                PurchaseReportLoadFailed);
        }

        function PurchaseReportLoadCompleted(result) {
            console.log("re", result);
            debugger
            $scope.Purchases = result.data;
            console.log("pr", result);
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingpurchasereport = false;

            if ($scope.filterPurchase && $scope.filterPurchase.length) {
                notificationService.displayInfo(result.data.length + ' purchaseReport found');
            }

        }

        function PurchaseReportLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        function clearSearch() {
            $scope.filterPurchase = '';
            $scope.search();
        }

        $scope.search();
        activate();

        function activate() { }
    }
})(angular
    .module('homeCinema'));
