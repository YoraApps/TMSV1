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
    [RoutePrefix("api/StoreMaster")]
    public class StoreMasterController : ApiController
    {
        private IStoreMasterRepository _storeMasterRepository;

        public StoreMasterController()
        {
            _storeMasterRepository = new StoreMasterRepository();
        }
        [HttpGet]
        [Route("GetAllStoreMaster")]
        public List<StoreMaster> GetAllStoreMasterRepository()
        {
            return _storeMasterRepository.GetAllStoreMasterRepository();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult Update(StoreMaster storeMaster)
        {
            var isupdate = _storeMasterRepository.Update(storeMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{Id}")]
        public IHttpActionResult Remove(int? id)
        {
            var isdel = _storeMasterRepository.Remove(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
