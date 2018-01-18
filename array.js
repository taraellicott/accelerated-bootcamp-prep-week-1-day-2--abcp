function addElementToBeginningOfArray(array, element) {
 // add the element to the beginning of the array without mutating the array
 return [element, ...array];
}


function destructivelyAddElementToBeginningOfArray(array, element){
  // add element to the beginning of the array by mutating the array
  array.unshift(element);
  return array;
}


function addElementToEndOfArray(array, element) {
 return [...array, element];
}


function destructivelyAddElementToEndOfArray(array, element) {
   array.push(element);
   return array;
}


function accessElementInArray(array, index) {
  return array[index];

}

function destructivelyRemoveElementFromBeginningOfArray(array) {
  array.shift();
  return array;

}

function removeElementFromBeginningOfArray(array) {
  
}

function destructivelyRemoveElementFromEndOfArray(array)
{
  array.pop();
  return array;

}

function removeElementFromEndOfArray(array) {

}
