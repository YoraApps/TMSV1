using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
  public class PurchaseReportDS
    {
        public int Id { get; set; }
        public int productId { get; set; }
        public int SupplierId { get; set; }
        public int UOMId { get; set; }
        public int LocationId { get; set; }
        public String ProductName { get; set; }
        public String SupplierName { get; set; }
        public String Quantity { get; set; }
        public String UOMName { get; set; }
        public String LocationName { get; set; }
        public DateTime? PurchaseDate { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
