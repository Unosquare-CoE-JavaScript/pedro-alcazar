var button1 = document.getElementById("button1");
button1 === null || button1 === void 0 ? void 0 : button1.addEventListener('click', function (event) {
    console.log("Click on button:");
    console.log(event);
});
var hobbies = ['sport', 'music'];
var activeHobbies = ['haking'];
activeHobbies.push.apply(activeHobbies, hobbies);
console.log(activeHobbies);
