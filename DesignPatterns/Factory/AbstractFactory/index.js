const readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
class HotDrink{
    consume(){

    }
}

class Tea extends HotDrink{
    consume(){
        console.log('this tea is nice with lemon!');
    }
}

class Coffee extends HotDrink{
    consume(){
        console.log('This coffee is delicious!')
    }
}

class HotDrinkFactory{
    prepare(amount){
        
    }
}

class TeaFactory extends HotDrinkFactory{
    prepare(amount){
        console.log(`Put in tea bag, boild water, pour ${amount}ml`)
        return new Tea();
    }
}

class CoffeeFactory extends HotDrinkFactory{
    prepare(amount){
        console.log(`Grind some beans, boil water, pour ${amount}ml`);
        return new Coffee();
    }
}

class HotDrinkMachine{
    constructor(){
        this.factories = {};
        for (let drink in AvailableDrink){
            // Factorize the assignation
            this.factories[drink] = new AvailableDrink[drink]();
        }
    }

    interact(consumer){
        rl.question('Please specify drink an amount (ej. tea 50): ', answer => {
            let parts = answer.split(' ');
            let name = parts[0];
            let amount =parseInt(parts[1]);
            let d =  this.factories[name].prepare(amount);
            rl.close()
            consumer(d)
        } )
    }

    makeDrink(type){
        switch(type){
            case 'tea':
                return new TeaFactory.prepare(200);
            case 'coffee':
                return new CoffeeFactory.prepare(50);
            default:
                throw new Error('Error in element selected')
        }
    }
}

let AvailableDrink = Object.freeze({
    coffee: CoffeeFactory,
    tea: TeaFactory
})

let machine = new HotDrinkMachine();
rl.question('Witch drink?', function(answer){
    let drink = machine.makeDrink(answer);
    drink.consume();
    rl.close();
})

machine.interact(
    function(drink){
        drink.consume()
    }
)