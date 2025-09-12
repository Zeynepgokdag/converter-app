//import { calculation } from "./calculation";//

const options = {
  weight: ["Kilogram", "Gram", "Pound"],
  length: ["Metre", "Santimetre", "Feet", "Inç"],
  temperature: ["°C", "°F", "K"],
  volume: ["Litre", "Mililitre", "Galon"],
};

function setSelectionValue(secilenelement) {
  const firstoption = document.getElementById("firstoption");
  const secondoption = document.getElementById("secondoption");

  firstoption.innerHTML = "";
  secondoption.innerHTML = "";

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
}

//input1 alma
document.getElementById("input1").addEventListener("input", convertValue);
//birimsecme
document.getElementById("firstoption").addEventListener("change", convertValue);
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
    input2.value = value;
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
