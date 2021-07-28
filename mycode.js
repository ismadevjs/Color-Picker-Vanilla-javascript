const alphaNumeric = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  0,
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

let hex = "#";
let x;

let color = document.querySelector(".color");
const button = document.querySelector("#btn");
button.addEventListener("click", function () {
  for (i = 0; i < 6; i++) {
    x = Math.floor(Math.random() * alphaNumeric.length);
    hex += alphaNumeric[x];
  }
  color.textContent = hex;
  document.querySelector("body").style.backgroundColor = hex;
  hex = "#";
});

color.addEventListener("click", function () {
  let copyText = document.querySelector(".color");
  let textArea = document.createElement("textarea");
  textArea.value = copyText.textContent;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand("Copy");
  textArea.remove();
  // Display an info toast with no title
  toastr.info('Text Copied?')

});
