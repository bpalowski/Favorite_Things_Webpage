$(document).ready(function(){
  $('#favoriteForm').submit(function(event){
    debugger;

    var name = $('#nameInput').val();
    var food = $('#food').val();
    var animals = $('#animals').val();
    var places = $('#places').val();

    var firstArrays = [name, food, animals, places];
    $("#returnArray").text(firstArrays);

    var secondArrays = [];
    secondArrays.push(firstArrays[0], firstArrays[2], firstArrays[1]);

    console.log(food);
    event.preventDefault();
  });
});
