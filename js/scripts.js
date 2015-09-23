<<<<<<< HEAD
var countDown = function(number) {
  var numberList = [];
  for (var i = 1; i <= number; i++) {
    numberList.unshift(i);
  }
  return numberList;
}

$(document).ready(function() {
  $("form#beers").submit(function(event) {
    var number = parseInt($("input#number").val());
    var numArray = countDown(number);
    var index = 0;
  
    numArray.forEach(function(entry) {
      $(".song").append("<br> " + entry + " bottles of beer on the wall, " + entry + " bottles of beer. Take one down and pass it around, " + entry + " bottles of beer on the wall. " );
      index++;
    });
    
    $(".finalLine").append("<br> No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, " + number +  " bottles of beer on the wall!");
    
    event.preventDefault();
  });
});
=======
Example of Scripts


// var factorial = function(number) {
//   if (number === 0) {
//     return 1;
//   } else {
//
//     return (number * factorial(number-1));
//   }
// }
//
//
// $(document).ready(function() {
//   $("form#factorial").submit(function(event) {
//     var number= parseInt($("input#number").val());
//     var result = factorial(number);
//
//       $(".number").text(number)
//       $(".final").text(result)
//        $("#result").show()
//
//
//     event.preventDefault();
//   });
// });
>>>>>>> parent of 25df2cb... Add initial files
