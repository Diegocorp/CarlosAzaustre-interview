//ANCHOR: Object with method

const greeting = {
  hello: () => console.log("Hello"),
};

greeting.hello();

//ANCHOR: How you can make a property of an object inmutable?

const girlfriend = {
  first_name: "Edith",
  last_name: "Beltran",
};

//Avoid any kind of mod
Object.freeze(girlfriend);

//Avoid only create new properties
//Object.seal(girlfriend);

girlfriend["age"] = 23;
girlfriend.first_name = "Minerva";

console.log(girlfriend);

//ANCHOR: write that logs the 5 elements that occur the most in the array.

const elementMostOcurr = (arr) => {
  const reduced = arr.reduce((acc, el) => {
    if (acc[el]) {
      acc[el]++;
    } else {
      acc[el] = 1;
    }
    return acc;
  }, {});

  return Object.keys(reduced)
    .map((element) => ({
      COREL: element,
      VALUE: reduced[element],
    }))
    .sort((a, b) => b.VALUE - a.VALUE);
};

console.log(
  elementMostOcurr([
    "CORAN",
    "EQUINOX",
    "PROMP",
    "TRASER",
    "HIUNDI",
    "DAMMAR",
    "CORAN",
    "PROMP",
    "FERZA",
    "TRASER",
    "PROMP",
  ])
);

//ANCHOR: remove duplicated elements in an array

const removeDuplicates = (nums) => {
  let i = 0;

  nums.forEach((num) => {
    if (i < 1 || num > nums[i - 1]) {
      nums[i] = num;
      i++;
    }
  });

  return i;
};
