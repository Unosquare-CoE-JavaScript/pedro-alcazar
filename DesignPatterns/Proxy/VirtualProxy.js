/* 
 * TO CREATE A PROXY, ONLY IS NECESSARY REPLICATE THE INTERFACES (METHODS) OF AN OBJECTO OR CLASS
 */

class Image
{
  constructor(url)
  {
    this.url = url;
    console.log(`Loading image from ${this.url}`);
  }

  draw()
  {
    console.log(`Drawing image ${this.url}`);
  }
}

class LazyImage
{
  constructor(url)
  {
    this.url = url;
  }

  // this is the way to implement the virtual proxy
  draw()
  {
      //this part decide if si necessary create a new image as an object through the image class
    if (!this.image)
      this.image = new Image(this.url);
    this.image.draw();
  }
}

function drawImage(img)
{
  console.log('About to draw the image');
  img.draw();
  console.log('Done drawing the image');
}

let img = new LazyImage('http://pokemon.com/pikachu.png');
drawImage(img);