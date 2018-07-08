using HomeCinema.Entities;
using HomeCinema.Entities.DataSource;
using HomeCinema.Services.Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace HomeCinema.Web.Controllers
{
    [RoutePrefix("api/ProductCategoryMaster")]
    public class ProductCategoryMasterController : ApiController
    {
        private ProductCategoryMasterRepository _ProductCategoryMasterRepository;

        public ProductCategoryMasterController()
        {
            _ProductCategoryMasterRepository = new ProductCategoryMasterRepository();
        }

        [HttpPost]
        [Route("Insert")]
        public IHttpActionResult CreateProductCategoryMaster(ProductCategoryMaster productCategoryMaster)
        {
            var isSave = _ProductCategoryMasterRepository.CreateProductCategoryMaster(productCategoryMaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }

        [AllowAnonymous]
        [HttpGet]
        [Route("GetAllProductCategoryMaster")]
        public List<ProductCategoryDS> GetAllproductCategoryMaster()
        {
            return _ProductCategoryMasterRepository.GetAllProductCategoryMasterRepository();
        }

        [HttpPost]
        [Route("Update")]
        public IHttpActionResult Update(ProductCategoryMaster ProductCategoryMaster)
        {
            var isupdate = _ProductCategoryMasterRepository.Update(ProductCategoryMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleProductCategoryMaster(int id)
        {
            return Ok(_ProductCategoryMasterRepository.GetSingleProductCategoryMaster(id));
        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveProductCategoryMaster(int? id)
        {
            var isdel = _ProductCategoryMasterRepository.RemoveProductCategoryMaster(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }
    }
}
