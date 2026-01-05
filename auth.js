function showSignup() {
  document.getElementById("signupBox").classList.remove("hidden");
}

function signup() {
  let users = JSON.parse(localStorage.getItem("users"));

  users.push({
    name: name.value,
    id: uid.value,
    phone: phone.value,
    email: semail.value,
    password: spassword.value,
    role: srole.value
  });

  localStorage.setItem("users", JSON.stringify(users));
  alert("Signup successful");
  location.reload();
}

function login() {
  let users = JSON.parse(localStorage.getItem("users"));

  let user = users.find(
    u => u.email === email.value &&
         u.password === password.value &&
         u.role === role.value
  );

  if (!user) {
    alert("Invalid login");
    return;
  }

  localStorage.setItem("currentUser", JSON.stringify(user));
  location.href = "pages/" + user.role + "-dashboard.html";
}
