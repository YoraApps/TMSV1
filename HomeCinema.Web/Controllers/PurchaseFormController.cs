using HomeCinema.Entities.DataSource;
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
    [RoutePrefix("api/PurchaseForm")]
    public class PurchaseFormController : ApiController
    {
        private IPurchaseFormRepository _purchaseFormRepository;
        public PurchaseFormController()
        {
            _purchaseFormRepository = new PurchaseFormRepository();
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("getallpurchase")]
        public PurchaseFormListDs GetAllPurchaseDetails()
        {
            return _purchaseFormRepository.GetAllPurchaseDetails();
        }      

        [HttpPost]
        [Route("save")]
        public IHttpActionResult PurchaseNewEntry(PurchaseFormPostDs purchaseSave)
        {
            var isSave = _purchaseFormRepository.SavePurchaseDetail(purchaseSave);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
    }
}
