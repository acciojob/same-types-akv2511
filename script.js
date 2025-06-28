function isSameType(value1, value2) {
  //your js code here
const convert = (val) => {
    if (!isNaN(val) && val.trim() !== "") {
      return Number(val);
    }
    if (val.toLowerCase?.() === "true" || val.toLowerCase?.() === "false") {
      return val.toLowerCase() === "true";
    }
    return val;
  };  value1 = convert(value1);
  value2 = convert(value2);

  return typeof value1 === typeof value2;
}

// do not change the code below.
let value1 = prompt("Enter Start of the Range.");
let value2 = prompt("Enter End Of the Range.");
alert(isSameType(value1, value2));
