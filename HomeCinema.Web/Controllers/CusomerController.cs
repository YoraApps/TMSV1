using AutoMapper;
using HomeCinema.Data.Infrastructure;
using HomeCinema.Data.Repositories;
using HomeCinema.Entities;
using HomeCinema.Web.Infrastructure.Core;
using HomeCinema.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using HomeCinema.Web.Infrastructure.Extensions;
using HomeCinema.Data.Extensions;
using HomeCinema.Services.Repository;

namespace HomeCinema.Web.Controllers
{

    [RoutePrefix("api/CustomerMaster")]
    public class CusomerController : ApiController
    {

        private CusomerMasterRepository _cusomerMasterRepository;
        public CusomerController()
        {
            _cusomerMasterRepository = new CusomerMasterRepository();
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("getAllCustomer")]
        public List<CustomerMaster> GetAllCustomer()
        {
            return _cusomerMasterRepository.GetAllCustomer();
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreateCustomer(CustomerMaster cusomerMaster)
        {
            var isSave = _cusomerMasterRepository.CreateCustomer(cusomerMaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult Update(CustomerMaster cusomerMaster)
        {
            var isupdate = _cusomerMasterRepository.Update(cusomerMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveCustomer(int? id)
        {
            var isdel = _cusomerMasterRepository.RemoveCustomer(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleCustomer(int id)
        {
            return Ok(_cusomerMasterRepository.GetSingleCustomer(id));
        }

    }
}
