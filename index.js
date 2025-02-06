import { countries } from "./countries";

document.addEventListener("DOMContentLoaded", () => {
    const templateSource = document.getElementById("country-template").innerHTML;
    const template = Handlebars.compile(templateSource);

    const countriesContainer = document.querySelector(".countries-container");
    countriesContainer.innerHTML = "";

    countries.forEach((country) => {
    const html = template(country);
    countriesContainer.innerHTML += html;
    });
});
