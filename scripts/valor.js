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
                    $(".room").html(`<p class="lead room">Room: <span class='badge badge-primary'>${data[i].room}</span></p>`)
                    $(".door").html(`<p class="lead door">Door Info: <span class='badge badge-primary'>${data[i].doorInfo}</span></p>`)
                    $(".pin").html(`<p class="lead pin">Pinning: <span class='badge badge-primary'>${data[i].pinning}</span></p>`)
                    $(".lever").html(`<p class="lead lever">Lever/Entry Hardware: <span class='badge badge-primary'>${data[i].leverHardware}</span></p>`)
                    
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