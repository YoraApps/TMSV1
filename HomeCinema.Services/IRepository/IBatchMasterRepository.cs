using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface IBatchMasterRepository
    {
        List<BatchMaster> GetAllBatchMasterRepository();
        BatchMaster GetSingleBatchMaster(int? id);
        bool UpdateBatchMaster(BatchMaster batchMaster); 
        bool RemoveBatchMaster(int? id);
    }
}
