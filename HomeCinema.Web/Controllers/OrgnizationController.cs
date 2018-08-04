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
    [RoutePrefix("api/Orgnization")]
    public class OrgnizationController : ApiController
    {
        private OrgnizationRepositroy _orgnizationRepositroy;

        public OrgnizationController()
        {
            _orgnizationRepositroy = new OrgnizationRepositroy();
        }

        [HttpGet]
        [Route("getallcountry")]
        public List<CounrtyDs> GetAllCountry()
        {
            return _orgnizationRepositroy.GetAllCountry();
        }

       [HttpGet]
        [Route("getallcountryfrom/{Country_Id}")]
        public List<OrganizationDs> GetAllCountryfrom(int Country_Id)
        {
            return _orgnizationRepositroy.GetAllCountryform(Country_Id);
        }

    }
}
