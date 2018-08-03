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
    public class TestDevController : ApiController
    {
        ItestdevRepo itestdevrepo = new testdevRepo();

        public IHttpActionResult getAllList()
        {
            var result = itestdevrepo.getAllList();
            return Ok(result);
        }
    }
}
