using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
  public class PurchaseReportDS
    {
        public String ProductName { get; set; }
        public String SupplierName { get; set; }
        public String Quantity { get; set; }
        public String UOMName { get; set; }
        public String LocationName { get; set; }
        public DateTime? PurchaseDate { get; set; }
    }
}
