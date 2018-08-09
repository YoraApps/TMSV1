using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities.DataSource;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;

namespace HomeCinema.Services.Repository
{
    public class EmployeeRepository : IEmployeeRepository
    {
        public DateTime now = DateTime.Now;
        private IDbConnection _db;
        public EmployeeRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public bool CreateEmployee(EmployeeMasterDs employee)
        {
            if (employee != null)
            {
                employee.CreatedDate = now;
                employee.LastUpdatedDate = now;
                employee.DOB = now;
                int rowsAffected = this._db.Execute(@"INSERT EmployeeMaster(EmpNumber,EmpFirstName,EmpLastName,DOB,BloodGroup,MaritalStatus,EmailId,WorkPhone,IsActive,LastUpdatedBy,LastUpdatedDate,CreatedBy,CreatedDate) values (@EmpNumber,@EmpFirstName,@EmpLastName,@DOB,@BloodGroup,@MaritalStatus,@EmailId,@WorkPhone,1,1,@LastUpdatedDate,1,@CreatedDate)",
                  new { EmpNumber=employee.EmpNumber, EmpFirstName= employee.EmpFirstName, EmpLastName=employee.EmpLastName, DOB= employee.DOB, BloodGroup=employee.BloodGroup, MaritalStatus=employee.MaritalStatus, EmailId=employee.EmailId, WorkPhone=employee.WorkPhone, IsActive = 1,LastUpdatedBy=1, LastUpdatedDate=employee.LastUpdatedDate, CreatedBy=1, CreatedDate=employee.CreatedDate });



                if (rowsAffected > 0)
                {
                    return true;
                }

            }
            return false;
        }

        public List<EmployeeMasterDs> GetAllEmployees() 
        {
            return this._db.Query<EmployeeMasterDs>("Usp_GetAllEmployees", commandType:CommandType.StoredProcedure).ToList();
    }

        public bool RemoveEmployee(int? id)
        {
            int rowsAffected = this._db.Execute(@"update EmployeeMaster set IsActive=0  where  EmpId = @EmpId",
                   new { EmpId = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdateEmployee(EmployeeMasterDs employee, int? id)
        {
            employee.CreatedDate = now;
            employee.LastUpdatedDate = now;
            employee.DOB = now;
            int rowsAffected = this._db.Execute("UPDATE EmployeeMaster SET EmpNumber=@EmpNumber,EmpFirstName=@EmpFirstName,EmpLastName=@EmpLastName,DOB=@DOB,BloodGroup=@BloodGroup,MaritalStatus=@MaritalStatus,EmailId=@EmailId,WorkPhone=@WorkPhone,LastUpdatedDate=@LastUpdatedDate,CreatedDate=@CreatedDate WHERE EmpId =" + employee.EmpId, employee);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
}
