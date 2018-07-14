using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities;

namespace HomeCinema.Services.IRepository
{
   public interface ICusomerMaster
    {
        bool CreateCustomer(CustomerMaster customer);
        List<CustomerMaster> GetAllCustomer();
        bool Update(CustomerMaster customer);
        bool RemoveCustomer(int? id);
        CustomerMaster GetSingleCustomer(int? id);

    }
}
