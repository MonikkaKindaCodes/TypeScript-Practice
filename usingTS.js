var button = document.querySelector("button");
var input1 = document.getElementById("num1"); //What kind of element Num is.
//! In TS - Will never appear null, will always find an element.
var input2 = document.getElementById("num2"); //Same as num1
function add(num1, num2) {
    return num1 + num2;
}
button.addEventListener("click", function () {
    console.log(add(+input1.value, +input2.value));
});
