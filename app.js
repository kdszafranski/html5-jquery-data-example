$(document).ready(function() {

  // $.data can read HTML5 data- attributes
  $(".thing-with-data").on("click", function() {
    console.log( $(this).data("potato") );

    // overwrite value of this property
    $(this).data("potato", "Bork!");

  });

});
