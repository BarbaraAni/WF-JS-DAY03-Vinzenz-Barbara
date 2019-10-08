
var hotel = {
    name:  "bobo",
    rooms: 20,
    available: 5,
    checkAvailable : function (input) {
        var input = document.getElementById("input").value;
        var button = document.getElementById("button");
        var res =Number(hotel.available-input);
        console.log(res);
        if(res >= 0) {
            console.log(res + "rooms available")
        } else {
            console.log("no rooms")
        }
    }
}
button.addEventListener("click", hotel.checkAvailable);