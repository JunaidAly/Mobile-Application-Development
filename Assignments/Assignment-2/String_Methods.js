/***
 * ***************************************
 * NAME : JUNAID ALI
 * 
 * REG # : FA20-BCS-008
 * 
 * ***************************************
 */


/**
 * 1. Length Method
 */
let LenArray = "Junaid Ali";
Length = LenArray.length;
console.log(Length);

/**
 * 2. Slice Method
 */

let SliceArray = "Python, Js, React";
NewArray = SliceArray.slice(11,17);
console.log(NewArray);

/**
 * 3. Sub String Method
 */

let SubString = "Yahoo BaBa, Code With Harry";
SubNewArray = SubString.substring(16);
console.log(SubNewArray);

/**
 *  4. Replace Method
 */

let ReplaceFunc = "Yahoo Baba, Code With Harry";
let ReplaceArray = ReplaceFunc.replace("Code With Harry", "Code With Junaid");
console.log(ReplaceArray);

/**
 * 5. Replace All Method
 */

let RepAll = ("JUNAID", "ALI");
let RepAllFunc = RepAll.replaceAll("Junaid ","Ali");
console.log(RepAllFunc);

/**
 * 6. ConCat Function
 */

let v1 = "Junaid";
let v2 = "Ali";
let v3 = v1.concat("",v2);

console.log(v3);

/**
 * 7. Trim Function
 */

let T1 = "       Welcome To JS           ";
let T2 = T1.trim();
let T3 = T1.trimEnd();
let T4 = T1.trimStart();
console.log(T4);

/**
 * 8. Pad Function
 */
let P1 = "5";
let p4 = "3";
let p2 = P1.padStart(5,"x");
console.log(p2);
let p3 = p4.padEnd(3,"x");
console.log(p3);

/**
 * 9. Char At() Function
 */

let C1 = "COMSATS ATTOCK";
let C2 = C1.charAt(8);
console.log(C2);


/**
 * 10. Split() Function
 */

let S1 = "Hellow From Attock";
let S2 = S1.split(",");
console.log(S2);

/**
 * 
 * *********************************************************
 */