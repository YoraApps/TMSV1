using HomeCinema.Entities;
using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface ISupplierMasterRepository
    {
        List<SupplierMasterDS> GetAllSupplierMaster();
        bool CreateSupplierMaster(SupplierMaster suppliermaster);
        bool UpdateSupplierMaster(SupplierMaster suppliermaster);
        bool RemoveSupplierMaster (int? id);
        SupplierMaster GetSingleSupplierMaster(int? id);
    }
}
