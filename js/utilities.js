function getInputFieldValueById (id){

    const enterAmount = document.getElementById(id).value;
    const numericEnterAmount = parseFloat(enterAmount);

    return numericEnterAmount;
};


function getTheAmount (id){
    const amount = document.getElementById(id).innerText;
    const numericNumber = parseFloat(amount);

    return numericNumber;
}

function uiInterface(id){
    document.getElementById('add-money-form').classList.add('hidden');
    document.getElementById('cash-out-form').classList.add('hidden');
    document.getElementById('transaction-history').classList.add('hidden');


    // Show only the id is provided.
    document.getElementById(id).classList.remove('hidden');
};