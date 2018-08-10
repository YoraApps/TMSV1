using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities.DataSource
{
   public class Organization
    {
        public int? Id{ get; set; }
        public string CompanyName { get; set; }
        public string PortalName { get; set; }
        public int? CurrencyId { get; set; }
        public string Currency_Name { get; set; }
        public int? Country_Id { get; set; }
        public string Country_Name { get; set; }
        public int? TimeZoneId { get; set; }
        public string Zone_Name { get; set; }
        public int? ProvinceId { get; set; }
        public string Province_Name { get; set; }
        public bool IsActive { get; set; }
        public int CreatedBy { get; set; }
        public DateTime CreatedDate { get; set; }
        public int ModifiedBy { get; set; }
        public DateTime ModifiedDate { get; set; }

    }

    public class CounrtyDs
    {
        public int? Country_Id { get; set; }
        public string Country_Name { get; set; }
        public string Country_Code { get; set; }
        public int? CurrencyId { get; set; }
        public int? TimeZoneId { get; set; }
        public bool IsActive { get; set; }

    }

    public class ProvinceDs
    {
        public int? ProvinceId { get; set; }
        public int? Country_Id { get;set; }
        public string Province_Name { get; set; }
        public string Province_Code { get; set; }
        public bool IsActive { get; set; }

    }

    public class CurrencyDs
    {

        public int? CurrencyId { get; set; }
        public string Currency_Name { get; set; }
        public string Currency_Code { get; set; }
        public bool IsActive { get; set; }

    }
    public class TimeZoneDs
    {
        public int? TimeZoneId { get; set; }
        public string Zone_Name { get; set; }
        public string Abbr { get; set; }
        public string UTC_OffSet { get; set; }
        public bool IsActive { get; set; }

    }

    public class OrganizationDs
    {
        public List<ProvinceDs> Province { get; set; }
        public CurrencyDs Currency { get; set; }
        public TimeZoneDs Timezone { get; set; }
    }
}
