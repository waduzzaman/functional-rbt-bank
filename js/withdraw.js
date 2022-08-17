//1. add withdraw btn event handler
document.getElementById('btn-withdraw').addEventListener('click', function () {
   
    // 2. get withdraw amount by using getInputFieldValueById function 
    const newWithdrawAmount = getInputFieldValueByID('withdraw-field');

    //3. get previous withdraw amount by sing getTextElementValueById function

    const previousWithdrawTotal = getTextElementValueByID('withdraw-total');

    //calculate new withdraw total and set the value

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    // get previous balannce total by ysing getTextElementValueByID function

    const previousBalanceTotal = getTextElementValueByID('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    //set balance total using setTextElementValueByID

    setTextElementValueById('balance-total', newBalanceTotal);



})