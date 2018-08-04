using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
  public interface ILocationMasterRepository
    {
        List<LocationMaster> GetAllLocations();
        LocationMaster GetSingleLocation(int? id);
        bool CreateLocation(LocationMaster locationMaster);
        bool UpdateLocation(LocationMaster locationMaster);
        bool RemoveLocation(int? id);
    }
}
