using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface ISupplierTypeRepository
    {
        bool CreatedSupplierType(SupplierTypeMaster supplierTypeMaster);
        List<SupplierTypeMaster> GetAllSupplierType();
        bool UpdateSupplierType(SupplierTypeMaster supplierTypeMaster);
        bool RemoveSupplierType(int? id);
        SupplierTypeMaster GetSingleSupplierType(int? id);
    }
}
