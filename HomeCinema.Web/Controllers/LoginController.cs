using HomeCinema.Data.Infrastructure;
using HomeCinema.Data.Repositories;
using HomeCinema.Entities;
//using HomeCinema.Entities;
using HomeCinema.Services;
using HomeCinema.Services.Utilities;
using HomeCinema.Web.Infrastructure.Core;
using HomeCinema.Web.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace HomeCinema.Web.Controllers
{
    public class LoginController : Controller
    {
        //private readonly IMembershipService _membershipService;
        //public LoginController() { }
        //public LoginController(IMembershipService membershipService,
        //    IEntityBaseRepository<Error> _errorsRepository, IUnitOfWork _unitOfWork)
        //    //: base(_errorsRepository, _unitOfWork)
        //{
        //    _membershipService = membershipService;
        //}
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }
        [HttpPost]
        public ActionResult CheckLogin(LoginViewModel user)
        {
            //MembershipContext _userContext = _membershipService.ValidateUser(user.Username, user.Password);
            if (user.Username == "yora")
            //if (_userContext.User != null)
            {
                return RedirectToAction("Index", "Home", null);
            }
            else
            {
                TempData["ErrorMsg"] = "Invalid Credantial";
                return RedirectToAction("Index", "Login", null);

            }
            
        }
    }
}