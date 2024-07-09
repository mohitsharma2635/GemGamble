namespace StakeBackend.Modals
{
    public class UserModal
    {
        public string name { get; set; }
        public string email { get; set; }
        public string password { get; set; }
       
    }
    public class UserModalDto
    {
        public string stake_name { get; set; }
        public string stake_email { get; set; }
    }

    public class UserLoginModal
    {
        public string email { get; set; }
        public string password { get; set; }

    }

}
