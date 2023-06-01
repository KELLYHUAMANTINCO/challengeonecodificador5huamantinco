let inputMensaje = document.getElementById("inputMessage");
let outputMensaje = document.getElementById("outputMessage");
let btnEncriptar = document.getElementById("btnEncrypt");
let btnDesencriptar = document.getElementById("btnDecrypt");
let btnCopiar = document.getElementById("btnCopy");
const correctContainer = document.querySelector('.correct-output');
const incorrectContainer = document.querySelector('.incorrect-output');

btnEncriptar.onclick = encriptarTexto;
btnDesencriptar.onclick = desencriptarTexto;
btnCopiar.onclick = copyToClipboard;

function encriptarTexto() {
    var texto = inputMensaje.value;

    correctContainer.style.display = 'none';
    incorrectContainer.style.display = 'none';

    if (inputMensaje.value == "") {
        incorrectContainer.style.display = 'flex';
    }

    else {
        texto = texto.replace(/e/g, 'enter');
        texto = texto.replace(/i/g, 'imes');
        texto = texto.replace(/a/g, 'ai');
        texto = texto.replace(/o/g, 'ober');
        texto = texto.replace(/u/g, 'ufat');

        outputMensaje.value = texto;

        correctContainer.style.display = 'flex';
    }
}

function desencriptarTexto() {
    var texto = inputMensaje.value;
    texto = texto.replace(/ai/g, 'a');
    texto = texto.replace(/enter/g, 'e');
    texto = texto.replace(/imes/g, 'i');
    texto = texto.replace(/ober/g, 'o');
    texto = texto.replace(/ufat/g, 'u');


    outputMensaje.value = texto;
}

function copyToClipboard() {

    navigator.clipboard.writeText(outputMensaje.value)
        .then(() => {
            alert("Texto copiado al portapapeles: " + outputMensaje.value);
            // Puedes mostrar una notificación o realizar otras acciones después de copiar el texto
        })
        .catch((error) => {
            alert("Error al copiar al portapapeles");
        });
}