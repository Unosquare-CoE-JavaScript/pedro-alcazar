class Tag {
    static get indentSize(){ return 2;}

    constructor(name='', text = ''){
        this.name = name;
        this.text = text;
        this.children = [];
    }

    toStringImpl(indent){
        let html = [];
        let i = ' '.repeat(indent * Tag.indentSize)
        html.push(`${i}<${this.name}>\n`)
        if (this.text.length > 0){
            html.push(' '.repeat(Tag.indentSize * (indent + 1)));
            html.push(this.text);
            html.push(`\n`);
        }

        for (let child of this.children){
            html.push(child.toStringImpl(indent + 1 ))
        }
        html.push(`${i}</${this.name}>\n`);
        return html.join('');
    }

    toString(){
        return this.toStringImpl(0);
    }
}

class HtmlBuilder {
    constructor(rootname){
        this.root =  new Tag(rootname);
        this.rootname = rootname;
    }

    addChild(childName, ChildText){
        let child = new Tag(childName, ChildText);
        this.root.children.push(child);
    }
    addChildFluent(childName, ChildText){
        let child = new Tag(childName, ChildText);
        this.root.children.push(child);
        return this;
    }
    toString(){
        return this.root.toString();
    }
    build(){
        return this.root;
    }
    clear (){
        this.root= new Tag(this.rootname)
    }
}


const hello = 'hello';
let html = [];
html.push('<p>')
html.push(hello)
html.push('</p>')
console.log(html.join(''))

let builder = new HtmlBuilder('ul')
const words =['hello', 'world'];
html = [];
html.push('<ul>\n');
for (let w of words){
    builder.addChild('li', w)
}
console.log(builder.root.toString())

builder.clear();
builder
    .addChildFluent('li','foo')
    .addChildFluent('li','bar')
    .addChildFluent('li', 'baz')

console.log(builder.toString())