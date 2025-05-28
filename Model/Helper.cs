using System.Data;
using Microsoft.Data.SqlClient;

namespace RazorPages.Model
{
    public class Helper
    {
        private string conString = "connection string";

        public Helper()
        {
            var configuration = new ConfigurationBuilder()
                .SetBasePath(Directory.GetCurrentDirectory())
                .AddJsonFile("appsettings.json")
                .Build();
            conString = configuration.GetConnectionString("UserDB");
        }
        public DataTable RetrieveTable(string SQLStr,string table)
        {
            //Connect to DataBase
            SqlConnection con = new SqlConnection(conString);

            //Build SQL Query
            SqlCommand cmd = new SqlCommand(SQLStr, con);

            //Build DataAdapter
            SqlDataAdapter ad = new SqlDataAdapter(cmd);

            //Build DataSet to store the data 
            DataSet ds = new DataSet();

            //Get Data form DataBase into the DataSet
            ad.Fill(ds, table);
            return ds.Tables[table];
        }
        public int ExecuteNonQuery(string SQL)
        {
            SqlConnection con = new SqlConnection(conString); // התחברות למסד הנתונים

            SqlCommand cmd = new SqlCommand(SQL, con); // בניית פקודת SQL

            con.Open();
            int n = cmd.ExecuteNonQuery();   // ביצוע השאילתא
            con.Close();

            return n;     // return the number of rows affected
        }
        public int Delete(string id, string table)
        {
            if (id == string.Empty)
            {
                return -1;
            }
            string SQL = $"DELETE FROM {table} WHERE UserName = '{id}'";
            int n = ExecuteNonQuery(SQL);
            return n;
        }
        public int Update(User user, string table)
        {
            string SQL = $"UPDATE {table} " +
                $"SET FirstName = '{user.FirstName}', " +
                $"UserName ='{user.UserName}', " +
                $"Mail = '{user.Mail}', " +
                $"Password = '{user.Password}', " +
                $"Gender = '{user.Gender}', " +
                $"BirthDate = '{user.BirthDate}', " +
                $"PhoneNumber = '{user.PhoneNumber}', " + 
                $"admin1 = '{user.admin1}' " +
                $"WHERE UserName = '{user.UserName}'";

            int n = ExecuteNonQuery(SQL);
            return n;
        }



        public int Insert(User user, string table)
        // The Method recieve a user objects and insert it to the Database as new row. 
        // if the user is already taken the method will return -1.
        {
            // התחברות למסד הנתונים
            SqlConnection con = new SqlConnection(conString);

            // בניית פקודת SQL
            string SQLStr = $"SELECT * FROM {table} WHERE UserName Like '{user.UserName}'";
            SqlCommand cmd = new SqlCommand(SQLStr, con);

            // בניית DataSet
            DataSet ds = new DataSet();

            // טעינת סכימת הנתונים
            SqlDataAdapter adapter = new SqlDataAdapter(cmd);
            adapter.Fill(ds, table);

            if (ds.Tables[table].Rows.Count > 0)
            {
                return -1;
            }
            // בניית השורה להוספה
            DataRow dr = ds.Tables[table].NewRow();
            dr["FirstName"] = user.FirstName;
            dr["UserName"] = user.UserName;
            dr["Mail"] = user.Mail;
            dr["Password"] = user.Password;
            dr["Gender"] = user.Gender;
            dr["BirthDate"] = user.BirthDate.ToString();
            dr["PhoneNumber"] =  user.StartPhoneNumber.ToString() + '-' + user.PhoneNumber.ToString();
            dr["admin1"] = user.admin1;

            ds.Tables[table].Rows.Add(dr);

            // עדכון הדאטה סט בבסיס הנתונים
            SqlCommandBuilder builder = new SqlCommandBuilder(adapter);
            int n = adapter.Update(ds, table);
            return n;
        }


    }
}
