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
    [RoutePrefix("api/PurchaseReport")]
    public class PurchaseReportController : ApiController
    {
        private PurchaseReportRepository _PurchaseReportRepository;
        public PurchaseReportController()
        {
            _PurchaseReportRepository = new PurchaseReportRepository();
        }
        [HttpGet]
        [Route("GetAllPurchaseReport")]
        public List<PurchaseReportDS> GetAllPurchaseReport()
        {
            return _PurchaseReportRepository.GetAllPurchaseReport();
        }
        
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult Update(PurchaseFormPostDs purchaseFormPostDs)
        {
            var isupdate = _PurchaseReportRepository.Update(purchaseFormPostDs);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }

        //[HttpPost]
        //[Route("delete/{Id}")]
        //public IHttpActionResult Remove(PurchaseReportDS purchaseReportDS)
        //{
        //    var isupdate = _PurchaseReportRepository.RemovePerchaseReport(purchaseReportDS);
        //    if (isupdate == true)

        //        return Ok(isupdate);
        //    return BadRequest();
        //}
        [HttpPost]
        [Route("getPurchaseReportInaGraph")]
        public List<PurchaseReportDS> GetAllPurchaseGraphicReport(UnitOfMeasurementMaster UOM)
        {
            return _PurchaseReportRepository.GetAllPurchaseGraphicReport(UOM.Name);
        }
    }
} 
