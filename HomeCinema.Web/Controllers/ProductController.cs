using HomeCinema.Entities;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{
    [RoutePrefix("api/Product")]
    public class ProductController : ApiController
    {
        private ProductRepository _productRepository;
        public ProductController()
        {
            _productRepository = new ProductRepository();
        }
        [HttpPost]
        [Route("Create")]
        public IHttpActionResult CreateProduct(Product product)
        {
            var isSave = _productRepository.CreateProduct(product);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
        [AllowAnonymous]
        [HttpGet]
        [Route("getallproduct")]
        public List<Product> GetAllProduct()
        {
            return _productRepository.GetAllProduct();
        }
        [HttpPost]
        [Route("Update/{id}")]
        public IHttpActionResult Update(Product product,int? id)
        {
            var isupdate = _productRepository.UpdateProduct(product,id);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleProduct(int id)
        {
            return Ok(_productRepository.GetSingleProduct(id));
        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveProduct(int? id)
        {
            var isdel = _productRepository.RemoveProduct(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
