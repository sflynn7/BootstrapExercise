$(document).ready(function() {
  console.log("ready!");
  $("button").html("Click me to change color!")
  $("button").on("click", function( event ) {
        $("h1").toggleClass( 'colorchange' );
  });
});
