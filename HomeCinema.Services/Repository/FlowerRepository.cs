using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities;
using System.Data;
using System.Data.SqlClient;
using System.Configuration;
using Dapper;

namespace HomeCinema.Services.Repository
{
    public class FlowerRepository : IFlowerRepository
    {
        private IDbConnection _db;
        public FlowerRepository()
        {
            _db= new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public List<Flower> GetAllFlowers()
        {
            return this._db.Query<Flower>("select * from Flower where IsActive = 1").ToList();            
        }
    }
}
