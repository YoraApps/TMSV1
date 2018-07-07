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
    public class ProductGroupRepository : IProductGroupRepository
    {
        private IDbConnection _db;
         public ProductGroupRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreateProductGroup(ProductGroupMaster productGroupMaster)
        {

            DateTime now = DateTime.Now;
            productGroupMaster.CreatedDate = now;
            productGroupMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(@"INSERT ProductGroupMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate) values (@Name,@Description,1,1,@CreatedDate,1,@ModifiedDate)",

                new { Name = productGroupMaster.Name, Description = productGroupMaster.Description, IsActive=1, CreatedBy=1, CreatedDate= productGroupMaster.CreatedDate, ModifiedBy=1, ModifiedDate = productGroupMaster.ModifiedDate });

            if (rowsAffected > 0)
            {
                return true;
            }
            return false;
        }

        public List<ProductGroupMaster> GetAllProductGroup()
        {
            return this._db.Query<ProductGroupMaster>("Select * from ProductGroupMaster where IsActive=1 ").ToList();
        }

        public ProductGroupMaster GetSingleProductGroup(int? id)
        {
            return _db.Query<ProductGroupMaster>("SELECT Id,Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM ProductGroupMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();

        }
        public bool UpdateProductGroup(ProductGroupMaster productGroupMaster)
        {
            DateTime now = DateTime.Now;
            productGroupMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute("UPDATE ProductGroupMaster SET Name = @Name ,Description = @Description,ModifiedBy=1, ModifiedDate = @ModifiedDate WHERE Id = " +
                          productGroupMaster.Id, productGroupMaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
        public bool RemoveProductGroup(int? id)
        {
          
            int rowsAffected = this._db.Execute(@"UPDATE ProductGroupMaster SET  IsActive = 0 WHERE Id =@Id",
                     new{ Id = id});   
                    
            if (rowsAffected > 0)
            {
                return true;
            }

            return false;


        }




    }
}
