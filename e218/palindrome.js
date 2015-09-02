function reverse(x) {
    return x.split("").reverse().join("");
}
function checkPali(num) {
    if (num.toString() === reverse(num.toString())) {return true;}
    else {return false;}
}
function getSteps(a) {
        var first = a;
        var steps = 0;
        var palidrome;
        while (!checkPali(a)) {
            a = Number(a) + Number(reverse(a.toString()));
            steps += 1;
        }
        var text = first + " gets palidromic after " + steps + " steps: " + a;
        document.getElementById("display").innerHTML = text;
}
