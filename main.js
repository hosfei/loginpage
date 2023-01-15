let userNameInput = document.getElementById("userNameInput")
let passwordInput = document.getElementById("passwordInput")
let loginBtn = document.getElementById("loginBtn")
let signUpBtn = document.getElementById("signUpBtn")
let newUserName = document.getElementById("newUserName")
let newPassword = document.getElementById("newPassword")

let demo = document.getElementById("demo")
if (localStorage.getItem("users")) {
} else {
  let users = [
    { id: 0, userName: "janne", password: "test" },
    { id: 1, userName: "hossein", password: "feili" },
  ]
  localStorage.setItem("users", JSON.stringify(users))
}

loginBtn.addEventListener("click", () => {
  let users = JSON.parse(localStorage.getItem("users"))
  let user = users.find(
    (user) => user.userName === userNameInput.value && user.password === passwordInput.value
  )
  if (user) {
    let loggedInUser = userNameInput.value
    localStorage.setItem("loggedInUser", loggedInUser)
    demo.innerHTML = `Logged in as ${loggedInUser}`
    let logoutBtn = document.createElement("button")
    logoutBtn.innerHTML = "Logga ut"
    logoutBtn.addEventListener("click", () => {
      localStorage.removeItem("loggedInUser")
      demo.innerHTML = ""
      logoutBtn.remove()
    })
    demo.appendChild(logoutBtn)
  } else {
    userDoesNotExist();
  }
});
