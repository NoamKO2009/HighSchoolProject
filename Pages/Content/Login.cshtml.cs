using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPages.Model;
using System.Data;
using System.Security.Cryptography.X509Certificates;

namespace RazorPages.Pages.Content
{
    public class LoginModel : PageModel
    {
        [BindProperty]
        public string NewUser1 { get; set; } = string.Empty;
        [BindProperty]
        public string password1 { get; set; } = string.Empty;

        public string msg { get; set; } = string.Empty;
        public void OnGet()
        {

        }
        public IActionResult OnPost()
        {
            string SQLstr = $"SELECT * FROM usersTB WHERE UserName='{NewUser1}' AND Password='{password1}';";
            Helper helper = new Helper();
            DataTable dt = helper.RetrieveTable(SQLstr, "usersTB");

            if (dt.Rows.Count > 0)
            {
                HttpContext.Session.SetString("Login", NewUser1);
                HttpContext.Session.SetString("Admin", dt.Rows[0]["admin1"].ToString());
                return RedirectToPage("HomePage");
            }
            msg = "Rong User or Password";
            return Page();
        }

    }
}
