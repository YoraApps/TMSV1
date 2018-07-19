(function (app) {
    'use strict';
    app.controller('PurchaseReportCtrl', PurchaseReportCtrl);

    PurchaseReportCtrl.$inject = ['$scope', 'apiService', 'notificationService'];

    function PurchaseReportCtrl($scope, apiService,notificationService) {
        $scope.title = 'PurchaseReportCtrl';
        $scope.pageClass = 'page-Purchase';
        $scope.Purchases = [];
        $scope.loadingPurchase = true;
        $scope.loadingPurchase = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.Name = [];
        $scope.clearSearch = clearSearch;
        $scope.selectedObj = {};
        $scope.selectedStr = '';
        $scope.purchaseAnguList = [];
        $scope.unitofmeasurementsLoadCompleted = unitofmeasurementsLoadCompleted;
        $scope.unitofmeasurementsLoadFailed = unitofmeasurementsLoadFailed;
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
            apiService.get('/api/UnitOfMeasurementMaster/getallUnit', config,
                unitofmeasurementsLoadCompleted,
                unitofmeasurementsLoadFailed);
        }
        function unitofmeasurementsLoadCompleted(result) {
            debugger
            $scope.unitofmeasurements = result.data;
        }
        function unitofmeasurementsLoadFailed(response) {
            notificationService.displayError(response.data);
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
        $scope.getPurchaseGuiRep = function (data) {
            console.log(data.originalObject);
            apiService.post('/api/PurchaseReport/getPurchaseReportInaGraph/', data.originalObject,
                PurchaseGraphicReportLoadCompleted,
                PurchaseGraphicReportLoadFailed);
        }
        function PurchaseGraphicReportLoadCompleted(result) {
            debugger
            $scope.PurchasesGUI = result.data;  
            Morris.Bar({
                element: "purchase-bar",
                data: $scope.PurchasesGUI,
                xkey: "ProductName",
                ykeys: ["Quantity"],
                labels: ["Product Quantity"],
                barRatio: 0.4,
                xLabelAngle: 55,
                hideHover: "auto",
                resize: 'true'
            });
            $scope.loadingPurchase = false;
        }
        function PurchaseGraphicReportLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        function clearSearch() {
            $scope.filterPurchase = '';
            $scope.search();
        }
        $scope.search();
    }
})(angular.module('homeCinema'));
