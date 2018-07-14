﻿using HomeCinema.Entities.DataSource;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IPurchaseFormRepository
    {
        PurchaseFormListDs GetAllPurchaseDetails();
        bool SavePurchaseDetail(PurchaseFormPostDs purchaseSave);

    }
}
