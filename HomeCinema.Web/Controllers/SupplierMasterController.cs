using HomeCinema.Entities;
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
    [RoutePrefix("api/SupplierMaster")]
    public class SupplierMasterController : ApiController
    {
        private SupplierMasterRepository _suppliermasterRepository;
       public SupplierMasterController()
        {
            _suppliermasterRepository = new SupplierMasterRepository();
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreateSupplierMaster(SupplierMaster suppliermaster )
        {
            var isSave = _suppliermasterRepository.CreateSupplierMaster(suppliermaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [HttpGet]
        [Route("getallsupplier")]
        public List<SupplierMasterDS> GetAllSupplierMaster ()
        {
            return _suppliermasterRepository.GetAllSupplierMaster();
        }

        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateSupplierMaster (SupplierMaster suppliermaster)
        {
            var isupdate = _suppliermasterRepository.UpdateSupplierMaster(suppliermaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveSupplierMaster (int? id)
        {
            var isdel = _suppliermasterRepository.RemoveSupplierMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleSupplierMaster(int id)
        {
            return Ok(_suppliermasterRepository.GetSingleSupplierMaster(id));
        }



    }
}
