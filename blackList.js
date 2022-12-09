let blackList = [
    "edwin59@gmail.com", 
    "pzieme@beer.com",
    "rohan.justice@jones.net",
    "malachi43@yahoo.com",
    "kupton@yahoo.com",
    "piper01@gmail.com",
    "wuckert.everardo@hotmail.com",
    "pfeffer.alvis@gmail.com",
    "astrid41@schmitt.com",
    "elvis78@gmail.com"]

let list = [
    "monserrat00@yahoo.com",
    "gerald82 @heller.info",
    "hmoore @gmail.com",
    "lucas03 @gmail.com",
    "edwin59@gmail.com", 
    "pzieme@beer.com",
    "rohan.justice@jones.net",
    "malachi43@yahoo.com",
    "kupton@yahoo.com",
    "piper01@gmail.com",
    "wuckert.everardo@hotmail.com",
    "pfeffer.alvis@gmail.com",
    "astrid41@schmitt.com",
    "elvis78@gmail.com"
    ]
    let final = list.filter(item => !blackList.includes(item))
    console.log(final)