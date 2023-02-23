// Importing all the needy ids and classes
let box = Array.from(document.getElementsByClassName("box"));
let winner = document.getElementById("winner");
let gameOver = document.getElementById("5");
let turn = document.getElementById("turn");
let playAgain = document.getElementById("playAgain");

// Declaring all the variable
let player1 = true;
let count = 0;
let player1winner = 0;
let player2winner = 0;
let player1click = [];
let i = 0;
let j = 0;
let player2click = [];


//Event listener for playAgain Button
playAgain.addEventListener("click", () => {
  count = 0;
  i = 0;
  j = 0;
  player1click = [];
  player2click = [];
  player1winner = 0;
  player2winner = 0;
  player1 = true;
  turn.innerText = "Player 1 Turn";
  winner.innerText = "";
  gameOver.innerText = "";
  playAgain.innerText = "Reset";

  for (let i = 0; i < 9; i++) {
    box[i].style.backgroundColor = "black";
  }
});


//Event Listener For all the boxes 
box.forEach((element) => {
  element.addEventListener("click", (event) => {
    if (count >= 9) {
      gameOver.innerText = "Game Over";
      playAgain.innerText = "Play Again";
    } else {
      count++;
      if (count == 9) {
        gameOver.innerText = "Game Over";
        playAgain.innerText = "Play Again";
      }
      if (player1) {
        if (
          element.style.backgroundColor === "red" ||
          element.style.backgroundColor === "green"
        ) {
          alert("This is already filled");
          count--;
        } else {
          element.style.backgroundColor = "red";
          turn.innerText = "Player 2 Turn";
          const boxId = event.target.id;
          player1click[i] = boxId;
          i++;
          if (i > 2) {
            console.log("I am inside i>1");
            let temp = winnerChecker(player1click);
            if (temp) {
              element.style.backgroundColor = "red";
              winner.innerText = "Player 1 is winner";
              gameOver.innerText = "Game Over";
              playAgain.innerText = "Play Again";
              count = 15;
            }
          }
        //   console.log(player1click);
          player1 = false;
        }
      } else {
        {
          if (
            element.style.backgroundColor === "red" ||
            element.style.backgroundColor === "green"
          ) {
            alert("This is already filled");
            count--;
          } else {
            element.style.backgroundColor = "green";
            turn.innerText = "Player 1 Turn";
            const boxId = event.target.id;
            player2click[j] = boxId;
            j++;
            if (j > 2) {
              console.log("I am inside j>1");
              let temp = winnerChecker(player2click);
              if (temp) {
                element.style.backgroundColor = "green";
                winner.innerText = "Player 2 is winner";
                gameOver.innerText = "Game Over";
                playAgain.innerText = "Play Again";
                count = 15;
              }
            }
            // console.log(player2click);

            player1 = true;
          }
        }
      }
    }
  });
});

function winnerChecker(bigArray) {
  const arrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7],
  ];
//   console.log("You are in winner function");
  let flag = isSubsetOfBigArray(arrays, bigArray);

//   console.log(flag);
  return flag;
}

function isSubsetOfBigArray(arrays, bigArray) {
  // Iterate over each three-element array in arrays
  // console.log("you are in is subarray function"+bigArray);
  for (let i = 0; i < 8; i++) {
    const array = arrays[i];
    //   console.log("array="+array);

    if (isArraySubset(array, bigArray)) {
      return true;
    }
   
  }
  // If no three-element array is a subset of the big array, return false
  return false;
}

function isArraySubset(arr1, arr2) {
  // Iterate over each element of arr1
  for (let i = 0; i < arr1.length; i++) {
    let temp = arr1[i];
    let mil = false;
    for (let j = 0; j < arr2.length; j++) {
      if (temp == arr2[j]) {
        mil = true;
        break;
      }
    }
    // If the current element of arr1 is not found in arr2, return 0
    if (!mil) {
      return 0;
    }
  }
  // If all elements of arr1 are found in arr2, return 1
  return 1;
}
