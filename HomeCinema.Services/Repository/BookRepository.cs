using HomeCinema.Entities;
using HomeCinema.Services.IRepository;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using Dapper;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.Repository
{

    public class BookRepository : IBookRepository
    {
        private IDbConnection _db;

        public BookRepository()
        {
            _db = new SqlConnection(ConfigurationManager.ConnectionStrings["DapperConStr"].ConnectionString);
        }

        public List<Book> GetAllBooks()
        {
            return this._db.Query<Book>("Select * from Book").ToList();
        }

        public Book CreateBook(Book book)
        {
            throw new NotImplementedException();
        }

        public Book RemoveBook(int? id)
        {
            throw new NotImplementedException();
        }

        public Book Update(int? id, Book book)
        {
            throw new NotImplementedException();
        }
    }
}
