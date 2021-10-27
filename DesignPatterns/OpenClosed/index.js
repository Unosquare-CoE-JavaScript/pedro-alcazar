//Open Closed, the classes having open to encrease and closed to modification
//Objects as a enum
let color = Object.freeze({
    red: 'red',
    green : 'green',
    blue:  'blue'
});

let size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

class Product{
    constructor(name, color, size){
        this.name = name;
        this.color = color;
        this.size = size;
    }
}
/* 
 * creating different filters

 */
class ProductFilter{
    filterByColor(products, color){
        return products.filter(p => p.color === color);
    }

    filterBySize(products, size){
        return products.filter(p => p.size === size)
    }

    filterBySizeAndColor(products, size, color){
        return products.filter(p => p.size === size && p.color === color)
    }
}


// class with one method, that return true if is the same color 
class ColorSpecification {
    constructor(color){
        this.color = color;
    }

    isStagisfied(item){
        return item.color === this.color;
    }
}

// class with one method, Return true if the element is the same size
class SizeSpecification {
    constructor(size){
        this.size = size;
    }

    isStagisfied(item){
        return item.size === this.size;
    }
}

// class with one method, return the element that do match with item passed
class BetterFilter {
    filter (items, specs){
        return items.filter (x => specs.isStagisfied(x))
    }

}


class AndSpecification{
    constructor(...specs){
        this.specs = specs;
    }
    isStagisfied(item){
        return this.specs.every(x => x.isStagisfied(item))
    }
}


let apple = new Product('Apple', color.green, size.small);
let tree = new Product('Tree', color.green, size.large);
let house = new Product('House', color.blue, size.medium);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log(`Green products (old):`)
for(let p of pf.filterByColor(products, color.green)){
    console.log(` * ${p.name} is green`);
}


let bf = new BetterFilter();
console.log(`Green products (new);`);
for (let p of bf.filter(products, new ColorSpecification(color.green))){
    console.log(`* ${p.name} is green`);
}


console.log(`Large and Green products`);
let specs = new AndSpecification(new ColorSpecification(color.green), new SizeSpecification(size.large))
for (let p of bf.filter(products, specs)){
    console.log(`* ${p.name} is large and greeen`)
}