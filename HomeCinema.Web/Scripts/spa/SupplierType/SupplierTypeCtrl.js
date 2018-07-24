(function (app) {
    'use strict';


    app.controller('SupplierTypeCtrl', SupplierTypeCtrl);

    SupplierTypeCtrl.$inject = ['$scope', '$modal', 'apiService', 'notificationService'];

    function SupplierTypeCtrl($scope, $modal, apiService, notificationService) {
        $scope.title = 'SupplierTypeCtrl';
        $scope.pageClass = 'page-Suppliertype';
        $scope.loadingsupplier = true;
        $scope.page = 0;
        $scope.pagesCount = 0;
        $scope.SupplierTypes = [];
        $scope.search = search;
        $scope.clearSearch = clearSearch;
        $scope.cancelEdit = cancelEdit;
        $scope.UpdatedSuppliertype = UpdatedSuppliertype;
        $scope.AddSupplierModel = AddSupplierModel;
        $scope.removeSupplierType = removeSupplierType;
        //$scope.currentpage = 1;
        //$scope.numperpage = 5;
        //$scope.maxsize = 5;
       
         

//getall SupplierTypes

        function search(page) {
            page = page || 0;

            $scope.loadingsupplier = true;

            var config = {
                params: {
                    page: page,
                    pageSize: 6,
                    filter: $scope.filterSupplierTypes
                }
            };

            apiService.get('/api/SupplierType/GetAllSupplierType', config,
                suppliertypeLoadCompleted,
                suppliertypeLoadFailed);
        }

        function suppliertypeLoadCompleted(result) {
            $scope.SupplierTypes = result.data;
          // $scope.paginationFunc();
            $scope.page = result.data.Page;
            $scope.pagesCount = result.data.TotalPages;
            $scope.totalCount = result.data.TotalCount;
            $scope.loadingsupplier = false;

            if ($scope.filterSupplierTypes && $scope.filterSupplierTypes.length) {
                notificationService.displayInfo(result.data.length + ' customertype found');
            }

        }

        function suppliertypeLoadFailed(response) {
            notificationService.displayError(response.data);
        }
//filter clearsearch 

        function clearSearch() {
            $scope.filterSupplierTypes = '';
            search();
        }

 //popup modal

        $scope.Modals = {
            openSupplierTypeDialog: function () {
                $scope.modelInstance = $modal.open({
                    templateUrl: 'scripts/spa/SupplierType/Add.html',
                    size: 'md',
                    scope: $scope
                });
                $scope.modelInstance.result.then(function ($scope) {

                }, function (event) {
                });
            },

 //cnacel modal

            cancelSupplierTypeDialog: function () {
                $scope.modelInstance.dismiss();
            }
        };

//Cancel Edit popup
        function cancelEdit() {
            $scope.Modals.cancelSupplierTypeDialog();
        }

//popup edit SupplierType

        $scope.modelobj = {};
        $scope.openSupplierTypeDialogContainer = function (data) {
            $scope.modelobj = data;
            $scope.save = 'update';
            $scope.Modals.openSupplierTypeDialog();
        }

//popup Added new SupplierType

        $scope.AddSupplier = function () {
            $scope.save = 'add';
            $scope.Modals.openSupplierTypeDialog();
        }

 //Update SupplierType

        $scope.SupplierObj = {};
        function UpdatedSuppliertype() {
            $scope.SupplierObj = $scope.modelobj;
            apiService.post('/api/SupplierType/Update', $scope.SupplierObj,
                updateSupplierSucceded,
                updateSupplierFailed);
        }

        function updateSupplierSucceded(response) {
            console.log(response);
            notificationService.displaySuccess('has been updated');
            $scope.cancelEdit();
        }


        function updateSupplierFailed(response) {
            notificationService.displayError(response);
            $scope.cancelEdit();
        }

//Save CustomerType
        function AddSupplierModel() {
            debugger
            apiService.post('/api/SupplierType/Save', $scope.modelobj,
                AddSupplierModelSucceded,
                AddSupplierModelFailed);
        }
        function AddSupplierModelSucceded(response) {
            notificationService.displaySuccess(' has been submitted to Home Cinema');
            $scope.SupplierTypes = response.data;
            $scope.modelobj = {};
            $scope.search();
            $scope.cancelEdit();
        }

        function AddSupplierModelFailed(response) {
            console.log(response);
            notificationService.displayError(response.statusText);
            $scope.modelobj = {};
        }

        //remove CustomerType

        function removeSupplierType(data) {
            $scope.id = data;
            apiService.post('/api/SupplierType/Delete/' + $scope.id, null,
                removeSupplierTypeCompleted,
                removeSupplierTypeFailed);
        }
        function removeSupplierTypeCompleted(result) {
            notificationService.displaySuccess('has been remove');
            $scope.SupplierTypes = result.data;
            $scope.search();

        }
        function removeSupplierTypeFailed(response) {
            notificationService.displayError(response);
        }


        ////Paging nagitation

        //$scope.paginationfunc = function () {

        ////    //for ($scope.i = 1; $scope.i <= 100; $scope.i++) {
        ////    //    debugger
        ////    //    $scope.suppliertypes.push({ text: "" + suppliertypes[i], done: false });
        ////    //}

        //    $scope.paginationfunc();

        //    debugger

        //    $scope.$watch("currentpage + numperpage", function () {
        //        var begin = (($scope.currentpage - 1) * $scope.numperpage)
        //            , end = begin + $scope.numperpage;
        //        $scope.filteredtodos = $scope.suppliertypes.slice(begin, end);
        //    });
        //}
       


      //  paging fuction

           $scope.curPage = 1,
           $scope.itemsPerPage = 3,
           $scope.maxSize = 2;

        this.items = itemsDetails;


        $scope.numOfPages = function () {

            

            return Math.ceil(itemsDetails.length / $scope.itemsPerPage);

        //    for ($scope.i = 1; $scope.i <= 100; $scope.i++) {
           
        //    $scope.suppliertypes.push({ text: "" + suppliertypes[i], done: false });
        //}

      

        $scope.$watch('curPage + numPerPage', function () {
      
            var begin = (($scope.curPage - 1) * $scope.itemsPerPage),
                end = begin + $scope.itemsPerPage;

            $scope.SupplierTypes = itemsDetails.slice(begin, end);
            });
        };

        $scope.search();

        activate();

        function activate() { }
    }
})(angular.module('homeCinema'));


var itemsDetails = [
    {
        Id: 1,
        Name: 'mobile',
        Description: '4 gb ram'
    },
    {
        Id: 2,
        Name: 'Electrical',
        Description: 'capacitors'
    },
    {
        Id: 3,
        Name: 'laptop',
        Description: 'ram'
    },
    {
        Id: 4,
        Name: 'tv',
        Description: 'channels'
    },
    {
        Id: 5,
        Name: 'watch',
        Description: 'timing'
    },
    {
        Id: 6,
        Name: 'Electronics',
        Description: 'Electronics engineers typically do the following: Design electronic components, software, products, or systems for commercial, industrial, medical, military, or scientific applications.'
        
    },
    {
        Id: 7,
        Name: 'Stationary supply',
        Description: 'Blankbooks-wholesaleBusiness forms-wholesale'
    } ,
        {
        Id: 8,
        Name: 'Hardware supplier',
       Description: 'sell household hardware for home improvement'
    } 

];


