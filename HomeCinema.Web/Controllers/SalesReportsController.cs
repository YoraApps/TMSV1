using HomeCinema.Entities;
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
    [RoutePrefix("api/SalesReportsController")]
    public class SalesReportsController : ApiController
    {
        public ISalesReportsRepository _salesReportsRepository;

        public SalesReportsController()
        {
            _salesReportsRepository = new SalesReportsRepository();
        }
        [HttpGet]
        [Route("GetAllSalesReports")]
        public List<SalesReportsDS> GetAllSalesReports()
        {
            return _salesReportsRepository.GetSalesReports();
        }
        [HttpPost]
        [Route("GetAllSalesGraphicReports")]
        public List<SalesReportsDS> GetAllSalesGraphic(UnitOfMeasurementMaster uom)
        {
            return _salesReportsRepository.GetSalesGraphic(uom.Name);
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult Update(SalesForm salesReportsDS)
        {
            var isupdate = _salesReportsRepository.Update(salesReportsDS);
            if (isupdate == true)
                return Ok(isupdate);
            return BadRequest();
        }
    }
}
