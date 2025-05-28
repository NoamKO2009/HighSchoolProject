using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using System.Data;
using Microsoft.Data.SqlClient;
using RazorPages.Model;

namespace RazorPages.Pages.Content
{
    public class ShowUsersModel : PageModel
    {
        [BindProperty]
        public string filter { get; set; } = string.Empty;
        [BindProperty]
        public string column { get; set; } = string.Empty;
        [BindProperty]
        public string order { get; set; } = string.Empty;
        [BindProperty]
        public string userName1 { get; set; } = string.Empty;
        [BindProperty]
        public DataTable dt { get; set; }
        public IActionResult OnGet()
        {
            Helper helper = new Helper();
            string SqlStr = "SELECT * FROM  TableUpdateTB";
            dt = helper.RetrieveTable(SqlStr, "TableUpdateTB");
            return Page();
        }
        public IActionResult OnPostFilter()
        {
            Helper helper = new Helper();
            string SQL = "SELECT * FROM TableUpdateTB";
            if (filter != string.Empty)
            {
                SQL = $"SELECT * FROM TableUpdateTB WHERE FirstName LIKE '%{filter}%'";
            }
            dt = helper.RetrieveTable(SQL, "TableUpdateTB");
            return Page();
        }
        public IActionResult OnPostSort()
        {
            Helper helper = new Helper();
            string SQL = $"SELECT * FROM TableUpdateTB ORDER BY {column} {order}";
            dt = helper.RetrieveTable(SQL, "TableUpdateTB");
            return Page();
        }


      
        public IActionResult OnPostDelete()
        {
            Helper helper = new Helper();
            helper.Delete(userName1, "TableUpdateTB");
            string SQL = "SELECT * FROM TableUpdateTB";
            dt = helper.RetrieveTable(SQL, "TableUpdateTB");
            return Page();
        }




    }
}
