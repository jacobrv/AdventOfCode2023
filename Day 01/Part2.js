// guesses
// 54256 (too low)
// 54277 (correct)

var example_text =
  "two1nine\neightwothree\nabcone2threexyz\nxtwone3four\n4nineeightseven2\nzoneight234\n7pqrstsixteen";

var real_text = document.querySelector("pre").innerText;

//var lines = example_text.split("\n");
var lines = real_text.split("\n");

var numberNames = [
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

function whatNumberNameStartHere(tLine, pos) {
  for (let i = 0; i < numberNames.length; i++) {
    if (tLine.indexOf(numberNames[i]) == pos) {
      console.log(i + 1);
      return { val: i + 1, skip: numberNames[i].length };
    }
  }
  return { val: -1, skip: 0 };
}
function whatNumberHere(tLine, pos) {
  if (!isNaN(tLine[pos])) {
    console.log(parseInt(tLine[pos]));
    return parseInt(tLine[pos]);
  }
  return -1;
}

var nums = [];
lines.forEach((line) => {
  firstNum = -1;
  lastNum = -1;
  for (var i = 0; i < line.length; i++) {
    let digit = whatNumberHere(line, i);
    if (digit < 0) {
      tDigit = whatNumberNameStartHere(line, i);
      digit = tDigit.val;
      if (tDigit.skip > 0) {
        i += tDigit.skip - 1;
      }
    }

    if (digit >= 0) {
      if (firstNum >= 0) {
        lastNum = digit;
      } else {
        firstNum = digit;
      }
    }
  }
  if (lastNum < 0 && firstNum < 0) {
    return;
  }
  if (lastNum < 0) {
    lastNum = firstNum;
  }
  console.log("**");
  console.log(firstNum + "" + lastNum);
  nums.push(parseInt(firstNum + "" + lastNum));
  console.log("*******");
});
console.log(nums);

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += parseInt(nums[i]);
}
console.log(sum);
