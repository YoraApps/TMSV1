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
using Dapper;
using HomeCinema.Entities;

namespace HomeCinema.Services.Repository
{
    public class testdevRepo : ItestdevRepo
    {
        private IDbConnection _db;
        public testdevRepo()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public testdev getAllList()
        {
            testdev td = new testdev();
            string querry = @"testdev";
            using (var multi = _db.QueryMultiple(querry, null))
            {
                td.ProductCategoryGridList = multi.Read<ProductCategoryGrid>().ToList();
                td.ProductGroupMasterList = multi.Read<ProductGroupMaster>().ToList();
            }
            return td;
        }
    }
}
