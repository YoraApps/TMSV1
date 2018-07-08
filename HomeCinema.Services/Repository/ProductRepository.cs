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
using HomeCinema.Entities.DataSource;

namespace HomeCinema.Services.Repository
{
    public class ProductRepository : IProductRepository
    {
        public  DateTime now = DateTime.Now;
        private IDbConnection _db;       
        public ProductRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public bool CreateProduct(Product product)
        {
            if (product != null)
            {
                product.CreatedDate = now;
                product.ModifiedDate = now;
                int rowsAffected = this._db.Execute(@"INSERT ProductMaster(Name,Description,ImageURI,GRNCode,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate) values (@Name,@Description,@ImageURI,@GRNCode,1,1,@CreatedDate,1,@ModifiedDate)",
                  new { Name = product.Name, Description = product.Description, ImageURI = product.ImageURI, GRNCode = product.GRNCode, IsActive = 1, CreatedBy = 1, CreatedDate = product.CreatedDate, ModifiedBy = 1, ModifiedDate = product.ModifiedDate });


                if (rowsAffected > 0)
                {
                    return true;
                }

            }
         

            return false;
        }

        //public List<Product> GetAllProduct()
        //{
        //    return this._db.Query<Product>("Select * from ProductMaster where IsActive=1").ToList();
        //}
        public List<ProductDS> GetAllProduct()
        {
            return this._db.Query<ProductDS>("Usp_GetAllProducts",commandType:CommandType.StoredProcedure).ToList();
        }
        public Product GetSingleProduct(int? id)
        {
            return _db.Query<Product>("SELECT Id,Name,Description,ImageURI,GRNCode,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM ProductMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();
        }

        public bool RemoveProduct(int? id)
        {
            int rowsAffected = this._db.Execute(@"update ProductMaster set IsActive=0  where  Id = @Id",
                    new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdateProduct(Product product, int? id)
        {
            
            //product.CreatedDate = now;
            product.ModifiedDate = now;
            int rowsAffected = this._db.Execute(
                            "UPDATE ProductMaster SET Name = @Name ,Description = @Description,ImageURI=@ImageURI,GRNCode=@GRNCode,ModifiedDate=@ModifiedDate WHERE Id =" + id , product );


            if (rowsAffected > 0)
            {
                return true;
            }

            return false;

        }
    }
}
