using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPages.Model;
using System.Data;

namespace RazorPages.Pages.Content
{
    public class UpdateData2Model : PageModel
    {
        [BindProperty]
        public User NewUser { get; set; } = new User();
        public string msg { get; set; } = string.Empty;

        public IActionResult OnGet(string param)
        {
            string user = param;
            Helper helper = new Helper();
            string SQL = $"SELECT * FROM TableUpdateTB WHERE UserName = '{param}'";
            DataTable dt = helper.RetrieveTable(SQL, "TableUpdateTB");
            DataRow dr = dt.Rows[0];
            NewUser.UserName = dr["UserName"].ToString();
            NewUser.FirstName = dr["FirstName"].ToString();
            NewUser.Password = dr["Password"].ToString();
            NewUser.Mail = dr["Mail"].ToString();
            NewUser.Gender = dr["Gender"].ToString().Trim();
            NewUser.BirthDate = (dr["BirthDate"].ToString());

            // תיקון כאן ???
            string phone = dr["PhoneNumber"].ToString();
            if (phone.Contains("-"))
            {
                var parts = phone.Split('-');
                if (parts.Length == 2)
                {
                    NewUser.StartPhoneNumber = parts[0]; // ? קידומת - לדוגמה: "052"
                    NewUser.PhoneNumber = parts[1];      // ? מספר - לדוגמה: "5444232"
                }
            }
            else
            {
                NewUser.StartPhoneNumber = "";
                NewUser.PhoneNumber = phone;
            }

            NewUser.admin1 = (bool)dr["admin1"];
            return Page();
        }

        public IActionResult OnPost()
        {
            Helper helper = new Helper();
            try
            {
                // חיבור המספר מחדש לפורמט המלא לפני השמירה
                NewUser.PhoneNumber = $"{NewUser.StartPhoneNumber}-{NewUser.PhoneNumber}";

                int n = helper.Update(NewUser, "TableUpdateTB");
            }
            catch (Exception ex)
            {
                msg = ex.Message;
                return Page();
            }
            return RedirectToPage("ShowUsers");
        }
    }
}
