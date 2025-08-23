const addMoney = document.getElementById("add-money");
const cashout = document.getElementById("cashout");
const addMoneySection = document.getElementById("add-money-section");
const cashoutSection = document.getElementById("cashout-section");

//toggle
addMoney.addEventListener("click", () => {
  addMoneySection.classList.remove("hidden");
  cashoutSection.classList.add("hidden");

  cashout.classList.remove(
    "bg-[#f2f8fe]",
    "text-[#0874F2]",

    "border-[#0874f2]"
  );
  cashout.classList.add("border", "border-[#e7e7e7]");
  addMoney.classList.remove("border-[#e7e7e7]");
  addMoney.classList.add(
    "border",
    "bg-[#f2f8fe]",
    "text-[#0874F2]",

    "border-[#0874f2]"
  );
});
cashout.addEventListener("click", () => {
  cashoutSection.classList.remove("hidden");
  addMoneySection.classList.add("hidden");

  addMoney.classList.remove(
    "bg-[#f2f8fe]",
    "text-[#0874F2]",

    "border-[#0874f2]"
  );

  addMoney.classList.remove(
    "bg-[#f2f8fe]",
    "text-[#0874F2]",
    "border-[#0874f2]"
  );
  addMoney.classList.add("border", "border-[#e7e7e7]");
  cashout.classList.remove("border-[#e7e7e7]");
  cashout.classList.add(
    "bg-[#f2f8fe]",
    "text-[#0874F2]",

    "border-[#0874f2]"
  );
});

// add money
const addMoneyButton = document.getElementById("add-money-btn");
const pin = "1234";
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
    bank !== "Select Bank" &&
    pinInput === pin
  ) {
    document.getElementById("balance").innerText = `${amountInput + balance}`;
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>৳${amountInput} Added to your account!</span>
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

// cashout
const withdrawMoneyButton = document.getElementById("withdraw-money-btn");

withdrawMoneyButton.addEventListener("click", (event) => {
  event.preventDefault();
  let balance = parseInt(document.getElementById("balance").innerText);
  const amntInput = parseInt(
    document.getElementById("amount-input-cashout").value
  );
  const agentInput = document.getElementById("agent-number-input").value;
  const pinInput = document.getElementById("pin-input-cashout").value;
  // const bank = document.getElementById("bank").value;
  // console.log(amntInput);
  // console.log(agentInput.length);
  // console.log(pinInput);
  if (
    amntInput <= balance &&
    !isNaN(amntInput) &&
    agentInput.length === 11 &&
    // bank !== "Select Bank" &&
    pinInput === pin
  ) {
    document.getElementById("balance").innerText = `${balance - amntInput}`;
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>৳${amntInput} Withdrawn from your account!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 2000);
  } else if (amntInput > balance) {
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Insufficient Balance!!</span>
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

// logout
const logoutButton = document.getElementById("logout-btn");
logoutButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
