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
    [RoutePrefix("api/PurchaseMaster")]
    public class PurchaseMasterController : ApiController
    {
        private PurchaseMasterRepository _purchaseMasterRepository;
        public PurchaseMasterController()
        {
            _purchaseMasterRepository = new PurchaseMasterRepository();
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreatePurchaseMaster(PurchaseMaster purchasemaster)
        {
            var isSave = _purchaseMasterRepository.CreatePurchaseMaster(purchasemaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("getallpurchase")]
        public List<PurchaseMasterDS> GetAllPurchaseMaster()
        {
            return _purchaseMasterRepository.GetAllPurchaseMaster();
        }
        [HttpPost]
        [Route("Update/{id}")]
        public IHttpActionResult Update(PurchaseMaster purchasemaster, int? id)
        {
            var isupdate = _purchaseMasterRepository.UpdatePurchaseMaster(purchasemaster, id);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSinglePurchaseMaster(int id)
        {
            return Ok(_purchaseMasterRepository.GetSinglePurchaseMaster(id));
        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemovePurchaseMaster(int? id)
        {
            var isdel = _purchaseMasterRepository.RemovePurchaseMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
