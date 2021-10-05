class Department {
    public name: string;
    public employees: string[] = [];
    public reports : string [] = [];

    constructor(n: string){
        this.name = n;
    }

    describe (){
        console.log("Description of : " + this.name)
        if (this.employees){
            console.log("Employees: "+ this.employees)
        }
    }

     addReport (report: string){
        this.reports.push(report)
    }

    getReports () : string[]{
        if (this.reports.length > 0){
            return this.reports
        }else{
            throw Error ("Reports not Found...");
            
        }
    }
}

class ITDepartment extends Department{
    admins : string[];
    constructor(id: string , admins: string[]){
        super(id);
        this.admins = admins;
    }
}

let newDepartment = new Department('Accounting');

console.log(newDepartment);
newDepartment.employees.push('Anna');
newDepartment.employees.push('Max');
newDepartment.describe();

newDepartment.addReport ("New Report from method");
let reports = newDepartment.getReports();

let newITDepartment = new ITDepartment('IT',["admin1","admin2"])
console.log(newITDepartment);
newITDepartment.describe();