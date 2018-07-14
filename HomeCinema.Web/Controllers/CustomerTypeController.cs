using HomeCinema.Entities;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{
    [RoutePrefix("api/CustomerTypeMaster")]
    public class CustomerTypeController : ApiController
    {
        private CustomerTypeRepository _customerTypeRepository;
        public CustomerTypeController()
        {
            _customerTypeRepository = new CustomerTypeRepository();
        }

        [HttpGet]
        [Route("GetAllCustomers")]
        public List<CustomerTypeMaster> GetAllCustomerTypes()
        {
            return _customerTypeRepository.GetAllCustomers();
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleCustomerType(int id)
        {
            return Ok(_customerTypeRepository.GetSingleCustomerType(id));
        }

        [HttpPost]
        [Route("Save")]
        public IHttpActionResult CreateCustomer(CustomerTypeMaster customerTypeMaster)
        {
            var isSave = _customerTypeRepository.CreateCustomerType(customerTypeMaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateCustomer(CustomerTypeMaster customerTypeMaster)
        {
            var isupdate = _customerTypeRepository.UpdateCustomerType(customerTypeMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveCustomer(int? id)
        {
            var isdel = _customerTypeRepository.RemoveCustomerType(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
