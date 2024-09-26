document.getElementById('btn-cash-out-money').addEventListener('click', function (event){
    event.preventDefault();


    const selectedSendMoneyAmount = getInputFieldValueById('enter-cash-out-amount');
    const selectedSendMoneyPassword = getInputFieldValueById('cash-out-pin-number');
    // console.log(selectedSendMoneyPassword);

    if(isNaN(selectedSendMoneyAmount)){
        alert('Failed to send money');
        return;
    }


    if(selectedSendMoneyPassword === 1234){
        const getPreviousAmountBalance = getTheAmount("balance-amount");
        const updatedBalance = getPreviousAmountBalance - selectedSendMoneyAmount;
        if(getPreviousAmountBalance<=selectedSendMoneyAmount){
            alert("Your Balance is too low.")
            return;
        }

        document.getElementById('balance-amount').innerText = updatedBalance;
        // console.log(getPreviousAmountBalance);
        // transaction history
        const div = document.createElement('div');
        div.classList.add('text-amber-400');
        div.innerHTML=`
            <h5>Cash out Transactions</h5>
            <p><small>Your cash out amount is ${getPreviousAmountBalance}, your balance become ${updatedBalance}</small></p>
        `;
        document.getElementById('transactions-container').appendChild(div);
    }
    else{
        alert ("Failed to send selectedSendMoneyAmount.");
    }


});