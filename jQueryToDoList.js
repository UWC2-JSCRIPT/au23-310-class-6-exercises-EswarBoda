// First ensure that DOM is fully loaded
$(document).ready( function() {
  /**
   * Toggles "done" class on <li> element
   */

  /**
   * Delete element when delete link clicked
   */
  $('ul').on('click', function(e) { //This listener could also be set on ('main) element
    //$(e.target.parentNode).addClass('done');
    $(e.target.parentNode).toggleClass('done');
   
    // Use the same parent listener for deleting the li element
    if (e.target.className === 'delete') {
      //$(e.target.parentNode).remove(); // removes the li element from DOM
      $(e.target.parentNode).fadeOut('slow', function(){}); // fades out the li element
    }
  })

  /**
   * Adds new list item to <ul>
   */
  const addListItem = function(e) {
    //e.preventDefault();
    const text = $('input').val();

    // rest here...
    if (text !== '') { // This check will avoid empty cliks in the text box to add a new empty li item
      const $newLi = $('<li>');
      $('ul').append($newLi);

      const $newSpan = $('<span>');
      $newSpan.text(text);
      $newLi.append($newSpan);

      const $newA = $('<a>');
      $newA.text('Delete');
      $newA.addClass('delete');
      $newLi.append($newA);

      $('input').val(''); // After adding new li element, clear out the text box for next entries
    }
  };

  // add listener for add
  if ($('div').hasClass('add')) {
    $('a').on('click', function(e) {
      addListItem();
    })
  }
})