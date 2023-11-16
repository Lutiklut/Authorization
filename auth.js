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
