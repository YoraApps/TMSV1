using HomeCinema.Entities;
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
    [RoutePrefix("api/SubjectMaster")]
    public class SubjectMasterController : ApiController
    {
        private ISubjectMasterRepository _subjectMasterRepository;

        public SubjectMasterController()
        {
            _subjectMasterRepository = new SubjectMasterRepository();
        }
        [HttpGet]
        [Route("GetAllSubjectMaster")]
        public List<SubjectMaster> GetAllSubjectMasterRepository()
        {
            return _subjectMasterRepository.GetAllSubjectMasterRepository();
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateSubjectMaster(SubjectMaster subjectMaster)
        {
            var isupdate = _subjectMasterRepository.UpdateSubjectMaster(subjectMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpDelete]
        [Route("Delete/{Id}")]
        public IHttpActionResult RemoveSubjectMaster(int? id)
        {
            var isdel = _subjectMasterRepository.RemoveSubjectMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleSubjectMaster(int id)
        {
            return Ok(_subjectMasterRepository.GetSingleSubjectMaster(id));
        }
    }
}
