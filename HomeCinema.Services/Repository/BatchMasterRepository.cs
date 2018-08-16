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
    public class BatchMasterRepository : IBatchMasterRepository
    {
        private IDbConnection _db;
        public BatchMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["GurukulConStr"].ConnectionString);
        }

        public List<BatchMaster> GetAllBatchMasterRepository()
        {
            return this._db.Query<BatchMaster>("YSP_GetAllBatchMaster", commandType: CommandType.StoredProcedure).ToList();
        }

        public BatchMaster GetSingleBatchMaster(int? id)
        {
            DynamicParameters param = new DynamicParameters();
            param.Add("@BatchId", id);

            return _db.Query<BatchMaster>("YSP_SingleBatchMaster",param, commandType: CommandType.StoredProcedure).SingleOrDefault();

        }

        public bool RemoveBatchMaster(int? id)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@BatchId", id);
            _db.Open();
            var val = _db.Execute("YSP_RemoveBatchMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }

        public bool UpdateBatchMaster(BatchMaster batchMaster)
        {
            bool returnvalue = false;

            DynamicParameters param = new DynamicParameters();

            param.Add("@BatchId", batchMaster.BatchId);
            param.Add("@BatchName", batchMaster.BatchName);
            param.Add("@ResultType", batchMaster.ResultType);
            param.Add("@AcademicTerm", batchMaster.AcademicTerm);
            param.Add("@UniversityId", batchMaster.UniversityId);
            param.Add("@Active",1);
            param.Add("@lastupdateddt", DateTime.UtcNow);
            param.Add("@lastupdatedby",1);
            param.Add("@BatchType", batchMaster.BatchType);

         
            _db.Open();
            var val = _db.Execute("YSP_UpdateBatchMaster", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }

            _db.Close();
            return returnvalue;
        }
    }
}
