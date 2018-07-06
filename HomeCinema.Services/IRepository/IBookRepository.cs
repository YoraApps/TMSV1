using HomeCinema.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace HomeCinema.Services.IRepository
{
    public interface IBookRepository
    {
        List<Book> GetAllBooks();
        Book CreateBook(Book book);
        Book Update(int? id, Book book);
        Book RemoveBook(int? id);

    }
}
