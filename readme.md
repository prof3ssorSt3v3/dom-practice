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
4. Starting with `four.html` attach a JavaScript file that has a click event
   listener for the section with the class `products`. If the `target` of the
   click is a div with the css class `card`, then the div should be moved into
   the section with the class `cart`. A second click listener should be added to
   the `cart` div. If the user clicks a `card` that is inside the `cart` div
   then the `card` should be returned to the `products` section. (As an added
   challenge, try to put the card back in the original position.)
5. Starting with `five.html` attach a JavaScript file that has a `submit` event
   listener for the form on the page. The form has four buttons in the HTML.
   Each of the buttons will act as the submit button for the form. When the user
   clicks one of the submit buttons, the button will be the target for the
   event. After clicking any of the buttons, the data from the form will be used
   to create a paragraph element with the class `student`. The paragraph should
   be added to the section with the matching class name. Eg: If the user clicks
   on the `Gryffindor` button then the paragraph should be added to the
   `gryffindor` section.
6. Starting with `six.html` and load your `six.js` file as a module so it can
   import the data from `six.data.js`. Build new HTML content inside the `main`
   element based on the `data` Array. All the objects have the properties `tag`,
   `text`, and `children`. If `text` is empty then there is nothing to set as
   the `textContent` or append as a new TextNode. Tags like `img` or `a` will
   have other properties that are specific to them, and you will have to check
   for those. Inside the `children` Array there could be other elements to
   append. Each child object will have a property `beforeText`. If that is set
   to `true` then you should append the child element before the `text` from the
   parent. This can be done with the `insertBefore` or `insertAdjacentHTML`
   methods.
7. Starting with `seven.html` and loading `seven.js`, listen for the submit
   event from the `form`. Based on the values from the form, generate and
   display random lucky numbers. Each number should be displayed in a `div` with
   the class `lucky` so the CSS from `main.css` will apply. OR you can edit
   main.css and add your own CSS for each number.
