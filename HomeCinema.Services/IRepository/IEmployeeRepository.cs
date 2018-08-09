using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IEmployeeRepository
    {
        List<EmployeeMasterDs> GetAllEmployees();
        bool CreateEmployee(EmployeeMasterDs employee);
        bool UpdateEmployee(EmployeeMasterDs employee, int? id);
        bool RemoveEmployee(int? id);
    }
}
