// Create a new <a> element containing the text "Buy Now!"
// with an id of "cta" after the last <p>

// Access (read) the data-color attribute of the <img>,
// log to the console

// Update the third <li> item ("Turbocharged"),
// set the class name to "highlight"

// Remove (delete) the last paragraph
// (starts with "Available for purchase now…")

// Create a listener on the "Buy Now!" link that responds to a click event.
// When clicked, the the "Buy Now!" link should be removed
// and replaced with text that says "Added to cart"
$(document).ready(function() {  // First ensure that DOM is fully loaded
    // All of your code in here
    // This uses jQuery, but there is a plain
    // JavaScript way to do this as well
    const $newA = $('<a>');
    $newA.attr('id', 'cta');
    $newA.text('Buy Now!');

    $('main').append($newA);

    const $img = $('img');
    console.log($img.attr('data-color'));

    const $li = $('li');
    $li.eq(2).addClass('highlight');

    $('p').remove();

    $newA.on('click', function(e) {
        $newA.remove();

        const $newTextArea = $('<textarea>');
        $newTextArea.text('Added to cart');
        $('main').append($newTextArea);
        
        //$('main').append('<textarea>');
        $('textarea').val('Added to cart');
    })
});