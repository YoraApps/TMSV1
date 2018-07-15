using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class PosList
    {
        public int? PosId { get; set; }
        public string PosName { get; set; }
    }

    public class CustomerList
    {
       
        public int CustomerId { get; set; }
        public string CustName { get; set; }
       
    }

    public class ProductList
    {
        
        public int ProductId { get; set; }
        public string ProductName { get; set; }
      
      
    }
    public class UOMList
    {
        public int UOMId { get; set; }
        public string UOMName { get; set; }
    }

   public class SalesFormListDs
    {

        public List<PosList> pos { get; set; }
        public List<CustomerList> Customer { get; set; }
        public List<ProductList> Product { get; set; }
        public List<UOMList> UOM { get; set; }
       

    }

    public class SalesFormList
    {

        public PosList pos { get; set; }
        public CustomerList Customer { get; set; }
        public ProductList Product { get; set; }
        public UOMList UOM { get; set; }
        public string Quantity { get; set; }
        public DateTime? SalesDate { get; set; }
        public  int SalesId { get; set; }
        public bool IsActive { get; set; }
        public int CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }

    }

}
