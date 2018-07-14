using Dapper;
using HomeCinema.Entities;
using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using HomeCinema.Entities.DataSource;

namespace HomeCinema.Services.Repository
{
    public class PurchaseMasterRepository : IPurchaseMasterRepository
    {
        public DateTime now = DateTime.Now;
        private IDbConnection _db;
        public PurchaseMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public bool CreatePurchaseMaster(PurchaseMaster purchasemaster)
        {
            purchasemaster.PurchaseDate = now;
            purchasemaster.CreatedDate = now;
            purchasemaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(@"INSERT PurchaseMaster(PurchaseDate,Status,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate,Supplier_Id) values (@PurchaseDate,@Status,1,1,@CreatedDate,1,@ModifiedDate,@Supplier_Id)",
            new { PurchaseDate = purchasemaster.PurchaseDate, Status = purchasemaster.Status, IsActive = 1, CreatedBy = 1, CreatedDate = purchasemaster.CreatedDate, ModifiedBy = 1, ModifiedDate = purchasemaster.ModifiedDate, Supplier_Id = purchasemaster.Supplier_Id });

            if (rowsAffected > 0)
            {
                return true;
            }         
            return false;
        }

        public List<PurchaseMasterDS> GetAllPurchaseMaster()
        {
            return this._db.Query<PurchaseMasterDS>("Usp_GetAllPurchase", commandType: CommandType.StoredProcedure).ToList();
        
        }
        public PurchaseMaster GetSinglePurchaseMaster(int? id)
        {
            return _db.Query<PurchaseMaster>("SELECT Id,PurchaseDate,Status,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM PurchaseMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();
        }

        public bool RemovePurchaseMaster(int? id)
        {
            int rowsAffected = this._db.Execute(@"update PurchaseMaster set IsActive=0  where  Id = @Id",
                    new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdatePurchaseMaster(PurchaseMaster purchasemaster, int? id)
        {
            purchasemaster.ModifiedDate = now;
            purchasemaster.PurchaseDate = now;
            purchasemaster.CreatedDate = now;            
            int rowsAffected = this._db.Execute(
                            "UPDATE PurchaseMaster SET PurchaseDate= purchasemaster.PurchaseDate,Status = @Status,IsActive=1,CreatedBy=1,CreatedDate= purchasemaster.CreatedDate,ModifiedBy=1,ModifiedDate = purchasemaster.ModifiedDate,Supplier_Id=@Supplier_Id WHERE Id =" + id, purchasemaster);


            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        Product IPurchaseMasterRepository.GetSinglePurchaseMaster(int? id)
        {
            throw new NotImplementedException();
        }
    }
}
