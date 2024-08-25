const romanRef = document.querySelector(".r-i");
const intRef = document.querySelector(".i-r");
const displayRef = document.querySelector(".display");
let isRoman = false;
let isInteger = false;
let text = "";
romanRef.onchange = (e) => {
  isRoman = true;
  isInteger = false;
  console.log(isRoman);
};

intRef.onchange = (e) => {
  isInteger = true;
  isRoman = false;
  console.log(isInteger);
};

const handleSubmit = (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  text = formData.get("text");

  if (!isRoman && !isInteger) {
    alert("please select one of the two options to continue!");
    return;
  }
  let result = "";
  if (isRoman) {
    result = convertRomanToInteger(text);
  } else {
    result = convertIntegerToRoman(Number(text));
  }

  displayRef.textContent = result;
};

const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];
const tens = ["", "X", "XX", "XXX", "LX", "L", "LX", "LXX", "LXXX", "XC"];
const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
const thousand = ["", "M", "MM", "MMM"];

const convertIntegerToRoman = (n) => {
  return (
    thousand[Math.floor(n / 1000)] +
    hundreds[Math.floor((n % 1000) / 100)] +
    tens[Math.floor((n % 100) / 10)] +
    ones[Math.floor(n % 10)]
  );
};
const list = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
const convertRomanToInteger = (str) => {
  let ans = 0;
  for (let i = 0; i < str.length; i++) {
    if (i > 0 && list[str[i]] > list[str[i - 1]]) {
      ans += list[str[i]] - 2 * list[str[i - 1]];
    } else {
      ans += list[str[i]];
    }
  }

  return ans;
};
