function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const inputAmount = parseFloat(inputAmountText);
    inputField.value = '';
    return inputAmount;
}

function updateTotalAmount(totalAmountId, newAmount) {
    const totalAmountField = document.getElementById(totalAmountId);
    const totalAmountText = totalAmountField.innerText;
    const previousTotalAmount = parseFloat(totalAmountText);
    totalAmountField.innerText = previousTotalAmount + newAmount;
}

function updateBalance(newBalance, isAdd) {
    const totalBalance = document.getElementById('balance-total');
    const totalBalanceText = totalBalance.innerText;
    const previousBalance = parseFloat(totalBalanceText);
    if (isAdd == true) {
        totalBalance.innerText = previousBalance + newBalance;
    } else {
        totalBalance.innerText = previousBalance - newBalance;
    }
}

document.getElementById('deposit-button').addEventListener('click', function () {
    const newDepositAmount = getInputValue('deposit-input');

    if (newDepositAmount > 0) {
        updateTotalAmount('deposit-total', newDepositAmount);
        updateBalance(newDepositAmount, true);
    }
})

document.getElementById('withdraw-button').addEventListener('click', function () {
    const newWithdrawAmount = getInputValue('withdraw-input');

    if (newWithdrawAmount > 0) {
        updateTotalAmount('withdraw-total', newWithdrawAmount);
        updateBalance(newWithdrawAmount, false);
    }
})