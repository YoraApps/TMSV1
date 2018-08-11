using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
  public class PurchaseReportDS
    {
        //public int Id { get; set; }
        public int ProductId { get; set; }
        public int Supplier_Id { get; set; }
        public int UomId { get; set; }
        public int StoreId { get; set; }
        public string StoreName { get; set; }
        public string ProductName { get; set; }
        public string SupplierName { get; set; }
        public string Quantity { get; set; }
        public string UOMName { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public string LocationName { get; set; }
        public int? LocationId { get; set; }
    }
}
