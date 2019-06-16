/* #doubleArray
 *
 * Takes in an array of numbers and returns an array with each element doubled
 *
 * @param {Array} // [1,2,3]
 * @return {Array} // [2,4,6]
 */
var doubleArray;
doubleArray = function(array){
  for(i=0; i<array.length; i++){
    array[i] *= 2;
  }
  return array;
}

/* #sumArrays
 *
 * Takes in two arrays of numbers and returns the sum of both arrays.
 *
 * @param {Array}
 * @param {Array}
 * @return {Number}
 */
var sumArrays;
sumArrays = function(array1, array2){
  let arr1Sum = 0;
  let arr2Sum = 0;
  for(i=0; i<array1.length; i++){
    arr1Sum += array1[i];
  }
  for(i=0; i<array2.length; i++){
    arr2Sum += array2[i];
  }
  return arr1Sum+arr2Sum;
}

/* #stringCount
 *
 * Takes in a string and returns the length of the string.
 *
 * @param {String}
 * @return {Number}
 */
var stringCount;
stringCount = function(string){
  return string.length;
}

/* #arrayLength
 *
 * Takes in an array and returns the length of the array.
 *
 * @param {Array}
 * @return {Number}
 */
var arrayLength;
arrayLength = function(array){
  return array.length;
}

/* #countAll
 *
 * Takes in an array and returns the sum of all numbers in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countAll;
countAll = function(array){
  let arrSum = 0;
  for(i=0; i<array.length; i++){
    arrSum += array[i];
  }
  return arrSum;
}

/* #countStrings
 *
 * Takes in an array of strings and returns an array of string lengths.
 *
 * @param {Array}
 * @return {Array}
 */
var countStrings;
countStrings = function(array){
  let stringArr = [];
  for(i=0; i<array.length; i++){
    stringArr.push(array[i].length);
  }
  return stringArr;
}

/* #countAllStrings
 *
 * Takes in an array of strings and returns the sum of all string lengths.
 *
 * @param {Array}
 * @return {Number}
 */
var countAllStrings;
countAllStrings = function(array){
  let lengthSum = 0;
  for(i=0; i<array.length; i++){
    lengthSum += array[i].length;
  }
  return lengthSum;
}

/* #convertToArray
 *
 * Takes in an object and returns all the values of the object in an array.
 *
 * @param {Object}
 * @return {Array}
 */
var convertToArray;
convertToArray = function(object){
  return Object.values(object);
}

/* #objectSize
 *
 * Takes in an object and returns the number of key value pairs in the object.
 *
 * @param {Object}
 * @return {Number}
 */
var objectSize;
objectSize = function(object){
  let count = 0;
  for(let key in object){
    count++;
  }
  return count;
}

/* #createZeroFilledArray
 *
 * Takes in a number and fills an array with that number of zeroes.
 *
 * @param {Number}
 * @return {Array}
 */
var createZeroFilledArray;
createZeroFilledArray = function(number){
  let arr = [];
  for(i=0; i<number; i++){
    arr.push(0);
  }
  return arr;
}

/* #poppedArray
 *
 * Takes in an array of numbers and returns an array of all but the last element of the array.
 *
 * @param {Array}
 * @return {Array}
 */
var poppedArray;
poppedArray = function(array){
  array.pop();
  return array;
}

/* #splitString
 *
 * Takes in a string and returns an array of each individual character in the string.
 *
 * @param {String}
 * @return {Array}
 */
var splitString;
splitString = function(string){
  return string.split('');
}

/* #lengthOfLast
 *
 * Takes in an array of strings and returns the length of the last string.
 *
 * @param {Array}
 * @return {Number}
 */
var lengthOfLast;
lengthOfLast = function(array){
  return array[array.length-1].length;
}

/* #sumBelowTen
 *
 * Takes in an array of numbers and returns the sum of all numbers below 10.
 *
 * @param {Array}
 * @return {Number}
 */
var sumBelowTen;
sumBelowTen = function(array){
  let sum = 0;
  for(i=0; i<array.length; i++){
    if(array[i] < 10){
      sum += array[i];
    }
  }
  return sum;
}

/* #moreThanTenLetters
 *
 * Takes in an array of strings and returns the amount of elements that have more than ten letters.
 *
 * @param {Array}
 * @return {Number}
 */
var moreThanTenLetters;
moreThanTenLetters = function(array){
  let count = 0;
  for(i=0; i<array.length; i++){
    if(array[i].length > 10){
      count++;
    }
  }
  return count;
}

/* #multiplyAll
 *
 * Takes in an array of numbers and returns the product of all elements.
 *
 * @param {Array}
 * @return {Number}
 */
var multiplyAll;
multiplyAll = function(array){
  let product = 1;
  for(i=0; i<array.length; i++){
    product *= array[i];
  }
  return product;
}

/* #sumAllPositive
 *
 * Takes in an array of numbers and returns the sum of all non-negative numbers.
 *
 * @param {Array}
 * @return {Number}
 */
var sumAllPositive;
sumAllPositive = function(array){
  let sum = 0;
  for(i=0; i<array.length; i++){
    if(array[i] > 0){
      sum += array[i];
    }
  }
  return sum;
}

/* #stringCountBelowThree
 *
 * Takes in an array of strings and returns the amount of strings that have three characters or less.
 *
 * @param {Array}
 * @return {Number}
 */
var stringCountBelowThree;
stringCountBelowThree = function(array){
  let count = 0;
  for(i=0 ; i<array.length; i++){
    if(array[i].length <= 3){
      count++;
    }
  }
  return count;
}

/* #countObjects
 *
 * Takes in an array of objects and returns the amount of objects in the array.
 *
 * @param {Array}
 * @return {Number}
 */
var countObjects;
countObjects = function(array){
  let count = 0;
  for(i=0; i<array.length; i++){
    if(typeof array[i] === 'object'){
      count++;
    }
  }
  return count;
}

/* #getObjectKeys
 *
 * Takes in an object and returns an array of all the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectKeys;
getObjectKeys = function(object){
  let objArr = [];
  for(let key in object){
    objArr.push(key);
  }
  return objArr;
}

/* #getObjectValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getObjectValues;
getObjectValues = function(object){
  return Object.values(object);
}

/* #makeObject
 *
 * Takes in two arguments 'key' and 'value' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObject;
makeObject = function(key, value){
  let objTest = {};
  objTest[key] = value;
  return objTest;
}

/* #makeObjectReverse
 *
 * Takes in two arguments 'value' and 'key' and returns a single key-value pair in an object.
 *
 * @param {String}
 * @param {String}
 * @return {Object}
 */
var makeObjectReverse;
makeObjectReverse = function(value, key){
  let objTest = {};
  objTest[key] = value;
  return objTest;
}

/* #tupleToObject
 *
 * Takes in a tuple (an array with two elements) and returns it into a single key-value pair in an object.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObject;
tupleToObject = function(array){
  let key = array[0];
  let value = array[1];
  let objTest = {};
  objTest[key] = value;
  return objTest;
}

/* #tupleToObjectReverse
 *
 * Takes in a tuple and returns it into a single key-value pair with second tuple element as key and first tuple element as value.
 *
 * @param {Array}
 * @return {Object}
 */
var tupleToObjectReverse;
tupleToObjectReverse = function(array){
  let key = array[1];
  let value = array[0];
  let objTest = {};
  objTest[key] = value;
  return objTest;
}

/* #strToKeys
 *
 * Takes in an array of strings and returns an object with all string elements as the object's keys and all values set to 0.
 *
 * @param {Array}
 * @return {Object}
 */
var strToKeys;
strToKeys = function(array){
  let objTest = {};
  for(i=0; i<array.length; i++){
    objTest[array[i]] = 0;
  }
  return objTest;
}

/* #getValues
 *
 * Takes in an object and returns an array of all the object's values.
 *
 * @param {Object}
 * @return {Array}
 */
var getValues;
getValues = function(object){
  return Object.values(object);
}

/* #getKeys
 *
 * Takes in an object and returns an array of the object's keys.
 *
 * @param {Object}
 * @return {Array}
 */
var getKeys;
getKeys = function(object){
  return Object.keys(object);
}

/* #objectToArray
 *
 * Takes in an object and returns an array of tuples where each tuple has 
 * the object's key as element 0 and object's value as element 1.
 *
 * @param {Object}
 * @return {Array}
 */
var objectToArray;
objectToArray = function(object){
  let keys = getKeys(object);
  let values = getValues(object);
  let tupleArr = [];
  for(i=0; i<keys.length; i++){
    let tempArr = [];
    tempArr.push(keys[i]);
    tempArr.push(values[i]);
    tupleArr.push(tempArr);
  }
  return tupleArr;
}

/* #arrayToObject
 *
 * takes in an array and returns an object with keys set to the elements in the array and
 * all values set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObject;
arrayToObject = function(array){
  let testObj = {};
  for(i=0; i<array.length; i++){
    testObj[array[i]] = false;
  }
  return testObj;
}

/* #arraysToObject
 *
 * takes in two arrays, the first array elements will be keys of an object and second array elements 
 * will be values of an object.
 *
 * @param {Array}
 * @param {Array}
 * @return {Object}
 */
var arraysToObject;
arraysToObject = function(array1, array2){
  let testObj = {};
  for(i=0; i<array1.length; i++){
    testObj[array1[i]] = array2[i];
  }
  return testObj;
}

/* #objectsToTuples
 *
 * takes in two objects and returns an array of tuples of the key value pairs of all objects in both arrays.
 *
 * @param {Object}
 * @param {Object}
 * @return {Array}
 */
var objectsToTuples;
objectsToTuples = function(object1, object2){
  let arr1 = objectToArray(object1);
  let arr2 = objectToArray(object2);
  let tuples;
  for(i=0; i<arr1.length; i++){
    tuples = arr1.concat(arr2);
  }
  return tuples;
}

/* #mapArrayValues
 *
 * takes in an array of strings and returns an object with keys of the array elements and values all set to True.
 *
 * @param {Array}
 * @return {Object}
 */
var mapArrayValues;
mapArrayValues = function(array){
  let testObj = {};
  for(i=0; i<array.length; i++){
    testObj[array[i]] = true;
  }
  return testObj;
}

/* #mapStringCounts
 *
 * takes in an array of strings and returns an object with key names set to the elements in the array.
 * If the character count of the key name is greater than or equal to 5 set the value to true,
 * otherwise set to false.
 *
 * @param {Array}
 * @return {Object}
 */
var mapStringCounts;
mapStringCounts = function(array){
  let testObj = {};
  for(i=0; i<array.length; i++){
    if(array[i].length >= 5){
      testObj[array[i]] = true;
    }else{
      testObj[array[i]] = false;
    }
  }
  return testObj;
}

/* #arrayToObjectNums
 *
 * takes in an array of numbers and returns an object with keys set to 
 * each element of the array and all values set to true.
 *
 * @param {Array}
 * @return {Object}
 */
var arrayToObjectNums;
arrayToObjectNums = function(array){
  return mapArrayValues(array);
}

/* #stringToKeys
 *
 * takes in a string and returns an object whos keys are each letter of the string and all values set to true.
 * 
 * @param {String}
 * @return {Object}
 */
var stringToKeys;
stringToKeys = function(string){
  let strArr = string.split('');
  let testObj = {};
  for(i=0; i<strArr.length; i++){
    testObj[strArr[i]] = true;
  }
  return testObj;
}

/* #charCountMap
 *
 * takes in an array of strings and returns an object with keys set to each element of the array 
 * and values set to the character count of each key name.
 *
 * @param {Array}
 * @return {Object}
 */
var charCountMap;
charCountMap = function(array){
  let testObj = {};
  for(i=0; i<array.length; i++){
    testObj[array[i]] = array[i].length;
  }
  return testObj;
}

/* #frequencyMap
 *
 * takes in an array of strings and returns an object with the string as the key and the number of occurences as the value.
 *
 * @param {String}
 * @return {Object}
 */
var frequencyMap;
frequencyMap = function(array){
  let testObj = {};
  let occurence = 1;
  for(i=0; i<array.length; i++){
    if(array[i] !== array[i+1]){
      testObj[array[i]] = occurence;
      occurence = 1;
    }else{
      testObj[array[i]] = occurence++
    }
  }
  return testObj;
}

/* #tupleConvertToObject
 *
 * takes in an array of tuples and and returns an object whos keys are 
 * the first element of the tuples and values are second element of the tuples.
 *
 * @param {String}
 * @return {Object}
 */
var tupleConvertToObject;
tupleConvertToObject = function(array){
  let testObj = {};
  for(i=0; i<array.length; i++){
    testObj[array[i][0]] = array[i][1];
  }
  return testObj;
}


module.exports = {
  doubleArray: doubleArray,
  sumArrays: sumArrays,
  stringCount: stringCount,
  arrayLength: arrayLength,
  countAll: countAll,
  countStrings: countStrings,
  countAllStrings: countAllStrings,
  convertToArray: convertToArray,
  objectSize: objectSize,
  createZeroFilledArray: createZeroFilledArray,
  poppedArray: poppedArray,
  splitString: splitString,
  lengthOfLast: lengthOfLast,
  sumBelowTen: sumBelowTen,
  moreThanTenLetters: moreThanTenLetters,
  multiplyAll: multiplyAll,
  sumAllPositive: sumAllPositive,
  stringCountBelowThree: stringCountBelowThree,
  countObjects: countObjects,
  getObjectKeys: getObjectKeys,
  getObjectValues: getObjectValues,
  makeObject: makeObject,
  makeObjectReverse: makeObjectReverse,
  tupleToObject: tupleToObject,
  tupleToObjectReverse: tupleToObjectReverse,
  strToKeys: strToKeys,
  getValues: getValues,
  getKeys: getKeys,
  objectToArray: objectToArray,
  arrayToObject: arrayToObject,
  arraysToObject: arraysToObject,
  objectsToTuples: objectsToTuples,
  mapArrayValues: mapArrayValues,
  mapStringCounts: mapStringCounts,
  arrayToObjectNums: arrayToObjectNums,
  stringToKeys: stringToKeys,
  charCountMap: charCountMap,
  frequencyMap: frequencyMap,
  tupleConvertToObject: tupleConvertToObject
}
