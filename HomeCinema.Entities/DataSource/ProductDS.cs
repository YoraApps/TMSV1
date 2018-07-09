using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class ProductDS
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string ImageURI { get; set; }
        public string GRNCode { get; set; }
        public bool IsActive { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int? Prod_Cat_Id { get; set; }
        public string  ProductCategoryName { get; set; }
    }
}
