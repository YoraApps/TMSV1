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

        public PurchaseReportRepository ()
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
            return this._db.Query<PurchaseReportDS>("USP_PurchaseReport ", commandType: CommandType.StoredProcedure).ToList();
        }
    }
}
