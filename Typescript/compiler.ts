const button1 = document.getElementById("button1");
button1?.addEventListener('click', event => {
    console.log("Click on button:")
    console.log(event)
})

const hobbies = ['sport', 'music']
const activeHobbies = ['haking']

activeHobbies.push(...hobbies)
console.log(activeHobbies)