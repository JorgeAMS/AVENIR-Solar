var rangeSlider = function () {
  var slider = $(".range-slider"),
  range = $(".range-slider__range"),
  value = $(".range-slider__value");

  slider.each(function () {
    value.each(function () {
      var value = $(this).
      prev().
      attr("value");
      $(this).html(value);
    });

    range.on("input", function () {
      $(this).
      next(value).
      html(this.value);
    });
  });
};

rangeSlider();

// remap jQuery to $
(function($){

	/* trigger when page is ready */
	$(document).ready(function (){
	
		// your functions go here
		$('#kilowats').click(function() {
			$(this).addClass("active");
       $(this).attr('placeholder','Consumo según factura');
      $('#Online').addClass("show");
      $('#Outline').addClass("show");
		});
	
	});

})(window.jQuery);

function mostrar(Online) {
  var porcentaje = document.getElementsByClassName("range-slider_value").innerHTML;
  var x = $("#kilowats").val();
  alert(x);
}