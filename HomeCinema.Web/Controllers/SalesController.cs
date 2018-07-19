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
    [RoutePrefix("api/Sales")]
    public class SalesController : ApiController
    {
        private SalesRepository _salesRepository;
        public SalesController()
        {
            _salesRepository = new SalesRepository();
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreateSale(SalesDS salesDS)
        {
            var isSave = _salesRepository.CreateSales(salesDS);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("getallsales")]
        public List<SalesDS> GetAllSale()
        {
            return _salesRepository.GetAllSales();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateSale(SalesDS salesDS)
        {
            var isupdate = _salesRepository.UpdateSales(salesDS);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleSale(int id)
        {
            return Ok(_salesRepository.GetSingleSales(id));
        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveSale(int? id)
        {
            var isdel = _salesRepository.RemoveSales(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
        

    }
}
