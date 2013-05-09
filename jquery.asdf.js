(function ($) {
	$.fn.asdf = function(min, max, charset) {
		console.log(min);
		console.log(max);
		console.log(charset);
		if (min > 0 && max >= min) {
			var charset = charset || 'asdf';
			console.log(charset);
			this.each(function() {
				if($(this).is('input:text')) {
					// String generation courtesy of:
					// http://stackoverflow.com/a/14249522
					var result = [];
					var length = Math.floor((Math.random() * max)) + min;
					console.log(length);
					var i = 10;
					while (--i && --length) {
						console.log(length);
						//result.push(charset.charAt(Math.floor(Math.random() * charset.length)));
					}
					console.log(result);
					$(this).val(result.join(''));
				}
			});
		}
	}	
})(jQuery);