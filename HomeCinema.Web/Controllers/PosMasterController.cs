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
    [RoutePrefix("api/PosMAster")]
    public class PosMasterController : ApiController
    {
        private IPosMasterRepository _posMasterRepository;

        public PosMasterController()
        {
            _posMasterRepository = new PosMasterRepository();
        }
        [HttpGet]
        [Route("GetAllPosMaster")]
        public List<PosMaster> GetAllPosMasterRepository()
        {
            return _posMasterRepository.GetAllPosMasterRepository();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult Update(PosMaster posMaster)
        {
            var isupdate = _posMasterRepository.Update(posMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{Id}")]
        public IHttpActionResult RemoveProduct(int? id)
        {
            var isdel = _posMasterRepository.Remove(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }

    }
}
