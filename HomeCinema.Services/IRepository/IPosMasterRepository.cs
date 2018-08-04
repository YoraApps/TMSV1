using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IPosMasterRepository
    {
        List<PosMaster> GetAllPosMasterRepository(); 
        bool Update(PosMaster posMaster);
        bool Remove(int? id);


    }
}
