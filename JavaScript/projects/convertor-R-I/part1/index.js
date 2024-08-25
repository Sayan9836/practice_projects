let isClicked = false;

let input_text = "";

const checkbox = document.querySelector(".checkbox");
const convert = document.querySelector(".convert");
const input = document.querySelector(".input_text");

const display_result = document.querySelector(".result");

const map1 = new Map();

map1.set("I", 1);
map1.set("V", 5);
map1.set("X", 10);
map1.set("L", 50);
map1.set("C", 100);
map1.set("D", 500);
map1.set("M", 1000);

input.addEventListener("change", (event) => {
  input_text = event.target.value;
});

checkbox.onclick = () => {
  isClicked = true;
};

const executeLogic = () => {
  let result = "";

  if (!isClicked) {
    result = RomanToInteger(input_text);
    console.log(result);
  } else {
    result = IntegerToRoman(input_text);
  }

  display_result.textContent = result;
};

function RomanToInteger(input_text) {
  let result = 0;
  let prevElement = Number.MAX_VALUE;

  for (let index = 0; index < input_text.length; index++) {
    console.log(map1.get(input_text[index]));

    if (index !== 0) {
      prevElement = map1.get(input_text[index - 1]);
    }

    let currElement = map1.get(input_text[index]);

    if (prevElement < currElement) {
      result -= 2 * prevElement;
      result += currElement;
    } else {
      result += currElement;
    }
  }

  console.log(result);

  return result;
}

function IntegerToRoman(input_text) {
  input_text = Number(input_text);
  console.log(input_text);

  let result = "";

  while (input_text > 0) {
    if (input_text >= 1000) {
      result += "M";
      input_text -= 1000;
    } else if (input_text >= 900) {
      result += "CM";
      input_text -= 900;
    } else if (input_text >= 500) {
      result += "D";
      input_text -= 500;
    } else if (input_text >= 400) {
      result += "XD";
      input_text -= 400;
    } else if (input_text >= 100) {
      result += "C";
      input_text -= 100;
    } else if (input_text >= 90) {
      result += "XC";
      input_text -= 90;
    } else if (input_text >= 50) {
      result += "L";
      input_text -= 50;
    } else if (input_text >= 40) {
      result += "XL";
      input_text -= 40;
    } else if (input_text >= 10) {
      result += "X";
      input_text -= 10;
    } else if (input_text === 9) {
      result += "IX";
      input_text -= 9;
    } else if (input_text >= 5) {
      result += "V";
      input_text -= 5;
    } else if (input_text >= 1) {
      result += "I";
      input_text -= 1;
    }
  }

  return result;
}

convert.addEventListener("click", () => {
  if (input_text) {
    executeLogic();
  }
});
