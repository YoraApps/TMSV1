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
    [RoutePrefix("api/BatchMaster")]
    public class BatchMasterController : ApiController
    {
         private IBatchMasterRepository _batchMasterRepository;
         
         public BatchMasterController()
         {
           _batchMasterRepository = new BatchMasterRepository();
         }
         [HttpGet]
         [Route("GetAllBatchMaster")]
         public List<BatchMaster> GetAllBatchMasterRepository ()
         {
           return _batchMasterRepository.GetAllBatchMasterRepository();
         }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateBatchMaster(BatchMaster batchMaster)
        {
            var isupdate = _batchMasterRepository.UpdateBatchMaster(batchMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpDelete]
        [Route("Delete/{Id}")]
        public IHttpActionResult RemoveBatchMaster(int? id)
        {
            var isdel = _batchMasterRepository.RemoveBatchMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleBatchMaster(int id)
        {
            return Ok(_batchMasterRepository.GetSingleBatchMaster(id));
        }
    }
}
