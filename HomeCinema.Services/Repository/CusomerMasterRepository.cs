using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using Dapper;


namespace HomeCinema.Services.Repository
{
    public class CusomerMasterRepository : ICusomerMasterRepository
    {
        public DateTime now = DateTime.Now;
        private IDbConnection _db;
        public CusomerMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreateCustomer(CustomerMaster customerMaster)
        {
            customerMaster.CreatedDate = now;
            customerMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(@"Insert CustomerMaster(Name,Address,EmailId,PhoneNumber,AlternatePhoneNumber,FaxNumber,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)values(@Name, @Address,@EmailId,@PhoneNumber,@AlternatePhoneNumber,@FaxNumber,1,1,@CreatedDate,1,@ModifiedDate)",
                new { Name = customerMaster.Name, Address = customerMaster.Address, EmailId = customerMaster.EmailId, PhoneNumber = customerMaster.PhoneNumber, AlternatePhoneNumber = customerMaster.AlternatePhoneNumber, FaxNumber = customerMaster.FaxNumber, IsActive = 1, CreatedBy = 1, CreatedDate = customerMaster.CreatedDate, ModifiedBy = 1, ModifiedDate = customerMaster.ModifiedDate });
            if (rowsAffected > 0)
            {
                return true;
            }
            return false;           
        }

        public List<CustomerMaster> GetAllCustomer()
        {
            return this._db.Query<CustomerMaster>("Select * from CustomerMaster where IsActive=1").ToList();
        }

        public bool RemoveCustomer(int? id)
        {
            int rowsAffected = this._db.Execute(@"update CustomerMaster set IsActive=0  where  Id = @Id",
                    new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool Update(CustomerMaster customerMaster, int? id)
        {
            customerMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(
                      "UPDATE CustomerMaster SET Name = @Name ,Address = @Address,EmailId=@EmailId,PhoneNumber=@PhoneNumber,AlternatePhoneNumber=@AlternatePhoneNumber,FaxNumber=@FaxNumber,ModifiedDate=customerMaster.ModifiedDate WHERE Id = " +
                        customerMaster.Id, customerMaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;

        }
    }
}

