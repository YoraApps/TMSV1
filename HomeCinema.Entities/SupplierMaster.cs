using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities
{
   public class SupplierMaster
    {
        public int Id { get; set; }
        public String Name { get; set; }
        public String Address { get; set; }
        public String EmailId { get; set; }
        public double PhoneNumber { get; set; }
        public double AlternatePhoneNumber { get; set; }
        public double FaxNumber { get; set; }
        public bool IsActive  { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
    }
}
