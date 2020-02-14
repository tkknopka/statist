/**Показать/скрыть полный комментарий*/
$(".content_toggle").click(function(){
	$('.reviews__fullcard').slideToggle(300, function(){
		if ($(this).is(':hidden')) {
			$('.content_toggle').html('Читать полный отзыв');
		} else {
			$('.content_toggle').html('Закрыть отзыв');
		}							
	});
	return false;
});

/**Показать/скрыть полный комментарий*/

/**Слайдер */
/**$(document).ready(function(){
	$('#owl-carousel-1').owlCarousel();
  });*/
$(document).ready(function(){
	$('.owl-carousel').owlCarousel();
	});
$('#js-carousel-1').owlCarousel({
	dotsEach: 1 // Количество слайдов в одной точке
  });
/**Слайдер конец */