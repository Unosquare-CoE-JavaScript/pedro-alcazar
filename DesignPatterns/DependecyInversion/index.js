/* 
 * this is an example for Dependecy Inversion Principle
 */

// Creating the relationship
let relationship = Object.freeze({
    parent: 0,
    child: 1,
    sibling: 2
})
// Object Person
class Person{
    constructor(name){
        this.name = name;
    }
}

// Low-Level module


//Class to get inherence
class RelationshipBrowser{
    constructor(browser){
        for (let p of browser.findAllChildrenOf('Jonh')){
            console.log(`Jonh has a child called ${p.name}`);
        }
    }

}

class Relationship extends RelationshipBrowser{
    constructor(){
        super();
        this.data = [];
    }

    addParentAndChild (parent, child){
        this.data.push({
            from: parent,
            type: Relationship.parent,
            to: child
        })
    }
    findAllChildrenOf(name){
        return this.data.filter(r => r.from.name === name && r.type === Relationship.parent)
    }
}


class Research { //abstract classes / interfaces
    constructor(relationship){
        let relations = relationship.data;
        //find a child of Honh
        for (let rel of relations.filter(r => r.from.name === 'Jonh' && r.type === Relationship.parent)){
            console.log(`Jonh has a child named ${rel.to.name}`);
        }
    }
    
}

let parent = new Person('Jonh');
let child1 = new Person('Chris');
let child2 = new Person('Matt');

let rels = new Relationship();
rels.addParentAndChild(parent, child1);

