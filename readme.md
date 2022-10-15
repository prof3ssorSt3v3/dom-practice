# DOM Practice Exercises

This is a series of practice exercises to help you get better at working with
JavaScript and the DOM.

1. Take the file `one.html` and attach a JavaScript file that will add a click
   event listener to `document.body`. When the user clicks anywhere in the body,
   check the `target` of the event and determine what the `tagName` of the
   element that was clicked. As long as the target wasn't the body element, use
   the `clone()` method to copy the clicked element and `append` it to the
   `footer` element. Content that is already in the footer should still remain.
2. Take the file `two.html` and attach a JavaScript file that will add a click
   event listener to `document.body`. When the user clicks on any element your
   click listener should toggle the CSS class `bigger` for that element.
3. Take the file `three.html` and attach a JavaScript file that will add a click
   event listener to `document.body`. When the user clicks on any element your
   click listener function should check if the element has a
   `nextSiblingElement`. If it does, then remove the next sibling from the page.
   If it doesn't then it should check for a `previousSiblingElement` and remove
   it instead if it exists.
