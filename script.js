const buttonEncrypt = document.getElementById('button-encrypt');
const buttonDecrypt = document.getElementById('button-decrypt');
const introParagraph = document.getElementById('intro-paragraph');
const copyButton = document.getElementById('copyButton');

buttonEncrypt.addEventListener('click', () => {
  encryptOrDecrypt('encrypt');
});

buttonDecrypt.addEventListener('click', () => {
  encryptOrDecrypt('decrypt');
});

function encryptOrDecrypt(action) {
  const textEntry = document.getElementById('input-area').value;
  const outputAreaText = document.getElementById('output-area-text');
  const hideArea = document.getElementById('hide-area');
  const hideArea2 = document.getElementById('hide-area2');
  let resultText = '';

  if (action === 'encrypt') {
    resultText = encryptText(textEntry);
  } else if (action === 'decrypt') {
    resultText = decryptText(textEntry);
  }

  hideArea.style.display = 'none';
  hideArea2.style.display = 'none';

  // Atualiza o texto na área de saída
  outputAreaText.innerHTML = resultText;

  // Exibe o botão de copiar se houver resultado
  copyButton.style.display = resultText.trim() !== '' ? 'block' : 'none';

  // Ajusta o tempo da imagem e do parágrafo de introdução
  if (textEntry.trim() === '') {
    hideArea.style.display = 'block';
    hideArea2.style.display = 'block';
    outputAreaText.style.display = 'none';
    introParagraph.style.display = 'block';
  } else {
    hideArea.style.display = 'none';
    hideArea2.style.display = 'none';
    outputAreaText.style.display = 'block';
    introParagraph.style.display = 'none';
  }
}

function encryptText(text) {
  return text
    .split('')
    .map(char => {
      // Substitua cada letra por sua correspondência criptografada
      switch (char) {
        case 'a': return 'ai';
        case 'e': return 'enter';
        case 'i': return 'imes';
        case 'o': return 'ober';
        case 'u': return 'ufat';
        default: return char;
      }
    })
    .join('');
}

function decryptText(text) {
  return text
    .replace(/ai/g, 'a')
    .replace(/enter/g, 'e')
    .replace(/imes/g, 'i')
    .replace(/ober/g, 'o')
    .replace(/ufat/g, 'u');
}

// Simula a saída da imagem e a exibição do resultado
setTimeout(function () {
  document.getElementById('hide-area').style.display = 'block';
  document.getElementById('hide-area2').style.display = 'block';
  document.getElementById('output-area-text').style.display = 'block';
}, 3000);

function execCopy() {
  const outputAreaText = document.getElementById('output-area-text');
  const textToCopy = outputAreaText.innerText;

  // Código para copiar o texto para a área de transferência
  navigator.clipboard.writeText(textToCopy).then(function () {
    alert('Texto copiado');
  }).catch(function (err) {
    console.error('Erro ao copiar texto: ', err);
  });
}
