using HomeCinema.Entities;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{

    [Authorize(Roles = "Admin")]
    [RoutePrefix("api/books")]
    public class BooksController : ApiController
    {
        private BookRepository _bookRepository;

        public BooksController()
        {
            _bookRepository = new BookRepository();
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("getallbooks")]
        public List<Book> GetAllBooks()
        {
            return _bookRepository.GetAllBooks();
        }
    }
}