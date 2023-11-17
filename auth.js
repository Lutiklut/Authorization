var container = document.createElement("div");
container.classList.add("container");
document.body.appendChild(container);

var head = document.createElement("h1");
head.classList.add("head");
head.innerText = "Sign in";
container.appendChild(head);

var formArea = document.createElement("form");
formArea.id = "form-area";
container.appendChild(formArea);

var logInput = document.createElement("input");
logInput.setAttribute("id", "email");
logInput.setAttribute("type", "email");
logInput.setAttribute("name", "email");
logInput.setAttribute("required", true);
logInput.placeholder = "👤 User name";

formArea.appendChild(logInput);

var passInput = document.createElement("input");
passInput.setAttribute("id", "password");
passInput.setAttribute("type", "password");
passInput.setAttribute("name", "password");
passInput.setAttribute("placeholder", "🔒 ******");
passInput.setAttribute("required", true);
formArea.appendChild(passInput);

var login = document.createElement("button");
login.classList.add("login");
login.innerText = "Login";
login.setAttribute("type", "submit");
formArea.appendChild(login);

const form = document.getElementById("form-area");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  const reqtData = { email, password };

  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(reqtData),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        throw new Error("Ошибка отправки");
      }
    })
    .then((data) => {
      console.log("Успешная аутентификация", data);
    })
    .catch((error) => {
      console.error("Ошибка:", error);
    });
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";
});
