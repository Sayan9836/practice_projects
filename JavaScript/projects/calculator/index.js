const display = document.getElementsByClassName("display")[0];

function execute() {
  if (display.value !== "") {
    display.value = eval(display.value);
  }
}

function operation(no) {
  display.value += no;
  console.log(display.value);
}

function clearText() {
  display.value = "";
}

function backSpace() {
  display.value = display.value.slice(0, display.value.length - 1);
}
