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
    [RoutePrefix("api/Location")]
    public class LocationController : ApiController
    {
        private LocationMasterRepository _locationMasterRepository;

        public LocationController()
        {
            _locationMasterRepository = new LocationMasterRepository();
        }

        [HttpGet]
        [Route("getallLocations")]
        public List<LocationMaster> GetAllLocation()
        {
            return _locationMasterRepository.GetAllLocations();
        }

        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreateLocation(LocationMaster locationMaster)
        {
            var isSave = _locationMasterRepository.CreateLocation(locationMaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }

        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateLocation(LocationMaster locationMaster)
        {
            var isupdate = _locationMasterRepository.UpdateLocation(locationMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleLocation(int id)
        {
            return Ok(_locationMasterRepository.GetSingleLocation(id));
        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveLoaction(int? id)
        {
            var isdel = _locationMasterRepository.RemoveLocation(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }



    }   
}
