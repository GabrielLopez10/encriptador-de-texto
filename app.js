document.addEventListener("DOMContentLoaded", () => {
    const encriptarButton =
        document.getElementsByClassName("encriptar__button")[0];
    const desencriptarButton = document.getElementsByClassName(
        "desencriptar__button"
    )[0];
    const copiarButton = document.getElementsByClassName("copiar__button")[0];
    const inputTextarea = document.getElementsByTagName("textarea")[0];
    const outputTextarea = document.getElementsByTagName("textarea")[1];

    const cifrado = {
        e: "enter",
        i: "imes",
        a: "ai",
        o: "ober",
        u: "ufat",
    };

    const descifrado = Object.fromEntries(
        Object.entries(cifrado).map(([key, value]) => [value, key])
    );

    //Botón Copiar permanece oculto si no se efectua acción alguna
    copiarButton.style.display = "none";

    function encriptar(texto) {
        return texto
            .toLowerCase()
            .split("")
            .map((char) => cifrado[char] || char)
            .join("");
    }

    function desencriptar(texto) {
        let resultado = texto.toLowerCase();
        Object.entries(descifrado).forEach(([key, value]) => {
            resultado = resultado.replaceAll(key, value);
        });
        return resultado;
    }

    // Add click event listener to the first button
    encriptarButton.addEventListener("click", () => {
        if (inputTextarea.value.trim() !== "") {
            outputTextarea.value = encriptar(inputTextarea.value);
            copiarButton.style.display = "block";
        } else {
            outputTextarea.value = "";
            copiarButton.style.display = "none";
        }
    });

    desencriptarButton.addEventListener("click", () => {
        if (inputTextarea.value.trim() !== "") {
            outputTextarea.value = desencriptar(inputTextarea.value);
            copiarButton.style.display = "block";
        } else {
            outputTextarea.value = "";
            copiarButton.style.display = "none";
        }
    });

    copiarButton.addEventListener("click", () => {
        let copiarTexto = navigator.clipboard.writeText(outputTextarea.value);
        alert("Text copied to clipboard!");
        return copiarTexto;
    });
});
