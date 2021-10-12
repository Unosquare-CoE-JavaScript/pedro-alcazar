class CourseGoal {
    title: string = '';
    description: string = '';
    date: Date = new Date();
}

function createCurseGoal(title: string, description: string, date: Date){
    let courseGoal : Partial<CourseGoal> = {};

    courseGoal.title = title;
    courseGoal.description = description;
    courseGoal.date = date;

    console.log(courseGoal);
}

createCurseGoal("Title1", "Descripcion del test", new Date())

class DataStorage{
    private data: (string | number | boolean) [] = [];

    addItem(item: string | number | boolean){
        this.data.push(item)
    }

    removeItem (item: string | number | boolean){
        if (this.data.indexOf(item) === -1){
            return;
        }
        this.data.splice(this.data.indexOf(item), 1);
    }
}

let objDataStorage =  new DataStorage();
console.log(objDataStorage)
objDataStorage.addItem('Item1')
console.log(objDataStorage)
objDataStorage.addItem('Item2')
objDataStorage.addItem('Item3')
console.log(objDataStorage)
objDataStorage.removeItem('Item3')
console.log(objDataStorage)