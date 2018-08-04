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
    public class LocationRepository : ILocationRespository
    {
        private IDbConnection _db;

        public LocationRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreateLocation(LocationMaster locationMaster)
        {
            bool returnvalue = false;
            DynamicParameters param = new DynamicParameters();
            param.Add("@Id", locationMaster.LocationId);
            param.Add("@Name", locationMaster.LocationName);
            param.Add("@Description", locationMaster.Description);
            param.Add("@IsActive", 1);
            param.Add("@CreatedBy", 1);
            param.Add("@CreatedDate", DateTime.UtcNow);
            param.Add("@ModifiedBy", 1);
            param.Add("@ModifiedDate", DateTime.UtcNow);
            param.Add("@StoreId", locationMaster.StoreId);

            var val = _db.Execute("Usp_CreateLocationMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            _db.Close();
            return returnvalue;
        }
        

        public LocationMaster GetSingleLocation(int? id)
        {
            return _db.Query<LocationMaster>("SELECT Id,Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,StoreId FROM LocationMaster WHERE Id =@Id", new { ID = id }).SingleOrDefault();
        }        

        public bool RemoveLocation(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@Id", id);
            var val = _db.Execute("[USP_DeleteLocationMaster]", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            _db.Close();
            return returnvalue;
        }

        public bool UpdateLocation(LocationMaster locationMaster)
        {
            bool returnvalue = false;
            DynamicParameters param = new DynamicParameters();
            param.Add("@Id", locationMaster.LocationId);
            param.Add("@Name", locationMaster.LocationName);
            param.Add("@Description", locationMaster.Description);
            param.Add("@IsActive", 1);
            param.Add("@CreatedBy", 1);
            param.Add("@CreatedDate", DateTime.UtcNow);
            param.Add("@ModifiedBy", 1);
            param.Add("@ModifiedDate", DateTime.UtcNow);
            param.Add("@StoreId", locationMaster.StoreId);

            var val = _db.Execute("Usp_CreateLocationMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            _db.Close();
            return returnvalue;
        }

        public Location GetAllLocation()
        {
            Location ls = new Location();
            string query = @"USP_GetAllLocationMaster";
            using (var multi = _db.QueryMultiple(query, null))
            {
                ls.LocationList = multi.Read<LocationMaster>().ToList();
                ls.StoreList = multi.Read<StoreLocation>().ToList();

            }
            return ls;            
        }
    }
}
