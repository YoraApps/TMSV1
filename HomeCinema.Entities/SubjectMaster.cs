using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities
{
    public class SubjectMaster
    {
        public int SubjectId  { get; set; }
        public string SubjectCode { get; set; }
        public string SubjectName { get; set; }
        public int? SKS { get; set; }
        public int ?UniversityId { get; set; }
        public bool active { get; set; }
        public DateTime? lastupdateddt { get; set; }
        public int? lastupdatedby { get; set; }       
        public int? TheoriticalSKS  { get; set; }
        public int? PracticalSKS { get; set; }
        public int? CourseType { get; set; }
        public int? Semester { get; set; }
        public int? PreRequisteCourse { get; set; }
        public int? Teacher1 { get; set; }
        public int? Teacher2 { get; set; }
        public int? Teacher3 { get; set; }
        public int? TotalPeriods { get; set; }
       
    }
}
