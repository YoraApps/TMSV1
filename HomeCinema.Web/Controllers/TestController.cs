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
    [RoutePrefix("api/Test")]
    public class TestController : ApiController
    {
        private TestRepository _testRepository;
        public TestController()
        {
            _testRepository = new TestRepository();
        }


        [HttpGet]
        [Route("GetAllTest")]
        public List<Test> getTest()
        {
            return _testRepository.getTest();
        }

        [HttpPost]
        [Route("Insert")]
        public IHttpActionResult CreateTest(Test test)
        {
            var isSave = _testRepository.CreateTest(test);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }


        [HttpPost]
        [Route("Update")]
        public IHttpActionResult Update(Test test)
        {
            var isupdate = _testRepository.Update(test);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleTest(int id)
        {
            return Ok(_testRepository.GetSingleTest(id));
        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveTest(int? id)
        {
            var isdel = _testRepository.RemoveTest(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
