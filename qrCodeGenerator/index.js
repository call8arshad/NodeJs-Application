'use strict';

const QRCode  = require('qrcode');

let input             = process.env.INPUT;
const OUTPUT_FORMAT   = process.env.OUTPUT_FORMAT;
const FILE_WITH_PATH  = process.env.OUTPUT_FILE || '/tmp/qrTest.png';

if (!input) input = JSON.stringify({
  name: 'Arshad Khan',
  mobile: '1234567890',
  addr: 'Bengaluru'
});


// Generate QRCode and print to the console
function genQR(input, output) {
  const _done = (err, resp, apiName) => {
    if (err) throw err;
    console.log(`${apiName}:: QR Code for input: <${input}> ::`, resp || 'generated');
  }

  switch(output) {
    case 'url':
      QRCode.toDataURL(input, (err, url) => {
        _done(err, url, 'DataURL');
      });
      break;
    case 'string':
      QRCode.toString(input,  (err, string) => {
        _done(err, string, 'String');
      });
      break;
    case 'file' :
      QRCode.toFile(FILE_WITH_PATH, input, {
        errorCorrectionLevel: 'H',
        color: {
          // dark: '#00F',  // Blue dots
          dark: '#000',  // Black dots
          light: '#0000' // Transparent background
        }
      },  (err) => {
        _done(err, null, 'File');
      });
  }
}


genQR(input, OUTPUT_FORMAT);
