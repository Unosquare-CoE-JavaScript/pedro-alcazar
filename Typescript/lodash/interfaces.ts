/* 
 *   This code show how implement a class with interfaces.
 */
interface Named {
    readonly name: string
}

interface Greetable extends Named {
    greet (pharse: string): void
}
/* 
 *  Main class as a model
 */
class Person implements Greetable{
    name: string;
    age: number = 30;
    greet(pharse: string): void{
        console.log('Pharse is :' + pharse + ' of: ' + this.name + ' with: ' + this.age + ' years')
    };
    constructor(n: string){
        this.name = n
    }
}

let user1 : Greetable = new Person('Max');

console.log(user1)
user1.greet("Call Geet")




