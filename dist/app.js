import QRCode from 'qrcode';
const inputText = document.getElementById('inputText');
const generateBtn = document.getElementById('generateBtn');
const qrcodeDiv = document.getElementById('qrcode');
generateBtn.addEventListener('click', () => {
    const text = inputText.value;
    if (text) {
        // Generišemo QR kod
        QRCode.toCanvas(qrcodeDiv, text, { width: 200 }, (error) => {
            if (error) {
                console.error(error);
                alert('Došlo je do greške pri generisanju QR koda.');
            }
        });
    }
    else {
        alert('Molimo unesite neki tekst.');
    }
});
