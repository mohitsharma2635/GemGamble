using Dapper;
using Microsoft.AspNetCore.Mvc;
using StakeBackend.Modals;
using System.Data.SqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StakeBackend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StakeController : ControllerBase
    {
        // connection string to connect to the database
        private readonly IConfiguration _configuration;
        public StakeController(IConfiguration conf)
        {
            _configuration = conf;
        }

        // GET: api/<StakeController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<StakeController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<StakeController>
        //post commmand to send the data to the database of diamonds and the value of the diamond
        [HttpPost]
        public string Post([FromForm] UserModal value)
        {
            var query = "update StakeTable set stake_diamond = @diamond";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                connection.Open();
/*                connection.Execute(query, new { diamond = value.diamond });
*/                return "Success";
            }
        }

        // PUT api/<StakeController>/5
        [HttpPut("{id}")]   
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<StakeController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
