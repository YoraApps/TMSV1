(function (app) {
    'use strict';

    app.controller('salesReportsCtrl', salesReportsCtrl);

    salesReportsCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal'];

    function salesReportsCtrl($scope, apiService, notificationService, $modal) {
        $scope.title = 'salesReportsCtrl';
        $scope.pageClass = 'page-Sales';
        $scope.loadingSales = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.selectUOM = '';
        $scope.cancelEdit = cancelEdit;
        $scope.search = search;
        $scope.UpdatedSales = UpdatedSales;
        $scope.clearSearch = clearSearch;
        $scope.unitofmeasurementsLoadCompleted = unitofmeasurementsLoadCompleted;
        $scope.unitofmeasurementsLoadFailed = unitofmeasurementsLoadFailed;
        $scope.AddSalesForm = AddSalesForm;
        $scope.Sales = [];
        $scope.saleArry = [];
        $scope.PrdHoldArr = [];
        $scope.custHoldArr = [];
        $scope.UOMHoldArr = [];
        $scope.posHoldArr = [];
        $scope.selectedObj = {};
        $scope.modelObj = {};
        $scope.productObj = {};
        $scope.customerObj = {};
        $scope.UOMObj = {};
        $scope.POSObj = {};

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

            apiService.get('/api/UnitOfMeasurementMaster/getallUnit', config, unitofmeasurementsLoadCompleted, unitofmeasurementsLoadFailed);

            apiService.get('/api/SalesReportsController/GetAllSalesReports', config, salesReportsLoadCompleted, salesReportsLoadFailed);

            apiService.get('/api/SalesDetails/GetAllDataForSalesDetails', config, suppliertypeLoadCompleted, supplierstypeLoadFailed);
        }
        function suppliertypeLoadCompleted(response) {
            $scope.saleArry = response.data;
            console.log("salesarraay", $scope.saleArry);
        }
        function supplierstypeLoadFailed(error) {
            console.log("error in  Get Call Service");
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
        function cancelEdit() {
            $scope.Modals.cancelsalesDialog();
        }
        function clearSearch() {
            $scope.filterPurchase = '';
            $scope.search();
        }

        $scope.prodObjFrmPostModel = function (data) {
            $scope.productObj = data;
        }

        $scope.custObjFrmPostModel = function (data) {
            $scope.customerObj = data;
        }

        $scope.uomObjFrmPostModel = function (data) {
            $scope.UOMObj = data;
        }

        $scope.posObjFrmPostModel = function (data) {
            $scope.POSObj = data;
        }
        function UpdatedSales() {

            debugger

            $scope.selectedObj = {
                "SalesId": $scope.modelObj.Id,
                "Product": $scope.productObj,
                "Customer": $scope.customerObj,
                "pos": $scope.POSObj,
                "UOM": $scope.UOMObj,
                "Quantity": $scope.modelObj.Quantity,
                "SalesDate": $scope.modelObj.date
            };
            apiService.post('api/SalesReportsController/Update', $scope.selectedObj,
                SaleReportsLoadCompleted,
                SaleReportsLoadFailed);
        }
        function SaleReportsLoadCompleted() {

            $scope.modelObj = {};
            notificationService.displaySuccess('success');
            $scope.cancelEdit();

        }
        function SaleReportsLoadFailed() {
            $scope.modelObj = {};
            notificationService.displayError('error');
            $scope.cancelEdit();
        }

        $scope.Modals = {
            openSaleReportDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/salesReports/SalesReportAdd.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },
            cancelsalesDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };
        $scope.openSaleReportDialogContainer = function (fsd) {

            $scope.productArr = $scope.saleArry.Product;
            $scope.PrdHoldArr = $scope.productArr.filter(x => x.ProductId == fsd.ProductId)
            $scope.productObj = $scope.PrdHoldArr[0];

            $scope.customerArr = $scope.saleArry.Customer;
            $scope.custHoldArr = $scope.customerArr.filter(x => x.CustomerId == fsd.CustomerId)
            $scope.customerObj = $scope.custHoldArr[0];

            $scope.UOMArr = $scope.saleArry.UOM;
            $scope.UOMHoldArr = $scope.UOMArr.filter(x => x.UOMId == fsd.UOMId)
            $scope.UOMObj = $scope.UOMHoldArr[0];

            $scope.POSArr = $scope.saleArry.pos;
            $scope.POSHoldArr = $scope.POSArr.filter(x => x.PosId == fsd.PosId)
            $scope.POSObj = $scope.POSHoldArr[0];

            $scope.save = 'update';
            $scope.modelObj = fsd;
            $scope.modelObj.date = fsd.SalesDate;

            $scope.Modals.openSaleReportDialog();
        }
        $scope.GetSalesGraphicRep = function (data) {
            console.log(data.originalObject);
            apiService.post('/api/SalesReportsController/GetAllSalesGraphicReports/', data.originalObject,
                salesGraphicReportsLoadCompleted,
                salesGraphicReportsLoadFailed);
        }
        $scope.open = function ($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.opened = true;
        };
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1,
            minDate: new Date(1900, 9, 9),
            initDate: new Date('2018-07-13')
        };
        $scope.format = 'MM-dd-yyyy';
        $scope.saleArry = [];
        $scope.AddSales = function () {
            $scope.productArr = $scope.saleArry.Product;

            $scope.customerArr = $scope.saleArry.Customer;

            $scope.UOMArr = $scope.saleArry.UOM;

            $scope.POSArr = $scope.saleArry.pos;

            $scope.save = 'add';
            $scope.Modals.openSaleReportDialog();

        }
        function AddSalesForm() {
            debugger
            $scope.selectedObj = {
                "Product": $scope.productObj,
                "Customer": $scope.customerObj,
                "pos": $scope.POSObj,
                "UOM": $scope.UOMObj,
                "Quantity": $scope.modelObj.Quantity,
                "SalesDate": $scope.modelObj.date
            }

            apiService.post('/api/SalesDetails/save', $scope.selectedObj,
                salesSucceded,
                salesFailed);
        }
        function salesSucceded(response) {
            debugger

            notificationService.displaySuccess(' has been submitted to Home Cinema');

            $scope.selectedObj = response.data;
            $scope.selectedObj = {};
            $scope.cancelEdit();

            $scope.search();
        }
        function salesFailed(response) {
            console.log(response);
            $scope.selectedObj = {};
            notificationService.displayError('error');
        }
        $scope.search();
    }
})(angular.module('homeCinema'));
