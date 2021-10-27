class Memento
{
  constructor(balance)
  {
    this.balance = balance;
  }
}

class BankAccount
{
  constructor(balance = 0) {
    this.balance = balance;
    // Creating the way to control to restore a previous state
    this.changes = [new Memento(balance)];
    this.current = 0;
  }

  deposit(amount)
  {
    this.balance += amount;
    let m = new Memento(this.balance);
    this.changes.push(m);
    this.current++;
    return m;
  }

  restore(m)
  {
    if (m)
    {
      this.balance = m.balance;
      this.changes.push(m);
      this.current = this.changes.count - 1;
    }
  }

  // this method do restore
  undo()
  {
    if (this.current > 0)
    {
      let m = this.changes[--this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  //this method do again 
  redo()
  {
    if (this.current+1 < this.changes.length)
    {
      let m = this.changes[++this.current];
      this.balance = m.balance;
      return m;
    }
    return null;
  }

  toString()
  {
    return `Balance: $${this.balance}`;
  }
}

let ba = new BankAccount(100);
ba.deposit(50);
ba.deposit(25);
console.log(ba.toString());

ba.undo();
console.log(`Undo 1: ${ba.toString()}`);
ba.undo();
console.log(`Undo 2: ${ba.toString()}`);
ba.redo();
console.log(`Redo 2: ${ba.toString()}`);