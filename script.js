// Select DOM Elements
const salaryInput = document.getElementById('salary-input');
const expenseName = document.getElementById('expense-name');
const expenseAmount = document.getElementById('expense-amount');
const addExpenseBtn = document.getElementById('add-expense-btn');

const displaySalary = document.getElementById('display-salary');
const displayExpenses = document.getElementById('display-expenses');
const displayBalance = document.getElementById('display-balance');
const expenseList = document.getElementById('expense-list');

// State Variables
let totalSalary = 0;
let totalExpenses = 0;

// Update UI Function
function updateUI() {
    const balance = totalSalary - totalExpenses;
    
    displaySalary.innerText = `$${totalSalary.toFixed(2)}`;
    displayExpenses.innerText = `$${totalExpenses.toFixed(2)}`;
    displayBalance.innerText = `$${balance.toFixed(2)}`;

    // Add a warning color if balance is negative
    displayBalance.style.color = balance < 0 ? "#e74c3c" : "#2ecc71";
}

// Update Salary in real-time
salaryInput.addEventListener('input', (e) => {
    totalSalary = parseFloat(e.target.value) || 0;
    updateUI();
});

// Add Expense Logic
addExpenseBtn.addEventListener('click', () => {
    const name = expenseName.value.trim();
    const amount = parseFloat(expenseAmount.value);

    // Validation: No empty names, no negative/empty amounts
    if (name === "" || isNaN(amount) || amount <= 0) {
        alert("Please enter a valid expense name and a positive amount.");
        return;
    }

    // Update Data
    totalExpenses += amount;

    // Create List Item (DOM Manipulation)
    const li = document.createElement('li');
    li.innerHTML = `<span>${name}</span> <strong>-$${amount.toFixed(2)}</strong>`;
    expenseList.appendChild(li);

    // Clear Inputs
    expenseName.value = "";
    expenseAmount.value = "";

    // Update Display
    updateUI();
});