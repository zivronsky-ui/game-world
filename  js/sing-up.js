function checkForm(){
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirm-password").value;

  const userError = document.getElementById("user");
  const passError = document.getElementById("pass");
  const confirmError = document.getElementById("conf");

  let check = true;

  // בדיקה 1 – שם משתמש לפחות 8 תווים
  if (username.length < 8) {
    userError.innerText = "The username must be at least 8 characters long.";
    check = false;
  } else {
    userError.innerText = "";
  }

  // בדיקה 2 – סיסמה: אות גדולה, אות קטנה, מספר, בדיוק 8 תווים
  const pattern = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  if (!pattern.test(password)) {
    passError.innerText = "Invalid password – must include an uppercase letter, a lowercase letter, a number and be 8 characters long";
    check = false;
  } else {
    passError.innerText = "";
  }
  if (password !== confirmPassword) {
    confirmError.innerText = "The passwords do not match";
    check = false;
  } else {
    confirmError.innerText = "";
  }

  return check; // הטופס יישלח רק אם שלושת הבדיקות הצליחו
}