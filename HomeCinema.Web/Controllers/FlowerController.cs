using HomeCinema.Entities;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{
    [RoutePrefix("api/flowers")]
    public class FlowerController : ApiController
    {
        private FlowerRepository _flowerRepository;        
        public FlowerController()
        {
            _flowerRepository = new FlowerRepository();
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("getallflowers")]
        public List<Flower> GetAllFlowers()
        {
            return _flowerRepository.GetAllFlowers();
        }

    }
}
