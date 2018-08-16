using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities
{
    public class BatchMaster
    {
        public int BatchId { get; set; }
        public string BatchName { get; set; }
        public string ResultType { get; set; }
        public string AcademicTerm { get; set; }
        public int? UniversityId { get; set; }
        public bool Active  { get; set; }
        public DateTime? lastupdateddt { get; set; }
        public int lastupdatedby { get; set; }
        public int? BatchType { get; set; }
    }
}
