(function (app) {
    'use strict';

   
    app.controller('SalesFormCtrl', SalesFormCtrl);

    SalesFormCtrl.$inject = ['$scope', 'apiService', '$modal', 'notificationService'];

    function SalesFormCtrl($scope, apiService,$modal,notificationService) {
        $scope.title = 'SalesFormCtrl';
        $scope.selectedObj = {};
        $scope.saleArry = [];
        //$scope.AddSalesForm = AddSalesForm;
        $scope.cancelEdit = cancelEdit;
      

       
        //$scope.openSalesFormDialogContainer = openSalesFormDialogContainer;
        var config = {
            params: {
                page: 1,
                pageSize: 6,
                filter: ''//$scope.filtersuppliers
            }
        };

        //get sales Details

        apiService.get('/api/SalesDetails/GetAllDataForSalesDetails', config,
            suppliertypeLoadCompleted,
            supplierstypeLoadFailed);

       
        function suppliertypeLoadCompleted(response) {
            debugger
            $scope.saleArry = response.data;

        }
        function supplierstypeLoadFailed(error) {
            console.log("error in  Get Call Service");
        }


        //popup

        $scope.Modals = {

            opensalesDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/SalesForm/Add.html',
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
        function cancelEdit() {
            $scope.Modals.cancelsalesDialog();
        }
        $scope.fetchSale = function (data) {
            $scope.selectedObj = data;

        }
        $scope.Id = 0;
        $scope.saleArry = [];
        $scope.modelobj = {};

        $scope.openSalesFormDialogContainer = function (data) {
            $scope.modelobj = data;
            $scope.saleArry = $scope.sales.filter(x => x.Id === data.ProductId);
            $scope.selectedObj = $scope.saleArry[0];
            $scope.saleArry = $scope.sales.filter(x => x.Id === data.CustomerId);
            $scope.selectedObj = $scope.saleArry[1];
            $scope.saleArry = $scope.sales.filter(x => x.Id === data.UOMId);
            $scope.selectedObj = $scope.saleArry[2];
            $scope.saleArry = $scope.sales.filter(x => x.Id === data.PosId);
            $scope.selectedObj = $scope.saleArry[3];
            $scope.save = 'update';
            $scope.Modals.opensalesDialog();
        }

        //popup new sales

        $scope.AddSales = function () {
            $scope.save = 'add';
            $scope.Modals.opensalesDialog();
           
        }
        
        // date popup

       $scope.open = function ($event) {
          $event.preventDefault();
           $event.stopPropagation();

          $scope.opened = true;
       };
       $scope.dateOptions = {
           formatYear: 'yy',
           startingDay: 1,
           minDate: new Date(1900, 9, 9),
           initDate: new Date('2030-06-22')
        };
       $scope.format = ['MM-dd-yyyy'];
      
    }
})(angular.module('homeCinema'));
