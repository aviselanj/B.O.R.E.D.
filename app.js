'use strict'
const state = {
    randomActivity:[]
}
const fetched = fetch("http://www.boredapi.com/api/activity");

async function getData(){
    await fetched.then(response => response.json()).then(data => state.randomActivity=data);
console.log(state.randomActivity);
}
getData();
// JQuery UI
// selectable squares
$(function () {
    $("#selectable").selectable();
});


    $("#tags").autocomplete({
        source: availableTags
    });

// color animation
$(function () {
    var state = true;
    $("#button").on("click", function () {
        if (state) {
            $("#effect").animate({
                backgroundColor: "#aa0000",
                color: "#fff",
                width: 500
            }, 1000);
        } else {
            $("#effect").animate({
                backgroundColor: "#fff",
                color: "#000",
                width: 240
            }, 1000);
        }
    
        state = !state;
    });
});
