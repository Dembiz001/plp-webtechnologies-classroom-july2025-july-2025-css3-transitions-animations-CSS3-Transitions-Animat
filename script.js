/* --- Part 2: Functions, Scope, Parameters, Return Values --- */
function addNumbers(a, b) {
  return a + b; // returning value
}

function showSum() {
  let n1 = parseFloat(document.getElementById("num1").value);
  let n2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(n1) || isNaN(n2)) {
    document.getElementById("result").textContent = "Please enter valid numbers";
    return;
  }

  let result = addNumbers(n1, n2);
  document.getElementById("result").textContent = `Result: ${result}`;
}

/* --- Part 3: JS + CSS Animations --- */
function toggleAnimation() {
  let box = document.getElementById("animateBox");
  box.classList.toggle("animate");
}

// Modal functions
function openModal() {
  document.getElementById("myModal").style.display = "block";
}
function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

// Function to toggle animation
function toggleAnimation() {
    const box = document.getElementById("animateBox");
    box.classList.toggle("animate");
}

// Wait for the DOM to load, then attach the click event
document.addEventListener("DOMContentLoaded", () => {
    const animateBtn = document.getElementById("animateBtn");
    animateBtn.addEventListener("click", toggleAnimation);
});
