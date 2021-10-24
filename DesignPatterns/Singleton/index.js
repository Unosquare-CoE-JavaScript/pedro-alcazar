/* 
 * This is a singleton example
 */
class Singleton{
    constructor(){
        const instance = this.constructor.instance;
        if (instance){
            // return the instance before created
            return instance
        }
        //return new intance
        this.constructor.instance = this;
    }
    foo(){
        console.log('Doing something...')
    }
}

let s1 = new Singleton();
let s2 = new Singleton();

console.log('Are they indentical?   ' + (s1 === s2))
s2.foo();