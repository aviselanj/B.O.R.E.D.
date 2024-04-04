'use strict'
const base_url = "http://makeup-api.herokuapp.com/api/v1/products.json";
$.get(base_url + "?name=toy+pencil", function(data){
    console.log(data[0].name);
    console.log(data[0].image_link);
    console.log(data[0].website_link);
    console.log(data[0].api_featured_image)
} )
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
