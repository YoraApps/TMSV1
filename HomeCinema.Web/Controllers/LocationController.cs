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
        private LocationRepository _locationRepository;

        public LocationController()
        {
            _locationRepository = new LocationRepository();
        }


        [HttpPost]
        [Route("Insert")]
        public IHttpActionResult CreateLocation(LocationMaster locationMaster)
        {
            var isSave = _locationRepository.CreateLocation(locationMaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("GetAllLocation")]
        public Location GetAllLocation()
        {
            return _locationRepository.GetAllLocation();
        }

        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateLocation(LocationMaster locationMaster)
        {
            var isupdate = _locationRepository.UpdateLocation(locationMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleLocation(int id)
        {
            return Ok(_locationRepository.GetSingleLocation(id));
        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveLocation(int? id)
        {
            var isdel = _locationRepository.RemoveLocation(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
