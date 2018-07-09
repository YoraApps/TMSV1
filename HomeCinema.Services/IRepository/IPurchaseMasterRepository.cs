using HomeCinema.Entities;
using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    interface IPurchaseMasterRepository
    {
        List<PurchaseMasterDS> GetAllPurchaseMaster();
        bool CreatePurchaseMaster(PurchaseMaster purchasemaster);
        bool UpdatePurchaseMaster(PurchaseMaster purchasemaster, int? id);
        bool RemovePurchaseMaster(int? id);
        Product GetSinglePurchaseMaster(int? id);
    }
}
