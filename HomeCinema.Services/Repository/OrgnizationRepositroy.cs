using Dapper;
using HomeCinema.Entities.DataSource;
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
  public class OrgnizationRepositroy: IOrgnizationRepository
    {
        private IDbConnection _db;
        public OrgnizationRepositroy()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);

        }

        public List<CounrtyDs> GetAllCountry()
        {
            return this._db.Query<CounrtyDs>("Usp_GetAllCountry", commandType: CommandType.StoredProcedure).ToList();
        }

        public OrganizationDs GetAllCountryform(CounrtyDs counrtyDs)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add("@CountryId", counrtyDs.Country_Id);//@CountryId
            param.Add("@CurrencyId", counrtyDs.CurrencyId);
            param.Add("@TimeZoneId", counrtyDs.TimeZoneId);

            OrganizationDs ds = new OrganizationDs();
            string query = @"USP_PopulateProvinceZoneCurrencyByCountry";
            using (var multi = _db.QueryMultiple(query, param))
            {
                ds.Province = multi.Read<ProvinceDs>().ToList();
                ds.Currency = multi.Read<CurrencyDs>().SingleOrDefault();
                ds.Timezone = multi.Read<TimeZoneDs>().SingleOrDefault();
            }
            return ds;
        }
    }
}
