// question 1

var petArray = ["cat", "cow", "dog"];

// question 2

console.log(petArray[1]);

// question 3
petArray.push("sheep");

// question 4

console.log(petArray.length);

// question 5 ( when saving in vs code, i get the last comma behind age:5) no erros in inspect-terminal.

var catObject = {
    name: "tommy",
    colour: "orange",
    age: 5,
};
// question 6

console.log(catObject.age);

// question 7

var catArray = [{
    name: "tommy",
    colour: "orange",
    age: 5,
}, ];

// question 8  
// was confused to use the following, but this showes only the values of the properties. not the whole properties(keys-values)
// it was a bit confusing. 
/* for (var i = 0; i < catArray.length; i++) {
  console.log(catArray[i].name);
  console.log(catArray[i].colour);
  console.log(catArray[i].age);
} */
// so i used this instead (my official answer to question 8):
for (var i = 0; i < catArray.length; i++) {
    console.log(catArray[i]);
    }

// question 9 (i didt add the call to function because the question didt mention it clearly as in question nr 10)
function logToConsole(logName) {
    console.log(logName);
}

// question 10 

function logToConsole(logName) {
  console.log(logName);  
}
logToConsole("donkey");
