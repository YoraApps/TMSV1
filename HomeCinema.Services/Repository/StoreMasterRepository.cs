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
    public class StoreMasterRepository: IStoreMasterRepository
    {
        private IDbConnection _db;
        public StoreMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public List<StoreMaster> GetAllStoreMasterRepository()
        {
            return this._db.Query<StoreMaster>("GetAllStoreMAster", commandType: CommandType.StoredProcedure).ToList();
        }

        public bool Remove(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@Id", id);
            _db.Open();
            var val = _db.Execute("USP_RemoveStoreMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }

        public bool Update(StoreMaster storeMaster)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@Id", storeMaster.Id);
            param.Add("@IsActive", 1);
            param.Add("@CreatedBy", 1);
            param.Add("@CreatedDate", DateTime.UtcNow);
            param.Add("@ModifiedBy", 1);
            param.Add("@ModifiedDate", DateTime.UtcNow);
            param.Add("@Name", storeMaster.Name);
            _db.Open();
            var val = _db.Execute("USP_UpdateStoreMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }
    }
}
