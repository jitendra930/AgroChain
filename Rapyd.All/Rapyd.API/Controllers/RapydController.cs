using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Rapyd.API.Dto;

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
    }
}
