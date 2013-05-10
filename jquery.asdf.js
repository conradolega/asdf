(function ($) {
	$.fn.asdf = function(min, max, charset) {
		var min = parseInt(min);
		var max = parseInt(max);
		if (min > 0 && max >= min) {
			var charset = charset || 'asdf';
			this.each(function() {
				if($(this).is('input:text')) {
					// String generation courtesy of:
					// http://stackoverflow.com/a/14249522
					var result = [];
					var length = Math.floor(Math.random() * (max - min + 1)) + min;
					while (--length) {
						result.push(charset.charAt(Math.floor(Math.random() * charset.length)));
					}
					$(this).val(result.join(''));
				}
			});
		}
	}	
})(jQuery);