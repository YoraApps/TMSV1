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
    public class CustomerTypeRepository : ICustomerTypeRepository
    {
         private IDbConnection _db;
        public CustomerTypeRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);

        }

        public bool CreateCustomerType(CustomerTypeMaster customerTypeMaster)
        {
            DateTime now = DateTime.Now;
            customerTypeMaster.CreatedDate = now;
            customerTypeMaster.ModifiedDate = now;

            int rowsAffected = this._db.Execute(@"INSERT CustomerTypeMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate) values (@Name,@Description,1,1,@CreatedDate,1,@ModifiedDate)",

            new { Name = customerTypeMaster.Name, Description = customerTypeMaster.Description, IsActive = 1, CreatedBy = 1, CreatedDate = customerTypeMaster.CreatedDate, ModifiedBy = 1, ModifiedDate = customerTypeMaster.ModifiedDate });

            if (rowsAffected > 0)
            {
                return true;
            }
            return false;
        }

        public List<CustomerTypeMaster> GetAllCustomers()
        {
            return this._db.Query<CustomerTypeMaster>("Select * from CustomerTypeMaster where IsActive=1 ").ToList();

        }

        public CustomerTypeMaster GetSingleCustomerType(int? id)
        {
            return _db.Query<CustomerTypeMaster>("SELECT Id,Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM CustomerTypeMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();
        }

        public bool RemoveCustomerType(int? id)
        {
            int rowsAffected = this._db.Execute(@"UPDATE CustomerTypeMaster SET  IsActive = 0 WHERE Id =@Id",
                   new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdateCustomerType(CustomerTypeMaster customerTypeMaster)
        {
            DateTime now = DateTime.Now;
            customerTypeMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute("UPDATE CustomerTypeMaster SET Name = @Name ,Description = @Description,ModifiedBy=1, ModifiedDate = @ModifiedDate WHERE Id = " +
                          customerTypeMaster.Id, customerTypeMaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
    }

    

