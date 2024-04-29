'use strict';

const QRCode  = require('qrcode');

let input     = process.env.INPUT;

if (!input) input = JSON.stringify({
  name: 'Arshad Khan',
  mobile: '1234567890',
  addr: 'Bengaluru'
});


// Generate QRCode and print to the console
function genQR(input) {
  QRCode.toDataURL(input, (err, resp) => {
    console.log(`QR Code for input: ${input}`, resp)
  })
}


genQR(input);