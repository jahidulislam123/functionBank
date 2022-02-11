// function doubleiT(num){
//     const result =num*2;
//     return result;
// }
// const gonfal =doubleiT(4);
// lllllllllll?
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
function getcurrentBalance (){
    const totalPreviousBalance =document.getElementById('balance-total');
    const totalPreviousBalanceText = totalPreviousBalance.innerText;
    const totalBalance=parseFloat(totalPreviousBalanceText);
    return totalBalance;

}

function updateBalance (currentDepositAmount,isAdd){
    const totalPreviousBalance =document.getElementById('balance-total');
    // const totalPreviousBalanceText = totalPreviousBalance.innerText;
    // const totalBalance=parseFloat(totalPreviousBalanceText);
    const totalBalance =getcurrentBalance();

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
    // deposit total 
    // const depositTotal =document.getElementById('deposit-total');
    // const getDepositTotalText=depositTotal.innerText;
    // console.log(getDepositTotalText);
    // const previousgetDepositTotal=parseFloat(getDepositTotalText);
    // // getFromInput.value='';
    // // console.log(previousgetDepositTotal);
    // depositTotal.innerText=currentDepositAmount+previousgetDepositTotal;
    


    // const totalPreviousBalance =document.getElementById('balance-total');
    // const totalPreviousBalanceText = totalPreviousBalance.innerText;
    // const totalBalance=parseFloat(totalPreviousBalanceText);
    // totalPreviousBalance.innerText=totalBalance+currentDepositAmount;
    const currentDepositAmount=getInputValue('deposit-input');
    if(currentDepositAmount>0){
        updateTotalField('deposit-total',currentDepositAmount);
         updateBalance(currentDepositAmount,true);
    }
    

});

// withdraw

document.getElementById("withdraw-button").addEventListener('click',function(){
    // const getWithdrawInput = document.getElementById('withdraw-input');
    // const getWithdrawInputText =getWithdrawInput.value;
    // const getWithdrawBalance =parseFloat(getWithdrawInputText);
    // console.log(getWithdrawBalance);


    // const getWithdrawPreviousBalance=document.getElementById('withdraw-total');
    // const getWithdrawPreviousBalanceText = getWithdrawPreviousBalance.innerText;
    // const withdrawPreviousBalance =parseFloat(getWithdrawPreviousBalanceText);
    // console.log(withdrawPreviousBalance);
    //  getWithdrawPreviousBalance.innerText= withdrawPreviousBalance+getWithdrawBalance;
    //  getWithdrawInput.value='';

    //  const totalPreviousBalance2 =document.getElementById('balance-total');
    //  const totalPreviousBalanceText2 = totalPreviousBalance2.innerText;
    //  const totalBalance2=parseFloat(totalPreviousBalanceText2);
    //  totalPreviousBalance2.innerText=totalBalance2-getWithdrawBalance;
    const getWithdrawBalance =getInputValue('withdraw-input');
    const currentBalance =getcurrentBalance();
    if(getWithdrawBalance>0&& getWithdrawBalance<currentBalance){
        updateTotalField('withdraw-total',getWithdrawBalance);
    updateBalance(getWithdrawBalance,false);
    }

    if(getWithdrawBalance>currentBalance){
       console.log('you can not withdraw more than what you have '); 
    }
})


