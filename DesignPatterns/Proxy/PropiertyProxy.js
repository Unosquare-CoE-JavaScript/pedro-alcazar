/* 
 * TO CREATE A PROXY, ONLY IS NECESSARY REPLICATE THE INTERFACES (METHODS) OF AN OBJECTO OR CLASS
 */
class Property
{
  constructor(value, name='')
  {
    this._value = value;
    this.name = name;
  }
  // these are the properties to acceso with proxy pattern
  get value() { return this._value; }
  set value(newValue)
  {
    if (this._value === newValue)
      return;
    console.log(`Assigning ${newValue} to ${this.name}`);
    this._value = newValue;
  }
}

class Creature
{
  constructor()
  {
    this._agility = new Property(10, 'agility');
  }
  // these are the properties to acceso with proxy pattern
  get agility() { return this._agility.value; }
  set agility(value) {
    this._agility.value = value;
  }
}

let c = new Creature();
c.agility = 12;
c.agility = 13;