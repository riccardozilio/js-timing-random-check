function getRandom(min, max) {

  var delta = max - min + 1;
  var rnd = Math.floor(Math.random() * (max - min)) + min;

  return rnd;
}
function numarray() {
  var nums = [];
  var n;
  for (var i = 0; i < 2; i++) {

    n = getRandom(0, 100);
    nums.push(n);
    }
  return nums;
}
alert(numarray());

var arrayrnd = numarray();

function numberImput(){
var numeroConfronto = [];
var numeroInserito;
for (var i = 0; i < 2; i++) {
  numeroInserito = prompt("dammi i numeri");
  numeroConfronto.push(numeroInserito);
}
return numeroConfronto;
}

var firstLevel =numberImput();

if (firstLevel == arrayrnd) {
  alert("prossimo livello")
}else {
  alert("livello fallito")
}
