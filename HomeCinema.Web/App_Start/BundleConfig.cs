using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Optimization;

namespace HomeCinema.Web.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                "~/Scripts/Vendors/modernizr.js"));

            bundles.Add(new ScriptBundle("~/bundles/vendors").Include(
                "~/Scripts/Vendors/jquery.js",
                "~/Scripts/Vendors/bootstrap.js",
                "~/Scripts/Vendors/toastr.js",
                "~/Scripts/Vendors/jquery.raty.js",
                "~/Scripts/Vendors/respond.src.js",
                "~/Scripts/Vendors/angular.js",
                "~/Scripts/Vendors/angular-route.js",
                "~/Scripts/Vendors/angular-resource.js",
                "~/Scripts/Vendors/angular-cookies.js",
                "~/Scripts/Vendors/angular-validator.js",
                "~/Scripts/Vendors/angular-base64.js",
                "~/Scripts/Vendors/angular-file-upload.js",
                "~/Scripts/Vendors/angucomplete-alt.min.js",
                "~/Scripts/Vendors/ui-bootstrap-tpls-0.13.1.js",
                "~/Scripts/Vendors/underscore.js",
                "~/Scripts/Vendors/raphael.js",
                "~/Scripts/Vendors/morris.js",
                "~/Scripts/Vendors/jquery.fancybox.js",

                "~/Scripts/Vendors/jquery.fancybox-media.js",
                "~/Scripts/Vendors/loading-bar.js"
                ));

            bundles.Add(new ScriptBundle("~/bundles/spa").Include(
                "~/Scripts/spa/modules/common.core.js",
                "~/Scripts/spa/modules/common.ui.js",
                "~/Scripts/spa/app.js",
                "~/Scripts/spa/directives/exportToExcelApp.js",
                "~/Scripts/spa/services/apiService.js",
                "~/Scripts/spa/services/notificationService.js",
                "~/Scripts/spa/services/membershipService.js",
                "~/Scripts/spa/services/fileUploadService.js",
                "~/Scripts/spa/layout/topBar.directive.js",
                "~/Scripts/spa/layout/sideBar.directive.js",
                "~/Scripts/spa/layout/customPager.directive.js",
                "~/Scripts/spa/directives/rating.directive.js",
                "~/Scripts/spa/directives/availableMovie.directive.js",
                "~/Scripts/spa/account/loginCtrl.js",
                "~/Scripts/spa/account/registerCtrl.js",
                "~/Scripts/spa/home/rootCtrl.js",
                "~/Scripts/spa/home/indexCtrl.js",
                "~/Scripts/spa/customers/customersCtrl.js",
                "~/Scripts/spa/customers/customersRegCtrl.js",
                "~/Scripts/spa/customers/customerEditCtrl.js",
                "~/Scripts/spa/movies/moviesCtrl.js",
                "~/Scripts/spa/movies/movieAddCtrl.js",
                "~/Scripts/spa/movies/movieDetailsCtrl.js",
                "~/Scripts/spa/movies/movieEditCtrl.js",
                "~/Scripts/spa/controllers/rentalCtrl.js",
                "~/Scripts/spa/rental/rentMovieCtrl.js",
                "~/Scripts/spa/rental/rentStatsCtrl.js",
                "~/Scripts/spa/books/booksCtrl.js",

                 "~/Scripts/spa/watches/watchesCtrl.js",
                 "~/Scripts/spa/watches/watchesAddCtrl.js",
                 "~/Scripts/spa/watches/watchesEditCtrl.js",
                 "~/Scripts/spa/watches/watchesDetailsCtrl.js",
                  "~/Scripts/spa/CustomerMaster/CustomerMasterCtrl.js",
                  "~/Scripts/spa/CustomerMaster/AddCustomerMasterCtrl.js",
                    "~/Scripts/spa/products/productCtrl.js",
                   "~/Scripts/spa/products/productAddCtrl.js",
                 "~/Scripts/spa/ProductGroup/ProductGroupCtrl.js",
                    "~/Scripts/spa/CustomerType/CustomerTypeCtrl.js",
                     "~/Scripts/spa/SupplierType/SupplierTypeCtrl.js",
                "~/Scripts/spa/watches/watchesListCtrl.js",
                "~/Scripts/spa/suppliermaster/suppliermasterCtrl.js",
                "~/Scripts/spa/suppliermaster/suppliermasterAddCtrl.js",
                "~/Scripts/spa/ProductCategory/ProductCategoryCtrl.js",
                "~/Scripts/spa/salesReports/salesReportsCtrl.js",
                "~/Scripts/spa/purchase/manageSupplierCtrl.js",
                "~/Scripts/spa/purchase/manageSupplierAddCtrl.js",
                "~/Scripts/spa/purchaseForm/purchaseFormCtrl.js",
                 "~/Scripts/spa/purchaseForm/purchaseFormAddCtrl.js",
                 "~/Scripts/spa/unitofmeasurementmaster/unitofmeasurementCtrl.js",
                  "~/Scripts/spa/unitofmeasurementmaster/unitofmeasurementAddCtrl.js",
                   "~/Scripts/spa/PurchaseReport/PurchaseReportCtrl.js"

                ));

            bundles.Add(new StyleBundle("~/Content/css").Include(
                "~/content/css/site.css",
                "~/content/css/bootstrap.css",
                "~/content/css/bootstrap-theme.css",
                "~/content/css/font-awesome.css",
                "~/content/css/morris.css",
                "~/content/css/toastr.css",
                "~/content/css/jquery.fancybox.css",
                "~/content/css/loading-bar.css"));

            BundleTable.EnableOptimizations = false;
        }
    }
}
