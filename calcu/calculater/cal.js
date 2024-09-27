let historyValue = "";
let currentValue = "";

function updateDisplay() {
    document.getElementById("history-value").innerText = historyValue;
    document.getElementById("result-value").innerText = currentValue || "0";
}

// Handle number clicks
document.querySelectorAll(".number").forEach(button => {
    button.addEventListener("click", () => {
        currentValue += button.innerText;
        updateDisplay();
    });
});

// Handle operator clicks
document.querySelectorAll(".operator").forEach(button => {
    button.addEventListener("click", () => {
        if (button.id === "clear") {
            historyValue = "";
            currentValue = "";
        } else if (button.id === "backspace") {
            currentValue = currentValue.slice(0, -1);
        } else if (currentValue || historyValue) {
            historyValue += currentValue + " " + button.innerText + " ";
            currentValue = "";
        }
        updateDisplay();
    });
});

// Handle equals click
document.getElementById("equals").addEventListener("click", () => {
    if (historyValue && currentValue) {
        historyValue += currentValue;
        try {
            currentValue = eval(historyValue.replace(/×/g, "*").replace(/÷/g, "/").replace(/−/g, "-")).toString();
            historyValue = "";
        } catch {
            currentValue = "Error";
            historyValue = "";
        }
        updateDisplay();
    }
});

// Handle percentage click
document.getElementById("percentage").addEventListener("click", () => {
    if (currentValue) {
        currentValue = (parseFloat(currentValue) / 100).toString();
        updateDisplay();
    }
});
