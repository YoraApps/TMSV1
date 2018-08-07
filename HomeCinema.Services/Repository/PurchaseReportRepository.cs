using Dapper;
using HomeCinema.Entities.DataSource;
using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.Repository
{
    public class PurchaseReportRepository : IPurchaseReportRepository
    { 
        private IDbConnection _db;

        public PurchaseReportRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        PurchaseReportDS PR = new PurchaseReportDS();
        public List<PurchaseReportDS> GetAllPurchaseGraphicReport(String Name)
        {
         
            PR.UOMName = Name;
            DynamicParameters param = new DynamicParameters();
            param.Add("@UOMName", PR.UOMName);
            return this._db.Query<PurchaseReportDS>("USP_PurchaseGraphicReport", param, commandType: CommandType.StoredProcedure).ToList();
           
        }

        public List<PurchaseReportDS> GetAllPurchaseReport()
        {
            return this._db.Query<PurchaseReportDS>("USP_PurchaseReport",commandType:CommandType.StoredProcedure).ToList();
        }

        //public bool RemovePerchaseReport(PurchaseReportDS purchaseReportDS)
        //{
        //    bool returnvalue = false;

        //    DynamicParameters param = new DynamicParameters();

        //    param.Add("@Id", purchaseReportDS.Id);
        //    _db.Open();
        //    var val = _db.Execute("USP_PurchaseReport", param, commandType: CommandType.StoredProcedure);

        //    if (val > 0)
        //    {
        //        returnvalue = true;
        //    }
        //    _db.Close();
        //    return returnvalue;
        //}

        public bool Update(PurchaseFormPostDs purchaseFormPostDs)
        {
            bool returnvalue = false;
         
            DynamicParameters param = new DynamicParameters();
            param.Add("@Id", purchaseFormPostDs.PurchaseId);
            param.Add("@ProductId", purchaseFormPostDs.Product.ProductId);
            param.Add("@Supplier_Id", purchaseFormPostDs.Supplier.Supplier_Id);
            //param.Add("@LocationId", purchaseFormPostDs.Location.LocationId);
            param.Add("@UomId", purchaseFormPostDs.UOM.UomId);
            param.Add("@StoreId", purchaseFormPostDs.Store.StoreId);
            param.Add("@Quantity", purchaseFormPostDs.Quantity);
            param.Add("@ModifiedBy", 1);
            param.Add("@ModifiedDate", DateTime.UtcNow);
            param.Add("@PurchaseDate", purchaseFormPostDs.PurchaseDate);
            _db.Open();
            var val = _db.Execute("USP_PurchaseReportUpdate", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }


            _db.Close();
            return returnvalue;

        }
    }
}
