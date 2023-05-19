let darkMode = document.querySelector("#darkmode");
darkMode.onclick = () => {
  if (darkMode.classList.contains("bx-moon")) {
    darkMode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("color");
  } else {
    darkMode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("color");
  }
};
let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");
menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("open");
};
