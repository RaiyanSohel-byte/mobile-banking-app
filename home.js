// console.log("worked");
const addMoneyButton = document.getElementById("add-money-btn");
const balance = 45000;
addMoneyButton.addEventListener("click", (event) => {
  event.preventDefault();
  const amountInput = parseInt(document.getElementById("amount-input").value);
  document.getElementById("balance").innerText = `$${amountInput + balance}`;
  alert(`$${amountInput} Added!!`);
});
