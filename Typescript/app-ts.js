function add(n1, n2, showresult, Pharse) {
    if (Pharse === void 0) { Pharse = "Result:"; }
    var result = n1 + n2;
    if (showresult) {
        console.log(Pharse + result);
    }
    return result;
}
var number1 = 5;
var number2 = 10;
var printResults = true;
var resultPhrase = "The result is: ";
add(number1, number2, printResults, resultPhrase);
