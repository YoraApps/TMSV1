using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class SalesReportsDS
    {
        public string ProductName { get; set; }
        public string CustomerName { get; set; }
        public string POSName { get; set; }
        public string Quantity { get; set; }
        public string UOMName { get; set; }
        public DateTime? SalesDate { get; set; }

    }

}
