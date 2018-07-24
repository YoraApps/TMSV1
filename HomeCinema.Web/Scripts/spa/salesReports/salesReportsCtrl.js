(function (app) {
    'use strict';

    
    app.controller('salesReportsCtrl', salesReportsCtrl);

    salesReportsCtrl.$inject = ['$scope', 'apiService', 'notificationService'];

    function salesReportsCtrl($scope, apiService, notificationService) {
        $scope.title = 'salesReportsCtrl';
        $scope.pageClass = 'page-Sales';
        $scope.Sales = [];
        $scope.Name = [];

        $scope.loadingSales = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.selectUOM = '';
        $scope.clearSearch = clearSearch;
        $scope.unitofmeasurementsLoadCompleted = unitofmeasurementsLoadCompleted;
        $scope.unitofmeasurementsLoadFailed = unitofmeasurementsLoadFailed;
        


         function search(page) {
            page = page || 0;

             $scope.loadingSales = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 1,
                    filter: $scope.filterSale

                }
             };

             apiService.get('/api/UnitOfMeasurementMaster/getallUnit', config,
                 unitofmeasurementsLoadCompleted,
                 unitofmeasurementsLoadFailed);
 
             apiService.get('/api/SalesReportsController/GetAllSalesReports', config,
                salesReportsLoadCompleted,
                salesReportsLoadFailed);
        }



        function unitofmeasurementsLoadCompleted(result) {
            $scope.unitofmeasurements = result.data;
        }
        function unitofmeasurementsLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function salesReportsLoadCompleted(result) {
            $scope.Sales = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingSales = false;

            if ($scope.filterSale && $scope.filterSale.length) {
                notificationService.displayInfo(result.data.length + ' SalesReports found');
            }

        }

        function salesReportsLoadFailed(response) {
            notificationService.displayError(response.data);
        }



        $scope.GetSalesGraphicRep = function (data) {

            debugger

            console.log(data.originalObject);
            apiService.post('/api/SalesReportsController/GetAllSalesGraphicReports/', data.originalObject,
                salesGraphicReportsLoadCompleted,
                salesGraphicReportsLoadFailed);
        }

        function salesGraphicReportsLoadCompleted(result) {

                $scope.SalesGUI = result.data;
                Morris.Bar({
                    element: "sales-bar",
                    data: $scope.SalesGUI,
                    xkey: "ProductName",
                    ykeys: ["Quantity"],
                    labels: ["Product Quantity"],
                    barRatio: 0.4,
                    xLabelAngle: 55,
                    hideHover: "auto",
                    resize: 'true'
                });

            $scope.loadingSales = false;
        }
        function salesGraphicReportsLoadFailed(response) {
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
