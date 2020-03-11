document.addEventListener("touchstart", function() {},false);

function backGround() {
  var n = Math.floor((Math.random() * 20) + 1);
  document.getElementById("cmhtml").setAttribute("class", "bg" + n);
}

backGround();

setInterval(backGround, 6000);