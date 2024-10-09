function changevaleur(selector) {
    const tempElements = document.querySelectorAll(selector);
    const selectedUnit = document.querySelector("select[name='snack']").value;
    if (selectedUnit === "°C") {
        tempElements[0].textContent = "24°";
        tempElements[1].textContent = "18°";
        tempElements[2].textContent = "27°";
        tempElements[3].textContent = "19°";
        tempElements[4].textContent = "21°";
        tempElements[5].textContent = "16°";
        tempElements[6].textContent = "26°";
        tempElements[7].textContent = "21°";
    } else {
        tempElements[0].textContent = "75°";
        tempElements[1].textContent = "64°";
        tempElements[2].textContent = "80°";
        tempElements[3].textContent = "66°";
        tempElements[4].textContent = "70°";
        tempElements[5].textContent = "61°";
        tempElements[6].textContent = "78°";
        tempElements[7].textContent = "70°";
    }
}