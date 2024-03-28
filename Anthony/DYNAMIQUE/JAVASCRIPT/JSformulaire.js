function updateTextArea() {
    var selectBox = document.getElementById("environnement");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    var textArea = document.getElementById("environnement_texte");

    if (selectedValue === "choisissez") {
        textArea.value = "";
    } else {
        textArea.value = selectedValue;
    }
}

function validateForm() {
    var codePostalInput = document.getElementById("code_postal");
    var codePostalValue = codePostalInput.value;

    if (!/^[0-9]{5}$/.test(codePostalValue)) {
        alert("Le code postal doit comporter 5 caractères numériques.");
        return false;
    }

    return true;
}