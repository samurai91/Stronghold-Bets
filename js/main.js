$(document).ready(function(){
        jQuery("a.header_menu_link, a.header_block_text_btn").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top - 0;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      return false;
    });

    $('.popup_close').on('click', function (events) {
      event.preventDefault();
      $('.popup').fadeOut();
    });

    function heightBlock(column){
      var myblock = 0;

      column.each(function(){
        thisHight = $(this).height();
        if(thisHight > myblock){
          myblock = thisHight;
        }
      });
      column.height(myblock);
    };
    heightBlock($(".offer_block_wrap"))
  });
$('form').submit(function(event) {
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: "../mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		$('.popup').fadeIn();
		$("form").trigger("reset");
	});
	return false;
});