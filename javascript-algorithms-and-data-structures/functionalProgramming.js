
// January 29

// Split a String into an Array Using the split Method
function splitify(str) {
    return str.split(/[^\w]|\s/);  
}
splitify("Hello World,I-am code");


// Combine an Array into a String Using the join method
function sentensify(str){
    return str.split(/[^\w]/).join(" ");
}
senentisfy("May-the-force-be-with-you");

// Apply Functional Programming to Convert Strings to URL Slugs
function urlSlug(title) {
    return title.split(" ").filter(word => word !== "").join("-").toLowerCase();
}
urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");

// January 30

// Use the every Method to Check that Every Element in an Array Meets a Criteria
function checkPositive(arr) {
    return arr.every((currentValue) => { return currentValue > 0 });
}
checkPositive([1, 2, 3, -4, 5]);

// Use the some Method to Check that Any Elements in an Array Meet a Criteria
function checkPositive(arr) {
    return arr.some((currentValue) => { return currentValue > 0 });
}
checkPositive([1, 2, 3, -4, 5]);

// Introduction to Currying and Partial Application
function add(x) {
    return function(y){
      return function (z){
        return x + y + z;
      }
    }
}
add(10)(20)(30);