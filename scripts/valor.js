$(document).ready(function () {
    $.get('https://cors-anywhere.herokuapp.com/http://valor-hs.ryansteven.com/Basement.json').done(function (data) {
        console.log(data);
    }).fail(function (data) {
        console.log('Error: ' + data);
    });

})

// on click of room, grab data-room-number, assign that as room in JSON file