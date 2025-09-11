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
