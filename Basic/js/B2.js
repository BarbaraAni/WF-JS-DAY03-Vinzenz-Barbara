var cut;
function hero(name, cut) {
    //var cut = (12);
    //var name = "I am a hero from World of Warcraft";
    var res = name.substring(cut);
    console.log(res);
}

hero("I am a hero from World of Warcraft", (0, 12));