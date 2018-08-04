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
    public class PosMasterRepository: IPosMasterRepository
    {
        private IDbConnection _db;
        public PosMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        //public bool CreatePosMaster(PosMaster posMaster)
        //{
            
        //}

        public List<PosMaster> GetAllPosMasterRepository()
        {
            return this._db.Query<PosMaster>("USP_GetAllPOS", commandType: CommandType.StoredProcedure).ToList();
        }

        public bool Update(PosMaster posMaster)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@Id", posMaster.Id);
            param.Add("@Name", posMaster.Name);
            param.Add("@CreatedBy", posMaster.CreatedBy);
            param.Add("@CreatedDate", DateTime.UtcNow);
            param.Add("@ModifiedBy", posMaster.ModifiedBy);
            param.Add("@ModifiedDate", DateTime.UtcNow);

            _db.Open();
            var val = _db.Execute("USP_UpdatePOS", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            
            _db.Close();
            return returnvalue;

        }
        public bool Remove(int? id)
        {
           
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@Id", id);
            _db.Open();
            var val = _db.Execute("USP_RemovePOS",param,commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;

        }
    }
}
