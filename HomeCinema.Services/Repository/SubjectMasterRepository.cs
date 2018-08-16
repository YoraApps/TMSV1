using Dapper;
using HomeCinema.Entities;
using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.Repository
{
    public class SubjectMasterRepository: ISubjectMasterRepository
    {
        private IDbConnection _db;
        public SubjectMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }

        public List<SubjectMaster> GetAllSubjectMasterRepository()
        {
            return this._db.Query<SubjectMaster>("YSP_GetAllSubjectMaster", commandType: CommandType.StoredProcedure).ToList();
        }

        public SubjectMaster GetSingleSubjectMaster(int? id)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add("@SubjectId", id);

            return _db.Query<SubjectMaster>("YSP_SingleSubjectMaster", param, commandType: CommandType.StoredProcedure).SingleOrDefault();

        }

        public bool RemoveSubjectMaster(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@SubjectId", id);
            _db.Open();
            var val = _db.Execute("YSP_RemoveSubjectMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }

        public bool UpdateSubjectMaster(SubjectMaster subjectMaster)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@SubjectId", subjectMaster.SubjectId);
            param.Add("@SubjectCode", subjectMaster.SubjectCode);
            param.Add("@SubjectName", subjectMaster.SubjectName);
            param.Add("@SKS", subjectMaster.SKS);
            param.Add("@UniversityId", subjectMaster.UniversityId);
            param.Add("active", 1);
            param.Add("@lastupdateddt", DateTime.UtcNow);
            param.Add("@lastupdatedby", 1);
            param.Add("@TheoriticalSKS", subjectMaster.TheoriticalSKS);
            param.Add("@PracticalSKS", subjectMaster.PracticalSKS);
            param.Add("@CourseType", subjectMaster.CourseType);
            param.Add("@Semester", subjectMaster.Semester);
            param.Add("@PreRequisteCourse", subjectMaster.PreRequisteCourse);
            param.Add("@Teacher1", subjectMaster.Teacher1);
            param.Add("@Teacher2", subjectMaster.Teacher2);
            param.Add("@Teacher3", subjectMaster.Teacher3);
            param.Add("@TotalPeriods", subjectMaster.TotalPeriods);

            _db.Open();
            var val = _db.Execute("YSP_UpdateSubjectMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }
    }
}