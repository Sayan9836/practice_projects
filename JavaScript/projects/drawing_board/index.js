let x = 0;
let y = 0;

let isDrawing = false;

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

canvas.addEventListener("mousedown", (e) => {
  x = e.offsetX;
  y = e.offsetY;
  isDrawing = true;
});

canvas.addEventListener("mousemove", (e) => {
  if (isDrawing) {
    drawLine(context, x, y, e.offsetX, e.offsetY);
    x = e.offsetX;
    y = e.offsetY;
  }
});

canvas.addEventListener("mouseup", (e) => {
  x = 0;
  y = 0;
  isDrawing = false;
});

function drawLine(context, x1, y1, x2, y2) {
  context.beginPath();
  context.strokeStyle = "black";
  context.lineWidth = 1;
  context.moveTo(x1, y1);
  context.lineTo(x2, y2);
  context.stroke();
  context.closePath();
}

/// Implementation of debouncing in real life
function searchHandler(query) {
  debouncedSearch(query);
}

const debouncedSearch = debounce(fetchSearchingData, 500);

const debounce = (func, wait) => {
  let timer = null;

  return function (...args) {
    if (timer) {
      clearTimeout(timer);
    }

    timer = setTimeout(() => {
      func.call(this, ...args);
    }, wait);
  };
};

const fetchSearchingData = async () => {
  // call api
};

// Throttlling
const Throttlling = (func, delay) => {
  let lastCallTime = 0;
  return function (...args) {
    let currTime = Date.now();
    if (currTime - lastCallTime >= delay) {
      func.call(this, ...args);
      lastCallTime = currTime;
    }
  };
};
