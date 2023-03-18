/***
 * ***************************************
 * NAME : JUNAID ALI
 * 
 * REG # : FA20-BCS-008
 * 
 * ***************************************
 */

/**
 * 1. ToString Function
 */

let Array = ["PHP", "Dart", "Python", "JavaScript"];

let String1 = Array.toString();

console.log(String1);


/**
 * 2. Poping and Pushing
 */

/**
 * Pop
 */
let Array1 =  ["PHP", "Dart", "Python", "JavaScript"];

let Pop = Array1.pop();

console.log(Pop);

console.log(Array1);
/**
 * Push
 */

let Array2 =  ["PHP", "Dart", "Python", "JavaScript"];

let Push = Array2.push("JQuery");

console.log(Push);

console.log(Array2);


/**
 * 3. Shift() Function
 */

let Array3 = ["PHP", "Dart", "Python", "JavaScript"];

let Shift = Array3.shift();

console.log(Shift);

console.log(Array3);

/**
 * 4. Unshift() Function
 */

let Array4 = ["PHP", "Dart", "Python", "JavaScript"];

let Unshift = Array4.unshift("Java");

console.log(Unshift);

console.log(Array4);

/**
 * 5. Length() Function
 */

let Array5 = ["PHP", "Dart", "Python", "JavaScript"];

Array5[Array5.length] = "JQuery";

console.log(Array5);

/**
 * 6. Delete Function
 */

let Del =  delete Array5[3];
console.log(Del);

console.log(Array5);


/**
 * 7. Splice() and Slice() Function
 */

/**
 * Splice
 */

let Array6 =  ["PHP", "Dart", "Python", "JavaScript"];

splice = Array6.splice(2,1,"C++","Java");

console.log(Array6);

/**
 * Slice
 */
Array7 = ["PHP", "Dart", "Python", "JavaScript"];
slice = Array1.slice(0,3);

console.log(slice);

/**
 * 8. Merging Function
 */

 Array8 = ["PHP", "Dart", "Python", "JavaScript"];

 Array9 = [ "jQuery", "PHP Ajex"];

 concat = Array8.concat(Array9);

 console.log(concat);


 /**
  * **********************************************************
  */