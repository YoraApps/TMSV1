using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface IUnitOfMesurement
    {
        List<UnitOfMeasurementMaster> GetAllUnitOfMeasurement();
        bool CreateUnitOfMeasurement(UnitOfMeasurementMaster unitOfMeasurementMaster);
        bool UpdateUnitOfMeasurement(UnitOfMeasurementMaster unitOfMeasurementMaster);
      
        UnitOfMeasurementMaster GetSingleUnitOfMeasurement(int? id);
    }
}
