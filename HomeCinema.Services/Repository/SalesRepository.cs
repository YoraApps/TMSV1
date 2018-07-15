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
    public class SalesRepository : ISalesRepository
    {
        private IDbConnection _db;
        public SalesRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreateSales(SalesDS salesDS)
        {
            DateTime now = DateTime.Now;
            salesDS.CreatedDate = now;
            salesDS.ModifiedDate = now;            salesDS.SalesDate = now;
            int rowsAffected = this._db.Execute(@"INSERT SalesMaster(IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,SalesDate,PosId,CustomerId) values (1,1,@CreatedDate,1,@ModifiedDate,@SalesDate,@PosId,@CustomerId)",

                new {  IsActive = 1, CreatedBy = 1, CreatedDate = salesDS.CreatedDate, ModifiedBy = 1, ModifiedDate = salesDS.ModifiedDate, SalesDate = salesDS.SalesDate, PosId = salesDS.PosId, CustomerId = salesDS.CustomerId });

            if (rowsAffected > 0)
            {
                return true;
            }
            return false;
        }

        public List<SalesDS> GetAllSales()
        {
            return this._db.Query<SalesDS>("GetAllSales", commandType: CommandType.StoredProcedure).ToList();
        }

        public SalesDS GetSingleSales(int? id)
        {
            return _db.Query<SalesDS>("SELECT Id,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,PosId FROM SalesMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();

        }

        public bool RemoveSales(int? id)
        {
            int rowsAffected = this._db.Execute(@"UPDATE SalesMaster SET  IsActive = 0 WHERE Id =@Id",
         new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdateSales(SalesDS salesDS)
        {
            DateTime now = DateTime.Now;
            salesDS.ModifiedDate = now;
            int rowsAffected = this._db.Execute("UPDATE SalesMaster SET ModifiedBy=1, ModifiedDate = @ModifiedDate,PosId=@PosId WHERE Id = " +
                          salesDS.Id, salesDS);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
}
