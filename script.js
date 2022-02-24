function getValue(id, num) {
  let temp = document.getElementById(id).value;
  if (!num) {
    return Number(temp);
  } else if (num == "s") {
    return temp;
  }
}
function getTag(id) {
  return document.getElementById(id);
}
function solveQuad() {
  let a = getValue("a");
  let b = getValue("b");
  let c = getValue("c");
  let solve1 = (-b + ((b ** 2 - (4 * a * c)) ** 0.5)) / (2 * a);
  let solve2 = (-b - ((b ** 2 - (4 * a * c)) ** 0.5)) / (2 * a);
  getTag("quadOut").innerHTML = "x = " + solve1 + ", " + solve2;
}
function findHippo() {
  let a = getValue("legA");
  let b = getValue("legB");
  let solve = (a ** 2 + b ** 2) ** 0.5;
  getTag("legOut").innerHTML = "hypotenuse = " + solve + " units";
}
function findSpeed() {
  let d = getValue("distance");
  let t = getValue("time");
  getTag("speedOut").innerHTML = "speed =" + (d / t) + " units/second";
}
function findMean() {
  
}
/* function fgh() {
  let fgh = getValue("fgh", "s");
  let omega = /omega/g.test(fgh);
  let list = /(\d)+/g.exec(fgh);
  list[0] = Number(list[0]);
  list[1] = Number(list[1]);
  fg(list[1], list[0], 1);
}
function fg(par, sub, nest) {
  if (sub == 1 && nest == 1) {
    console.log(par * 2);
  }
} */
function synthDiv() {
  let x = getValue("div","s");
  let y = getValue("eq","s").split(",").map(x => Number(x));
  console.log(y);
  let z = [];
  let w = 0;
  let r = 0;
  z.push(y[0]);
  for (i = 1; i < y.length; i++) {
    z.push(y[i] + z[i-1] * x);
    w = z[i];
  }
  getTag("divOut").innerHTML = `${z}`;
}