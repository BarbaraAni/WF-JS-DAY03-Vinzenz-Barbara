function ages(year) {
    var thisyear = new Date().getFullYear();
    var age = thisyear - year
    document.write(age)
}

ages(1999);


function hero(name, cut) {
    var res = name.substring(0,12);
    console.log(res);
}

hero ('I am a hero from World of Warcraft')