/* 
 * this is an example de Bridge pattern 
 */
class VectorRenderer
{
  renderCircle(radius)
  {
    console.log(`Drawing a circle of radius ${radius}`);
  }
}



class RasterRenderer
{
  renderCircle(radius)
  {
    console.log(`Drawing pixels for circle of radius ${radius}`);
  }
}


//this is a main class, of this depended circle and square 
class Shape
{
  constructor(renderer)
  {
    this.renderer = renderer;
  }
}

class Circle extends Shape
{
 //receiving the vector to connect
  constructor(renderer, radius) {
    super(renderer);
    this.radius = radius;
  }

  //Method to conect the bridge
  // 
  draw()
  {
      //Depending the type of de render passed on the constructor, will be the call to the bridge
    this.renderer.renderCircle(this.radius);
  }

  resize(factor)
  {
    this.radius *= factor;
  }
}

// imagine Square, Triangle
// different ways of rendering: vector, raster
// we don't want a cartesian product of these

let raster = new RasterRenderer();
let vector = new VectorRenderer();
let circle = new Circle(vector, 5);
circle.draw();
circle.resize(2);
circle.draw();