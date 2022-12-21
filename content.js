let newBody = document.querySelector("body");

let timer = document.createElement("div");
timer.setAttribute("id", "timer73");
timer.style.position = "absolute";
timer.style.zIndex = "999";
timer.style.width = "250px";
timer.style.height = "200px";
timer.style.backgroundColor = "#80808024";
timer.style.borderRadius = "12px";
timer.style.display = "flex";
timer.style.flexDirection = "column";
timer.style.justifyContent = "center";
timer.style.alignItems = "center";

let seconds = document.createElement("p");
seconds.setAttribute("id", "seconds73");
seconds.textContent = "15";
seconds.style.color = "white";
seconds.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
seconds.style.fontSize = "200px";
seconds.style.lineHeight = "220px";

let btnContainer = document.createElement("div");
btnContainer.style.display = "flex";
btnContainer.style.gap = "12px";

let restart = document.createElement("button");
restart.setAttribute("id", "restart73");
restart.textContent = "restart";
restart.style.backgroundColor = "white";
restart.style.border = "none";
restart.style.borderRadius = "16px";
restart.style.width = "60px";
restart.style.height = "20px";
restart.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
restart.style.color = "black";
restart.style.fontSize = "16px";
restart.style.paddingBottom = "24px";
restart.style.cursor = "pointer";

// let mute = document.createElement("button");
// mute.setAttribute("id", "mute73");
// mute.textContent = "mute";
// mute.style.backgroundColor = "white";
// mute.style.border = "none";
// mute.style.borderRadius = "16px";
// mute.style.width = "60px";
// mute.style.height = "20px";
// mute.style.fontFamily = "Segoe UI, Tahoma, Geneva, Verdana, sans-serif";
// mute.style.color = "black";
// mute.style.fontSize = "16px";
// mute.style.paddingBottom = "24px";
// mute.style.cursor = "pointer";

newBody.insertAdjacentElement("afterbegin", timer);
timer.append(seconds, btnContainer);
btnContainer.append(restart);

timer.ondragstart = function () {
  return false;
};

timer.onmousedown = function (event) {
  let shiftX = event.clientX - timer.getBoundingClientRect().left;
  let shiftY = event.clientY - timer.getBoundingClientRect().top;

  // (1) preparar para mover: hacerlo absoluto y ponerlo sobre todo con el z-index
  timer.style.position = "absolute";
  timer.style.zIndex = 1000;

  // quitar cualquier padre actual y moverlo directamente a body
  // para posicionarlo relativo al body
  document.body.insertAdjacentElement("afterbegin", timer);

  // centrar la pelota en las coordenadas (pageX, pageY)
  function moveAt(pageX, pageY) {
    timer.style.left = pageX - shiftX + "px";
    timer.style.top = pageY - shiftY + "px";
  }

  // mover nuestra pelota posicionada absolutamente bajo el puntero
  moveAt(event.pageX, event.pageY);

  function onMouseMove(event) {
    moveAt(event.pageX, event.pageY);
  }

  // (2) mover la pelota con mousemove
  document.addEventListener("mousemove", onMouseMove);

  // (3) soltar la pelota, quitar cualquier manejador de eventos innecesario
  timer.onmouseup = function () {
    document.removeEventListener("mousemove", onMouseMove);
    timer.onmouseup = null;
  };
};

let sound = new Audio("./audio-15.mp3");

restart.onmousedown = function () {
  n = 15;
    sound.play();
    sound.currentTime = 0;
};

// pause.onmousedown = function () {
//   sound.mute();
//   sound.currentTime = 0;
// };

let n = 14;
let seg = document.getElementById("seconds73");
let x = setInterval(function () {
  seg.textContent = n;
  n--;
  if (n == 0) {
    n = 15;
    sound.currentTime = 0;
  }
}, 1000);
