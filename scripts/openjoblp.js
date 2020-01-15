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

    $('.view-control').on('click', function(event) {
        $(this).prev().prev().is(":visible")?$(this).text("Mai mult! +"):$(this).text("Mai putin! -");
        $(this).prev().prev().toggle('show');
    });
    
});
