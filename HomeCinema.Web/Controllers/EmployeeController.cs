using HomeCinema.Entities.DataSource;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{

    [RoutePrefix("api/Employee")]
    public class EmployeeController : ApiController
    {       
           private EmployeeRepository _employeeRepository;
            public EmployeeController()
            {
                _employeeRepository = new EmployeeRepository();
            }

        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreateEmployee(EmployeeMasterDs employee)
        {
            var isSave = _employeeRepository.CreateEmployee(employee);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [HttpGet]
        [Route("getallEmployees")]
        public List<EmployeeMasterDs> GetAllEmployees()
        {
            return _employeeRepository.GetAllEmployees();
        }
        [HttpPost]
        [Route("Update/{id}")]
        public IHttpActionResult UpdateEmployee(EmployeeMasterDs employee, int? id)
        {
            var isupdate = _employeeRepository.UpdateEmployee(employee, id);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveEmployee(int? id)
        {
            var isdel = _employeeRepository.RemoveEmployee(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
