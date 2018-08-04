using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface ILocationRespository
    {
        Location GetAllLocation();
        bool CreateLocation(LocationMaster locationMaster);
        bool UpdateLocation(LocationMaster locationMaster);
        bool RemoveLocation(int? id);
        LocationMaster GetSingleLocation(int? id);
    }
}
