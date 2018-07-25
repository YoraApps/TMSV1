(function (app) {
    'use strict';
    app.directive('excelExport',
        function () {
            return {
                restrict: 'A',
                scope: {
                    fileName: "@",
                    data: "&exportData"
                },
                replace: true,
                template: '<button class="btn btn-primary btn-ef btn-ef-3 btn-ef-3c mb-10" ng-click="download()">Export to Excel <i class="fa fa-download"></i></button>',
                link: function (scope, element) {

                    scope.download = function () {

                        function datenum(v, date1904) {
                            if (date1904) v += 1462;
                            var epoch = Date.parse(v);
                            return (epoch - new Date(Date.UTC(1899, 11, 30))) / (24 * 60 * 60 * 1000);
                        };

                        function getSheet(data, opts) {
                            var ws = {};
                            var range = { s: { c: 10000000, r: 10000000 }, e: { c: 0, r: 0 } };
                            for (var R = 0; R != data.length; ++R) {
                                for (var C = 0; C != data[R].length; ++C) {
                                    if (range.s.r > R) range.s.r = R;
                                    if (range.s.c > C) range.s.c = C;
                                    if (range.e.r < R) range.e.r = R;
                                    if (range.e.c < C) range.e.c = C;
                                    var cell = { v: data[R][C] };
                                    if (cell.v == null) continue;
                                    var cell_ref = XLSX.utils.encode_cell({ c: C, r: R });

                                    if (typeof cell.v === 'number') cell.t = 'n';
                                    else if (typeof cell.v === 'boolean') cell.t = 'b';
                                    else if (cell.v instanceof Date) {
                                        cell.t = 'n'; cell.z = XLSX.SSF._table[14];
                                        cell.v = datenum(cell.v);
                                    }
                                    else cell.t = 's';

                                    ws[cell_ref] = cell;
                                }
                            }
                            if (range.s.c < 10000000) ws['!ref'] = XLSX.utils.encode_range(range);
                            return ws;
                        };

                        function Workbook() {
                            if (!(this instanceof Workbook)) return new Workbook();
                            this.SheetNames = [];
                            this.Sheets = {};
                        }

                        var wb = new Workbook(), ws = getSheet(scope.data());
                        /* add worksheet to workbook */
                        wb.SheetNames.push(scope.fileName);
                        wb.Sheets[scope.fileName] = ws;
                        var wbout = XLSX.write(wb, { bookType: 'xlsx', bookSST: true, type: 'binary' });

                        function s2ab(s) {
                            var buf = new ArrayBuffer(s.length);
                            var view = new Uint8Array(buf);
                            for (var i = 0; i != s.length; ++i) view[i] = s.charCodeAt(i) & 0xFF;
                            return buf;
                        }

                        saveAs(new Blob([s2ab(wbout)], { type: "application/octet-stream" }), scope.fileName + '.xlsx');

                    };

                }
            };
        }
    );
    app.controller('manageSupplierCtrl', manageSupplierCtrl);

    manageSupplierCtrl.$inject = ['$scope', 'apiService', 'notificationService', '$modal', '$routeParams'];

    function manageSupplierCtrl($scope, apiService, notificationService, $modal, $routeParams) {
        $scope.title = 'manageSupplierCtrl';
        $scope.pageClass = 'page-Purchases';
        $scope.loadingPurchase = true;
        $scope.Purchases = [];
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.openPurchaseDialog = openPurchaseDialog;
        $scope.removePurchase = removePurchase;
        $scope.modelObj = {};
        $scope.supplierMasterLoadCompleted = supplierMasterLoadCompleted;
        $scope.supplierMasterLoadFailed = supplierMasterLoadFailed;
        $scope.SupplierArry = [];
        $scope.selectedObj = {};

        //getting data and filtering data
        $scope.fileName = "Purchase Details";
        $scope.exportData = [];
        // Headers:
        $scope.exportData.push(["Id", "SupplierName"]);

        function search(page) {
            page = page || 0;
            $scope.loadingPurchase = true;
            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterPurchase
                }
            };
            apiService.get('api/PurchaseMaster/getallpurchase', config,
                purchaseLoadCompleted,
                purchaseLoadFailed);

            apiService.get('/api/SupplierMaster/getallsupplier', config,
                supplierMasterLoadCompleted,
                supplierMasterLoadFailed);
        }
        function supplierMasterLoadCompleted(response) {
            $scope.SupplierArry = response.data;

        }
        function supplierMasterLoadFailed(error) {
            console.log("error in Product Group Get Call Service");
        }



        function purchaseLoadCompleted(result) {
            $scope.Purchases = result.data;
            angular.forEach($scope.Purchases, function (v, k) {
                debugger
                $scope.exportData.push([v.Id, v.SupplierName]);
            });
            debugger
            $scope.Purchases = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingPurchase = false;
            if ($scope.filterPurchase && $scope.filterPurchase.length) {
                notificationService.displayInfo(result.data.length + 'Purchase found');
            }
        }
        function purchaseLoadFailed(response) {
            notificationService.displayError(response.data);
        }
        function clearSearch() {
            $scope.filterPurchase = '';
            search();
        }
        $scope.Id = 0;
        $scope.SelctedArry = [];

        $scope.openPurchaseDialogContainer = function (data) {
            $scope.modelObj = data;
            $scope.SelctedArry = $scope.SupplierArry.filter(x => x.Id === data.Supplier_Id);     
            $scope.selectedObj = $scope.SelctedArry[0];
            $scope.ModelType = 'Edit';
            debugger
            $scope.openPurchaseDialog();
        }
        //popup for save
        $scope.AddPurchase = function () {
            $scope.modelObj = {};
            $scope.ModelType = 'Add';
            $scope.openPurchaseDialog();
        }
        //modified
        function openPurchaseDialog() {
            $modal.open({
                templateUrl: 'scripts/spa/purchase/manageSupplierAdd.html',
                controller: 'manageSupplierAddCtrl',
                scope: $scope
            }).result.then(function ($scope) {
            }, function () {
            });
        }
        $scope.fetchSupplier = function (data) {
            $scope.selectedObj = data;

        }
        //remove
        function removePurchase(data) {
            $scope.removeID = data;
            apiService.post('/api/PurchaseMaster/Delete/' + $scope.removeID, null,
                purchaseRemoveCompleted,
                purchaseRemoveFailed);
        }
        function purchaseRemoveCompleted(result) {
            notificationService.displaySuccess(' has been removed');
            $scope.search();
            console.log(result);
            $scope.Purchases = result.data;
        }
        function purchaseRemoveFailed(response) {
            notificationService.displayError(response.data);
            console.log(response);
        }
        $scope.search();
      
    }
})(angular.module('homeCinema'));
