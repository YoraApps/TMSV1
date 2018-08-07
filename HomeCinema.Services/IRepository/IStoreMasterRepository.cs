using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface IStoreMasterRepository
    {
        List<StoreMaster> GetAllStoreMasterRepository();
        bool Update(StoreMaster storeMaster);
        bool Remove(int? id);
    }
}
