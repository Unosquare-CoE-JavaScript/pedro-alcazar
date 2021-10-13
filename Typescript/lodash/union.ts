
function add (n1: number, n2: number, showresult: boolean, Pharse: string = "Result:") {
    let result = n1 + n2;
    if (showresult){
        console.log(Pharse + result)
    }
    return result;
}

const number1 = 5;
const number2 = 10;
const printResults = true;
const resultPhrase =  "The result is: "

add(number1, number2, printResults, resultPhrase)

//enum type of roles
enum Role  {
    ADMIN, READ_ONLY, AUTHOR
}

/* 
 * typeof Person
 */
type Person = {
    name: string,
    age: number,
    hobbies: string[],
    role: Role
}
/*
 * Creating an object typeof Person 
 */
export const person : Person= {
    name: 'Maximilian',
    age: 30,
    hobbies : ['sports', 'music'],
    role: Role.AUTHOR
}


// Private functions
function printHobbies (hobbies: string[]){
    let strHobies = "Hobbies:"
    hobbies.forEach(element => {
        strHobies += ' ' + element
    })
    console.log(strHobies);
}

function printPerson (person1: Person){
    console.log("Person name: " + person1.name + ' With ' + person1.age + ' years, is a ' + person1.role)
    printHobbies(person1.hobbies)
}
printPerson(person)