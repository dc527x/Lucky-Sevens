function validateNumber() {
  var check = 0;
  var text;

  check = parseFloat(document.getElementById("startingBet").value);

  if (isNaN(check) || check < 0) {
    text = "Please enter a positive amount"
  }
  else {
    text = "";
    rollDice();
  }

  function checkAmount() {
    document.getElementById("validation").innerHTML = text;
  }

  checkAmount();
}

function rollDice() {
  var startingBet = parseFloat(document.getElementById("startingBet").value);
  var money = 0;
  var die1 = 0;
  var die2 = 0;
  var totalRoll = 0;
  var rollCount = 0;
  var win = 4;
  var loss = 1;
  var totalMax = 0;
  var numberRolls = 0;
  var money = startingBet;
  var moneyHeld = [startingBet]; //Uses and array to keep track of winnings

  do {
    rollCount++;
    die1 = Math.floor(Math.random() * 6) + 1;
    die2 = Math.floor(Math.random() * 6) + 1;
    totalRoll = die1 + die2;

    if (totalRoll == 7) {
      money = money + win;
      var last_element = moneyHeld[moneyHeld.length - 1];
      var last_update = last_element + win;
      moneyHeld.push(last_update); //adds $4.00 to previous winnings and stores
      //it in last_update that way we can keep track of winnings by storing them
      //in an array
    } else {
      money = money - loss;
      var last_element = moneyHeld[moneyHeld.length - 1];
      var last_update = last_element - loss;
      moneyHeld.push(last_update);
    }
  }

  while (money > 0) {
    maxMoney();
  }

  function maxMoney() {
    for (var i = 0; i < moneyHeld.length; i++) {
      if (moneyHeld[i] > totalMax) {
        totalMax = moneyHeld[i];
      }
      numberRolls = moneyHeld.indexOf(totalMax);

      if (numberRolls < 1) {
        numberRolls = 0;
      }
    }
  }


  function showResults() {
    document.getElementById("initialBet").innerHTML = "$" + startingBet + ".00";
    document.getElementById("numberRolls").innerHTML = rollCount
    document.getElementById("highestAmount").innerHTML = "$" + totalMax + ".00";
    document.getElementById("highestRoll").innerHTML = numberRolls;
    document.getElementById("playAgain").innerHTML = "Play Again!";
  }

  showResults();
}
