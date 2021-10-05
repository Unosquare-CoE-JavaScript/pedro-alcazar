function add (n1: number, n2: number, showresult: boolean, Pharse: string = "Result:") {
    let result = n1 + n2;
    if (showresult){
        console.log(Pharse + result)
    }
    return result;
}

const number1 = 5;
const number2 = 10;
const printResults = true;
const resultPhrase =  "The result is: "
add(number1, number2, printResults, resultPhrase)