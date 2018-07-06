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
    //[Authorize(Roles = "Admin")]
    [RoutePrefix("api/watches")]
    public class WatchesController : ApiController
    {
        private WatchRepository _watchRepository;
        public WatchesController()
        {
            _watchRepository = new WatchRepository();
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("getallwatch")]
        public List<Watches> GetAllwatch()
        {
            return _watchRepository.GetAllWatches();
        }
        [HttpPost]
        [Route("Insert")]      
          public IHttpActionResult CreateWatches(Watches watch)
        {
            var isSave = _watchRepository.CreateWatches(watch);
            if (isSave == true)
                return Ok(isSave);
                return BadRequest();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult Update(Watches watch)
        {
            var isupdate = _watchRepository.Update(watch);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveWatch(int? id)
        {
            var isdel = _watchRepository.RemoveWatch(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleWatch( int id)
        {
            return Ok(_watchRepository.GetSingleWatch(id));
        }

    }

}

