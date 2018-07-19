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
  public  class CusomerMasterRepository : ICusomerMaster
    {

        private IDbConnection _db;

        public CusomerMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public bool CreateCustomer(CustomerMaster cusomerMaster)
        {
            cusomerMaster.CreatedDate = DateTime.Now;
            cusomerMaster.ModifiedDate = DateTime.Now;

            int rowsAffected = this._db.Execute(@"INSERT CustomerMaster(Name,Address,EmailId,PhoneNumber,AlternatePhoneNumber,FaxNumber,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)
                                                                values (@Name, @Address,@EmailId,@PhoneNumber,@AlternatePhoneNumber,@FaxNumber,1,1,@CreatedDate,1,@ModifiedDate)",
               new { Name = cusomerMaster.Name, Address = cusomerMaster.Address, EmailId= cusomerMaster.EmailId, PhoneNumber= cusomerMaster.PhoneNumber, AlternatePhoneNumber= cusomerMaster.AlternatePhoneNumber, FaxNumber= cusomerMaster.FaxNumber, IsActive= cusomerMaster.IsActive, CreatedBy= cusomerMaster.CreatedBy, CreatedDate= cusomerMaster.CreatedDate, ModifiedBy= cusomerMaster.ModifiedBy, ModifiedDate= cusomerMaster.ModifiedDate });
            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
        public List<CustomerMaster> GetAllCustomer()
        {
            return this._db.Query<CustomerMaster>("Select * from CustomerMaster").ToList();
        }

        public Watches GetSingleCustomer(int? id)
        {
            throw new NotImplementedException();
        }

        public CustomerMaster GetSingleWatch(int? id)
        {
            return _db.Query<CustomerMaster>("SELECT Id,Name,Address,EmailId,PhoneNumber,AlternatePhoneNumber,FaxNumber,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM Watch WHERE Id =@Id", new { Id = id }).SingleOrDefault();

        }

       

        public bool RemoveCustomer(int? id)
        {

            int rowsAffected = this._db.Execute(@"DELETE FROM CustomerMaster WHERE Id = @Id",
                new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;

        }

        public bool Update(CustomerMaster customer)
        {
            int rowsAffected = this._db.Execute(
                        "UPDATE CustomerMaster SET Name = @Name ,Address = @Address,EmailId=@EmailId,PhoneNumber=@PhoneNumber,AlternatePhoneNumber=@AlternatePhoneNumber,FaxNumber=@FaxNumber,IsActive=@IsActive,CreatedBy=@CreatedBy,CreatedDate=@CreatedDate,ModifiedBy=@ModifiedBy,ModifiedDate=@ModifiedDate WHERE Id = " +
                        customer.ID, customer);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;

        }

        CustomerMaster ICusomerMaster.GetSingleCustomer(int? id)
        {
            throw new NotImplementedException();
        }
    }
}

