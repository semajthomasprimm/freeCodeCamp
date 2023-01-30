
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
