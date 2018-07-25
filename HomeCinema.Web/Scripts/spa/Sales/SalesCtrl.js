(function (app) {
 
    app.controller('SalesCtrl', SalesCtrl);

    SalesCtrl.$inject = ['$scope', 'apiService','$modal','notificationService'];

    function SalesCtrl($scope, apiService,$modal,notificationService) {
        $scope.title = 'SalesCtrl';
        $scope.pageClass = 'page-sales';
        $scope.loadingsuppliers = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.sales = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.selectedObj = {};
        $scope.saleArry = [];
        $scope.UpdatedSales = UpdatedSales;
        $scope.AddSales = AddSales;
        $scope.cancelEdit = cancelEdit;
        $scope.PosCompleted = PosCompleted;
        $scope.PosFailed = PosFailed;
       


        function search(page) {
            page = page || 0;

            $scope.loadingsuppliers = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterSales
                }
            };

            apiService.get('/api/Sales/getallsales', config,
                salesLoadCompleted,
                salesLoadFailed);


            apiService.get('/api/Pos/getallPos', config,
                PosCompleted,
                PosFailed);
        }

        function PosCompleted(response) {
            $scope.saleArry = response.data;

        }
        function PosFailed(error) {
            console.log("error in Pos Get Call Service");
        }


        function salesLoadCompleted(result) {
            $scope.sales = result.data;
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingsuppliers = false;

            if ($scope.filterSales && $scope.filterSales.length) {
                notificationService.displayInfo(result.data.length + 'sales found');
            }

        }

        function salesLoadFailed(response) {
            notificationService.displayError(response.data);
        }

        function clearSearch() {
            $scope.filterSales = '';
            search();
        }
        //popup modal

        $scope.Modals = {

            opensalesDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/Sales/Add.html',
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
        //Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancelsalesDialog();
        }
        $scope.fetchSale = function (data) {
            $scope.selectedObj = data;

        }

        //popup edit sales

        $scope.Id = 0;
        $scope.saleArry = [];
        $scope.modelobj = {};

        $scope.openSalesDialogContainer = function (data) {
            $scope.modelobj = data;
            $scope.saleArry = $scope.sales.filter(x => x.Id === data.PosId);
            $scope.selectedObj = $scope.saleArry[0];
            $scope.saleArry = $scope.sales.filter(x => x.Id === data.CustomerId);
            $scope.selectedObj = $scope.saleArry[1];
            $scope.save = 'update';
            $scope.Modals.opensalesDialog();
        }

       
        //popup Added new sales

        $scope.AddMangesales = function () {
            $scope.save = 'add';
            $scope.Modals.opensalesDialog();
        }

        //Update ProductGroup 

        $scope.salesObj = {};
        function UpdatedSales(data) {
            $scope.salesObj = {
                "Id": data.Id,
                "PosId": $scope.selectedObj.Id
            }
            apiService.post('/api/Sales/Update', $scope.salesObj,
                updatesalesSucceded,
                updatesalesFailed);
        }

        function updatesalesSucceded(response) {
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }

        function updatesalesFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }

        //Save ProductGroup

        function AddSales(data) {
            $scope.Data = {
                "PosId": $scope.selectedObj.Id,
               "CustomerId": $scope.selectedObj.Id
            }
            $scope.selectedObj;
           
            apiService.post('/api/Sales/Create', $scope.Data,
                AddSalesSucceded,
                AddSalesFailed);
        }
        function AddSalesSucceded(response) {
            notificationService.displaySuccess(' has been submitted to sales');
            $scope.sales = response.data;
            $scope.cancelEdit();
            $scope.search();

        }

        function AddSalesFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.cancelEdit();

        }
       
        $scope.search();
        activate();

        function activate() { }
    }
})(angular.module('homeCinema'));
