using Dapper;
using Microsoft.AspNetCore.Http.HttpResults;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using StakeBackend.Modals;
using StakeBackend.ResponseBody;
using System.Data.SqlClient;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace StakeBackend.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public UserController(IConfiguration conf)
        {
            _configuration = conf;
        }
        // GET: api/<UserController>
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] { "value1", "value2" };
        }

        // GET api/<UserController>/5
        [HttpGet("{id}")]
        public string Get(int id)
        {
            return "value";
        }

        // POST api/<UserController>
        
        [HttpPost(), Route("RegisterMethod")]

        public UserResponseBodyClass Post([FromBody] UserModal value)
        {
            var query = "INSERT INTO StakeTable (stake_name , stake_password, stake_email) values (@name , @password , @email )";
            var query1 = "SELECT * FROM StakeTable WHERE stake_email = @email";
            using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                connection.Open();
                var user = connection.QueryFirstOrDefault<UserModalDto>(query1, new { email = value.email });
                if (user != null)
                {
                    return new UserResponseBodyClass(success : true , message : "user already exists", user:user );                                                                                              
                }
                var row= connection.Execute(query, new { name = value.name , password = value.password , email = value.email });
                if (row == 1)
                {
                    var newuser = connection.QueryFirstOrDefault<UserModalDto>(query1, new { email = value.email });
                    return new UserResponseBodyClass(success:true, message:"User created", user:newuser);
                }
                return new UserResponseBodyClass(success: false, message: "failed to create user");
            }
        }


        [HttpPost(), Route("LoginMethod")]
        public UserResponseBodyClass LoginPost([FromBody] UserLoginModal value)
        {
            var query = "SELECT * FROM StakeTable WHERE stake_email = @email AND stake_password = @password"; 

            using (var connection = new SqlConnection(_configuration.GetConnectionString("DefaultConnection")))
            {
                connection.Open();
                var user = connection.QueryFirstOrDefault<UserModalDto>(query, new { email = value.email , password = value.password});
                if (user != null)
                {
                    return new UserResponseBodyClass(success: true, message: "user already exists", user: user);
                }                
                return new UserResponseBodyClass(success: false, message: "failed to create user");
            }
        }




        // PUT api/<UserController>/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/<UserController>/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
