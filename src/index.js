import * as css from "./index.css";
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

loadHome(left, center, right);

btn_home.addEventListener("click", e => {
    clearContent();
    loadHome(left, center, right);
    console.log("loaded_home");
});

btn_menu.addEventListener("click", e => {
    clearContent();
    loadMenu();
    console.log("loaded_menu");
});

btn_contact.addEventListener("click", e => {
    clearContent();
    loadContact();
    console.log("loaded_menu");
});