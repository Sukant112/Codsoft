let display = document.getElementById("display");

function btn(value) {
  if (display.value === "0") {
    display.value = value;
  } else {
    display.value += value;
  }
}

function clearDisplay() {
  display.value = "0";
}

function backspace() {
  display.value = display.value.slice(0, -1);
  if (display.value === "") {
    display.value = "0";
  }
}
function calculate() {
  try {
    let result = eval(display.value);
    display.value = result;
  } catch (e) {
    display.value = "Error";
  }
}


