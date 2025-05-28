using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPages.Model;
using System.Data;

namespace RazorPages.Pages.Content
{
    public class UpdateDataModel : PageModel
    {
        [BindProperty]
        public User NewUser { get; set; } = new User();
        public void OnGet()
        {

        }
        //public IActionResult OnGet(string param)
        //{
        //    string user = param;
        //    Helper helper = new Helper();
        //    string SQL = $"SELECT * FROM usersTB WHERE userName = '{param}'";
        //    DataTable dt = helper.RetrieveTable(SQL, "usersTB");
        //    DataRow dr = dt.Rows[0];
        //    NewUser.UserName = dr["userName"].ToString();
        //    NewUser.Gender = dr["gender"].ToString();
        //    NewUser.BirthDate = Date.Parse(dr["birhDay"].ToString());
        //    NewUser.Admin1 = (bool)dr["admin1"];
        //    return Page();
        //}



    }
}
