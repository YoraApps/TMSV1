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

namespace HomeCinema.Services.Repository
{
    public class UnitOfMeasurementMasterRepository : IUnitOfMeasurementMaster
    {

        public DateTime now = DateTime.Now;
        private IDbConnection _db;

        public UnitOfMeasurementMasterRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreatedUnitOfMeasurementMaster(UnitOfMeasurementMaster unitofmeasurementmaster)
        {
           unitofmeasurementmaster.CreatedDate = now;
           unitofmeasurementmaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(@"INSERT UnitOfMeasurementMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate)values 
             (@Name,@Description,1,@CreatedBy,1,@ModifiedBy,@ModifiedDate)",
             new
             {
                 Name = unitofmeasurementmaster.Name,
                 Description = unitofmeasurementmaster.Description,
                 IsActive = 1,
                 CreatedBy = 1,
                 CreatedDate = unitofmeasurementmaster.CreatedDate,
                 ModifiedBy = 1,
                 ModifiedDate = unitofmeasurementmaster.ModifiedDate
             });
            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public List<UnitOfMeasurementMaster> GetAllUnitOfMeasurementMaster()
        {
            return this._db.Query<UnitOfMeasurementMaster>("Select * from UnitOfMeasurementMaster where IsActive=1").ToList();
        }

        public UnitOfMeasurementMaster GetSingleUnitOfMeasurementMaster(int? id)
        {
            return _db.Query<UnitOfMeasurementMaster>("SELECT Id,Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate FROM UnitOfMeasurementMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();

        }

        public bool RemoveUnitOfMeasurementMaster(int? id)
        {

            int rowsAffected = this._db.Execute(@"UPDATE UnitOfMeasurementMaster SET  IsActive = 0 WHERE Id =@Id",
                     new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool UpdateUnitOfMeasurementMaster(UnitOfMeasurementMaster unitofmeasurementmaster)
        {
            DateTime now = DateTime.Now;
            unitofmeasurementmaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute("UPDATE UnitOfMeasurementMaster SET Name = @Name ,Description = @Description,ModifiedBy=1, ModifiedDate = @ModifiedDate WHERE Id = " +
                        unitofmeasurementmaster.Id, unitofmeasurementmaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        
    }
}
