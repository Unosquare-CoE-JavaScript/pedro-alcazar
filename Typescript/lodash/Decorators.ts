/* 
 * This code show how create and use Decorators
 */
function Logger(){
    return function(constructor: Function){
        console.log("logging...")
        console.log(constructor)
    }
    }

function Logger2(){
    return function(constructor: Function){
        console.log("Access to Decorator")
        console.log(constructor)
    }
}

function WithTemplate (template: string, hookId: string){
    return function(constructor: Function){
        const hookEl = document.getElementById(hookId)
        const p = new Person2()
        if (hookEl){
            hookEl.innerHTML = template
            hookEl.querySelector('h1')!.textContent= p.name
        }
    }
}
@Logger()
@Logger2()
@WithTemplate('<hi>My person Project </h1>', 'app')
/* 
    Principal class to use decorators.
 */
class Person2 {
    name =  'Max';
    constructor(){
        console.log("creating object");
    }
}
var person = new Person2();

console.log(person)
