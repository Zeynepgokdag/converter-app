const options = {
  weight: ["kg", "g", "lb"],
  length: ["m", "cm", "ft", "Inç"],
  temperature: ["°C", "°F", "K"],
  volume: ["L", "mL", "gal"],
};

function inputChecker(event) {
  const from = document.getElementById("firstoption").value;
  const input1 = document.getElementById("input1").value;

  if (from == "K" && event.key == "-") {
    event.preventDefault();
  } else if (input1.length > 0 && event.key == "-") {
    event.preventDefault();
  }
}

function setSelectionValue(secilenelement) {
  const firstoption = document.getElementById("firstoption");
  const secondoption = document.getElementById("secondoption");

  firstoption.innerHTML = "";
  secondoption.innerHTML = "";

  document.getElementById("input1").value = "";
  document.getElementById("input2").value = "";

  const selectedValues = options[secilenelement.value];

  selectedValues.forEach((element) => {
    const option1 = document.createElement("option");
    option1.value = element;
    option1.innerText = element;

    const option2 = document.createElement("option");
    option2.value = element;
    option2.innerText = element;

    firstoption.appendChild(option1);
    secondoption.appendChild(option2);
  });

  filterOptions();
}
/*function kWithİnputClear() {
  const firstoption = document.getElementById("firstoption");

  if (firstoption.options.value === "K") {
    document.getElementById("input1").value = "";
  }
}*/

// (-) seçilmesin regex
const input1 = document.getElementById("input1");

input1.addEventListener("input", function () {
  const from = document.getElementById("firstoption").value;
  convertValue();
});

// birim seçme
document.getElementById("firstoption").addEventListener("change", () => {
  filterOptions();
  convertValue();
});
document
  .getElementById("secondoption")
  .addEventListener("change", convertValue);

function convertValue() {
  const input1 = document.getElementById("input1");
  const input2 = document.getElementById("input2");
  const from = document.getElementById("firstoption").value;
  const to = document.getElementById("secondoption").value;
  const value = parseFloat(input1.value);

  if (isNaN(value)) {
    input2.value = "";
    return;
  }

  if (from === to) {
    input2.value = null;
    return;
  }

  const rule = calculation.find(
    (item) => item.from_key === from && item.to_key === to
  );

  if (rule) {
    input2.value = rule.coefficient(value);
  } else {
    input2.value = "Çeviri yok";
  }
}

//aynı birimi engelle
function filterOptions() {
  const firstValue = document.getElementById("firstoption").value;
  const secondoption = document.getElementById("secondoption");

  for (let i = 0; i < secondoption.options.length; i++) {
    const option = secondoption.options[i];
    option.disabled = option.value === firstValue;
  }

  // ikinci select aynı birim
  if (secondoption.value === firstValue) {
    for (let i = 0; i < secondoption.options.length; i++) {
      if (!secondoption.options[i].disabled) {
        secondoption.value = secondoption.options[i].value;
        break;
      }
    }
  }
}

// değişim butonu
document.getElementById("swapBtn").addEventListener("click", () => {
  const firstoption = document.getElementById("firstoption");
  document.getElementById("input1").value = "";
  const secondoption = document.getElementById("secondoption");

  const temp = firstoption.value;
  firstoption.value = secondoption.value;
  secondoption.value = temp;

  convertValue();
});
