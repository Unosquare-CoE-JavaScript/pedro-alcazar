/* 
 * TO CREATE A PROXY, ONLY IS NECESSARY REPLICATE THE INTERFACES (METHODS) OF AN OBJECTO OR CLASS
 */

class Percentage
{
  constructor(percent)
  {
    this.percent = percent; // 0 to 100
  }

  toString()
  {
    return `${this.percent}%`;
  }

  valueOf()
  {
    return this.percent/100;
  }
}

let fivePercent = new Percentage(5);
//this part get data with proxy method valueOf using the name of method
console.log(`${fivePercent} of 50 is ${50*fivePercent}`);