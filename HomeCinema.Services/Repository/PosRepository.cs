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
    public class PosRepository : IPosRepository
    {
        private IDbConnection _db;

        public PosRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public List<Pos> GetAllPos()
        {
            return this._db.Query<Pos>("Select * from PosMaster").ToList();
        }
      
    }
}
