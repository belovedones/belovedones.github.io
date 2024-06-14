
'use strict';

var
qrcodes = [
    /* with all available options: */
     new QRCode({

         msg   :  'https://belovedones.github.io/shakouri/farah-and-hamidreza/'
        ,dim   :   256
        ,pad   :   4
        ,mtx   :  -1
        ,ecl   :  "H"
        ,ecb   :   1
        ,pal   : ["#037", "#f2f4f8"]
        ,vrb   :   0

    })
];


for( var c = 0; c < qrcodes.length; c++ ) {

    document.body.appendChild( qrcodes[ c ] );
}

console.log('done')