const testArr = ["Pizza", 10, true, 25, false, "Wings"];

function lowerCaseWords(arr) {
  return new Promise(function (resolve, reject) {
    let out = [];
    const filtered = arr.filter((element) => typeof element === "string");
    filtered.forEach((string) => {
      out.push(string.toLowerCase());
    });
    if (out != null || out != []) {
      resolve(out);
    } else {
      reject("Oh no");
    }
  });
}

lowerCaseWords(testArr)
  .then((out) => console.log(out))
  .catch((err) => console.error(err));
