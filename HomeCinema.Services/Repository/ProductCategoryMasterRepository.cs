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
    public class ProductCategoryMasterRepository : IProductCategoryMasterRepository
    {
        public DateTime now = DateTime.Now;
        private IDbConnection _db;

        public ProductCategoryMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreateProductCategoryMaster(ProductCategoryMaster ProductCategoryMaster)
        {
            
            ProductCategoryMaster.CreatedDate = now;
            ProductCategoryMaster.ModifiedDate = now;

            int rowsAffected = this._db.Execute(@"INSERT ProductCategoryMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate) 
                                            values (@Name, @Description,1,1,@CreatedDate,1,@ModifiedDate)",
              new { Name = ProductCategoryMaster.Name, Description = ProductCategoryMaster.Description, IsActive = 1, CreatedBy = 1, CreatedDate= ProductCategoryMaster.CreatedDate, ModifiedBy =1, ModifiedDate = ProductCategoryMaster.ModifiedDate });
            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public List<ProductCategoryMaster> GetAllProductCategoryMasterRepository()
        {
            return this._db.Query<ProductCategoryMaster>("Select * from ProductCategoryMaster where IsActive = 1").ToList();
        }

        public ProductCategoryMaster GetSingleProductCategoryMaster(int? id)
        {
            return _db.Query<ProductCategoryMaster>("SELECT Id,Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM ProductCategoryMaster WHERE Id =@Id", new { ID = id }).SingleOrDefault();
        }

        public bool RemoveProductCategoryMaster(int? id)
        {

            int rowsAffected = this._db.Execute(@"Update ProductCategoryMaster Set IsActive = 0 WHERE Id = @Id",
                new { ID = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;

        }

        public bool Update(ProductCategoryMaster ProductCategoryMaster)
        {
            ProductCategoryMaster.CreatedDate = now;
            ProductCategoryMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(
                           "UPDATE ProductCategoryMaster SET Name = @Name ,Description = @Description,@IsActive =1,@CreatedBy = 1,CreatedDate =ProductCategoryMaster.CreatedDate, @ModifiedBy = 1,ModifiedDate = ProductCategoryMaster.ModifiedDate WHERE ID = " +
                           ProductCategoryMaster.Id, ProductCategoryMaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
}
