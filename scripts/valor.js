$(document).ready(function () {
    $.get('https://cors-anywhere.herokuapp.com/http://valor-hs.ryansteven.com/Basement2.json').done(function (data) {
        console.log(data);
        buttonClick(data);
    }).fail(function (data) {
        console.log('Error: ' + data);
    });
})

function buttonClick(data) {
    $("button").on("click", function () {
        var clickedRoom = $(this).attr("data-room-number")
        for (let i = 0; i < data.length; i++) {
            if (clickedRoom == data[i].room) {
                $(".room").text("Room: " + data[i].room)
                $(".door").text("Door Info: " + data[i].doorInfo)
                $(".pin").text("Pinning: " + data[i].pinning)
                $(".lever").text("Lever/Entry Hardware: " + data[i].leverHardware)
            }
        }
    })
}