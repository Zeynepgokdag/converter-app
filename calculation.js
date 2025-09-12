const calculation = [
  //Ağırlık//
  {
    from_key: "Kilogram",
    to_key: "Gram",
    coefficient: (value) => {
      return value * 1000;
    },
  },
  {
    from_key: "Kilogram",
    to_key: "Pound",
    coefficient: (value) => {
      return value * 2.2;
    },
  },

  {
    from_key: "Gram",
    to_key: "Kilogram",
    coefficient: (value) => {
      return value * 0.001;
    },
  },

  {
    from_key: "Gram",
    to_key: "Pound",
    coefficient: (value) => {
      return value * 0.00220462262;
    },
  },

  {
    from_key: "Pound",
    to_key: "Gram",
    coefficient: (value) => {
      return value * 453.59237;
    },
  },

  {
    from_key: "Pound",
    to_key: "Kilogram",
    coefficient: (value) => {
      return value * 0.45359237;
    },
  },
  //Uzunluk//
  {
    from_key: "Metre",
    to_key: "Santimetre",
    coefficient: (value) => {
      return value * 100;
    },
  },

  {
    from_key: "Metre",
    to_key: "Feet",
    coefficient: (value) => {
      return value * 3.2808399;
    },
  },

  {
    from_key: "Metre",
    to_key: "Inç",
    coefficient: (value) => {
      return value * 39.3700787;
    },
  },

  {
    from_key: "Santimetre",
    to_key: "Metre",
    coefficient: (value) => {
      return value * 0.01;
    },
  },

  {
    from_key: "Santimetre",
    to_key: "Feet",
    coefficient: (value) => {
      return value * 0.0328084;
    },
  },

  {
    from_key: "Santimetre",
    to_key: "Inç",
    coefficient: (value) => {
      return value * 0.393700787;
    },
  },
  {
    from_key: "Feet",
    to_key: "Metre",
    coefficient: (value) => {
      return value * 0.3048;
    },
  },

  {
    from_key: "Feet",
    to_key: "Santimetre",
    coefficient: (value) => {
      return value * 30.48;
    },
  },
  {
    from_key: "Feet",
    to_key: "Inç",
    coefficient: (value) => {
      return value * 12;
    },
  },

  {
    from_key: "Inç",
    to_key: "Metre",
    coefficient: (value) => {
      return value * 0.0254;
    },
  },
  {
    from_key: "Inç",
    to_key: "Santimetre",
    coefficient: (value) => {
      return value * 2.54;
    },
  },
  {
    from_key: "Inç",
    to_key: "Feet",
    coefficient: (value) => {
      return value * 0.0833;
    },
  },
  //Hacim//
  {
    from_key: "Litre",
    to_key: "Mililitre",
    coefficient: (value) => {
      return value * 1000;
    },
  },
  {
    from_key: "Litre",
    to_key: "Galon",
    coefficient: (value) => {
      return value * 0.264172052;
    },
  },

  {
    from_key: "Mİlilitre",
    to_key: "Litre",
    coefficient: (value) => {
      return value * 0.001;
    },
  },
  {
    from_key: "Mİlilitre",
    to_key: "Galon",
    coefficient: (value) => {
      return value * 0.000264172052;
    },
  },

  {
    from_key: "Galon",
    to_key: "Litre",
    coefficient: (value) => {
      return value * 3.78541178;
    },
  },
  {
    from_key: "Galon",
    to_key: "Mililitre",
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
