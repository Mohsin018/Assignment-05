## What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
## Answer:- 1. When we want to access an specific element we call it by it's ID, to access it's ID we use getElementById. 2. To get the elements which share same class name we use getElementByClassName, it returns all the HTML tags which uses the same class name. 3. QuerySelector returns the first element that matches the css selector. 4. QuerySelectorAll returns all the element that matches the css selector, it returns the value in a nodelist.




## How do you create and insert a new element into the DOM?
## Answer:- step 1:- Create a new <li> element >> const li = document.createElement("li"); 
## step 2:- Add some text to it >> li.innerText = "This is a new list item";
## step 3:- Find the parent <ul> or <ol> >> const ul = document.querySelector("ul");
## step 4:- Append the <li> to the parent >> ul.appendChild(li);


## What is Event Bubbling and how does it work?
## Answer:- Event bubbling means that when user click on something, the event doesn’t just stop there. It first happens on the element user clicked, then it “bubbles up” to its parent and keeps going all the way up to the root parent.

## What is Event Delegation in JavaScript? Why is it useful?
## Answer:- Event Delegation means adding event listener in parent instead of the child. It's useful because it's save time, event handling become easy. Keeps code easy and clean.

## What is the difference between preventDefault() and stopPropagation() methods?
## Answer:- preventDefault() means it stops automatic action browser does for an event. stopPropagation() means it stops the event from bubbling up to parent.


