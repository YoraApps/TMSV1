using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface IProductGroupRepository
    {
        List<ProductGroupMaster> GetAllProductGroup();
        bool CreateProductGroup(ProductGroupMaster productGroupMaster);
        bool UpdateProductGroup(ProductGroupMaster productGroupMaster);
        bool RemoveProductGroup(int? id);
        ProductGroupMaster GetSingleProductGroup(int? id);
    }
}
