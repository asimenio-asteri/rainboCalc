function getValue(id) {
  let temp = document.getElementById(id).value;
  return Number(temp);
}
function solveQuad() {
  let a = getValue("a");
  let b = getValue("b");
  let c = getValue("c");
  let solve1 = (-b + ((b ** 2 - (4 * a * c)) ** 0.5)) / (2 * a);
  let solve2 = (-b - ((b ** 2 - (4 * a * c)) ** 0.5)) / (2 * a);
  document.getElementById("quadOut").innerHTML = "x = " + solve1 + ", " + solve2;
}
function findHippo() {
  let a = getValue("legA");
  let b = getValue("legB");
  let solve = (a ** 2 + b ** 2) ** 0.5;
  document.getElementById("legOut").innerHTML = "hypotenuse = " + solve + " units";
}