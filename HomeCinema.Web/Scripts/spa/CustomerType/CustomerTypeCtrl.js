(function (app) {
    'use strict';

   
    app.controller('CustomerTypeCtrl', CustomerTypeCtrl);

    CustomerTypeCtrl.$inject = ['$scope', '$modal','apiService', 'notificationService'];

    function CustomerTypeCtrl($scope, $modal, apiService, notificationService) {
        $scope.title = 'CustomerTypeCtrl';
        $scope.pageClass = 'page-customertype';
        $scope.loadingCustomer = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.CustomerTypes = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit;
        $scope.UpdatedCustomertype = UpdatedCustomertype;
        $scope.AddCustomerModel = AddCustomerModel;
        $scope.removeCustomerType = removeCustomerType;

 //getall ProductGroups

        function search(page) {
            page = page || 0;

            $scope.loadingCustomer = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 1,
                    filter: $scope.filterCustomer
                }
            };

            apiService.get('/api/CustomerTypeMaster/GetAllCustomers', config,
                customertypeLoadCompleted,
                 customertypeLoadFailed);
        }

        function customertypeLoadCompleted(result) {
            $scope.CustomerTypes = result.data;
            $scope.adjustCustomerTypeList();
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingCustomer = false;

            if ($scope.filterCustomer && $scope.filterCustomer.length) {
                notificationService.displayInfo(result.data.length + ' customertype found');
            }

        }

        function customertypeLoadFailed(response) {
            notificationService.displayError(response.data);
        }
 //filter clearsearch 
        function clearSearch() {
            $scope.filterCustomer = '';
            search();
        }

//popup modal

        $scope.Modals = {
            openCustomerTypeDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/CustomerType/Addcustomer.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },

//cnacel modal

            cancelTustomerTypeDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };

//Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancelTustomerTypeDialog();
        }

//popup edit CustomerType

        $scope.modelobj = {};
        $scope.openCustomerTypeDialogContainer = function (data) {
            $scope.modelobj = data;
            $scope.save = 'update';
            $scope.Modals.openCustomerTypeDialog();
        }

//popup Added new CustomerType

        $scope.AddCustomerType = function () {
            $scope.save = 'add';
            $scope.Modals.openCustomerTypeDialog();
        }

 //Update CustomerType

        $scope.CustomerObj = {};
        function UpdatedCustomertype() {
            $scope.CustomerObj = $scope.modelobj;
            apiService.post('/api/CustomerTypeMaster/Update', $scope.CustomerObj,
                updateCustomerSucceded,
                updateCustomerFailed);
        }

        function updateCustomerSucceded(response) {
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }


        function updateCustomerFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }

 //Save CustomerType
        function AddCustomerModel() {
            debugger
            apiService.post('/api/CustomerTypeMaster/Save', $scope.modelobj,
                AddCustomerModelSucceded,
                AddCustomerModelFailed);
        }
        function AddCustomerModelSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.CustomerTypes = response.data;
            $scope.modelobj = {};
            $scope.search();
            $scope.cancelEdit();
        }

        function AddCustomerModelFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelobj = {};
        }

//remove CustomerType

        function removeCustomerType(data) {
            $scope.id = data;
            apiService.post('/api/CustomerTypeMaster/Delete/' + $scope.id, null,
                removeCustomerTypeCompleted,
                removeCustomerTypeFailed);
        }
        function removeCustomerTypeCompleted(result) {
            notificationService.displaySuccess('has been remove');
            $scope.CustomerTypes = result.data;
            $scope.search();

        }
        function removeCustomerTypeFailed(response) {
            notificationService.displayError(response);
        }

        $scope.filteredCustomertypeData = [];
        $scope.currentPage = 1
            , $scope.numPerPage = 5
            , $scope.maxSize = 5;
        $scope.orderByField = 'Id';
        $scope.reverseSort = true;
        $scope.adjustCustomerTypeList = function () {
            var begin = (($scope.currentPage - 1) * $scope.numPerPage)
                , end = begin + $scope.numPerPage;

            $scope.filteredCustomertypeData = angular.copy($scope.CustomerTypes.slice(begin, end));
        };
        $scope.$watch('currentPage + numPerPage', function () {
            $scope.adjustCustomerTypeList();
        });

        $scope.showPerPageDataOptions = [1,3, 5, 10, 25, 50, 100];

        $scope.search();


        activate();

        function activate() { }
    }
})(angular.module('homeCinema'));
