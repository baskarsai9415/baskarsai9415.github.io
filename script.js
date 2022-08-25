const home = document.getElementById("home");
const contact = document.getElementById("contact");
const about = document.getElementById("project")

home.addEventListener("click",homeBtn);
function homeBtn(){
  window.open("http://127.0.0.1:5500/index.html")
};

contact.addEventListener("click",contactBtn);
function contactBtn(){
  window.open("http://127.0.0.1:5500/contact.html")
};

contact.addEventListener("click",aboutBtn);
function aboutBtn(){
  window.open("http://127.0.0.1:5500/about.html")
};