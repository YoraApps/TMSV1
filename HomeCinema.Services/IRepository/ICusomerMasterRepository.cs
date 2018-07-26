using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities;

namespace HomeCinema.Services.IRepository
{
   public interface ICusomerMasterRepository
    {
        bool CreateCustomer(CustomerMaster customerMaster);
        List<CustomerMaster> GetAllCustomer();
        bool Update(CustomerMaster customerMaster, int? id);
        bool RemoveCustomer(int? id);
        //CustomerMaster GetSingleCustomer(int? id);

    }
}
