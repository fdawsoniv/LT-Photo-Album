$(document).ready(function() {
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
