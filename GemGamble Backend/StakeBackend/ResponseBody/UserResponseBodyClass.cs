using StakeBackend.Modals;

namespace StakeBackend.ResponseBody
{
    public class UserResponseBodyClass
    {

        public bool success { get; set; }
        public string message { get; set; }
        public UserModalDto user { get; set; }
        public UserResponseBodyClass(bool success , string message , UserModalDto user)
        {
            this.success= success;
            this.message = message;
            this.user = user;
        }

        public UserResponseBodyClass(bool success, string message )
        {
            this.success = success;
            this.message = message;
        }
    }
}
