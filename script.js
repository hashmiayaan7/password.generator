// PASSWORD GENERATOR

const result = document.getElementById("result");
const generateBtn = document.getElementById("generate");
const copyBtn = document.getElementById("copyBtn");
const lengthInput = document.getElementById("length");
const numbers = document.getElementById("numbers");
const symbols = document.getElementById("symbols");
const message = document.getElementById("message");

const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lower = "abcdefghijklmnopqrstuvwxyz";
const nums = "0123456789";
const sym = "!@#$%^&*()_+{}[]<>?/";

function generatePassword() {

    let chars = upper + lower;

    if (numbers.checked) {
        chars += nums;
    }

    if (symbols.checked) {
        chars += sym;
    }

    let password = "";
    let length = parseInt(lengthInput.value);

    for (let i = 0; i < length; i++) {
        password += chars.charAt(
            Math.floor(Math.random() * chars.length)
        );
    }

    result.value = password;
}

generateBtn.addEventListener("click", function (e) {

    e.preventDefault();

    generatePassword();

    message.innerText = "✨ Magical Password Created";
});

copyBtn.addEventListener("click", function () {

    if (result.value === "") return;

    navigator.clipboard.writeText(result.value);

    message.innerText = "✅ Password Copied";
});

generatePassword();


// ====================================
// DOCTOR STRANGE QUOTES ROTATION
// ====================================

const leftQuotes = [
    "We Never Lose Our Demons, We Only Learn To Live Above Them.",
    "You Cannot Beat A River Into Submission.",
    "Arrogance And Fear Still Keep You From Learning.",
    "The Ancient One Saw Possibility In You."
];

const rightQuotes = [
    "The Bill Comes Due. Always.",
    "We're In The Endgame Now.",
    "Open Your Eye.",
    "Forget Everything You Think You Know."
];

const leftQuote = document.querySelector(".quote-left");
const rightQuote = document.querySelector(".quote-right");

let index = 0;

// Initial quotes
leftQuote.textContent = leftQuotes[0];
rightQuote.textContent = rightQuotes[0];

// Change quote every 6 seconds
setInterval(() => {

    // Fade Out
    leftQuote.style.opacity = "0";
    rightQuote.style.opacity = "0";

    setTimeout(() => {

        index = (index + 1) % leftQuotes.length;

        leftQuote.textContent = leftQuotes[index];
        rightQuote.textContent = rightQuotes[index];

        // Fade In New Quote
        setTimeout(() => {

            leftQuote.style.opacity = "1";
            rightQuote.style.opacity = "1";

        }, 200);

    }, 1000);

}, 6000);
