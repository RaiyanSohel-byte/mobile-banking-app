const loginButton = document.getElementById("login-btn");
// login button functionality
loginButton.addEventListener("click", (event) => {
  event.preventDefault();
  const numInput = parseInt(document.getElementById("number-input").value);
  const pinInput = parseInt(document.getElementById("pin-input").value);
  //   console.log("click");
  const mobileNumber = parseInt("01790839334");
  const pinNumber = 1234;
  if (numInput === mobileNumber && pinInput === pinNumber) {
    // console.log("worked");
    window.location.href = "home.html";
  } else {
    const invalidMsg = document.createElement("p");
    invalidMsg.innerHTML = `<div role="alert" class="alert alert-warning">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
  </svg>
  <span>Warning: Invalid Mobile Number or Pin!</span>
</div>
    `;

    document.getElementById("alert").appendChild(invalidMsg);
    setTimeout(() => {
      document.getElementById("alert").removeChild(invalidMsg);
    }, 2000);
  }
});
