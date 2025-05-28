namespace RazorPages.Model
{
    public class User
    {
        public string FirstName { get; set; } = string.Empty;
        public string UserName { get; set; } = string.Empty;
        public string lastName { get; set; } = string.Empty;
        public string Mail { get; set; } = string.Empty;
        public string Password { get; set; }= string.Empty;
        public string Gender { get; set; } = string.Empty;
        public string BirthDate { get; set; } = string.Empty;
        public string StartPhoneNumber { get; set; } = string.Empty;
        public string PhoneNumber { get; set; } = string.Empty;
        public bool admin1 { get; set; } = false;
    }
}
