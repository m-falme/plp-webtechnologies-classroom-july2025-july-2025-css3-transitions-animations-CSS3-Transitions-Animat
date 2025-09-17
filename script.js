// Function with parameters + return value
function addNumbers(a, b) {
  return a + b;
}

// Form event for demonstrating return values
document.getElementById("mathForm").addEventListener("submit", function(e) {
  e.preventDefault();
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  let sum = addNumbers(n1, n2); // calling function
  document.getElementById("result").textContent = "Sum: " + sum;
});

// Demonstrating scope (local and global)
let box = document.getElementById("box"); // global

document.getElementById("animateBtn").addEventListener("click", function() {
  // local variable
  let color = box.style.backgroundColor;

  // toggle color
  if (color === "lightblue") {
    box.style.backgroundColor = "tomato";
  } else {
    box.style.backgroundColor = "lightblue";
  }

  // trigger CSS animation
  box.classList.remove("animate");
  void box.offsetWidth;
  box.classList.add("animate");
});
