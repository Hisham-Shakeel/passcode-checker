// Passcode Checker

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  // Inputs
  let code1 = +document.getElementById("code1-in").value;
  let code2 = +document.getElementById("code2-in").value;
  let code3 = +document.getElementById("code3-in").value;

  // Check Passcode
  if (code2 > code1 && code2 < code3) {
    document.getElementById("status").style.backgroundColor = "green";
  } else {
    document.getElementById("status").style.backgroundColor = "red";
  }
}