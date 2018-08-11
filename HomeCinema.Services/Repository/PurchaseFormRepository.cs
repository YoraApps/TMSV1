using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities.DataSource;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;

namespace HomeCinema.Services.Repository
{
   public  class PurchaseFormRepository : IPurchaseFormRepository
    {
        public DateTime now = DateTime.Now;
        private IDbConnection _db;
        public PurchaseFormRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool SavePurchaseDetail(PurchaseFormPostDs purchaseSave)
        {
            bool returnvalue = false;
            purchaseSave.ModifiedDate = now;
            purchaseSave.CreatedDate = now;    
            DynamicParameters param = new DynamicParameters();
            param.Add("@ProductId", purchaseSave.Product.ProductId);
            param.Add("@Supplier_Id", purchaseSave.Supplier.Supplier_Id);
            param.Add("@PurchaseDate", purchaseSave.PurchaseDate);
            param.Add("@UomId", purchaseSave.UOM.UomId);
            param.Add("@StoreId", purchaseSave.Store.StoreId);
            param.Add("@Quantity", purchaseSave.Quantity);
            param.Add("@Status", purchaseSave.Status);
            param.Add("@CreatedBy", purchaseSave.CreatedBy);
            param.Add("@CreatedDate", purchaseSave.CreatedDate);
            param.Add("@ModifiedBy", purchaseSave.ModifiedBy);
            param.Add("@ModifiedDate", purchaseSave.ModifiedDate);        
           // param.Add("@LocationId", purchaseSave.Location.LocationId);
            _db.Open();
            var val = _db.Execute("USP_PurchaseFormSave", param, commandType: CommandType.StoredProcedure);
            
            if (val>0)
            {
                returnvalue = true;
            }
            
            
            _db.Close();
            return returnvalue;
        }
            //GetAllDataForSalesDetails
            public PurchaseFormListDs GetAllPurchaseDetails()
              {
            PurchaseFormListDs ds = new PurchaseFormListDs();
            string query = @"USP_PurchaseFormPopulate";
            using (var multi = _db.QueryMultiple(query, null))
            {
                ds.LocationList = multi.Read<PurchaseLocationDs>().ToList();
                ds.supplierList = multi.Read<PurchaseSupplierDs>().ToList();
                ds.uOMList = multi.Read<PurchaseUomDs>().ToList();
                ds.productList = multi.Read<PurchaseProductDs>().ToList();
                ds.storeList = multi.Read<PurchaseStoreDs>().ToList();
            }
            return ds;
        }

    }
}
