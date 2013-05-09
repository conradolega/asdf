(function ($) {
	$.fn.asdf = function(min, max, char) {
		if (min <= 0 && max >= min) {
			var char = char || 'qwertasdfgzxcvb';
			this.each(function() {
				if($(this).is('input:text')) {
					// String generation courtesy of:
					// http://stackoverflow.com/a/14249522
					var result = [];
					var length = Math.floor((Math.random() * max) + min);
					while (--length) {
						result.push(char.charAt(Math.floor(Math.random() * char.length)));
					}
					$(this).val(result.join(''));
				}
			});
		}
	}	
})(jQuery);