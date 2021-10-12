"use strict";
exports.__esModule = true;
exports.person = void 0;
function add(n1, n2, showresult, Pharse) {
    if (Pharse === void 0) { Pharse = "Result:"; }
    var result = n1 + n2;
    if (showresult) {
        console.log(Pharse + result);
    }
    return result;
}
var number1 = 5;
var number2 = 10;
var printResults = true;
var resultPhrase = "The result is: ";
add(number1, number2, printResults, resultPhrase);
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
exports.person = {
    name: 'Maximilian',
    age: 30,
    hobbies: ['sports', 'music'],
    role: Role.AUTHOR
};
function printHobbies(hobbies) {
    var strHobies = "Hobbies:";
    hobbies.forEach(function (element) {
        strHobies += ' ' + element;
    });
    console.log(strHobies);
}
function printPerson(person1) {
    console.log("Person name: " + person1.name + ' With ' + person1.age + ' years, is a ' + person1.role);
    printHobbies(person1.hobbies);
}
printPerson(exports.person);
