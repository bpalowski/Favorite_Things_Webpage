$(document).ready(function(){
  $('#favoriteForm').submit(function(event){
    debugger;

    var name = $('#nameInput').val();
    var food = $('#food').val();
    var animal = $('#animals').val();
    var places = $('#places').val();

    var firstArrays = [name, food, animal, places];
    $("#returnArray").text(firstArrays);

    var secondArrays = [];
    secondArrays.push(firstArrays[0], firstArrays[2], firstArrays[1]);
    $("ul#secondArrayPush").prepend("<li>"+secondArrays[0]+"</li>");
    $("ul#secondArrayPush").prepend("<li>"+secondArrays[1]+"</li>");
    $("ul#secondArrayPush").prepend("<li>"+secondArrays[2]+"</li>");
    $("ul#secondArrayPush").prepend("<li>"+secondArrays[3]+"</li>");

    event.preventDefault();
  });
});
