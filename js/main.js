$(document).ready(function(){
        jQuery("a.header_menu_link").click(function () {
      elementClick = jQuery(this).attr("href")
      destination = jQuery(elementClick).offset().top - 0;
      jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1100);
      return false;
    });
  });
$('form').submit(function(event) {
	event.preventDefault();
	$.ajax({
		type: "POST",
		url: "../mailer/smart.php",
		data: $(this).serialize()
	}).done(function() {
		$(this).find("input").val("");
		alert("Ваши данные переданы, с вами свяжется наш менеджер");
		$("form").trigger("reset");
	});
	return false;
});