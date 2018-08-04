(function (app) {
    'use strict';

   
    app.controller('SalesFormCtrl', SalesFormCtrl);

    SalesFormCtrl.$inject = ['$scope', 'apiService', '$modal', 'notificationService'];

    function SalesFormCtrl($scope, apiService,$modal,notificationService) {
        $scope.title = 'SalesFormCtrl';
        $scope.selectedObj = {};
        $scope.saleArry = [];
        $scope.cancelEdit = cancelEdit;
        $scope.AddSalesForm = AddSalesForm;
        $scope.productObj = {};
        $scope.customerObj = {};
        $scope.POSObj = {};
        $scope.UOMObj = {};
        $scope.modelObj = {};
    
        

       
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

        //$scope.fetchSale = function (data) {
        //    $scope.selectedObj = data;

        //}

        $scope.Id = 0;
        $scope.modelobj = {};

        $scope.openSalesFormDialogContainer = function (data) {
           
            $scope.modelobj = data;
            $scope.save = 'update';
            $scope.Modals.opensalesDialog();
        }

        //popup new sales

        $scope.AddSales = function () {
            
            $scope.productArr = $scope.saleArry.Product;
         
            $scope.customerArr = $scope.saleArry.Customer;

            $scope.UOMArr = $scope.saleArry.UOM;
    
            $scope.POSArr = $scope.saleArry.pos;

            $scope.save = 'add';
            $scope.Modals.opensalesDialog();
           
        }
        
 //date picker

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
        $scope.format = 'yy-MM-dd'; 


 //save slaes details

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
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            debugger
            $scope.selectedObj = response.data;
            $scope.selectedObj = {};
            $scope.cancelEdit();
        }
        function salesFailed(response) {
            console.log(response);
            $scope.selectedObj = {};
            notificationService.displayError('error');
        }
    }
})(angular.module('homeCinema'));
