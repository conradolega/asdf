(function ($) {
	$.fn.asdf = function() {
		this.each(function() {
			if($(this).is('input:text')) {
				$(this).val('asdf');
			}
		});
	}	
})(jQuery);