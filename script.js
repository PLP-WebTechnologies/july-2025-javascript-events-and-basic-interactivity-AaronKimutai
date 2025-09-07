// Interactive feature 1- toggle theme
const tgbutton = document.getElementById("ToggleTheme");

function toggleTheme() {
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    tgbutton.textContent = "Switch to Light Mode ☀️ ⬆";
  } else {
    tgbutton.textContent = "Switch to Dark Mode 🌙 ⬇";
  }
}

tgbutton.addEventListener("click", toggleTheme);

// interactive feature 2-counter
let count = 0
const counterValue = document.getElementById("counterValue");
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

function increaseCounter(){
    count++;
    counterValue.textContent = count;
}

function resetCounter(){
    count = 0
    counterValue.textContent = count;
}

increaseBtn.addEventListener('click', increaseCounter);
resetBtn.addEventListener('click', resetCounter);

// feature 3-FAQ Toggle
const faqQuestions = document.querySelectorAll('.faq-question');
function toggleFAQ(){
    const answer  = this.nextElementSibling;
    answer.classList.toggle('show');
}

for(let i = 0 ; i < faqQuestions.length; i++){
    faqQuestions[i].addEventListener('click', toggleFAQ);
}

// Form validation
const form = document.getElementById("signupForm");
const message = document.getElementById("formMessage");

function validateForm(event) {
  event.preventDefault(); // Stop form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (name.length < 3) {
    message.textContent = "Name must be at least 3 characters long.";
    message.style.color = "red";
    return;
  }

const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    message.textContent = "Please enter a valid email address.";
    message.style.color = "red";
    return;
  }
if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters long.";
    message.style.color = "red";
    return;
}

message.textContent = "Form submitted successfully!";
message.style.color = "green";

form.reset();
}

form.addEventListener("submit", validateForm);






