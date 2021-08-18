function getInputValue() {
	const depositInput = document.getElementById('deposit-input');
	const depositAmountText = depositInput.value;
	const depositAmount = parseFloat(depositAmountText);
	// clear input field 
	depositInput.value = '';
	return depositAmount;

}




document.getElementById('deposit-button').addEventListener('click', function () {

	const depositAmount = getInputValue();
	// get current balance 

	const depositTotal = document.getElementById('deposit-total');
	const depositTotalText = depositTotal.innerText;
	const depositTotalAmount = parseFloat(depositTotalText);
	depositTotal.innerText = depositTotalAmount + depositAmount;
	console.log(depositTotalText);

	// update balance 

	const balanceTotal = document.getElementById('balance-total');
	const balanceTotalText = balanceTotal.innerText;
	const preBalanceTotal = parseFloat(balanceTotalText);
	balanceTotal.innerText = preBalanceTotal + depositAmount;


})

// hendle evenr 

document.getElementById('withdraw-button').addEventListener('click', function () {
	const withdrawInput = document.getElementById('withdraw-input');
	const withdrawAmountText = withdrawInput.value;
	const withdrawAmount = parseFloat(withdrawAmountText);


	// update withdarawTotal

	const withdrawTotal = document.getElementById('withdraw-total');
	const withdrawTotalText = withdrawTotal.innerText;
	const withdrawTotalAmount = parseFloat(withdrawTotalText);

	withdrawTotal.innerText = withdrawTotalAmount + withdrawAmount;

	// update balanceTotal 

	const balanceTotal = document.getElementById('balance-total');
	const balanceTotalText = balanceTotal.innerText;
	const balanceTotalAmount = parseFloat(balanceTotalText);
	balanceTotal.innerText = balanceTotalAmount - withdrawAmount;

	// clear withdrawInput 
	withdrawInput.value = '';

})
