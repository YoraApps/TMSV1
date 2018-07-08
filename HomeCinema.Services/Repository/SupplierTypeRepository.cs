using Dapper;
using HomeCinema.Entities;
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
    public class SupplierTypeRepository : ISupplierTypeRepository
    {
        private IDbConnection _db;
        public SupplierTypeRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public bool CreatedSupplierType(SupplierTypeMaster supplierTypeMaster)
        {

            DateTime now = DateTime.Now;
            supplierTypeMaster.CreatedDate = now;
            supplierTypeMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(@"INSERT SupplierTypeMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate) values (@Name,@Description,1,1,@CreatedDate,1,@ModifiedDate)",

                new { Name = supplierTypeMaster.Name, Description = supplierTypeMaster.Description, IsActive = 1, CreatedBy = 1, CreatedDate = supplierTypeMaster.CreatedDate, ModifiedBy = 1, ModifiedDate = supplierTypeMaster.ModifiedDate });

            if (rowsAffected > 0)
            {
                return true;
            }
            return false;
        }

        public List<SupplierTypeMaster> GetAllSupplierType()
        {
            return this._db.Query<SupplierTypeMaster>("Select * from SupplierTypeMaster where IsActive=1 ").ToList();
        }


        public SupplierTypeMaster GetSingleSupplierType(int? id)
        {
            return _db.Query<SupplierTypeMaster>("SELECT Id,Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM SupplierTypeMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();
        }



        public bool UpdateSupplierType(SupplierTypeMaster supplierTypeMaster)
        {
            DateTime now = DateTime.Now;
            supplierTypeMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute("UPDATE SupplierTypeMaster SET Name = @Name ,Description = @Description,ModifiedBy=1, ModifiedDate = @ModifiedDate WHERE Id = " +
                          supplierTypeMaster.Id, supplierTypeMaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool RemoveSupplierType(int? id)
        {
            int rowsAffected = this._db.Execute(@"UPDATE SupplierTypeMaster SET  IsActive = 0 WHERE Id =@Id",
                  new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

    }
}
