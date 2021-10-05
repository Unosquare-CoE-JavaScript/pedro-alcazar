var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Department = /** @class */ (function () {
    function Department(n) {
        this.employees = [];
        this.reports = [];
        this.name = n;
    }
    Department.prototype.describe = function () {
        console.log("Description of : " + this.name);
        if (this.employees) {
            console.log("Employees: " + this.employees);
        }
    };
    Department.prototype.addReport = function (report) {
        this.reports.push(report);
    };
    Department.prototype.getReports = function () {
        if (this.reports.length > 0) {
            return this.reports;
        }
        else {
            throw Error("Reports not Found...");
        }
    };
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, admins) {
        var _this = _super.call(this, id) || this;
        _this.admins = admins;
        return _this;
    }
    return ITDepartment;
}(Department));
var newDepartment = new Department('Accounting');
console.log(newDepartment);
newDepartment.employees.push('Anna');
newDepartment.employees.push('Max');
newDepartment.describe();
newDepartment.addReport("New Report from method");
var reports = newDepartment.getReports();
var newITDepartment = new ITDepartment('IT', ["admin1", "admin2"]);
console.log(newITDepartment);
newITDepartment.describe();
