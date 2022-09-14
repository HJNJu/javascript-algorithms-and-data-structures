/*
In Computer Science a queue is an abstract Data Structure where items are kept in order. 
New items can be added at the back of the queue and old items are taken off from the front of the queue.
Add the number to the end of the array, then remove the first element of the array.
The nextInLine function should then return the element that was removed.
*/



function nextInLine(arr, item) {
    arr.push(item);
    const removed = arr.shift();
    return removed;
  }
  
  const testArr = [1, 2, 3, 4, 5];
  
  console.log("Before: " + JSON.stringify(testArr));
  console.log(nextInLine(testArr, 6));
  console.log("After: " + JSON.stringify(testArr));