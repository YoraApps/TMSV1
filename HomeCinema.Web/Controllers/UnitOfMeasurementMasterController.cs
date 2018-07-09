using HomeCinema.Entities;
using HomeCinema.Services.IRepository;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{
    [RoutePrefix("api/UnitOfMeasurementMaster")]
    public class UnitOfMeasurementMasterController : ApiController
    {
        private UnitOfMeasurementMasterRepository _unitofmeasurementmasterrepository;
        public UnitOfMeasurementMasterController() 
        {
            _unitofmeasurementmasterrepository = new UnitOfMeasurementMasterRepository();
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreatedUnitOfMeasurementMaster(UnitOfMeasurementMaster unitofmeasurementmaster )
        {
            var isSave = _unitofmeasurementmasterrepository.CreatedUnitOfMeasurementMaster(unitofmeasurementmaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [HttpGet]
        [Route("getallUnit")]
        public List<UnitOfMeasurementMaster> GetAllUnitOfMeasurementMaster()
        {
            return _unitofmeasurementmasterrepository.GetAllUnitOfMeasurementMaster();
        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleUnitOfMeasurementMaster (int id)
        {
            return Ok(_unitofmeasurementmasterrepository.GetSingleUnitOfMeasurementMaster(id));
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateUnitOfMeasurementMaster (UnitOfMeasurementMaster unitofmeasurementmaster)
        {
            var isupdate = _unitofmeasurementmasterrepository.UpdateUnitOfMeasurementMaster(unitofmeasurementmaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveUnitOfMeasurementMaster(int? id)
        {
            var isdel = _unitofmeasurementmasterrepository.RemoveUnitOfMeasurementMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
