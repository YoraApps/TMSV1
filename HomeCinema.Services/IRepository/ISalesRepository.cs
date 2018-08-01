using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
   public interface ISalesRepository
    {
        List<SalesDS> GetAllSales();

        bool CreateSales(SalesDS salesDS);

        bool UpdateSales(SalesDS salesDS);

        bool RemoveSales(int? id);

        SalesDS GetSingleSales(int? id);
    }
}
