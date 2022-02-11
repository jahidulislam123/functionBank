// function doubleiT(num){
//     const result =num*2;
//     return result;
// }
// const gonfal =doubleiT(4);
// const gonfal2 =doubleiT(5);

function getInputValue(inputId){
    const getFromInput =document.getElementById(inputId);
    const getValueText =getFromInput.value ;
    const currentDepositAmount =parseFloat(getValueText);
    
    // console.log(currentDepositAmount);
    getFromInput.value='';
    return currentDepositAmount;
}
function updateTotalField(totalFieldID,currentDepositAmount){

    const depositTotal =document.getElementById(totalFieldID);
    const getDepositTotalText=depositTotal.innerText;
    const previousgetDepositTotal=parseFloat(getDepositTotalText);
    depositTotal.innerText=currentDepositAmount+previousgetDepositTotal;
}

function updateBalance (currentDepositAmount,isAdd){
    const totalPreviousBalance =document.getElementById('balance-total');
    const totalPreviousBalanceText = totalPreviousBalance.innerText;
    const totalBalance=parseFloat(totalPreviousBalanceText);
    if(isAdd==true){
        totalPreviousBalance.innerText=totalBalance+currentDepositAmount;


    }
    else{
        totalPreviousBalance.innerText=totalBalance-currentDepositAmount;


    }
}

// console.log(currentDepositAmount);
document.getElementById('deposit-button').addEventListener('click',function(){

    // const getFromInput =document.getElementById('deposit-input');
    // const getValueText =getFromInput.value ;
    // const currentDepositAmount =parseFloat(getValueText);
    // console.log(currentDepositAmount);
    const currentDepositAmount=getInputValue('deposit-input');
    // deposit total 
    // const depositTotal =document.getElementById('deposit-total');
    // const getDepositTotalText=depositTotal.innerText;
    // console.log(getDepositTotalText);
    // const previousgetDepositTotal=parseFloat(getDepositTotalText);
    // // getFromInput.value='';
    // // console.log(previousgetDepositTotal);
    // depositTotal.innerText=currentDepositAmount+previousgetDepositTotal;
    
     updateTotalField('deposit-total',currentDepositAmount);


    // const totalPreviousBalance =document.getElementById('balance-total');
    // const totalPreviousBalanceText = totalPreviousBalance.innerText;
    // const totalBalance=parseFloat(totalPreviousBalanceText);
    // totalPreviousBalance.innerText=totalBalance+currentDepositAmount;
    updateBalance(currentDepositAmount,true);

});

// withdraw

document.getElementById("withdraw-button").addEventListener('click',function(){
    // const getWithdrawInput = document.getElementById('withdraw-input');
    // const getWithdrawInputText =getWithdrawInput.value;
    // const getWithdrawBalance =parseFloat(getWithdrawInputText);
    // console.log(getWithdrawBalance);

    const getWithdrawBalance =getInputValue('withdraw-input');

    // const getWithdrawPreviousBalance=document.getElementById('withdraw-total');
    // const getWithdrawPreviousBalanceText = getWithdrawPreviousBalance.innerText;
    // const withdrawPreviousBalance =parseFloat(getWithdrawPreviousBalanceText);
    // console.log(withdrawPreviousBalance);
    updateTotalField('withdraw-total',getWithdrawBalance);
    //  getWithdrawPreviousBalance.innerText= withdrawPreviousBalance+getWithdrawBalance;
    //  getWithdrawInput.value='';

    //  const totalPreviousBalance2 =document.getElementById('balance-total');
    //  const totalPreviousBalanceText2 = totalPreviousBalance2.innerText;
    //  const totalBalance2=parseFloat(totalPreviousBalanceText2);
    //  totalPreviousBalance2.innerText=totalBalance2-getWithdrawBalance;

updateBalance(getWithdrawBalance,false);

    



})


