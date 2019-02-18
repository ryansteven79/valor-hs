$(document).ready(function () {
    $.get('https://cors-anywhere.herokuapp.com/https://valor-hs.ryansteven.com/Basement2.json').done(function (data) {
        console.log(data);
        createButtons(data);
        buttonClick(data);
    }).fail(function (data) {
        console.log('Error: ' + data);
    });

    function buttonClick(data) {
        $("button").on("click", function () {
            var clickedRoom = $(this).attr("data-room-number")
            for (let i = 0; i < data.length; i++) {
                if (clickedRoom == data[i].room) {
                    $(".room").html(`<h2>Room: <span class='badge badge-primary'>${data[i].room}</span></h2>`)
                    $(".door").html(`<h2>Door Info: <span class='badge badge-primary'>${data[i].doorInfo}</span></h2>`)
                    $(".pin").html(`<h2>Pinning: <span class='badge badge-primary'>${data[i].pinning}</span></h2>`)
                    $(".lever").html(`<h2>Lever/Entry Hardware: <span class='badge badge-primary'>${data[i].leverHardware}</span></h2>`)
                    
                    // $(".room").text("Room: " + data[i].room)
                    // $(".door").text("Door Info: " + data[i].doorInfo)
                    // $(".pin").text("Pinning: " + data[i].pinning)
                    // $(".lever").text("Lever/Entry Hardware: " + data[i].leverHardware)
                }
            }
        })
    }
    
    function createButtons(data) {
        for (var i = 0; i < data.length; i++) {
            var newBtn = $("<button>");
            newBtn.text(data[i].room);
            newBtn.addClass("btn btn-success m-2 grnButton p-3");
            newBtn.attr("data-room-number", data[i].room);
            $(".valor-cards").append(newBtn);
        }
    }
    
})