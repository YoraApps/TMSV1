using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities
{
    public class ProductCategoryMaster
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int? Prod_Grp_Id { get; set; }
    }
}
