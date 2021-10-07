var CourseGoal = /** @class */ (function () {
    function CourseGoal() {
        this.title = '';
        this.description = '';
        this.date = new Date();
    }
    return CourseGoal;
}());
function createCurseGoal(title, description, date) {
    var courseGoal = {};
    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;
    console.log(courseGoal);
}
createCurseGoal("Title1", "Descripcion del test", new Date());
var DataStorage = /** @class */ (function () {
    function DataStorage() {
        this.data = [];
    }
    DataStorage.prototype.addItem = function (item) {
        this.data.push(item);
    };
    DataStorage.prototype.removeItem = function (item) {
        if (this.data.indexOf(item) === -1) {
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    };
    return DataStorage;
}());
var objDataStorage = new DataStorage();
console.log(objDataStorage);
objDataStorage.addItem('Item1');
console.log(objDataStorage);
objDataStorage.addItem('Item2');
objDataStorage.addItem('Item3');
console.log(objDataStorage);
objDataStorage.removeItem('Item3');
console.log(objDataStorage);
