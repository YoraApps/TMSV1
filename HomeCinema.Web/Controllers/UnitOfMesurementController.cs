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
    [RoutePrefix("api/UnitOfMeasurementMaster")]
    public class UnitOfMesurementController : ApiController
    {
        private UnitOfMeasurementRepository _unitOfMeasurementRepository;
        public UnitOfMesurementController()
        {
            _unitOfMeasurementRepository = new UnitOfMeasurementRepository();
        }
        [HttpPost]
        [Route("Save")]
        public IHttpActionResult CreateUnitOfMeasurement(UnitOfMeasurementMaster unitOfMeasurementMaster)
        {
            var isSave = _unitOfMeasurementRepository.CreateUnitOfMeasurement(unitOfMeasurementMaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult CreationUnitOfMeasurement(UnitOfMeasurementMaster unitOfMeasurementMaster)
        {
            var isupdate = _unitOfMeasurementRepository.UpdateUnitOfMeasurement(unitOfMeasurementMaster);
            if (isupdate == true)
                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete")]
        public IHttpActionResult CreationUnitOMeasurement (UnitOfMeasurementMaster unitOfMeasurementMaster)
        {
            var isDelete = _unitOfMeasurementRepository.DeletUnitOfMeasurement(unitOfMeasurementMaster);
            if (isDelete == true)
                return Ok(isDelete);
            return BadRequest();
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("GetUnit")]
        public List<UnitOfMeasurementMaster> GetAllUnitOfMeasurement()
        {
            return _unitOfMeasurementRepository.GetAllUnitOfMeasurement();
        }


    }
}
