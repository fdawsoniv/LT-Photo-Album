$(document).ready(function() {
    // test - see console to prove that non-integers, and integers outside the accepted range will fail the test as expected
    var input = "a";
    console.assert(Number.isInteger(input) && (input >= 1 && input <= 100), "non-numbers will not be accepted");
    input = "#";
    console.assert(Number.isInteger(input) && (input >= 1 && input <= 100), "special characters will not be accepted");
    input = 105;
    console.assert(Number.isInteger(input) && (input >= 1 && input <= 100), "numbers over 100 will fail");
    input = 2.5;
    console.assert(Number.isInteger(input) && (input >= 1 && input <= 100), "decimals will also fail");
    input = 5;
    console.assert(Number.isInteger(input) && (input >= 1 && input <= 100), "whole numbers between 1 and 100 are A-OK");
  // end test section
  
    $("#getAlbum").on("click", function(){
      var input = Number(document.querySelector('#album').value);
      if (!Number.isInteger(input) || input < 1 || input > 100) {
        $("#albumResult").html("Please enter a number from 1-100");
        return;
      }
      $.getJSON('https://jsonplaceholder.typicode.com/photos', function(json) {
       json = json.filter(function(val) {
          return (val.albumId == input);
          });
        var html = "";
       json.forEach(function(val) {
          var keys = Object.keys(val);
          html += "<div>";
          keys.forEach(function(key) {
            if (key == "id") {
              html += "<strong>" + key + "</strong>: " + val[key] + " ";
            }
            if (key == "title") {
              html += "<strong>" + key + "</strong>: " + val[key] + " ";
            }   
            });
          html += "</div><br>";
          });
        $("#albumResult").html(html);
      });
    });
  });
