setInterval(abc, 10);
function get(elm, value) {
  if (!value) {
    return document.getElementById(elm);
  } else {
    return document.getElementById(elm)[value];
  }
}
function test() {
  alert("Tested!");
}
function abc() {
  var num;
  var temp = `The missing side is ${num} unit(s)`;
  var sideA = get("a", "value");
  var sideB = get("b", "value");
  var sideC = get("c", "value");
  Number(sideA);
  Number(sideB);
  Number(sideC);
  if (sideA == null) {

  } else if (sideB == null) {

  } else if (sideC == null) {
    num = Math.sqrt(sideA ** 2 + sideB ** 2);
    num = Number.isInteger(num) ? num.toString() : "√" + num.toString();
    get("out").innerHTML = temp;
  }  
}