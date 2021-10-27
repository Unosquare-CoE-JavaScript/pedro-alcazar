//Rectangle class

class Rectangle {
    constructor(width, height){
        this._width = width;
        this._height = height;
    }
    get area(){
        return this.width * this.height;
    }
    
    get toString(){
        return `${this._width} X ${this._height}`;
    }

    get width(){
        return this._width;
    }

    get height(){
        return this._height;
    }

    set width(value){
        this._width = value
    }
    set height(value){
        this._height = value;
    }

}

//Square class
class Square extends Rectangle{
    constructor(size){
        super(size, size)
    }
    // Method contract
    set width(value){
        this._width = this._height = value;
    }
    set height(value){
        this._height = this._width = value;
    }

    get isSquare(){
        return this._width === this._height
    }
}

// function to validate data
let useIt = function(rc){
    let width = rc.width;
    rc.height = 10;
    console.log(`Expected area of ${10*width}`,
     `got ${rc.area}`,
     `Is Square?:  ${rc.isSquare}`);

}

let rc = new Rectangle(2,3);
console.log(rc.toString)

let sq = new Square(4);
console.log(sq.toString)

sq.width = 5
console.log(sq.toString)

useIt(rc)