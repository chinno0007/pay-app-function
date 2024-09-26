document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();

    const amountAdded = getInputFieldValueById('enter-money-amount');
    const pinNumber = getInputFieldValueById('pin-number');

    if(isNaN(amountAdded)){
        alert('Failed to add money');
        return;
    }
    // console.log(`You have entered ${amountAdded}, ${pinNumber}`);

    if(pinNumber ===1234){
        const Balance = getTheAmount('balance-amount');
        const newBalance = Balance+amountAdded;
        document.getElementById('balance-amount').innerText = newBalance;

        // transaction History Adding
        const P = document.createElement('p');
        P.innerText=`You have added ${amountAdded}$, Your New Balance ${newBalance}$`;
        // console.log(p.innerText);

        // appending transaction history
        document.getElementById('transactions-container').appendChild(P);
    }
    else{
        alert ("Failed to add money.");
    }
});