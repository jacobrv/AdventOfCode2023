//var example_text = "1abc2\npqr3stu8vwx\na1b2c3d4e5f\ntreb7uchet";

var example_text = document.querySelector("pre").innerText;

var lines = example_text.split("\n");
var nums = [];
lines.forEach((line) => {
  firstNum = -1;
  lastNum = -1;
  for (var i = 0; i < line.length; i++) {
    if (!isNaN(line[i])) {
      if (firstNum >= 0) {
        lastNum = line[i];
      } else {
        firstNum = line[i];
      }
    }
  }
  if (lastNum < 0 && firstNum < 0) {
    return;
  }
  if (lastNum < 0) {
    lastNum = firstNum;
  }
  nums.push(firstNum + lastNum);
});
console.log(nums);

let sum = 0;
for (let i = 0; i < nums.length; i++) {
  sum += parseInt(nums[i]);
}
console.log(sum);
