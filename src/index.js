import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Throttling</h1>
`;

let box = document.getElementById("movingBox");
let randomButton = document.createElement("button");
randomButton.value = "change position";
randomButton.className = "changePosition";
randomButton.textContent = "change Position";
randomButton.style.backgroundColor = "#008989";
randomButton.style.padding = "8px";
randomButton.style.margin = "10px";
randomButton.style.color = "#010101";

document.getElementById("app").appendChild(randomButton);

const changePostion = (func, limit) => {
  var throttleFlag = true;
  return function () {
    if (throttleFlag) {
      func();
      throttleFlag = false;
      randomButton.style.cursor = "none";
      randomButton.style.opacity = 0.5;
      setTimeout(() => {
        throttleFlag = true;
        randomButton.style.cursor = "pointer";
        randomButton.style.opacity = 1;
      }, limit);
    }
  };
};

const setSquareAtRandomPosition = () => {
  box.style.marginTop = Math.floor(Math.random() * 170) + "px";
  box.style.marginLeft = Math.floor(Math.random() * 170) + "px";
};

document
  .querySelector(".changePosition")
  .addEventListener("click", changePostion(setSquareAtRandomPosition, 1000));
