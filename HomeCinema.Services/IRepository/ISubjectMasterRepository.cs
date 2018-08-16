using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface ISubjectMasterRepository
    {
        List<SubjectMaster> GetAllSubjectMasterRepository();
        SubjectMaster GetSingleSubjectMaster(int? id);
        bool UpdateSubjectMaster (SubjectMaster subjectMaster);
        bool RemoveSubjectMaster(int? id);
    }
}
