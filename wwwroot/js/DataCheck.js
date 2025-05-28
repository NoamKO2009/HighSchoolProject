// שם פרטי
function PrivateName() {
    var str = document.getElementById("txtFirstName").value;
    var len = str.length;
    var flag = true;

    if (len == 0) {
        document.getElementById("errorFirstName").innerHTML = "* השדה לא יכול להיות ריק";
        return false;
    }
    else if (len == 1) {
        document.getElementById("errorFirstName").innerHTML = "* אין שם רק עם אות אחת";
        return false;
    }
    else {
        for (var i = 0; i < len; i++) {
            if (str[i] == " ") {
                if (i == len - 1) {
                    document.getElementById("errorFirstName").innerHTML = "* אין להוסיף רווח בסוף המילה";
                } else {
                    document.getElementById("errorFirstName").innerHTML = "* מותר רק מילה אחת";
                }
                return false;
            }
        }

        if (!(str[0] >= 'A' && str[0] <= 'Z')) {
            document.getElementById("errorFirstName").innerHTML = "* חייב להתחיל באות גדולה";
            return false;
        }
        else {
            for (var i = 1; i < len; i++) {
                if (!(str[i] >= 'a' && str[i] <= 'z')) {
                    flag = false;
                }
            }
            if (!flag) {
                document.getElementById("errorFirstName").innerHTML = "*  שאר האותיות חייבות להיות קטנות באנגלית";
                return false;
            }
            else {
                document.getElementById("errorFirstName").innerHTML = "";
                return true;
            }
        }
    }
}


// שם שני
function SecondName() {
    var str = document.getElementById("txtSecondName").value;
    var len = str.length;

    if (len == 0) {
        document.getElementById("errorSecondName").innerHTML = "";
        return true;
    }

    if (len == 1) {
        document.getElementById("errorSecondName").innerHTML = "* אין שם שני רק עם אות אחת";
        return false;
    }

    for (var i = 0; i < len; i++) {
        if (str[i] == " ") {
            if (i == len - 1) {
                document.getElementById("errorSecondName").innerHTML = "* אין להוסיף רווח בסוף המילה";
                return false;
            } else {
                document.getElementById("errorSecondName").innerHTML = "* מותר רק מילה אחת";
                return false;
            }
        }
    }

    if (!(str[0] >= 'A' && str[0] <= 'Z')) {
        document.getElementById("errorSecondName").innerHTML = "* חייב להתחיל באות גדולה";
        return false;
    }

    for (var i = 1; i < len; i++) {
        if (!(str[i] >= 'a' && str[i] <= 'z')) {
            document.getElementById("errorSecondName").innerHTML = "* שאר האותיות חייבות להיות קטנות באנגלית";
            return false;
        }
    }

    document.getElementById("errorSecondName").innerHTML = "";
    return true;
}

// שם משפחה
function FamilyName() {
    var str = document.getElementById("txtLastName").value;
    var len = str.length;
    var flag = true;

    if (len == 0) {
        document.getElementById("errorLastName").innerHTML = "* השדה לא יכול להיות ריק";
        return false;
    }
    else if (len == 1) {
        document.getElementById("errorLastName").innerHTML = "* אין שם משפחה רק עם אות אחת";
        return false;
    }
    else {
        for (var i = 0; i < len; i++) {
            if (str[i] == " ") {
                if (i == len - 1) {
                    document.getElementById("errorLastName").innerHTML = "* אין להוסיף רווח בסוף המילה";
                    return false;
                } else {
                    document.getElementById("errorLastName").innerHTML = "* מותר רק מילה אחת";
                    return false;
                }
            }
        }

        if (!(str[0] >= 'A' && str[0] <= 'Z')) {
            document.getElementById("errorLastName").innerHTML = "* חייב להתחיל באות גדולה את שם המשפחה";
            return false;
        }
        else {
            for (var i = 1; i < len; i++) {
                if (!(str[i] >= 'a' && str[i] <= 'z')) {
                    flag = false;
                }
            }
            if (!flag) {
                document.getElementById("errorLastName").innerHTML = "* שאר האותיות אותיות קטנות באנגלית";
                return false;
            }
            else {
                document.getElementById("errorLastName").innerHTML = "";
                return true;
            }
        }
    }
}

// שם משתמש
function UserNameCheck() {
    var str = document.getElementById("txtUserName").value;
    var len = str.length;
    var checkSpecialSign = false;
    var checkNumbers = false;
    var checkValidChars = true;
    var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*', '?','.'];

    if (len == 0) {
        document.getElementById("errorUserName").innerHTML = "* השדה לא יכול להיות ריק";
        return false;
    }
    else if (len == 1) {
        document.getElementById("errorUserName").innerHTML = "* אין שם משתמש רק עם אות אחת";
        return false;
    }

    for (var i = 0; i < len; i++) {
        if (str[i] == " ") {
            document.getElementById("errorUserName").innerHTML = "* מותר רק מילה אחת";
            return false;
        }
    }

    if (!(str[0] >= 'A' && str[0] <= 'Z')) {
        document.getElementById("errorUserName").innerHTML = "* שם המשתמש חייב להתחיל באות גדולה";
        return false;
    }

    for (var i = 1; i < len; i++) {
        var isSpecial = false;

        for (var j = 0; j < specialChars.length; j++) {
            if (str[i] == specialChars[j]) {
                checkSpecialSign = true;
                isSpecial = true;
            }
        }

        if (str[i] >= '0' && str[i] <= '9') {
            checkNumbers = true;
        }

        if (!isSpecial && !(str[i] >= 'a' && str[i] <= 'z') && !(str[i] >= 'A' && str[i] <= 'Z') && !(str[i] >= '0' && str[i] <= '9')) {
            checkValidChars = false;
        }
    }
    if (!checkValidChars) {
        document.getElementById("errorUserName").innerHTML = "* מותר רק תווים באנגלית";
        return false;
    }
    if (!checkSpecialSign) {
        document.getElementById("errorUserName").innerHTML = "* חייב להיות לפחות תו מיוחד אחד";
        return false;
    }
    if (!checkNumbers) {
        document.getElementById("errorUserName").innerHTML = "* חייב להיות לפחות מספר אחד";
        return false;
    }

    document.getElementById("errorUserName").innerHTML = "";
    return true;
}


function CheckPassword() {
    var password = document.getElementById("txtPass1").value;
    var len = password.length;
    var specialChars = ['!', '@', '#', '$', '%', '^', '&', '*'];
    var checkSpecialSign = false;
    var checkNumbers = false;
    var checkValidChars = true; 

    if (len === 0) {
        document.getElementById("errorPass1").innerHTML = "* השדה לא יכול להיות ריק";
        return false;
    }
    else if (len < 6) {
        document.getElementById("errorPass1").innerHTML = "* צריך להכיל לפחות 6 תווים ";
        return false;
    }

    for (var i = 0; i < len; i++) {
        if (password[i] === " ") {
            document.getElementById("errorPass1").innerHTML = "* אסור שיהיו רווחים בסיסמה";
            return false;
        }
    }

    if (!(password[0] >= 'A' && password[0] <= 'Z')) {
        document.getElementById("errorPass1").innerHTML = "* הסיסמה חייבת להתחיל באות גדולה";
        return false;
    }

    for (var i = 1; i < len; i++) {
        var isSpecial = false;

        for (var j = 0; j < specialChars.length; j++) {
            if (password[i] === specialChars[j]) {
                checkSpecialSign = true;
                isSpecial = true;
            }
        }

        if (password[i] >= '0' && password[i] <= '9') {
            checkNumbers = true;
        }

        if (!isSpecial && !(password[i] >= 'a' && password[i] <= 'z') &&
            !(password[i] >= 'A' && password[i] <= 'Z') &&
            !(password[i] >= '0' && password[i] <= '9')) {
            checkValidChars = false;
        }
    }

    if (!checkValidChars) {
        document.getElementById("errorPass1").innerHTML = "* מותר להשתמש רק בתווים באנגלית";
        return false;
    }

    if ((checkSpecialSign && checkNumbers) || password.length > 10) {
        document.getElementById("errorPass1").innerHTML = "הסיסמה חזקה";
    }
    else if (checkSpecialSign || checkNumbers) {
        document.getElementById("errorPass1").innerHTML = "הסיסמה בינונית";
    }
    else {
        document.getElementById("errorPass1").innerHTML = "הסיסמה חלשה";
    }

    return true;
}


function togglePassword() {
    var passwordField = document.getElementById("txtPass1");
    var passwordButton = document.getElementById("togglePasswordButton");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordButton.style.backgroundColor = "green"; 
    } else {
        passwordField.type = "password";
        passwordButton.style.backgroundColor = "red"; 
    }
}


// אימות סיסמה
function ConfirmPassword() {
    var confirm = document.getElementById("txtPass2").value;
    var password = document.getElementById("txtPass1").value;

    if (confirm === "") {
        document.getElementById("errorPass2").innerHTML = "* השדה לא יכול להיות ריק";
        return false;
    } else if (confirm == password) {
        document.getElementById("errorPass2").innerHTML = "";
        return true;
    } else {
        document.getElementById("errorPass2").innerHTML = "* הסיסמאות אינן תואמות";
        return false;
    }
}

function mail() {
    var email = document.getElementById("txtEmail").value;
    var checkShtrudel = false;
    var len = email.length;
    var placeOfShtrudel = 0;
    var countShtrudel = 0;
    var strAfterShtrudel = "";
    var checkNumber = false;
    var checkCorrectEmail = false;
    var countSmallLetters = 0;
    var checkValidChars = true; 

    if (email == "") {
        document.getElementById("errorEmail").innerHTML = "* השדה לא יכול להיות ריק";
        return false;
    }
    for (var i = 0; i < len; i++) {
        if (email[i] == " ") {
            document.getElementById("errorEmail").innerHTML = "* האימייל לא יכול להכיל רווחים";
            return false;
        }
    }
    for (var i = 0; i < len - 1; i++) {
        if (email[i] == "." && email[i + 1] == ".") {
            document.getElementById("errorEmail").innerHTML = "* האימייל לא יכול להכיל שתי נקודות ברצף";
            return false;
        }
    }
    for (var i = 0; i < len; i++) {
        var isSpecial = (email[i] == '.' || email[i] == '@' || email[i] == '_' || email[i] == '-');

        if (email[i] == '@') {
            countShtrudel++;
            placeOfShtrudel = i;
            checkShtrudel = true;
        }

        if (!isSpecial && !(email[i] >= 'a' && email[i] <= 'z') &&
            !(email[i] >= 'A' && email[i] <= 'Z') &&
            !(email[i] >= '0' && email[i] <= '9')) {
            checkValidChars = false;
        }
    }

    if (!checkValidChars) {
        document.getElementById("errorEmail").innerHTML = "*  אסור סימנים מיוחדים";
        return false;
    }

    if (countShtrudel == 1) {
        if (placeOfShtrudel < 6) {
            document.getElementById("errorEmail").innerHTML = "* חובה לפחות שישה תווים לפני ה(@)";
            return false;
        } else {
            for (var i = 0; i < placeOfShtrudel; i++) {
                if (email[i] >= '0' && email[i] <= '9') {
                    checkNumber = true;
                }
                else if ((email[i] >= 'a' && email[i] <= 'z') || (email[i] >= 'A' && email[i] <= 'Z')) {
                    countSmallLetters++;
                }
            }
            if (countSmallLetters < 2) {
                document.getElementById("errorEmail").innerHTML = "* חובה לפחות 2 אותיות לפני ה(@)";
                return false;
            }
            else if (!checkNumber) {
                document.getElementById("errorEmail").innerHTML = "* חובה לפחות מספר אחד לפני ה(@)";
                return false;
            } else {
                for (var i = placeOfShtrudel + 1; i < len; i++) {
                    strAfterShtrudel += email[i];
                }

                if (strAfterShtrudel == "gmail.com" || strAfterShtrudel == "yahoo.com" ||
                    strAfterShtrudel == "hotmail.com" || strAfterShtrudel == "outlook.com" ||
                    strAfterShtrudel == "icloud.com" || strAfterShtrudel == "aol.com" ||
                    strAfterShtrudel == "mail.com" || strAfterShtrudel == "live.com" ||
                    strAfterShtrudel == "zoho.com" || strAfterShtrudel == "protonmail.com" ||
                    strAfterShtrudel == "yandex.com" || strAfterShtrudel == "msn.com" || strAfterShtrudel == "gmx.com" ||
                    strAfterShtrudel == "me.com" || strAfterShtrudel == "comcast.net") {
                    checkCorrectEmail = true;
                }

                if (!checkCorrectEmail) {
                    document.getElementById("errorEmail").innerHTML = "* אימייל לא תקין";
                    return false;
                } else {
                    document.getElementById("errorEmail").innerHTML = "";
                    return true;
                }
            }
        }
    } else if (countShtrudel > 1) {
        document.getElementById("errorEmail").innerHTML = "* חייב להיות רק שטרודל אחד (@)";
        return false;
    } else {
        document.getElementById("errorEmail").innerHTML = "* חייב להיות שטרודל (@)";
        return false;
    }
}



function GenderCheck() {
    var male = document.getElementById("genderMale");
    var female = document.getElementById("genderFemale");

    if (!male.checked && !female.checked) {
        document.getElementById("errorGender").innerHTML = "* יש לבחור מגדר";
        return false;
    } else {
        document.getElementById("errorGender").innerHTML = "";
        return true;
    }
}


//function CheckDate() {
//    var day = document.getElementById("day").value;
//    var month = document.getElementById("Month").value;
//    var year = document.getElementById("textDate").value;
//    var yearLength = year.length;
//    var isYearValid = true;

//    for (var i = 0; i < 4; i++) {
//        if (year[i] < '0' || year[i] > '9') {
//            isYearValid = false;
//        }
//    }

//    if (!isYearValid) {
//        document.getElementById("errorDay").innerHTML = "* השנה יכולה להכיל רק מספרים";
//        return false;
//    }

//    if ((day == "" || day == "בחר יום") && (month == "" || month == "בחר חודש") && (year == "")) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור יום, חודש ושנה";
//        return false;
//    }
//    else if ((day != "" && day != "בחר יום") && (month != "" && month != "בחר חודש") && (year == "")) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור שנה";
//        return false;
//    }
//    else if ((year != "") && (month == "" || month == "בחר חודש") && (day == "" || day == "בחר יום")) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור חודש ויום";
//        return false;
//    }
//    else if ((day == "" || day == "בחר יום") && (month != "" && month != "בחר חודש") && (year != "")) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור יום";
//        return false;
//    }
//    else if ((month != "" && month != "בחר חודש") && (day == "" || day == "בחר יום") && (year == "")) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור יום ושנה";
//        return false;
//    }
//    else if (day != "" && (month == "" || month == "בחר חודש") && (year == "")) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור חודש ושנה";
//        return false;
//    }

//    if ((month == 2 && day > 29) || (month == 2 && day == 29 && (year % 4 != 0 || (year % 100 == 0 && year % 400 != 0)))) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור יום תקין לחודש פברואר";
//        return false;
//    }
//    if ((month == 4 || month == 6 || month == 9 || month == 11) && day > 30) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור יום תקין לחודש זה";
//        return false;
//    }
//    if (year > 2025) {
//        document.getElementById("errorDay").innerHTML = "* אין להזין שנה עתידית";
//        return false;
//    }
//    if (2025 - year < 13) {
//        document.getElementById("errorDay").innerHTML = "* גיל ההרשמה לאתר חל מגיל 13";
//        return false;
//    }
//    if (2025 - year > 100) {
//        document.getElementById("errorDay").innerHTML = "* גיל ההרשמה לאתר הוא עד גיל 100";
//        return false;
//    }
//    if (yearLength == 0) {
//        document.getElementById("errorDay").innerHTML = "* יש לבחור שנה";
//        return false;
//    }
//    else {
//        var finalDate = (day + '-' + month + '-' + year);
//        document.getElementById("errorDay").innerHTML = "";
//        return true;
//    }
//}

function birthDate() {
    var birthDate = document.getElementById("txtBirthDate").value;
    var len = birthDate.length;
    var dashCount = 0;
    var parts = ["", "", ""];
    var currentPart = 0;

    if (birthDate == "") {
        document.getElementById("errorBirthDate").innerHTML = "* השדה לא יכול להיות ריק";
        return false;
    }

    for (var i = 0; i < len; i++) {
        if (birthDate[i] == "-") {
            dashCount++;
            currentPart++;
            if (currentPart > 2) {
                document.getElementById("errorBirthDate").innerHTML = "* פורמט תאריך לא תקין";
                return false;
            }
        } else {
            parts[currentPart] += birthDate[i];
        }
    }

    if (dashCount != 2) {
        document.getElementById("errorBirthDate").innerHTML = "* יש להזין תאריך בפורמט יום-חודש-שנה";
        return false;
    }

    var day = parts[0];
    var month = parts[1];
    var year = parts[2];

    if (day.length < 1 || day.length > 2 || month.length < 1 || month.length > 2 || year.length != 4) {
        document.getElementById("errorBirthDate").innerHTML = "* פורמט חלקי תאריך לא תקין";
        return false;
    }

    for (var i = 0; i < day.length; i++) {
        if (day[i] < '0' || day[i] > '9') {
            document.getElementById("errorBirthDate").innerHTML = "* יום חייב להכיל רק ספרות";
            return false;
        }
    }

    for (var i = 0; i < month.length; i++) {
        if (month[i] < '0' || month[i] > '9') {
            document.getElementById("errorBirthDate").innerHTML = "* חודש חייב להכיל רק ספרות";
            return false;
        }
    }

    for (var i = 0; i < year.length; i++) {
        if (year[i] < '0' || year[i] > '9') {
            document.getElementById("errorBirthDate").innerHTML = "* שנה חייבת להכיל רק ספרות";
            return false;
        }
    }

    var numDay = 0;
    var numMonth = 0;
    var numYear = 0;

    for (var i = 0; i < day.length; i++) {
        numDay = numDay * 10 + (day[i] - '0');
    }
    for (var i = 0; i < month.length; i++) {
        numMonth = numMonth * 10 + (month[i] - '0');
    }
    for (var i = 0; i < year.length; i++) {
        numYear = numYear * 10 + (year[i] - '0');
    }

    if (numDay < 1 || numDay > 31) {
        document.getElementById("errorBirthDate").innerHTML = "* יום חייב להיות בין 1 ל־31";
        return false;
    }
    if (numMonth < 1 || numMonth > 12) {
        document.getElementById("errorBirthDate").innerHTML = "* חודש חייב להיות בין 1 ל־12";
        return false;
    }

    var maxDay = 31;

    if (numMonth == 4 || numMonth == 6 || numMonth == 9 || numMonth == 11) {
        maxDay = 30;
    } else if (numMonth == 2) {
        maxDay = 28;
        if (numYear % 4 == 0 && (numYear % 100 != 0 || numYear % 400 == 0)) {
            maxDay = 29;
        }
    }

    if (numDay > maxDay) {
        document.getElementById("errorBirthDate").innerHTML = "* אין בחודש הזה יותר מ־" + maxDay + " ימים";
        return false;
    }

    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1; 
    var currentDay = currentDate.getDate();

    var age = currentYear - numYear;
    if (currentMonth < numMonth || (currentMonth == numMonth && currentDay < numDay)) {
        age--;
    }

    if (age < 10) {
        document.getElementById("errorBirthDate").innerHTML = "* הגיל חייב להיות לפחות 10";
        return false;
    }

    document.getElementById("errorBirthDate").innerHTML = "";
    return true;
}




function StartNumberValidity() {
    var phoneStart = document.getElementById("phoneStart").value;
    if (phoneStart == "" || phoneStart == "בחר") {
        return false;
    } else {
        return true;
    }
}

function PhoneNumber() {
    var number = document.getElementById("phoneNumber").value;
    var phoneStart = document.getElementById("phoneStart").value;
    var checkNumber = true;
    var len = number.length;
    var finalPhone;
    var checkStart = StartNumberValidity();

    if (checkStart && len == 0) {
        document.getElementById("errorPhoneNumber").innerHTML = "* השדה לא יכול להיות ריק";
        return false;
    }
    if (!checkStart && len == 0) {
        document.getElementById("errorPhoneNumber").innerHTML = "* השדה לא יכול להיות ריק ואנא בחר תחילה";
        return false;
    }
    if (!checkStart && len < 7) {
        document.getElementById("errorPhoneNumber").innerHTML = "* מספר הטלפון לא יכול להיות קטן מ-7 ואנא בחר התחלה";
        return false;
    }
    if (checkStart && len < 7) {
        document.getElementById("errorPhoneNumber").innerHTML = "* מספר הטלפון לא יכול להיות קטן מ-7";
        return false;
    }
    if (checkStart && len > 7) {
        document.getElementById("errorPhoneNumber").innerHTML = "* מספר הטלפון לא יכול להיות גדול מ-7";
        return false;
    }
    if (!checkStart && len > 7) {
        document.getElementById("errorPhoneNumber").innerHTML = "* מספר הטלפון לא יכול להיות גדול מ-7 ואנא בחר התחלה    ";
        return false;
    }
    if (number[0] == 0) {
        document.getElementById("errorPhoneNumber").innerHTML = "* לאחר תחלית מספר הטלפון אינו יכול להתחיל ב 0   ";
        return false;
    }
    if (len == 7 &&!checkStart) {
        document.getElementById("errorPhoneNumber").innerHTML = "* אנא בחר התחלה";
        return false;
    }
    else {
        for (var i = 0; i < len; i++) {
            if (!(number[i] >= '0' && number[i] <= '9')) {
                checkNumber = false;
            }
        }
        if (!checkNumber) {
            document.getElementById("errorPhoneNumber").innerHTML = "* מספר הטלפון מורכב רק מספרות";
            return false;
        }
        else {
            finalPhone = phoneStart +'-'+ number;
            document.getElementById("errorPhoneNumber").innerHTML = "";
            return true;
        }
    }
}
function validateForm() {
    var flag = true;
    flag = PrivateName() && flag;
    flag = FamilyName() && flag;
    flag = UserNameCheck() && flag;
    flag = mail() && flag;
    flag = CheckPassword() && flag;
    flag = ConfirmPassword() && flag;
    flag = GenderCheck() && flag;
    flag = PhoneNumber() && flag;   
    //flag = CheckDate() && flag;   


    if (flag) {
        alert("נרשמת לאתר בהצלחה!");
        return true;
    }

    else {
        alert("ההרשמה לא צלחה!, אנא ראו הערות שגיאה:");
        return false;

    }

  
}
