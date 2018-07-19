(function (app) {
    'use strict';

    
    app.controller('salesReportsCtrl', salesReportsCtrl);

    salesReportsCtrl.$inject = ['$scope', 'apiService', 'notificationService'];

    function salesReportsCtrl($scope, apiService, notificationService) {
        $scope.title = 'salesReportsCtrl';
        $scope.pageClass = 'page-Sales';
        $scope.Sales = [];
        $scope.loadingSalesReports = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.clearSearch = clearSearch;

         function search(page) {
            page = page || 0;

            // $scope.loadingsalesReports = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 1,
                    //filter: $scope.filtersalesReports
                }
            };

             apiService.get('/api/SalesReportsController/GetAllSalesReports', config,
                salesReportsLoadCompleted,
                salesReportsLoadFailed);
        }

        function salesReportsLoadCompleted(result) {
            $scope.Sales = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingSalesReports = false;

            if ($scope.filterSalesReports && $scope.filterSalesReports.length) {
                notificationService.displayInfo(result.data.length + ' SalesReports found');
            }

        }

        function salesReportsLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filterSale = '';
            search();
        }

        $scope.search();
        activate();

        function activate() { }
    }
})(angular.module('homeCinema'));
