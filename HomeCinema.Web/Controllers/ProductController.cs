using HomeCinema.Entities;
using HomeCinema.Entities.DataSource;
using HomeCinema.Services.Repository;
using HomeCinema.Web.Infrastructure.Core;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Threading.Tasks;
using System.Web;
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
        public List<ProductDS> GetAllProduct()
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
        [MimeMultipart]
        [Route("images/upload")]
        public async Task<HttpResponseMessage> PostAsync(HttpRequestMessage request, int productId)
        {
            HttpResponseMessage response = null;

            var productOld = _productRepository.GetSingleProduct(productId);
            if (productOld == null)
                response = request.CreateErrorResponse(HttpStatusCode.NotFound, "Invalid product.");
            else
            {
                var uploadPath = HttpContext.Current.Server.MapPath("~/Content/images/product");

                var multipartFormDataStreamProvider = new UploadMultipartFormProvider(uploadPath);

                // Read the MIME multipart asynchronously 
                await Request.Content.ReadAsMultipartAsync(multipartFormDataStreamProvider);

                string _localFileName = multipartFormDataStreamProvider
                    .FileData.Select(multiPartData => multiPartData.LocalFileName).FirstOrDefault();

                // Create response
                FileUploadResult fileUploadResult = new FileUploadResult
                {
                    LocalFilePath = _localFileName,

                    FileName = Path.GetFileName(_localFileName),

                    FileLength = new FileInfo(_localFileName).Length
                };

                // update database
                productOld.ImageURI = fileUploadResult.FileName;
                _productRepository.UpdateProduct(productOld, productOld.Id);

                response = request.CreateResponse(HttpStatusCode.OK, fileUploadResult);
            }

            return response;
        }
    }
}
