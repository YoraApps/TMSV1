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
    public class TestRepository : ITestRepository
    {
        public DateTime now = DateTime.Now;
        private IDbConnection _db;
        
        public TestRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public bool CreateTest(Test test)
        {
            test.DateOfBrith = now;
            int rowsAffected = this._db.Execute(@"INSERT Test(FirstName,LastName,Address,City,DateOfBrith,IsActive) values (@FirstName,@LastName,@Address,@City,@DateOfBrith,1)",

                new { FirstName = test.FirstName, LastName = test.LastName, Address = test.Address, City = test.City, DateOfBrith = test.DateOfBrith, IsActive = 1 });

            if (rowsAffected > 0)
            {
                return true;
            }
            return false;
        }

        public Test GetSingleTest(int? id)
        {
            return _db.Query<Test>("SELECT Id,FirstName,LastName,Address,City,DateOfBrith,IsActive FROM Test WHERE Id =@Id", new { Id = id }).SingleOrDefault();
        }

        public List<Test> getTest()
        {

            return this._db.Query<Test>("Select * from Test where IsActive=1 ").ToList();
        }

        public bool RemoveTest(int? id)
        {

            int rowsAffected = this._db.Execute(@"UPDATE Test SET  IsActive = 0 WHERE Id =@Id",
                     new { Id = id });

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }

        public bool Update(Test test)
        {
            test.DateOfBrith = now;
            int rowsAffected = this._db.Execute("UPDATE Test SET FirstName = @FirstName,LastName = @LastName,Address = @Address,City = @City,DateOfBrith = test.DateOfBrith,IsActive = @IsActive WHERE Id = " +
                         test.Id, test);

            if (rowsAffected > 0)
            {
                return true;
            }

            return false;
        }
    }
}
