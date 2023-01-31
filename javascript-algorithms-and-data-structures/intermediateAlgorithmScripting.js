
// January 29

// Seek and Destroy
function destroyer(arr, ...args) {
    // remove all elements in initial array that of the same value as elements
    return arr.filter((num) => !args.includes(num));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);

// Wherefore art thou
function whatIsInAName(collection, source) {
    const sourceKeys = Object.keys(source);

    return collection.filter((obj) => {
        for(let i = 0; i < sourceKeys.length; i++){
            if(!obj.hasOwnProperty(sourceKeys[i]) || obj[sourceKeys[i]] !== source[sourceKeys[i]]){
                return false;
            }
        }
        return true;
    });  
}
  
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });

// Spinal Tap Case
function spinalCase(str) {
    //return str.toLowerCase().split(/\s/).join("-");
    if(str.split(" ").length === 1){
      return str.split(/(^[a-z]+)|([A-z][a-z]+)/).filter(word => word !== "" && word).join("-").toLowerCase();
    } else{
      return str.split(/(\s)|/).filter(word => word !== "" && word).join("-").toLowerCase();
    }
}
//spinalCase("thisIsSpinalTap");
spinalCase("This Is Spinal Tap");


// Pig Latin
function translatePigLatin(str) {
    const constanantRegex = /[^aeiou]/;
    if(str[0].match())
        return str;
}
  
translatePigLatin("consonant");

// January 30

// Search and Replace
function myReplace(str, before, after) {
    const words = str.split(" ");
    if(words.includes(before)){
      if(/[A-Z]/.test(before[0])){
        const newAfter = after.charAt(0).toUpperCase() + after.slice(1, after.length);
        return str.replace(before, newAfter);
      } else if (/[a-z]/.test(before[0])){
        const newAfter = after.charAt(0).toLowerCase() + after.slice(1, after.length);
        return str.replace(before, newAfter);
      } else{
        return str.replace(before, after);
      }
    }
}
myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");

// DNA Pairing
function pairElement(str){
    let result = [];
    for(let i = 0; i < str.length; i++){
        if(str[i] === "G"){
        result.push([str[i], "C"]);
        } else if(str[i] === "C"){
        result.push([str[i], "G"]);
        } else if(str[i] === "A"){
        result.push([str[i], "T"]);
        } else if(str[i] === "T"){
        result.push([str[i], "A"]);
        }
    }
    return result;
}

pairElement("GCG");

// January 31

// Missing letters
function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  let i = alphabet.indexOf(str[0]);
  let j = 0;
  while(i < alphabet.length && j < str.length){
    if(alphabet[i] === str[j]){
      j += 1;
      i += 1;
    } 
    else{
      return alphabet[i];
    }
  }
  return undefined;
}
fearNotLetter("abce");

// Sorted Union
function uniteUnique(...arr) {
  let result = [];
  
  arr.flat().filter(num => {
    if(!result.includes(num)){
      result.push(num);
    }
  });
  
  return result;
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

// Convert HTML Entities
function convertHTML(str) {
  let result = "";
  for(let i = 0; i < str.length; i++){
    if(str[i] === "&"){
      result += "&amp;";
    } else if(str[i] === "<"){
      result += "&lt;";
    } else if(str[i] === ">"){
      result += "&gt;";
    } else if(str[i] === "\""){
      result += "&quot;";
    } else if(str[i] === "\'"){
      result += "&apos;";
    } else{
      result += str[i];
    }
  }
  return result;
}

convertHTML("Dolce & Gabbana");