// guesses

var example_text =
  "Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green\nGame 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue\nGame 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red\nGame 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red\nGame 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green";

var real_text = document.querySelector("pre").innerText;

//var lines = example_text.split("\n");
var lines = real_text.split("\n");

maxCubes = [];
maxCubes["red"] = 12;
maxCubes["green"] = 13;
maxCubes["blue"] = 14;

sumIDs = 0;

var games = [];
for (let i = 0; i < lines.length - 1; i++) {
  var highestPullsThisGame = [];
  aLine = lines[i].split(": ")[1];
  rounds = aLine.split("; ");
  for (let j = 0; j < rounds.length; j++) {
    pulls = rounds[j].split(", ");
    for (let k = 0; k < pulls.length; k++) {
      pull = pulls[k].split(" ");
      if (!highestPullsThisGame[pull[1]]) {
        highestPullsThisGame[pull[1]] = parseInt(pull[0]);
      } else {
        if (parseInt(pull[0]) > highestPullsThisGame[pull[1]]) {
          highestPullsThisGame[pull[1]] = parseInt(pull[0]);
        }
      }
    }
  }
  if (
    highestPullsThisGame["red"] > maxCubes["red"] ||
    highestPullsThisGame["blue"] > maxCubes["blue"] ||
    highestPullsThisGame["green"] > maxCubes["green"]
  ) {
    //sumIDs += 0;
    console.log("Game " + (i + 1) + ": Not Possible");
  } else {
    //sumIDs += i + 1;
    console.log("Game " + (i + 1) + ": Possible");
  }
  sumIDs +=
    highestPullsThisGame["red"] *
    highestPullsThisGame["blue"] *
    highestPullsThisGame["green"];
  console.log(highestPullsThisGame);
}
console.log(sumIDs);
