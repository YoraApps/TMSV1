using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class testdev
    {
        public List<ProductCategoryGrid> ProductCategoryGridList { get; set; }

        public List<ProductGroupMaster> ProductGroupMasterList { get; set; }
    }
    public class ProductCategoryGrid
    {
        public int ProductCategoryId { get; set; }
        public string ProductCategoryName { get; set; }
        public int ProductGroupId { get; set; }
        public string ProductGroupName { get; set; }
        public string Description { get; set; }
    }
}
