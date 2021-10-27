/* 
 * This is an example to interface segregation with a contract as a interfaces
 */
class NotImplementedError extends Error{
    constructor(name){
        let msg = `${name} is not implemented!`
        super(msg)
        if (Error.captureStackTrace){
            Error.captureStackTrace(this, NotImplementedError)
        }
    }
}

class Document {
    
}

class Machine {
    constructor(){
        if(this.constructor.name === 'Machine'){
            throw new Error('Machine is abstract!')
        }
        
    }
    print(doc) {
        //
    }
    fax(doc){
        //
    }
    scan(doc){
        //
    }
}

class MultifunctionPrinter extends Machine{
    print(doc){

    }
    fax(doc){

    }
    scan(doc){

    }
}

class OldFashionedPrinter extends Machine{
    print(doc){

    }
    fax(doc){
        //do nothing
        //principale of least surprise
    }
    scan(doc){
        throw new NotImplementedError('OldFashonedPronter.scan')
    }

}

class Scanner {
    constructor(){
        if (this.constructor.name === 'Scanner'){
            throw new Error('Scanner is Abstract!')
        }
    }
    scan(){

    }
}
class Printer {
    constructor(){
        if (this.constructor.name === 'Printer'){
            throw new Error('Printer is Abstract!')
        }
    }
    print(){

    }
}

class PhotoCopier extends Scanner, Printer{
    print(){

    }
    scan(){

    }
}



let printer = new OldFashionedPrinter();
printer.scan();