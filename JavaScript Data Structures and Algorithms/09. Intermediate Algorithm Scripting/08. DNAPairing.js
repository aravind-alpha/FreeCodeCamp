// DNA Pairing

// Solution Using object lookup mapping :
function pairElement(str) {
  let pairs = {
    A: "T",
    T: "A",
    G: "C",
    C: "G",
  };

  let arr = str.split("");
  return arr.map((element) => [element, pairs[element]]);
}

// Solution using Switch Case :
function pairElement(str) {
  let paired = [];

  let search = function (char) {
    switch (char) {
      case "A":
        paired.push(["A", "T"]);
        break;
      case "T":
        paired.push(["T", "A"]);
        break;
      case "C":
        paired.push(["C", "G"]);
        break;
      case "G":
        paired.push(["G", "C"]);
        break;
    }
  };

  for (let i = 0; i < str.length; i++) {
    search(str[i]);
  }

  return paired;
}

pairElement("GCG");

console.log(pairElement("GCG"));
