document.addEventListener("touchstart", function() {},false);

function backGround() {
  var n = Math.floor((Math.random() * 20) + 1);
  document.getElementById("cmhtml").setAttribute("style", "background-image:url('../bg/" + n + ".jpg');");
}

backGround();

setInterval(backGround, 6000);