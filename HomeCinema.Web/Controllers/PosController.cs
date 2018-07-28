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
    [RoutePrefix("api/Pos")]
    public class PosController : ApiController
    {
        private PosRepository _posRepository;

        public PosController()
        {
            _posRepository = new PosRepository();
        }
        [HttpGet]
        [Route("getallPos")]
        public List<Pos> GetAllBooks()
        {
            return _posRepository.GetAllPos();
        }

    }
}

