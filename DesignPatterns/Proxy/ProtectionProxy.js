/* 
 * TO CREATE A PROXY, ONLY IS NECESSARY REPLICATE THE INTERFACES (METHODS) OF AN OBJECTO OR CLASS
 */
class Car
{
  drive()
  {
    console.log('Car being driven');
  }
}

class CarProxy
{
  constructor(driver)
  {
    this.driver = driver;
    // access to properties protected to access to Car class
    this._car = new Car();
  }

  //this is the protection proxy
  drive()
  {
      //this part decide if the property protected is accessible
    if (this.driver.age >= 16)
      this._car.drive();
    else
      console.log('Driver too young');
  }
}

class Driver
{
  constructor(age)
  {
    this.age = age;
  }
}

let car = new Car();
car.drive();

let car2 = new CarProxy(new Driver(12)); // try 22
car2.drive();

