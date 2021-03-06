﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Entities
{
    public class LocationMaster
    {
        public int LocationId { get; set; }
        public string LocationName { get; set; }
        public string Description { get; set; }
        public bool IsActive { get; set; }
        public int? CreatedBy { get; set; }
        public DateTime? CreatedDate { get; set; }
        public int? ModifiedBy { get; set; }
        public DateTime? ModifiedDate { get; set; }
        public int? StoreId { get; set; }
        public string StoreName { get; set; }
        
    }

    public class StoreLocation
    {
        public int Id { get; set; }
        public string Name { get; set; }
    }

   public class Location
    {
        public List<StoreLocation> StoreList { get; set; }
        public List<LocationMaster> LocationList { get; set; }
    }
}

