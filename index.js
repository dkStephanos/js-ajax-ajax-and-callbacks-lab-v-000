function displayError() {
  document.getElementById("errors").innerHTML = "error";
}

$(document).ready(function (){
});






document.addEventListener("DOMContentLoaded", function(event) {
  Handlebars.registerPartial("authorPartial", document.getElementById("author-partial-template").innerHTML)
