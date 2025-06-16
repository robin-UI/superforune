const balanceToggle = document.querySelector(".balance-toggle");
const eyeOpenIcon = document.querySelector(".lucide-eye");
const eyeCloseIcon = document.querySelector(".lucide-eye-off");
const balanceAmount = document.querySelector(".balance-amount");

// Store the original balance value
let originalBalance = balanceAmount.textContent;
let isBalanceVisible = true;

balanceToggle.addEventListener("click", function () {
    // Add click animation
    this.classList.add('clicked');
    setTimeout(() => this.classList.remove('clicked'), 200);

    if (isBalanceVisible) {
        // Hide balance
        balanceAmount.textContent = "••••••";
        balanceAmount.classList.add('hidden');
        
        // Switch icons
        eyeOpenIcon.classList.remove('block-icon');
        eyeOpenIcon.classList.add('hide-icon');
        eyeCloseIcon.classList.remove('hide-icon');
        eyeCloseIcon.classList.add('block-icon');
        
        isBalanceVisible = false;
    } else {
        // Show balance
        balanceAmount.textContent = originalBalance;
        balanceAmount.classList.remove('hidden');
        
        // Switch icons
        eyeCloseIcon.classList.remove('block-icon');
        eyeCloseIcon.classList.add('hide-icon');
        eyeOpenIcon.classList.remove('hide-icon');
        eyeOpenIcon.classList.add('block-icon');
        
        isBalanceVisible = true;
    }
});

// Optional: Update balance function for your game
function updateBalance(newBalance) {
    originalBalance = newBalance.toString();
    if (isBalanceVisible) {
        balanceAmount.textContent = originalBalance;
    }
}

// Example: Update balance after 3 seconds (for demo)
setTimeout(() => {
    updateBalance(15000);
}, 3000);