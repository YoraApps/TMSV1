using Dapper;
using HomeCinema.Entities;
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
    public class SupplierMasterRepository : ISupplierMasterRepository
    {
        public DateTime now = DateTime.Now;
        private IDbConnection _db;

        public SupplierMasterRepository ()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreateSupplierMaster(SupplierMaster suppliermaster)
        {
            suppliermaster.CreatedDate = now;
            suppliermaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(@"INSERT SupplierMaster(Name,Address,EmailId,PhoneNumber,AlternatePhoneNumber,FaxNumber,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,SupplierTypeId) values 
             (@Name,@Address,@EmailId,@PhoneNumber,@AlternatePhoneNumber,@FaxNumber,1,1,@CreatedDate,1,@ModifiedDate,@SupplierTypeId)",
             new { Name = suppliermaster.Name, Address = suppliermaster.Address, EmailId= suppliermaster .EmailId , PhoneNumber = suppliermaster. PhoneNumber, AlternatePhoneNumber= suppliermaster. AlternatePhoneNumber,
                 FaxNumber = suppliermaster. FaxNumber,  IsActive= 1, CreatedBy = 1,CreatedDate= suppliermaster.CreatedDate,
                 ModifiedBy= suppliermaster.ModifiedBy,ModifiedDate= suppliermaster.ModifiedDate,SupplierTypeId = suppliermaster.SupplierTypeId});
            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public List<SupplierMasterDS> GetAllSupplierMaster()
        {
            return this._db.Query<SupplierMasterDS>("Usp_GetAllSupplier", commandType: CommandType.StoredProcedure).ToList();
        }

        public SupplierMaster GetSingleSupplierMaster(int? id)
        {
            return _db.Query<SupplierMaster>("SELECT Name,Address,EmailId,PhoneNumber,AlternatePhoneNumber,FaxNumber,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM SupplierMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();
        }

        public bool RemoveSupplierMaster(int? id)
        {
            int rowsAffected = this._db.Execute(@"Update SupplierMaster Set IsActive = 0 WHERE Id = @Id",
                new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;

        }

        public bool UpdateSupplierMaster(SupplierMaster suppliermaster)
        {
            //suppliermaster.CreatedDate = now;
            //suppliermaster.ModifiedDate = now;

            int rowsAffected = this._db.Execute(
                         "UPDATE SupplierMaster SET Name = @Name,Address=@Address,EmailId=@EmailId,PhoneNumber=@PhoneNumber,AlternatePhoneNumber=@AlternatePhoneNumber,FaxNumber=@FaxNumber,ModifiedDate=@ModifiedDate,SupplierTypeId = @SupplierTypeId WHERE Id =" + suppliermaster.Id, suppliermaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
}
