// TASK 1
// Write a function that creates a closure and returns a function that can add
// a specific number to any number passed to it. For example, if the closure is
// created with 5, the returned function should add 5 to any number passed
// to it.
// function abc(x) {
//     return function(number) {
//       return number + x;
//     }
//   } 
//   const y = abc(5);
//   console.log(y(10));

// TASK 2
// Write a recursive function that searches an array for a specific value. The
// function should return true if the value is found, and false if it is not. You
// can assume that the array is not nested.
// function searchArray(a, b) {  
//     if (a.length === 0) {
//       return false;
//     }
//     if (a[0] === b) {
//       return true;
//     } 
//     return searchArray(a.slice(1), b);
//   }
//   const array = [1, 2, 3, 4, 5];
//   console.log(searchArray(array, 3)); 
//   console.log(searchArray(array, 6)); 

// TASK 3
// Write a function that adds a new paragraph element to the bottom of an
// HTML document. The function should take a string argument that will be
// used as the text content of the new paragraph element.
// function Paragraph(a) {
//     const paragraph = document.createElement('p');
//     paragraph.textContent = a;
//     document.body.appendChild(paragraph);
//   }
//   const newText = "hello world ..... i love pakistan...##muneeb";
//   Paragraph(newText);
  
// TASK 4
// Write a function that adds a new list item to an unordered list in an HTML
// document. The function should take a string argument that will be used as
// the text content of the new list item.
// function List(text) {
//     const list_Item = document.createElement('li');
//     list_Item.textContent = text;
//     const ol = document.getElementById('myListId');
//     ol.appendChild(list_Item);
//   }
//   const line = "MANGO APPLE BANANA WATERMELON";
//   List(line);
  
// TASK 5
// write a function that changes the background color of an HTML element.
// The function should take two arguments: the first argument is a reference
// to the HTML element, and the second argument is a string representing
// the new background color
// function BGCOLOR(element, color) {
//     if (!element || !(element instanceof Element)) {
//       console.error('Invalid element provided:', element);
//       return;
//     }
//     element.style.backgroundColor = color;
//   }
//   const myElement = document.getElementById('myElementId'); 
//   const newColor = 'red'; 
//   BGCOLOR(myElement, newColor);
  
// TASK 6
// Write a function that saves an object to localStorage. The function should
// take two arguments: the first argument is a string representing the key to
// use for storing the object, and the second argument is the object to store
// function saveobject(key, obj) {
//     const jsonString = JSON.stringify(obj);
//     localStorage.setItem(key, jsonString);
//   }
//   const myKey = 'myObject'; 
//   const myObj = { foo: 'bar', baz: 123 }; 
//   saveobject(myKey, myObj);
  
// TASK 7
// Write a function that retrieves an object from localStorage. The function
// should take one argument, which is a string representing the key used to
// store the object. The function should return the object.
// function getObjectFromLocalStorage(key) {
//     const jsonString = localStorage.getItem(key);
//     if (jsonString === null) {
//       return null;
//     }
//     return JSON.parse(jsonString);
//   }
//   const myKey = 'myObject'; 
//   const retrievedObj = getObjectFromLocalStorage(myKey);
//   console.log(retrievedObj); 
  
// TASK 8
// Write a function that takes an object and saves each property to
// localStorage using the property name as the key and the property value as
// the value. The function should also retrieve the object from localStorage
// and return it as a new object.
// function saveObjectPropertiesToLocalStorage(obj) {
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         const value = obj[key];
//         const jsonString = JSON.stringify(value);
//         localStorage.setItem(key, jsonString);
//       }
//     }
//     const retrievedObj = {};
//     for (const key in obj) {
//       if (obj.hasOwnProperty(key)) {
//         const jsonString = localStorage.getItem(key);
//         retrievedObj[key] = JSON.parse(jsonString);
//       }
//     }
//     return retrievedObj;
//   }
//   const myObj = { foo: 'bar', baz: 123 }; 
//   const retrievedObj = saveObjectPropertiesToLocalStorage(myObj);
//   console.log(retrievedObj); 
  