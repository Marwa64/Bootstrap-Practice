$(document).ready(function(){
  $("#myCarousel").carousel({interval: 5000});
  $("#carouselButton").click(function(){
    if ($("#carouselButton").children("span").hasClass("fa-pause")){
      $("#myCarousel").carousel('pause');
      $("#carouselButton").html("<span class='fa fa-play'></span>");
    } else {
      $("#myCarousel").carousel('cycle');
      $("#carouselButton").html("<span class='fa fa-pause'></span>");
    }
  });
  $("#loginButton").click(function() {
    $("#loginModal").modal("show");
  });
  $("#reserveButton").click(function() {
    $("#reserveModal").modal("show");
  });
});
