const calculation = [
  //Ağırlık//
  {
    from_key: "kg",
    to_key: "g",
    coefficient: (value) => {
      return value * 1000;
    },
  },
  {
    from_key: "kg",
    to_key: "lb",
    coefficient: (value) => {
      return value * 2.2;
    },
  },

  {
    from_key: "g",
    to_key: "kg",
    coefficient: (value) => {
      return value * 0.001;
    },
  },

  {
    from_key: "g",
    to_key: "lb",
    coefficient: (value) => {
      return value * 0.00220462262;
    },
  },

  {
    from_key: "lb",
    to_key: "g",
    coefficient: (value) => {
      return value * 453.59237;
    },
  },

  {
    from_key: "lb",
    to_key: "kg",
    coefficient: (value) => {
      return value * 0.45359237;
    },
  },
  //Uzunluk//
  {
    from_key: "m",
    to_key: "cm",
    coefficient: (value) => {
      return value * 100;
    },
  },

  {
    from_key: "m",
    to_key: "ft",
    coefficient: (value) => {
      return value * 3.2808399;
    },
  },

  {
    from_key: "m",
    to_key: "Inç",
    coefficient: (value) => {
      return value * 39.3700787;
    },
  },

  {
    from_key: "cm",
    to_key: "m",
    coefficient: (value) => {
      return value * 0.01;
    },
  },

  {
    from_key: "cm",
    to_key: "ft",
    coefficient: (value) => {
      return value * 0.0328084;
    },
  },

  {
    from_key: "cm",
    to_key: "Inç",
    coefficient: (value) => {
      return value * 0.393700787;
    },
  },
  {
    from_key: "ft",
    to_key: "m",
    coefficient: (value) => {
      return value * 0.3048;
    },
  },

  {
    from_key: "ft",
    to_key: "cm",
    coefficient: (value) => {
      return value * 30.48;
    },
  },
  {
    from_key: "ft",
    to_key: "Inç",
    coefficient: (value) => {
      return value * 12;
    },
  },

  {
    from_key: "Inç",
    to_key: "m",
    coefficient: (value) => {
      return value * 0.0254;
    },
  },
  {
    from_key: "Inç",
    to_key: "cm",
    coefficient: (value) => {
      return value * 2.54;
    },
  },
  {
    from_key: "Inç",
    to_key: "ft",
    coefficient: (value) => {
      return value * 0.0833;
    },
  },
  //Hacim//
  {
    from_key: "L",
    to_key: "mL",
    coefficient: (value) => {
      return value * 1000;
    },
  },
  {
    from_key: "L",
    to_key: "gal",
    coefficient: (value) => {
      return value * 0.264172052;
    },
  },

  {
    from_key: "mL",
    to_key: "L",
    coefficient: (value) => {
      return value * 0.001;
    },
  },
  {
    from_key: "Mİlilitre",
    to_key: "gal",
    coefficient: (value) => {
      return value * 0.000264172052;
    },
  },

  {
    from_key: "gal",
    to_key: "L",
    coefficient: (value) => {
      return value * 3.78541178;
    },
  },
  {
    from_key: "gal",
    to_key: "mL",
    coefficient: (value) => {
      return value * 3785.41178;
    },
  },

  //Sıcaklık//
  {
    from_key: "°C",
    to_key: "°F",
    coefficient: (value) => {
      return (value * 9) / 5 + 32;
    },
  },
  {
    from_key: "°C",
    to_key: "K",
    coefficient: (value) => {
      return value + 273.15;
    },
  },

  {
    from_key: "°F",
    to_key: "°C",

    coefficient: (value) => {
      return ((value - 32) * 5) / 9;
    },
  },
  {
    from_key: "°F",
    to_key: "K",
    coefficient: (value) => {
      return ((value - 32) * 5) / 9 + 273.15;
    },
  },

  {
    from_key: "K",
    to_key: "°C",
    coefficient: (value) => {
      return value - 273.15;
    },
  },
  {
    from_key: "K",
    to_key: "°F",
    coefficient: (value) => {
      return ((value - 273.15) * 9) / 5 + 32;
    },
  },
];
