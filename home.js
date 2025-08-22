// console.log("worked");
const addMoneyButton = document.getElementById("add-money-btn");

addMoneyButton.addEventListener("click", (event) => {
  event.preventDefault();
  let balance = parseInt(document.getElementById("balance").innerText);
  const amountInput = parseInt(document.getElementById("amount-input").value);
  const bankInput = document.getElementById("account-number-input").value;
  const pinInput = document.getElementById("pin-input").value;
  const bank = document.getElementById("bank").value;
  console.log(bank);
  if (
    !isNaN(amountInput) &&
    bankInput.length === 11 &&
    pinInput.length === 4 &&
    bank !== "Select Bank"
  ) {
    document.getElementById("balance").innerText = `${amountInput + balance}`;
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>$${amountInput} Added to your account!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 2000);
  } else {
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Invalid Input!!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 2000);
  }
});
