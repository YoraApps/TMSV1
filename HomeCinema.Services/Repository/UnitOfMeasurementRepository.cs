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
    public class UnitOfMeasurementRepository : IUnitOfMesurement
    {
        private IDbConnection _db;

        public UnitOfMeasurementRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }
        public bool CreateUnitOfMeasurement(UnitOfMeasurementMaster unitOfMeasurementMaster)
        {
            DateTime now = DateTime.Now;
            unitOfMeasurementMaster.CreatedDate = now;
            unitOfMeasurementMaster.ModifiedDate = now;
            int rowsAffected = this._db.Execute(@"INSERT UnitOfMeasurementMaster(Name,Description,IsActive,CreatedBy,CreatedDate,ModifiedBy,ModifiedDate) values (@Name, @Description,1,1,@CreatedDate,1,@ModifiedDate)",
               new { Name = unitOfMeasurementMaster.Name, Description = unitOfMeasurementMaster.Description, IsActive = 1, CreatedBy = 1, CreatedDate = unitOfMeasurementMaster.CreatedDate, ModifiedBy = 1, ModifiedDate = unitOfMeasurementMaster.ModifiedDate });
            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public List<UnitOfMeasurementMaster> GetAllUnitOfMeasurement()
        {
            return this._db.Query<UnitOfMeasurementMaster>("Select * from UnitOfMeasurementMaster where IsActive=1").ToList();
        }

        public object DeleteUnitOfMeasurement(UnitOfMeasurementMaster unitOfMeasurementMaster)
        {
            throw new NotImplementedException();
        }

        public UnitOfMeasurementMaster GetSingleUnitOfMeasurement(int? id)
        {
            return _db.Query<UnitOfMeasurementMaster>("SELECT Id,Name,Description FROM UnitOfMeasurementMaster WHERE Id =@Id", new { Id = id }).SingleOrDefault();

        }
        public bool UpdateUnitOfMeasurement(UnitOfMeasurementMaster unitOfMeasurementMaster)
        {
            DateTime now = DateTime.Now;
            unitOfMeasurementMaster.ModifiedDate = now;

            int rowsAffected = this._db.Execute(
                            "UPDATE UnitOfMeasurementMaster SET Name = @Name Description = @Description ModifiedBy=1,ModifiedDate=@ModifiedDate WHERE Id = " +
                           unitOfMeasurementMaster.Id, unitOfMeasurementMaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
        public bool DeletUnitOfMeasurement(UnitOfMeasurementMaster unitOfMeasurementMaster)
        {
            DateTime now = DateTime.Now;
            unitOfMeasurementMaster.ModifiedDate = now;

            int rowsAffected = this._db.Execute(
                            "DELETE UnitOfMeasurementMaster SET Name = @Name Description = @Description ModifiedBy=1,ModifiedDate=@ModifiedDate WHERE Id = " +
                           unitOfMeasurementMaster.Id, unitOfMeasurementMaster);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
}
