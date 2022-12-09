let ex = /\w{2,15}@hyl\.cl/gim
let str1 ="RegExr was created by gskinner.com. bnass@hyl benjamin nass bnass@hyl.cl <bnass@hyl.cl>"
let vari = str1.match(ex)
console.log(vari)