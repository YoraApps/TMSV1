using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IProductRepository
    {
        List<Product> GetAllProduct();
        bool CreateProduct(Product product);
        bool UpdateProduct(Product product, int? id);
        bool RemoveProduct(int? id);
        Product GetSingleProduct(int? id);
    }
}
