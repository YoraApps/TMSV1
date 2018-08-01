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

        public bool CreateSalesForm(SalesForm salesForm)
        {
            
               bool returnvalue= false; 
              
            DynamicParameters param = new DynamicParameters();

                param.Add("@PosId", salesForm.pos.PosId);
                param.Add("@CustomerId ", salesForm.Customer.CustomerId);
                param.Add("@ProductId ", salesForm.Product.ProductId);
                param.Add("@UOMId ", salesForm.UOM.UOMId);
                param.Add("@Quantity ", salesForm.Quantity);
                param.Add("@IsActive", 1);
                param.Add("@CreatedBy", 1);
                param.Add("@CreatedDate", DateTime.UtcNow);
                param.Add("@ModifiedBy", 1);
                param.Add("@ModifiedDate", DateTime.UtcNow);
                param.Add("@SalesDate", salesForm.SalesDate);



            var val = _db.Execute("USP_SalesFormSave", param, commandType: CommandType.StoredProcedure);

            if (val > 0)
            {
                returnvalue = true;
            }
            _db.Close();
            return returnvalue;
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
