
document.getElementById('btn-deposit').addEventListener('click', function () {

    //1. get the element by id
    //2. get the value from the element
    //3. convert the string value to a number    
    const newDepositAmount = getInputFieldValueByID('deposit-field');
    
    // get previous deposit total by id    
    const previousDepositTotal = getTextElementValueByID('deposit-total');

    //calculate deposit total
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //set deposit total value;

    setTextElementValueById('deposit-total', newDepositTotal);

// get previous balance by using the function
    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceTotal+newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);

    

})