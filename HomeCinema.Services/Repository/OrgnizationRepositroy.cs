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

        public List<OrganizationDs> GetAllCountryform(int Country_Id)
        {
            return this._db.Query<OrganizationDs>("USP_CountryFrom", commandType: CommandType.StoredProcedure).ToList();
        }
    }
}
