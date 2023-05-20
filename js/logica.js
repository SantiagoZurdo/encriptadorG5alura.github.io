const inputText = document.querySelector(".inputText");
const outputText = document.querySelector('.outputText');
const btnEncrypt = document.querySelector('.btnEncryptText');
const btnDecrypt = document.querySelector('.btnDecryptText');
const btnCopy = document.querySelector('.btnCopy');
const svgNotFound = document.querySelector('.svg-notfound-text-and-image');
const svgWarning = document.querySelector('.svg-warning');
let filterActive = false;

function disableButtons() {
  const buttons = document.querySelectorAll(".btnEncryptText, .btnDecryptText, .btnCopy");
  buttons.forEach(button => {
    button.disabled = true;
    button.style.backgroundColor = "#CCCCCC";
  });
}
function enableButtons() {
  const textLength = inputText.value.length;
  const buttons = document.querySelectorAll(".btnEncryptText, .btnDecryptText, .btnCopy");
  if (textLength > 0) {
    buttons.forEach(button => {
      button.disabled = false;
      button.style.backgroundColor = "#0A3871";
    });
  } else {
    disableButtons();
  }
}
function hideImage() {
  const textLength = inputText.value.length;
  svgNotFound.style.display = textLength > 0 ? "none" : "block";
}
function onAnimationEnd() {
  svgWarning.classList.remove("filter");
}
function encrypt() {
  svgWarning.classList.remove("filter");
  inputText.focus();
  const text = inputText.value;
  if (/[A-Z0-9Ññ"´!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g.test(text)) {
    if (!filterActive) {
      svgWarning.classList.add("filter");
      filterActive = true;
    }
    svgWarning.classList.add("rebote-activo");
    setTimeout(function() {
      svgWarning.classList.remove("rebote-activo");
      if (filterActive) {
        svgWarning.classList.remove("filter");
        filterActive = false;
      }
    }, 1000);
    return;
  }
  const result = text
    .replace(/e/g, 'enter')
    .replace(/i/g, 'imes')
    .replace(/a/g, 'ai')
    .replace(/o/g, 'ober')
    .replace(/u/g, 'ufat');
  outputText.value = result;
}
function decrypt() {
  inputText.focus();
  const text = inputText.value;
  if (/[A-Z0-9Ññ"´!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/g.test(text)) {
    if (!filterActive) {
      svgWarning.classList.add("filter");
      filterActive = true;
    }
    svgWarning.classList.add("rebote-activo");
    setTimeout(function() {
      svgWarning.classList.remove("rebote-activo");
      if (filterActive) {
        svgWarning.classList.remove("filter");
        filterActive = false;
      }
    }, 1000);
    return;
  }
  const result = text
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ai/g, 'a')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
  outputText.value = result;
}
function copyToClipboard() {
  outputText.select();
  document.execCommand('copy');
  alert('El contenido se ha copiado al portapapeles');
}
inputText.addEventListener("input", () => {
  enableButtons();
  hideImage();
  outputText.value = '';
});
btnEncrypt.addEventListener('click', encrypt);
btnDecrypt.addEventListener('click', decrypt);
btnCopy.addEventListener('click', copyToClipboard);
document.addEventListener('DOMContentLoaded', function() {
  const linkdn = document.querySelector('.svg-linkdn');
  const githb = document.querySelector('.svg-githb');

  linkdn.onclick = function() {
    window.open('https://www.linkedin.com/in/santiagozurdo/');
  };

  githb.onclick = function() {
    window.open('https://github.com/SantiagoZurdo');
  };
});
disableButtons();