(function () {
    'use strict';

    angular.module('homeCinema', ['common.core', 'common.ui'])
        .config(config)
        .run(run);

    config.$inject = ['$routeProvider'];

    function config($routeProvider) {
        $routeProvider
            .when("/", {
                templateUrl: "scripts/spa/home/index.html",
                controller: "indexCtrl"
            })
            .when("/login", {
                templateUrl: "scripts/spa/account/login.html",
                controller: "loginCtrl"
            })
            .when("/register", {
                templateUrl: "scripts/spa/account/register.html",
                controller: "registerCtrl"
            })
            .when("/customers", {
                templateUrl: "scripts/spa/customers/customers.html",
                controller: "customersCtrl"
            })
            .when("/customers/register", {
                templateUrl: "scripts/spa/customers/register.html",
                controller: "customersRegCtrl",
                resolve: { isAuthenticated: isAuthenticated }
            })
            .when("/movies", {
                templateUrl: "scripts/spa/movies/movies.html",
                controller: "moviesCtrl"
            })
            .when("/movies/add", {
                templateUrl: "scripts/spa/movies/add.html",
                controller: "movieAddCtrl",
                resolve: { isAuthenticated: isAuthenticated }
            })
            .when("/movies/:id", {
                templateUrl: "scripts/spa/movies/details.html",
                controller: "movieDetailsCtrl",
                resolve: { isAuthenticated: isAuthenticated }
            })
            .when("/movies/edit/:id", {
                templateUrl: "scripts/spa/movies/edit.html",
                controller: "movieEditCtrl"
            })
            .when("/books", {
                templateUrl: "scripts/spa/books/books.html",
                controller: "booksCtrl"
            })
            .when("/watches", {
                templateUrl: "scripts/spa/watches/watches.html",
                controller: "watchesCtrl"
            })
            .when("/watches/add", {
                templateUrl: "scripts/spa/watches/add.html",
                controller: "watchesAddCtrl"          
            })
            .when("/products/add", {
                templateUrl: "scripts/spa/products/productAdd.html",
                controller: "productAddCtrl"             
            })
            .when("/products", {
                templateUrl: "scripts/spa/products/product.html",
                controller: "productCtrl"
            })
            .when("/purchase", {
                templateUrl: "scripts/spa/purchase/manageSupplier.html",
                controller: "manageSupplierCtrl"
            })
            .when("/purchase/add", {
                templateUrl: "scripts/spa/purchase/manageSupplierAdd.html",
                controller: "manageSupplierAddCtrl"
            })
            .when("/watches/edit/:id", {
                templateUrl: "scripts/spa/watches/edit.html",
                controller: "watchesEditCtrl"
            })
            .when("/watches/:id", {
                templateUrl: "scripts/spa/watches/details.html",
                controller: "watchesDetailsCtrl"
            })
            .when("/watches/watcheslist", {
                templateUrl: "scripts/spa/watches/watcheslist.html",
                controller: "watchesListCtrl"
            })
            .when("/suppliermaster", {
                templateUrl: "scripts/spa/suppliermaster/suppliermaster.html",
                controller: "suppliermasterCtrl"
            })
            .when("/suppliermaster/add", {
                templateUrl: "scripts/spa/suppliermaster/suppliermasterAdd.html",
                controller: "suppliermasterAddCtrl"
            })
            .when("/CustomerMaster", {
                templateUrl: "scripts/spa/customermaster/CustomerMaster.html",
                controller: "CustomerMasterCtrl"
            })
            .when("/rental", {
                templateUrl: "scripts/spa/rental/rental.html",
                controller: "rentStatsCtrl"
            })
            .when("/ProductGroups", {
                templateUrl: "scripts/spa/ProductGroup/ProductGroup.html",
                controller: "ProductGroupCtrl"
            })
            .when("/CustomerTypes", {
                templateUrl: "scripts/spa/CustomerType/customerType.html",
                controller: "CustomerTypeCtrl"
            })
            .when("/SupplierTypes", {
                templateUrl: "scripts/spa/SupplierType/Supplier.html",
                controller: "SupplierTypeCtrl"
            })
            .when("/ProductCategory", {
                templateUrl: "scripts/spa/ProductCategory/ProductCategory.html",
                controller: "ProductCategoryCtrl"
            })
            .when("/Sales", {
                templateUrl: "scripts/spa/Sales/Sales.html",
                controller: "SalesCtrl"
            })
            .when("/Salesform", {
                templateUrl: "scripts/spa/SalesForm/Sales.html",
                controller: "SalesFormCtrl"
            })
            .when("/purchaseForm", {
                templateUrl: "scripts/spa/purchaseForm/purchaseForm.html",
                controller: "purchaseFormCtrl"
            })
            .when("/purchaseForm/add", {
                templateUrl: "scripts/spa/purchaseForm/purchaseFormAdd.html",
                controller: "purchaseFormAddCtrl"
            })
            .when("/salesReports", {
                templateUrl: "scripts/spa/salesReports/salesReports.html",
                controller: "salesReportsCtrl"
            })
            .when("/UnitOfMeasurement", {
                templateUrl: "scripts/spa/unitofmeasurementmaster/UnitOfMeasurementMaster.html",
                controller: "unitofmeasurementCtrl"
            })
            .when("/UnitOfMeasurementAdd", {
                templateUrl: "scripts/spa/unitofmeasurementmaster/unitofmeasurementAdd.html",
                controller: "unitofmeasurementAddCtrl"
            })
            .when("/PosMaster", {
                templateUrl: "scripts/spa/PosMaster/PosMaster.html",
                controller: "PosMasterCtrl"
            })
            .when("/registers", {
                templateUrl: "scripts/spa/Registration/Registration.html",
                controller: "RegistrationCtrl"
            })
            .when("/location", {
                templateUrl: "scripts/spa/location/location.html",
                controller: "locationCtrl"
            })
            .when("/PurchaseReport", {
                templateUrl: "scripts/spa/PurchaseReport/PurchaseReport.html",
                controller: "PurchaseReportCtrl"
            })
            .when("/testdev", {
                templateUrl: "scripts/spa/testdev/testdev.html",
                controller: "testdevController"
            })

            .when("/StoreMaster", {
                templateUrl: "scripts/spa/StoreMaster/StoreMaster.html",
                controller: "StoreMasterCtrl"
            })

            .when("/location", {
                templateUrl: "scripts/spa/location/location.html",
                controller: "locationCtrl"
            })
            .when("/employee", {
                templateUrl: "scripts/spa/employee/employee.html",
                controller: "employeeCtrl"
            })
            .when("/employee/add", {
                templateUrl: "scripts/spa/employee/employeeAdd.html",
                controller: "employeeAddCtrl"
            })
            .otherwise({ redirectTo: "/" });


    }

    run.$inject = ['$rootScope', '$location', '$cookieStore', '$http'];

        function run($rootScope, $location, $cookieStore, $http) {
            // handle page refreshes
            $rootScope.repository = $cookieStore.get('repository') || {};
            if ($rootScope.repository.loggedUser) {
                $http.defaults.headers.common['Authorization'] = $rootScope.repository.loggedUser.authdata;
            }

            $(document).ready(function () {
                $(".fancybox").fancybox({
                    openEffect: 'none',
                    closeEffect: 'none'
                });

                $('.fancybox-media').fancybox({
                    openEffect: 'none',
                    closeEffect: 'none',
                    helpers: {
                        media: {}
                    }
                });

                $('[data-toggle=offcanvas]').click(function () {
                    $('.row-offcanvas').toggleClass('active');
                });

            });
        }

    isAuthenticated.$inject = ['membershipService', '$rootScope', '$location'];

    function isAuthenticated(membershipService, $rootScope, $location) {
        if (!membershipService.isUserLoggedIn()) {
            $rootScope.previousState = $location.path();
            $location.path('/login');
        }
    }

})();