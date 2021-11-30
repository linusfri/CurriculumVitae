import "../sass/styles.scss";
import image from "../img/me1.png";

function addGlobalEventListener (type, selector, callback) {
    document.addEventListener(type, e => {
        if (e.target.id === selector) {
            callback(e);
        }
    });
}

addGlobalEventListener("click", "button", e => {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark");
    } else {
        document.body.classList.add("dark");
    }
    const icons = document.querySelectorAll("#icon");
    for (const icon of icons) {
        if (icon.classList.contains("dark")) {
            icon.classList.remove("dark");
        } else {
            icon.classList.add("dark");
        }
    }
});

window.onresize = () => {
    const section = document.querySelector("#main-section");
    if (window.innerWidth <= 1030) {
        if (section.classList.contains("content-section--grid1-2")) {
            section.classList.remove("content-section--grid1-2");
        }
    } else if (window.innerWidth > 1030) {
        section.classList.add("content-section--grid1-2");
    }
};
