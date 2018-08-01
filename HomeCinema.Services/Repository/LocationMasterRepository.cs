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
   public class LocationMasterRepository: ILocationMasterRepository
    {
        private IDbConnection _db;
        public LocationMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreateLocation(LocationMaster locationMaster)
        {
             DateTime now = DateTime.Now;
            locationMaster.CreatedDate = now;
            locationMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(@"INSERT LocationMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate) values (@Name,@Description,1,1,@CreatedDate,1,@ModifiedDate)",

                new { Name = locationMaster.Name, Description = locationMaster.Description, IsActive = 1, CreatedBy = 1, CreatedDate = locationMaster.CreatedDate, ModifiedBy = 1, ModifiedDate = locationMaster.ModifiedDate });

            if (rowsAffected > 0)
            {
                return true;
            }
            return false; 
        }

        public List<LocationMaster> GetAllLocations()
        {
            return this._db.Query<LocationMaster>("Select * from LocationMaster where IsActive=1 ").ToList();
        }

      
        public LocationMaster GetSingleLocation(int? id)
        {
            return _db.Query<LocationMaster>("SELECT Id,Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM LocationMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();
        }

        public bool RemoveLocation(int? id)
        {
            int rowsAffected = this._db.Execute(@"UPDATE LocationMaster SET  IsActive = 0 WHERE Id =@Id",
                     new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdateLocation(LocationMaster locationMaster)
        {
            DateTime now = DateTime.Now;
            locationMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute("UPDATE LocationMaster SET Name = @Name ,Description = @Description,ModifiedBy=1, ModifiedDate = @ModifiedDate WHERE Id = " +
                          locationMaster.Id, locationMaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
}
