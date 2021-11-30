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
