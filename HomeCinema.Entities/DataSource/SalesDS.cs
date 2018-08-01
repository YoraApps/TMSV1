using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
   public class SalesDS
    {
        public int Id { get; set; }
        public bool IsActive { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public DateTime? SalesDate { get; set; }
        public int? PosId { get; set; }
        public string PosName { get; set; }
        public int? CustomerId { get; set; }
        public string CustName { get; set; }

    }

}
