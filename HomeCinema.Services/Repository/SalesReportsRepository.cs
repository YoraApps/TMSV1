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
  public class SalesReportsRepository : ISalesReportsRepository
    {
        private IDbConnection _db;

        public SalesReportsRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public List<SalesReportsDS> GetSalesGraphic(string Name)
        {
            SalesReportsDS sa = new SalesReportsDS();
            sa.UOMName = Name;
            DynamicParameters param = new DynamicParameters();

            param.Add("@UomName ", sa.UOMName);

            return this._db.Query<SalesReportsDS>("USP_SalesGraphicsReports", param, commandType: CommandType.StoredProcedure).ToList();
        }

        public List<SalesReportsDS> GetSalesReports()
        {
            return this._db.Query<SalesReportsDS>("USP_SalesReports", commandType: CommandType.StoredProcedure).ToList();
        }
    }
}
