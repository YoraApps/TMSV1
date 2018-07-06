using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities;
using System.Data.SqlClient;
using System.Configuration;
using System.Data;
using Dapper;

namespace HomeCinema.Services.Repository
{
   public class WatchRepository : IWatchRepository
    {
        private IDbConnection _db;       

        public WatchRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public bool CreateWatches(Watches watch)
        {
           int rowsAffected = this._db.Execute(@"INSERT Watch(Price,Brand) values (@Price, @Brand)",
              new { Price = watch.Price, Brand = watch.Brand});
           if (rowsAffected > 0)
           {
                return true;
            }

           return false;
       }
        public List<Watches> GetAllWatches()
        {
            return this._db.Query<Watches>("Select * from Watch").ToList();
        }

        public Watches GetSingleWatch(int? id)
        {
           return _db.Query<Watches>("SELECT ID,Price,Brand FROM Watch WHERE ID =@ID", new { ID = id }).SingleOrDefault();
       
        }

        public bool RemoveWatch(int? id)
        {
           
                int rowsAffected = this._db.Execute(@"DELETE FROM Watch WHERE ID = @ID",
                    new { ID = id });

                if (rowsAffected > 0)
                {
                    return true;
                }

                return false;
            
        }

        public bool Update(Watches watch)
        {            
                int rowsAffected = this._db.Execute(
                            "UPDATE Watch SET Price = @Price ,Brand = @Brand WHERE ID = " +
                            watch.ID, watch);

                if (rowsAffected > 0)
                {
                    return true;
                }

                return false;
           
        }
    }
}
