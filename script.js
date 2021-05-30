var navbar = document.getElementsByClassName("navbar")[0];
var searchBtn = document.getElementById("search-btn");
var search = document.getElementById("search");
var isOpen = false;

searchBtn.addEventListener("click", () => {
  if (isOpen) {
    navbar.classList.remove("search-open");
    search.classList.remove("searchbox-open");
    isOpen = false;
  } else {
    navbar.classList.add("search-open");
    search.classList.add("searchbox-open");
    isOpen = true;
  }
});

var toggleBtn = document.getElementsByClassName("toggle-button")[0];
var topNav = document.getElementsByClassName("topnav")[0];
var escapeBtn = document.getElementsByClassName("escape-button")[0];
var navBarRight = document.getElementsByClassName("navbar-right")[0];
var navBarBottom = document.getElementsByClassName("navbar-bottom")[0];
var shopAll = document.getElementsByClassName("shop-all")[0];
var mainContainer = document.getElementsByClassName("main-container")[0];
var mainDetails = document.getElementsByClassName("main-details")[0];

toggleBtn.addEventListener("click", () => {
  topNav.classList.add("active-bar");
  toggleBtn.style.display = "none";
  navBarRight.style.display = "none";
  escapeBtn.style.display = "flex";
  navBarBottom.style.display = "inline-flex";
  shopAll.removeAttribute("style");
  mainContainer.style.display = "none";
  mainDetails.style.display = "none";
});

escapeBtn.addEventListener("click", () => {
  topNav.classList.remove("active-bar");
  toggleBtn.removeAttribute("style");
  navBarRight.style.display = "inline-flex";
  escapeBtn.style.display = "none";
  navBarBottom.style.display = "none";
  shopAll.style.display = "none";
  mainContainer.removeAttribute("style");
  mainDetails.removeAttribute("style");
});

//login button
var loginBtn = document.getElementsByClassName("login-btn")[0];
var logoutBtn = document.getElementsByClassName("logout-btn")[0];
var login = document.getElementsByClassName("login-mobile")[0];
var account = document.getElementsByClassName("account-mobile")[0];
var searchBtnBottom = document.getElementById("search-btn-bottom");

loginBtn.addEventListener("click", () => {
  account.classList.add("active-account");
  login.style.display = "none";
  searchBtnBottom.style.background = "#666666";
});

logoutBtn.addEventListener("click", () => {
  login.style.removeProperty("display");
  account.classList.remove("active-account");
  searchBtnBottom.removeAttribute("style");
});
