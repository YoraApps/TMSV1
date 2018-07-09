using HomeCinema.Entities.DataSource;
using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IProductCategoryMasterRepository
    {
        List<ProductCategoryDS> GetAllProductCategoryMasterRepository();

        bool CreateProductCategoryMaster(ProductCategoryMaster ProductCategoryMaster);

        bool Update(ProductCategoryMaster ProductCategoryMaster);

        bool RemoveProductCategoryMaster(int? id);

        ProductCategoryMaster GetSingleProductCategoryMaster(int? id);
    }
}
