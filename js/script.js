let board = ["", "", "", "", "", "", "", "", ""];
let turn;
let player1 = "O";
let player2 = "X";
let counter = 0;
let combination;

function player1name() {
  if (document.getElementById("player1").value !== "")
    player1 = document.getElementById("player1").value;
  document.getElementById("player1").classList.add("hide");
  document.getElementById("label1").classList.add("hide");
  document.getElementById("button1").classList.add("hide");
  document.getElementById("player2").classList.remove("hide");
  document.getElementById("button2").classList.remove("hide");
  document.getElementById("label2").classList.remove("hide");
}

function player2name() {
  if (document.getElementById("player2").value !== "")
    player2 = document.getElementById("player2").value;
  document.getElementById("player2").classList.add("hide");
  document.getElementById("button2").classList.add("hide");
  document.getElementById("label2").classList.add("hide");
  document.getElementById("board").classList.remove("hide");
  document.getElementById("board").classList.add("show");
  turn = player1;
  document.getElementById("message").innerHTML = "<h4>" + turn + "'s turn</h4>";
}

function game(id) {
  let square = id;
  id = id.substring(1);
  if (turn === player1) {
    if (board[id] === "") {
      document.getElementById("message").innerHTML = "";
      board[id] = player1;
      document.getElementById(square).innerHTML = "O";
      turn = player2;
      counter++;
      document.getElementById("message").innerHTML =
        "<h4>" + turn + "'s turn</h4>";
      checkwinner();
    } else {
      document.getElementById("message").innerHTML = "<h4>Can't go there</h4>";
    }
  } else {
    if (board[id] === "") {
      document.getElementById("message").innerHTML = "";
      board[id] = player2;
      document.getElementById(square).innerHTML = "X";
      turn = player1;
      counter++;
      document.getElementById("message").innerHTML =
        "<h4>" + turn + "'s turn</h4>";
      checkwinner();
    } else {
      document.getElementById("message").innerHTML = "<h4>Can't go there</h4>";
    }
  }
}

function checkwinner() {
  if (counter > 4) {
    if (
      equal(board[0], board[1], board[2], 1) ||
      equal(board[3], board[4], board[5], 2) ||
      equal(board[6], board[7], board[8], 3) ||
      equal(board[0], board[3], board[6], 4) ||
      equal(board[1], board[4], board[7], 5) ||
      equal(board[2], board[5], board[8], 6) ||
      equal(board[0], board[4], board[8], 7) ||
      equal(board[2], board[4], board[6], 8)
    ) {
      switch (combination) {
        case 1:
          document.getElementById("s0").style.color = "red";
          document.getElementById("s1").style.color = "red";
          document.getElementById("s2").style.color = "red";
          break;
        case 2:
          document.getElementById("s3").style.color = "red";
          document.getElementById("s4").style.color = "red";
          document.getElementById("s5").style.color = "red";
          break;
        case 3:
          document.getElementById("s6").style.color = "red";
          document.getElementById("s7").style.color = "red";
          document.getElementById("s8").style.color = "red";
          break;
        case 4:
          document.getElementById("s0").style.color = "red";
          document.getElementById("s3").style.color = "red";
          document.getElementById("s6").style.color = "red";
          break;
        case 5:
          document.getElementById("s1").style.color = "red";
          document.getElementById("s4").style.color = "red";
          document.getElementById("s7").style.color = "red";
          break;
        case 6:
          document.getElementById("s2").style.color = "red";
          document.getElementById("s5").style.color = "red";
          document.getElementById("s8").style.color = "red";
          break;
        case 7:
          document.getElementById("s0").style.color = "red";
          document.getElementById("s4").style.color = "red";
          document.getElementById("s8").style.color = "red";
          break;
        case 8:
          document.getElementById("s2").style.color = "red";
          document.getElementById("s4").style.color = "red";
          document.getElementById("s6").style.color = "red";
          break;
      }
      let winner = turn === player1 ? player2 : player1;
      document.getElementById("message").innerHTML =
        "<h4>" + winner + " won</h4>";
      document.getElementById("board").style.pointerEvents = "none";
      document.getElementById("resetbutton").classList.remove("hide");
    }
  }
}

function equal(x, y, z, b) {
  if (x === y && y === z) {
    if (x === "") {
      return false;
    } else {
      combination = b;
      return true;
    }
  } else {
    return false;
  }
}

function resetgame() {
  document.getElementById("board").style.pointerEvents = "auto";
  document.getElementById("message").innerHTML = "<h4>" + turn + "'s turn</h4>";
  document.getElementById("resetbutton").classList.add("hide");
  board = ["", "", "", "", "", "", "", "", ""];
  counter = 0;
  for (let i = 0; i < board.length; i++) {
    let id = "s" + i;
    document.getElementById(id).innerHTML = "";
    document.getElementById(id).style.color = "";
  }
}
