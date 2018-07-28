using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface ITestRepository
    {
        List<Test> getTest();

        bool CreateTest(Test test);

        bool Update(Test test);

        bool RemoveTest(int? id);

        Test GetSingleTest(int? id);
    }
}
