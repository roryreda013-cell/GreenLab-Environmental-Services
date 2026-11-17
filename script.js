// Mobile Navigation
const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav");

toggle.addEventListener("click", () => {
    nav.classList.toggle("open");
});

document.querySelectorAll(".nav a").forEach(a => {
    a.addEventListener("click", () => {
        nav.classList.remove("open");
    });
});


// Language Toggle
let lang = "en";

document.getElementById("langToggle").addEventListener("click", () => {

    lang = lang === "en" ? "ar" : "en";

    // Change page direction and language
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";

    // Translate all elements
    document.querySelectorAll("[data-en][data-ar]").forEach(el => {

        const control = el.querySelector("input, textarea");

        if (control) {
            el.childNodes[0].textContent = el.dataset[lang];
        } else {
            el.textContent = el.dataset[lang];
        }

    });

    // Change button text
    document.getElementById("langToggle").textContent =
        lang === "en" ? "العربية" : "English";

});


// Current Year
document.getElementById("year").textContent = new Date().getFullYear();


// Contact Form
document.getElementById("contactForm").addEventListener("submit", e => {

    e.preventDefault();

    const d = new FormData(e.target);

    const subject = encodeURIComponent(
        "GreenLab website inquiry — " + d.get("name")
    );

    const body = encodeURIComponent(
        "Name: " + d.get("name") +
        "\nCompany: " + d.get("company") +
        "\nEmail: " + d.get("email") +
        "\nPhone: " + d.get("phone") +
        "\n\nMessage:\n" + d.get("message")
    );

    window.location.href =
        "mailto:info@greenlab-eg.com?subject=" + subject + "&body=" + body;

});