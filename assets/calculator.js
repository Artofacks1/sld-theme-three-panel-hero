function myFunction() {
  var quantity = document.querySelector(".quantity__input");
  var price = parseFloat(document.querySelector(".price-item--regular").textContent.replace(/[^\d.-]/g, ''));
  var x = Math.floor(document.getElementById("calculator-length").value);
  var y = Math.floor(document.getElementById("calculator-width").value);
  quantity.value = (x/12) * (y/12);
  var area=((x/12) * (y/12)).toFixed(2);
  console.log(area);
  document.getElementById("calculator-area").value= area;
  document.getElementById("calculated-area").textContent= '  ' +area;
  document.getElementById("calculated-price").textContent = ' ' + (quantity.value*price).toFixed(2);
  
}
function checkInputValidity() {
  var x = document.getElementById("calculator-length");
  var y = document.getElementById("calculator-width");
  x.value = Math.floor(x.value);
  y.value = Math.floor(y.value);
}

function mysqFunction() {
  var quantity = document.querySelector(".quantity__input");
  var price = parseFloat(document.querySelector(".price-item--regular").textContent.replace(/[^\d.-]/g, ''));
  var x = Math.floor(document.getElementById("calculator-area").value);
  quantity.value = x;
  var area=(x).toFixed(2);
  document.getElementById("calculated-price").textContent = ' ' + (quantity.value*price).toFixed(2);
  document.getElementById("calculated-area").textContent= '  ' + area;
  document.getElementById("calculator-length").value= (quantity.value/2).toFixed(2);
  document.getElementById("calculator-width").value= (quantity.value/2).toFixed(2);
}
function checksqInputValidity() {
  var x = document.getElementById("calculator-area");
  x.value = Math.floor(x.value);
}