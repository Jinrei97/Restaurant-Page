import * as index_css from "./index.css";
import * as home_css from "./home.css";
import * as contacts_css from "./contact_us.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadContact from "./contact_us.js";
import left from "./left.jpg"
import center from "./center.jpg"
import right from "./right.jpg"

const div_content = document.querySelector("#content");
const btn_home = document.querySelector(".home");
const btn_menu = document.querySelector(".menu");
const btn_contact = document.querySelector(".contact");

function clearContent() {
    div_content.replaceChildren();
};
function changeContentClass(newClass) {
    div_content.className = newClass;
}

btn_home.addEventListener("click", e => {
    clearContent();
    loadHome(left, center, right);
    changeContentClass("home");
    console.log("loaded_home");
});

btn_menu.addEventListener("click", e => {
    clearContent();
    loadMenu();
    changeContentClass("menu");
    console.log("loaded_menu");
});

btn_contact.addEventListener("click", e => {
    clearContent();
    loadContact();
    changeContentClass("contacts");
    console.log("loaded_contacts");
});

btn_home.click();