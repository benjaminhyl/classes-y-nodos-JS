let paragraph = "RegExr was created by gskinner.com. llkjb8890097vbb ..jjh99u98tgb11/12/2222 11/33/3434 Edit the Expression & Text to see matches."
let expReg = /[\d]{2}\/([\d]{2}\/[\d]{4})/gim;
let matches = paragraph.match(expReg);
console.log(matches)

