# asdf

Add random asdf to your text fields!

Requires jQuery.

## Usage

    $(inputs).click(function() {
        $(this).asdf(min, max, charset);
    });

- min is the minimum number of characters
- max is the maximum number of characters
- charset is the character set that the text will be generated from (if you don't pass one, a default character set will be used).