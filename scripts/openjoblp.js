function readMore() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("rmBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "Mai mult! &nbsp;\<i class\=\"fa fa-angle-down\"\>\<\/i\>"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "Mai puțin! &nbsp;\<i class\=\"fa fa-angle-up\"\>\<\/i\>"; 
    moreText.style.display = "inline";
  }
}

jQuery.noConflict();

jQuery(document).ready(function($) {
  $("#toggle").click(function() {
    var elem = $("#toggle").text();
    if (elem == "Vezi toată lista!") {     
      $("#toggle").text("Scurtează lista!");
      $("#list").show();
    } else {
      $("#toggle").text("Vezi toată lista!");
      $("#list").hide();
    }
  });
});
/*
$("figcaption").hide();
$("figure").each(function() {
    $(this).hover(function() {
        $(this).find("figcaption").slideDown('slow');
    }, function() {
        $(this).find("figcaption").slideUp('slow');
    });
});

*/