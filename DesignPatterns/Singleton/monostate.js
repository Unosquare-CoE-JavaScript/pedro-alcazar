
// creating main object 
class ChiefExecutiveOfficer{
    get name() {
        return ChiefExecutiveOfficer._name;
    }
    set name(value) {
        ChiefExecutiveOfficer._name = value;
    }

    get age(){
        return ChiefExecutiveOfficer._age;
    }
    set age(value){
        ChiefExecutiveOfficer._age = value;
    }
    toString(){
        return `CEO's name if ${this.name}, and he is ${this.age} years old`;
    }
}


//creating the states.
ChiefExecutiveOfficer._age = undefined;
ChiefExecutiveOfficer._name = undefined;

let ceo = new ChiefExecutiveOfficer();
ceo.name= 'Adam'
ceo.age= 55;

let ceo2 = new ChiefExecutiveOfficer();
ceo.name = 'Aron';
ceo.age = 60;

//retunr the last state
console.log(ceo.toString());
console.log(ceo2.toString())