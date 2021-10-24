class Address {
    constructor(streetAddress, city, country){
        this.streetAddress = streetAddress;
        this.city = city;
        this.country = country;
    }
    deepCopy(){
        return new Address(this.streetAddress, this.city, this.country)
    }

    toString(){
        return `Address: ${this.streetAddress}\nCity: ${this.city}\nCountry: ${this.country}`;
    }
}

class Person {
    constructor(name, address){
        this.name = name;
        this.address = address;
    }

    deepCopy(){
        return  new Person(this.name, this.address.deepCopy())
    }
    geet(){
        console.log(`Hi, my mane is ${this.name}, I live in ${this.streetAddress}`)
    }
}

class Serialize{
    constructor(types){
        this.types = types;
    }

    markRecursive(object){
        let idx = this.types.findIndex(t => {
            return t.name === object.constructor.name;
        })
        if (idx !== -1){
            object['typeIndex'] = idx;
            for( let key in object){
                this.markRecursive(object[key])
            }
        }
    }
    reconstructRecursive(object){
        if (object.hasOwnProperty('typeIndex')){
            let type = this.types[object.typeIndex];
            let obj = new type();
            for (let key in object){
                if (object.hasOwnProperty(key) && object[key] != null){
                    obj[key] = this.reconstructRecursive(object[key]);
                }
            }
            delete obj.typeIndex;
            return obj;
        }
    }

    clone(object){
        this.markRecursive(object);
        let copy = JSON.parse(JSON.stringify(object))
        return this.reconstructRecursive(copy)
    }
}


class EmployeeFactory{

}
EmployeeFactory.main = new Employee(null, new Address(null, '123 East Dr', 'London'))

let jonh = new Person('Jonh', new Address('123 London road', 'London', 'UK'))

// let jane = jonh.deepCopy();

let s = new Serialize([Person, Address])

let jane = s.clone(jonh)
jane.name = 'Jane';
jane.address.streetAddress = '321 Angel St'

console.log(jonh);
console.log(jane);

jane.geet();