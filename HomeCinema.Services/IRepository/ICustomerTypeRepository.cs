using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface ICustomerTypeRepository
    {
        List<CustomerTypeMaster> GetAllCustomers();
        CustomerTypeMaster GetSingleCustomerType(int? id);
        bool CreateCustomerType(CustomerTypeMaster customerTypeMaster);
        bool UpdateCustomerType(CustomerTypeMaster customerTypeMaster);
        bool RemoveCustomerType(int? id);
    }
}
