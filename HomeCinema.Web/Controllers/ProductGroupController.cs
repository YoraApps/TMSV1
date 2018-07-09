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
    [RoutePrefix("api/ProductGroupMaster")]
    public class ProductGroupController : ApiController
    {
        private ProductGroupRepository _productGroupRepository;
        public ProductGroupController()
        {
            _productGroupRepository = new ProductGroupRepository();
        }
        [HttpPost]
        [Route("Save")]
        public IHttpActionResult CreateProductGroupMaster(ProductGroupMaster productGroupMaster)
        {
            var isSave = _productGroupRepository.CreateProductGroup(productGroupMaster);
            if (isSave == true)
                return Ok(isSave);
            return BadRequest();
        }
     
        [HttpGet]
        [Route("GetAllProductGroups")]
        public List<ProductGroupMaster> GetAllProductGroups()
        {
            return _productGroupRepository.GetAllProductGroup();
        }

        [HttpGet]
        [Route("getById/{id}")]
        public IHttpActionResult GetSingleProductGroupMaster(int id)
        {
            return Ok(_productGroupRepository.GetSingleProductGroup(id));
        }
        [HttpPost]
        [Route("Update")]
        public IHttpActionResult UpdateProductGroup(ProductGroupMaster productGroupMaster)
        {
            var isupdate = _productGroupRepository.UpdateProductGroup(productGroupMaster);
            if (isupdate == true)

                return Ok(isupdate);
            return BadRequest();

        }
        [HttpPost]
        [Route("Delete/{id}")]
        public IHttpActionResult RemoveProductGroup(int? id)
        {
            var isdel = _productGroupRepository.RemoveProductGroup(id);
            if (isdel == true)
                return Ok(isdel);
            return BadRequest();
        }



    }
}
