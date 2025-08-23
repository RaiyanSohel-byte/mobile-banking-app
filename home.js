const addMoney = document.getElementById("add-money");
const addMoneySection = document.getElementById("add-money-section");

const cashout = document.getElementById("cashout");
const cashoutSection = document.getElementById("cashout-section");

const transferMoney = document.getElementById("transfer-money");
const transferMoneySection = document.getElementById("transfer-money-section");

const getBonus = document.getElementById("get-bonus");
const getBonusSection = document.getElementById("get-bonus-section");

const payBill = document.getElementById("pay-bill");
const payBillSection = document.getElementById("pay-bill-section");

const transaction = document.getElementById("transaction");
const transactionSection = document.getElementById("transaction-section");

//buttons
const addMoneyButton = document.getElementById("add-money-btn");
const withdrawMoneyButton = document.getElementById("withdraw-money-btn");
const transferMoneyButton = document.getElementById("transfer-money-btn");
const payBillButton = document.getElementById("pay-bill-btn");
const logoutButton = document.getElementById("logout-btn");

const pin = "1234";

const transactionData = [];

//get value function
function getValue(id) {
  return parseInt(document.getElementById(id).value);
}

// get inner text function
function getInnerText(id) {
  return document.getElementById(id).innerText;
}

//toggle
function toggleSection(activeButton, activeSection) {
  // hide all sections
  addMoneySection.classList.add("hidden");
  cashoutSection.classList.add("hidden");
  transferMoneySection.classList.add("hidden");
  getBonusSection.classList.add("hidden");
  payBillSection.classList.add("hidden");
  transactionSection.classList.add("hidden");
  // show active section
  activeSection.classList.remove("hidden");

  // reset all buttons
  [addMoney, cashout, transferMoney, getBonus, payBill, transaction].forEach(
    (btn) => {
      btn.classList.remove(
        "bg-[#f2f8fe]",
        "text-[#0874F2]",
        "border-[#0874f2]"
      );
      btn.classList.add("border", "border-[#e7e7e7]");
    }
  );

  // set active button styles
  activeButton.classList.remove("border-[#e7e7e7]");
  activeButton.classList.add(
    "bg-[#f2f8fe]",
    "text-[#0874F2]",
    "border-[#0874f2]"
  );
}

// add event listeners
addMoney.addEventListener("click", () =>
  toggleSection(addMoney, addMoneySection)
);
cashout.addEventListener("click", () => toggleSection(cashout, cashoutSection));
transferMoney.addEventListener("click", () =>
  toggleSection(transferMoney, transferMoneySection)
);
getBonus.addEventListener("click", () =>
  toggleSection(getBonus, getBonusSection)
);
payBill.addEventListener("click", () => toggleSection(payBill, payBillSection));
transaction.addEventListener("click", () =>
  toggleSection(transaction, transactionSection)
);

// add money
addMoneyButton.addEventListener("click", (event) => {
  event.preventDefault();
  let balance = parseInt(getInnerText("balance"));
  const amountInput = getValue("amount-input");
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
    }, 1000);
    const data = {
      name: "Add Money",
      date: new Date().toLocaleString(),
    };
    transactionData.push(data);
    transactionHistory();
    console.log(transactionData);
  } else {
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Invalid Credentials!!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 1000);
  }
});

// cashout

withdrawMoneyButton.addEventListener("click", (event) => {
  event.preventDefault();
  let balance = parseInt(getInnerText("balance"));
  const amntInput = getValue("amount-input-cashout");
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
    }, 1000);
    const data = {
      name: "Cash Out",
      date: new Date().toLocaleString(),
    };
    transactionData.push(data);
    transactionHistory();
    console.log(transactionData);
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
    }, 1000);
  } else {
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Invalid Credentials!!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 1000);
  }
});

//transfer money

transferMoneyButton.addEventListener("click", (event) => {
  event.preventDefault();
  let balance = parseInt(getInnerText("balance"));
  const amntInput = getValue("amount-input-transfer");
  const userNumberInput = document.getElementById("user-number-transfer").value;
  const pinInput = document.getElementById("pin-input-transfer").value;
  // const bank = document.getElementById("bank").value;
  // console.log(amntInput);
  // console.log(agentInput.length);
  // console.log(pinInput);
  if (
    amntInput <= balance &&
    !isNaN(amntInput) &&
    userNumberInput.length === 11 &&
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
  <span>৳${amntInput} Transferred from your account!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 1000);
    const data = {
      name: "Transfer Money",
      date: new Date().toLocaleString(),
    };
    transactionData.push(data);
    transactionHistory();
    console.log(transactionData);
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
    }, 1000);
  } else {
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Invalid Credentials!!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 1000);
  }
});

//pay bill

payBillButton.addEventListener("click", (event) => {
  event.preventDefault();
  let balance = getInnerText("balance");
  const amountInput = getValue("bill-amount-input");
  const billerInput = document.getElementById(
    "biller-account-number-input"
  ).value;
  const pinInput = document.getElementById("bill-pin-input").value;
  const bank = document.getElementById("institute").value;
  console.log(bank);
  if (
    !isNaN(amountInput) &&
    billerInput.length === 11 &&
    pinInput.length === 4 &&
    bank !== "Select Institute" &&
    pinInput === pin
  ) {
    document.getElementById("balance").innerText = `${balance - amountInput}`;
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>৳${amountInput} Paid!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 1000);
    const data = {
      name: "Pay Bill",
      date: new Date().toLocaleString(),
    };
    transactionData.push(data);
    transactionHistory();
    console.log(transactionData);
  } else {
    document.getElementById(
      "popup"
    ).innerHTML = `<div role="alert" class="alert alert-error">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Invalid Credentials!!</span>
</div>`;
    setTimeout(() => {
      document.getElementById("popup").innerHTML = ``;
    }, 1000);
  }
});

//transaction history
function transactionHistory() {
  const container = document.getElementById("transaction-section");

  // Clear previous content first
  container.innerHTML = `
    <div class="flex justify-between items-center mb-[16px]">
      <h1 class="font-semibold text-[18px]">Transaction History</h1>
      <p class="text-[14px] font-normal text-[#7e7f80] hover:cursor-pointer">View All</p>
    </div>
  `;

  // Add all transactions
  transactionData.forEach((element) => {
    container.innerHTML += `
      <div class="bg-white flex justify-between items-center gap-[8px] px-[16px] py-[13px] mb-[8px]">
        <div class="flex items-center gap-[8px]">
          <div class="bg-[#f2f2f2] w-[45px] h-[45px] rounded-[50%] flex items-center justify-center">
            <img src="assets/purse1.png" alt="" />
          </div>
          <div>
            <h3 class="text-[1rem] font-semibold text-[#535353]">${element.name}</h3>
            <p class="text-[12px] font-normal text-[#535353]">${element.date}</p>
          </div>
        </div>
        <div class="cursor-pointer">
          <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
      </div>
    `;
  });
}

// logout
logoutButton.addEventListener("click", () => {
  window.location.href = "index.html";
});
