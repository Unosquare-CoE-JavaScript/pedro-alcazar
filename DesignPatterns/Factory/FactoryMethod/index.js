/* 
 * This is a example of Factory Method
 */
//Creating enm of types of coordinate
const  CoordinateSystem ={
    cartesian : 0,
    polar : 1
}


class Point{
    // constructor(a, b, cs  = CoordinateSystem.cartesian){

    // }


    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    static NewCartesianPoint(x, y){
        return Point(x,y);
    }

    static NewPolarPoint(rho, theta){
        return new Point(
            rho * Math.cos(theta),
            rho * Math.sin(theta)
        )
    }

    static get factory(){
        
    }
}

let p = new Point(4,5);
console.log(p);

let p2 = Point.NewPolarPoint(5, Math.PI/2);
console.log(p2);