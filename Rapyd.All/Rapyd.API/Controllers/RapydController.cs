using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rapyd.API.Dto;
using Rapyd.API.Dto.Response;
using RestSharp;
using System.Security.Cryptography.Xml;

namespace Rapyd.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RapydController : ControllerBase
    {
        private readonly ILogger<RapydController> _logger;
        private readonly RapydClient _client;

        public RapydController(ILogger<RapydController> logger, RapydClient rapydClient)
        {
            _logger = logger;
            _client = rapydClient;
        }

        #region Card API
        [HttpPost("card/issue")]
        public async Task<ActionResult<CardIssueResponse>> IssueCard([FromBody] CardIssue cardDetails)
        {
            var apiResponse = await _client.IssueCard(cardDetails);
            return Ok(apiResponse);
        }

        [HttpPost("card/activate/{cardId}")]
        public async Task<ActionResult<CardIssueResponse>> ActivateIssuedCard([FromRoute] string cardId)
        {
            var apiResponse = await _client.ActivateIssuedCard(cardId);
            return Ok(apiResponse);
        }

        [HttpGet("card/{walletId}/all")]
        public async Task<ActionResult<ListOfIssuedCards>> ListOfIssueCard([FromRoute] string walletId, [FromQuery] int pagenumber = 0, [FromQuery] int pageSize = 0)
        {
            var apiResponse = await _client.ListOfIssueCard(walletId, pagenumber, pageSize);
            return Ok(apiResponse);
        }

        [HttpGet("card/{cardId}")]
        public async Task<ActionResult<CardIssueResponse>> GetIssuedCardById([FromRoute] string cardId)
        {
            var apiResponse = await _client.GetIssuedCardById(cardId);
            return Ok(apiResponse);
        }
        #endregion

        //#region Wallet API
        //[HttpPost("wallet/enable/{ewallet}")]
        //public async Task<ActionResult<bool>> EnableWallet([FromRoute] string ewallet = null)
        //{
        //    var apiResponse = await _client.EnableWallet(ewallet);
        //    return Ok(apiResponse);
        //}

        //[HttpGet("wallet/all")]
        //public async Task<ActionResult<ListOfWallet>> GetListOfWallet(string type, Guid referenceId, int pagenumber = 0, int pageSize = 0)
        //{
        //    var apiResponse = await _client.GetListOfWallet(type, referenceId, pagenumber, pageSize);
        //    return Ok(apiResponse); ;
        //}

        //[HttpPost("wallet/new")]
        //public async Task<ActionResult<CreateWalletResponse?>> CreateNewWallet([FromBody] CreateWallet walletDetails)
        //{
        //    var apiResponse = await _client.CreateNewWallet(walletDetails);
        //    return Ok(apiResponse); ;
        //}
        //#endregion

        #region customer APIs
        [HttpGet("customers")]
        public async Task<ActionResult<IList<Customer>>> GetCustomers()
        {
            var customers = await _client.GetCustomers();
            return Ok(customers);
        }

        [HttpPost("customers")]
        public async Task<ActionResult<Customer>> CreateCustomer([FromBody] CreateCustomerBody body)
        {
            var customer = await _client.CreateCustomer(body);
            return Ok(customer);
        }
        #endregion

        #region payment APIs
        [HttpGet("customers/{customerId}/paymentMethods")]
        public async Task<ActionResult<List<CustomerPaymentMethod>>> GetCustomerPaymentMethods([FromRoute] string customerId)
        {
            var customer = await _client.GetCustomersPaymentMethods(customerId);
            return Ok(customer);
        }

        [HttpGet("paymentMethods")]
        public async Task<ActionResult<IList<PaymentMethod>>> GetPaymentMethods([FromQuery] string country)
        {
            var methods = await _client.GetPaymentMethods(country);
            return Ok(methods);
        }

        [HttpGet("paymentMethodRequiredFields/{type}")]
        public async Task<ActionResult<PaymentMethodRequiredFields>> GetPaymentMethodRequiredFields([FromRoute] string type)
        {
            var methods = await _client.GetPaymentMethodRequiredFields(type);
            return Ok(methods);
        }

        [HttpPost("checkout")]
        public async Task<ActionResult<Checkout>> CreateCheckout([FromBody] CreateCheckoutBody body)
        {
            var checkout = await _client.CreatePaymentCheckout(body);
            return Ok(checkout);
        }

        [HttpPost("payment")]
        public async Task<ActionResult<Payment>> CreatePayment([FromBody] CreatePaymentBody body)
        {
            var payment = await _client.CreatePayment(body);
            return Ok(payment);
        }

        [HttpDelete("payment/{paymentId}")]
        public async Task<ActionResult<Payment>> CancelPayment([FromRoute] string paymentId)
        {
            var payment = await _client.CancelPayment(paymentId);
            return Ok(payment);
        }
        #endregion
    }
}
