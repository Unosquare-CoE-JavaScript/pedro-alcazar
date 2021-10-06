var Person = /** @class */ (function () {
    function Person(n) {
        this.age = 30;
        this.name = n;
    }
    Person.prototype.greet = function (pharse) {
        console.log('Pharse is :' + pharse + ' of: ' + this.name + ' with: ' + this.age + ' years');
    };
    ;
    return Person;
}());
var user1 = new Person('Max');
console.log(user1);
user1.greet("Call Geet");
