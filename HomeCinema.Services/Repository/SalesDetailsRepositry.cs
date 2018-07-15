using Dapper;
using HomeCinema.Entities.DataSource;
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
    public class SalesDetailsRepositry : ISalesDetailsRepositry
    {
        private IDbConnection _db;
        public SalesDetailsRepositry()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);

        }

        public bool createSalesFrom(SalesFormList salesFormList)
        {
                DateTime now = DateTime.Now;
               salesFormList.CreatedDate = now;
               salesFormList.ModifiedDate = now;

        DynamicParameters param = new DynamicParameters();
                param.Add("@", productGroupMaster.Name);
                param.Add("@Description", productGroupMaster.Description);
                param.Add("@IsActive", productGroupMaster.IsActive);
                param.Add("@CreatedBy", 1);
                param.Add("@CreatedDate", productGroupMaster.CreatedDate);
                param.Add("@ModifiedBy", 1);
                param.Add("@ModifiedDate", productGroupMaster.ModifiedDate);

                param.Add("@Myout", dbType: DbType.Int32, direction: ParameterDirection.Output);
                // Getting Out Parameter  

                param.Add("@Ret", dbType: DbType.Int32, direction: ParameterDirection.ReturnValue);
                // Getting Return value  

                _db.Open();
                _db.Execute("Usp_CreateProductGroup", param, commandType: CommandType.StoredProcedure);
                _db.Close();
            
        }

        //GetAllDataForSalesDetails
        public SalesFormListDs GetAllDataForSalesDetails()
        {

            SalesFormListDs ds = new SalesFormListDs();
            string query = @"USP_SalesFormPopulate";
            using (var multi = _db.QueryMultiple(query, null))
            {
                ds.pos = multi.Read<PosList>().ToList();
                ds.Customer = multi.Read<CustomerList>().ToList();
                ds.UOM = multi.Read<UOMList>().ToList();
                ds.Product = multi.Read<ProductList>().ToList();

            }
            return ds;
        }

      
    }
}
