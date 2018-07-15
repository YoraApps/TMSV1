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
    [RoutePrefix("api/SalesDetails")]
    public class SalesDetalisController : ApiController
    {
        private SalesDetailsRepositry _salesDetailsRepositry;

        public SalesDetalisController()
        {
            _salesDetailsRepositry = new SalesDetailsRepositry();
        }
      
        [AllowAnonymous]
        [HttpGet]
        [Route("GetAllDataForSalesDetails")]
        public SalesFormListDs GetAllDataForSalesDetails()
        {
            return _salesDetailsRepositry.GetAllDataForSalesDetails();
        }


    }
}
