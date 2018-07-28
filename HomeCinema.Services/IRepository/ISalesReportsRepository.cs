using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface ISalesReportsRepository
    {
        List<SalesReportsDS> GetSalesReports();
        List<SalesReportsDS> GetSalesGraphic(string Name);
        bool Update(SalesForm salesReportsDS);
    }
}
