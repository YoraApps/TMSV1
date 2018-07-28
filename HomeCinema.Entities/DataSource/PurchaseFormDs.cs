using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class PurchaseSupplierDs
    {
        public int? SupplierId { get; set; }
        public string SupplierName { get; set; }

    }
    public class PurchaseLocationDs
    {
        public string LocationName { get; set; }
        public int? LocationId { get; set; }        

    }
    public class PurchaseUomDs
    {
        public string UOMName { get; set; }
        public int? UomId { get; set; }      
    }
    public class PurchaseProductDs
    {
        public string ProductName { get; set; }
        public int? ProductId { get; set; }       
        
    }     
    public class PurchaseFormPostDs
    {
        public PurchaseSupplierDs Supplier { get; set; }
        public PurchaseLocationDs Location { get; set; }
        public PurchaseUomDs UOM { get; set; }
        public PurchaseProductDs Product { get; set; }
        public string Quantity { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public int PurchaseId { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
        public int? Status { get; set; }
        public int? IsActive { get; set; }

    }
    public class PurchaseMasters
    {
        public int Id { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public int Status { get; set; }
        public bool IsActive { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }
    }

    public class PurchaseFormListDs
    {
        public List<PurchaseSupplierDs> supplierList { get; set; }
        public List<PurchaseLocationDs> LocationList { get; set; }
        public List<PurchaseUomDs> uOMList { get; set; }
        public List<PurchaseProductDs> productList { get; set; }
    }

    
}
