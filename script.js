//Initialization
const section = document.createElement("section");
const container = document.createElement("div");
const title = document.createElement("h1");
const desc = document.createElement("p");

const cols = document.createElement("div");
const display = document.createElement("input");
const btn1 = document.createElement("button");
const btn2 = document.createElement("button");
const btn3 = document.createElement("button");
const btn4 = document.createElement("button");
const btn5 = document.createElement("button");
const btn6 = document.createElement("button");
const btn7 = document.createElement("button");
const btn8 = document.createElement("button");
const btn9 = document.createElement("button");
const btn10 = document.createElement("button");
const btn11 = document.createElement("button");
const btn12 = document.createElement("button");
const btn13 = document.createElement("button");
const btn14 = document.createElement("button");
const btn15 = document.createElement("button");
const btn16 = document.createElement("button");
const btn17 = document.createElement("button");
const btn18 = document.createElement("button");
const btn19 = document.createElement("button");

//SetAttribute
container.classList.add(
  "container",
  "d-flex",
  "justify-content-center",
  "mt-2"
);
container.id = "container";
title.id = "title";
title.classList.add("d-flex", "justify-content-center", "mt-5");
desc.id = "description";
desc.classList.add("d-flex", "justify-content-center");
cols.classList.add("col-12", "p-3");
display.classList.add("col-12", "border", "border-0", "h-50");
display.setAttribute("readonly", "");
display.id = "result";
display.setAttribute("placeholder", "0");
btn1.classList.add("col-3", "border", "border-0", "h-50");
btn1.id = "clear";
btn2.classList.add("col-3", "border", "border-0", "h-50");
btn3.classList.add("col-3", "border", "border-0", "h-50");
btn3.id = "decimal";
btn4.classList.add("col-3", "border", "border-0", "h-50");
btn4.id = "multiply";
btn5.classList.add("col-3", "border", "border-0", "h-50");
btn5.id = "7";
btn6.classList.add("col-3", "border", "border-0", "h-50");
btn6.id = "8";
btn7.classList.add("col-3", "border", "border-0", "h-50");
btn7.id = "9";
btn8.classList.add("col-3", "border", "border-0", "h-50");
btn8.id = "division";
btn9.classList.add("col-3", "border", "border-0", "h-50");
btn9.id = "4";
btn10.classList.add("col-3", "border", "border-0", "h-50");
btn10.id = "5";
btn11.classList.add("col-3", "border", "border-0", "h-50");
btn11.id = "6";
btn12.classList.add("col-3", "border", "border-0", "h-50");
btn12.id = "subtract";
btn13.classList.add("col-3", "border", "border-0", "h-50");
btn13.id = "1";
btn14.classList.add("col-3", "border", "border-0", "h-50");
btn14.id = "2";
btn15.classList.add("col-3", "border", "border-0", "h-50");
btn15.id = "3";
btn16.classList.add("col-3", "border", "border-0", "h-50");
btn16.id = "add";
btn17.classList.add("col-3", "border", "border-0", "h-50");
btn18.classList.add("col-3", "border", "border-0", "h-50");
btn19.classList.add("col-6", "border", "border-0", "h-50");
btn19.id = "equal";

//Adding content
title.innerText = "CALCULATOR";
desc.innerText =
  "This Calculator is created using DOM. This performs functions such as addition,subtraction,division and multiplication.";
btn1.innerText = "C";
btn2.innerText = "<-";
btn3.innerText = ".";
btn4.innerText = "x";
btn5.innerText = "7";
btn6.innerText = "8";
btn7.innerText = "9";
btn8.innerText = "/";
btn9.innerText = "4";
btn10.innerText = "5";
btn11.innerText = "6";
btn12.innerText = "-";
btn13.innerText = "1";
btn14.innerText = "2";
btn15.innerText = "3";
btn16.innerText = "+";
btn17.innerText = "0";
btn18.innerText = "00";
btn19.innerText = "=";

//Append
cols.append(
  display,
  btn1,
  btn2,
  btn3,
  btn4,
  btn5,
  btn6,
  btn7,
  btn8,
  btn9,
  btn10,
  btn11,
  btn12,
  btn13,
  btn14,
  btn15,
  btn16,
  btn17,
  btn18,
  btn19
);

container.append(cols);
section.append(title, desc, container);
document.body.append(section);

//Functionalities
btn1.addEventListener("click", () => {
  document.getElementById("result").value = " ";
});
btn2.addEventListener("click", () => {
  document.getElementById("result").value = document
    .getElementById("result")
    .value.slice(0, -1);
});
btn3.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + ".";
});
btn4.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "*";
});
btn5.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "7";
});
btn6.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "8";
});
btn7.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "9";
});
btn8.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "/";
});
btn9.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "4";
});
btn10.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "5";
});
btn11.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "6";
});
btn12.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "-";
});
btn13.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "1";
});
btn14.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "2";
});
btn15.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "3";
});
btn16.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "+";
});
btn17.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "0";
});
btn18.addEventListener("click", () => {
  document.getElementById("result").value =
    document.getElementById("result").value + "00";
});
btn19.addEventListener("click", () => {
  document.getElementById("result").value = eval(
    document.getElementById("result").value
  );
});

window.addEventListener("keypress", function (event) {
  event.preventDefault();
  let kpressed = window.event.key;
  let key = event.keyCode;
  const allowedKeys = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "+",
    "-",
    "*",
    "/",
    ".",
  ];
  // Only allow numbers and Enter to be entered
  if (allowedKeys.includes(event.key) || key === 13) {
    if (kpressed === "Enter") {
      document.getElementById("result").value = eval(
        document.getElementById("result").value
      );
    } else
      document.getElementById("result").value =
        document.getElementById("result").value + kpressed;
  } else {
    this.alert("Only numbers are allowed");
  }
});
