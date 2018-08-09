using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
    public class EmployeeMasterDs
    {
        public int EmpId { get; set; }
        public int? EmpNumber { get; set; }
        public string EmpFirstName { get; set; }
        public string EmpLastName { get; set; }
        public DateTime? DOB { get; set; }
        public string BloodGroup { get; set; }
        public string MaritalStatus { get; set; }
        public string EmailId { get; set; }
        public double WorkPhone { get; set; }
        public bool IsActive { get; set; }
        public int? LastUpdatedBy { get; set; }
        public DateTime? LastUpdatedDate { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
    }
}
