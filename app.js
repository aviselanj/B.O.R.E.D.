'use strict'
// get data
const state = {
    randomActivity:[]
}


async function getData(){
    try{
        const request = await fetch("http://www.boredapi.com/api/activity");
        const data = await request.json();
        state.randomActivity = data;
        console.log(data);
       
    } catch(error){
        console.log(error)
    } finally{
        console.log(state.randomActivity);
    }
     //fetched.then(response => response.json()).then(data => state.randomActivity=data);

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
