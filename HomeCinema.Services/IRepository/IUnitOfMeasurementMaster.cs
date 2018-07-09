using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IUnitOfMeasurementMaster
    {
        bool CreatedUnitOfMeasurementMaster (UnitOfMeasurementMaster unitofmeasurementmaster);
        List<UnitOfMeasurementMaster> GetAllUnitOfMeasurementMaster ();
        bool UpdateUnitOfMeasurementMaster(UnitOfMeasurementMaster unitofmeasurementmaster );
        bool RemoveUnitOfMeasurementMaster (int? id);
        UnitOfMeasurementMaster GetSingleUnitOfMeasurementMaster (int? id);
    }
}
