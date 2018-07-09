using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class PurchaseMasterDS  
    {
            public int Id { get; set; }
            public DateTime? PurchaseDate { get; set; }
            public int? Status { get; set; }
            public bool IsActive { get; set; }
            public int? CreatedBy { get; set; }
            public DateTime? CreatedDate { get; set; }
            public int? ModifiedBy { get; set; }
            public DateTime? ModifiedDate { get; set; }
            public int? Supplier_Id { get; set; }
            public string SupplierName { get; set; }
}
}
