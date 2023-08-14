
jQuery.noConflict();

jQuery(document).ready(function($) {
		
	$('.view-control').on('click', function(event) {
		var extend = $(this).parents("blockquote").find(".extended");
		extend.is(":visible")?$(this).text("Vezi tot! +"):$(this).text("Vezi mai putin! -");
		extend.toggle('show');
	});
    
    $(".survey-form").attr('data-toggle','modal').attr('data-target','#surveyModal');
    
    $(".btn-primary").on('click', function(event) {
		var section = $(this).parents(".modal-content");
        section.hide();
        section.next().show();
	});
    
    $videoSrc = "https://www.youtube.com/embed/frffh0PtNZ8";
    
    // when the modal is opened autoplay it  
    $('#video-popup').on('shown.bs.modal', function (e) {

        // set the video src to autoplay and not to show related video. Youtube related video is like a box of chocolates... you never know what you're gonna get
        $("#video").attr('src',$videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0" ); 
    })
    
    // stop playing the youtube video when I close the modal
    $('#video-popup').on('hide.bs.modal', function (e) {
        // a poor man's stop video
        $("#video").attr('src',$videoSrc); 
    }) 

	
});
