using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;
using RazorPages.Model;

namespace RazorPages.Pages.Content
{
    public class FORMWORKModel : PageModel
    {
        [BindProperty]
        public User NewUser { get; set; } = new User(); // ? ���� ������ �� ��
        public string msg { get; set; } = string.Empty;

        public void OnGet()
        {
            // ������ ������ �� ����
        }

        public IActionResult OnPost()
        {
            Helper helper = new Helper();
            int n = helper.Insert(NewUser, "TableUpdateTB");
            if (n == -1)
            {
                msg = "User already taken";
                return Page();
            }
            return RedirectToPage("FORMWORK");
        }

    }
}
