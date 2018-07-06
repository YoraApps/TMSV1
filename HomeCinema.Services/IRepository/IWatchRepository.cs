using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface IWatchRepository
    {
        List<Watches> GetAllWatches();
        bool CreateWatches(Watches watch);
        bool Update(Watches watch);
        bool RemoveWatch(int? id);
        Watches GetSingleWatch(int? id);
    }
}
