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
    [RoutePrefix("api/SupplierType")]
    public class SupplierTypeController : ApiController
    {
        private SupplierTypeRepository _supplierTypeRepository;
        public SupplierTypeController()
        {
            _supplierTypeRepository = new SupplierTypeRepository();
        }
        [HttpPost]
        [Route("Save")]
        public IHttpActionResult CreateSupplierType(SupplierTypeMaster supplierTypeMaster)
        {
            var isSave = _supplierTypeRepository.CreatedSupplierType(supplierTypeMaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [HttpGet]
        [Route("GetAllSupplierType")]
        public List<SupplierTypeMaster> GetAllSuppliertypes()
        {
            return _supplierTypeRepository.GetAllSupplierType();
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleSupplierType(int id)
        {
            return Ok(_supplierTypeRepository.GetSingleSupplierType(id));
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateSupplierTypeMaster(SupplierTypeMaster supplierTypeMaster)
        {
            var isupdate = _supplierTypeRepository.UpdateSupplierType(supplierTypeMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveSupplierTypeMaster(int? id)
        {
            var isdel = _supplierTypeRepository.RemoveSupplierType(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }



    
}

    }

