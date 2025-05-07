"use strict";
const account1 = {
  owner: "Jonas Schmedtmann",
  movements: [
    200.01, 450.02, -400, 3000.12, -650.12, -130.45, 70, 1300, -150, -790,
    -3210, -1000, 8500, -30,
  ],
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  interestRate: 1.2,
  pin: 1111,
};

const account2 = {
  owner: "Jessica Davis",
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  pin: 2222,
};

const account3 = {
  owner: "Steven Thomas Williams",
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  movementsDates: [
    "2019-11-18T21:31:17.178Z",
    "2019-12-23T07:42:02.383Z",
    "2020-01-28T09:15:04.904Z",
    "2020-04-01T10:17:24.185Z",
    "2020-05-08T14:11:59.604Z",
    "2020-07-26T17:01:17.194Z",
    "2020-07-28T23:36:17.929Z",
    "2020-08-01T10:51:36.790Z",
    "2019-11-01T13:15:33.035Z",
    "2019-11-30T09:48:16.867Z",
    "2019-12-25T06:04:23.907Z",
    "2020-01-25T14:18:46.235Z",
    "2020-02-05T16:33:06.386Z",
    "2020-04-10T14:43:26.374Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  pin: 3333,
};

const account4 = {
  owner: "Sarah Smith",
  movements: [430, 1000, 700, 50, 90, 500],
  interestRate: 1,
  movementsDates: [
    "2019-11-01T13:15:33.035Z",
    "2019-12-25T06:04:23.907Z",
    "2020-06-25T18:49:59.371Z",
    "2020-07-26T12:01:20.894Z",
  ],
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

const movementsContainer = document.querySelector(".movements");

const displayMovements = function (acc) {
  movementsContainer.innerHTML = "";
  acc.movements.forEach(function (move, i) {
    const type = move > 0 ? "deposit" : "withdrawal";

    const Arraydate = new Date(acc.movementsDates[i]);

    const day = Arraydate.getDate();
    const month = Arraydate.getMonth();
    const year = Arraydate.getFullYear();

    const date = `${day}/${month}/${year}`;
    console.log(date);

    let html = `
    <div class="movements__row">
    <div class="move-index"><span class="movements__type movements__type--${type}">${
      i + 1
    }</span> </div>
    <div class="movements__type movements__type--${type}">  ${type}</div>
    <div class="movements__date">${date}</div>
    <div class="movements__value">${move.toFixed(2)}</div>
    </div>`;
    movementsContainer.insertAdjacentHTML("afterbegin", html);
  });
};
displayMovements(account1);

const movements = [
  200.01, 450.02, -400, 3000.12, -650.12, -130.45, 70, 1300, -150, -790, -3210,
  -1000, 8500, -30,
];

let balanceValue = document.querySelector(".balance__value");
const summaryValueIn = document.querySelector(".summary__value--in");
const summaryValueOut = document.querySelector(".summary__value--out");
const summaryValueIntrest = document.querySelector(".summary__value--interest");

const Summery = function (account) {
  const inEntries = account.movements
    .filter(function (amt) {
      return amt > 0;
    })
    .reduce(function (amt, acc) {
      return amt + acc;
    }, 0);
  console.log(inEntries);
  summaryValueIn.textContent = `${inEntries} ₹`;

  const outEntries = account.movements
    .filter(function (amt) {
      return amt < 0;
    })
    .reduce(function (amt, acc) {
      return amt + acc;
    }, 0);
  console.log(outEntries);

  summaryValueOut.textContent = `${Math.abs(outEntries)} ₹`;

  const intestRate = 1.231;
  const interest =
    account.movements.reduce(function (amt, acc) {
      return amt + acc;
    }, 0) * intestRate;

  console.log(interest);

  summaryValueIntrest.textContent = `${Math.round(interest)}  ₹`;

  const balance = account.movements.reduce(function (amt, acc) {
    return amt + acc;
  }, 0);
  console.log(balance);

  balanceValue.textContent = `Balance :${Math.round(balance)} ₹`;
  balanceValue.style.fontSize = "30px";
};

/////////Account Creation /////////////////////

const usernames = document.querySelector(".login__input--user");
const password = document.querySelector(".login__input--pin");

const user = "Faruk Jabbar Hundekari";

// console.log(
//   user
//     .split(" ")
//     .map(function (use) {
//       return use[0];
//     })
//     .join("")
// // );
// const account = accounts.find(function (acc) {
//   return acc.owner === "Jessica Davis";
// });
// console.log(account);

const createUsernames = function (acts) {
  acts.forEach(function (account) {
    account.userId = account.owner
      .toLowerCase()
      .split(" ")
      .map(function (use) {
        return use[0];
      })
      .join("");
  });
};
createUsernames(accounts);
console.log(account1);

const loginBtn = document.querySelector(".login__btn");
const app = document.querySelector(".app");
const message = document.querySelector(".welcome");
let currentAccount;
loginBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");

  currentAccount = accounts.find(function (account) {
    return account.userId === usernames.value;
  });

  if (
    currentAccount.userId === usernames.value &&
    currentAccount.pin === +password.value
  ) {
    console.log("valid enter");
    app.style.opacity = "100";
    message.textContent = `Welcome back ${currentAccount.owner.split(" ")[0]}`;
    message.style.color = "Green";
    updateUI(currentAccount);
    usernames.value = password.value = "";
  } else {
    console.log("Invalid enter");
    message.textContent = `Please Enter valid Credentails`;
    message.style.color = "red";
    usernames.value = password.value = "";
  }
});

const updateUI = function (acc) {
  displayMovements(acc);
  Summery(acc);
};

///////// Loan Account ///////////////////

const loanAmount = document.querySelector(".form__input--loan-amount");
const LoanBtn = document.querySelector(".form__btn--loan");
const rejectMessage = document.querySelector(".loan-validation");

LoanBtn.addEventListener("click", function (event) {
  event.preventDefault();
  const reqLoan = +loanAmount.value;

  if (
    reqLoan > 0 &&
    reqLoan > 2000 &&
    reqLoan < 5000 &&
    currentAccount.movements.some(function (amt) {
      return amt < 2000;
    })
  ) {
    console.log("Loan Sanctioned");
    currentAccount.movements.push(reqLoan);
    updateUI(currentAccount);
    rejectMessage.textContent = `Loan Amount Crediated To The Account:${reqLoan} $`;
    rejectMessage.style.color = "#026c1b";
  } else {
    console.log("Loan Rejected");
    rejectMessage.textContent = "Please try after 30 days";
    rejectMessage.style.color = "red";
  }

  loanAmount.value = "";
  LoanBtn.value = "";
});
/////////////////Transfer Amount ////////////////////

const transferTo = document.querySelector(".form__input--to");
const transferAmt = document.querySelector(".form__input--amount");

const tranferBtn = document.querySelector(".form__btn--transfer");

tranferBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("Tranfer");

  const balanceCurrent = currentAccount.movements.reduce(function (mov, acc) {
    return mov + acc;
  }, 0);

  console.log(currentAccount);
  console.log(balanceCurrent);

  const receiverAccount = accounts.find(function (acc) {
    return acc.userId == transferTo.value;
  });
  console.log(receiverAccount);
  const amount = +transferAmt.value;
  if (
    receiverAccount !== currentAccount &&
    amount > 0 &&
    balanceCurrent > amount
  ) {
    console.log("Transcation Valid");
    receiverAccount.movements.push(+amount);
    currentAccount.movements.push(-amount);
    updateUI(currentAccount);
  } else {
    console.log("Not Valid");
  }
  transferAmt.value == "" && transferTo.value == "";
});

////////////////////Account Closer//////////////////

const closeID = document.querySelector(".form__input--user");
const pin = document.querySelector(".form__input--pin");
const btnClose = document.querySelector(".form__btn--close");
const closeMessage = document.querySelector(".message-error");

btnClose.addEventListener("click", function (ev) {
  ev.preventDefault();
  console.log("closed");
  if (
    closeID.value === currentAccount.userId &&
    Number(pin.value) === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.closeID === currentAccount.userId
    );
    console.log(index);

    accounts.splice(index, 1);

    app.style.opacity = 0;
  } else {
    closeMessage.textContent =
      "Could'not close Account.Please check Username and Password";
    closeMessage.style.color = "darkred";
  }
});

///////////////////////Calculator //////////////////////////////

const calcBtn = document.querySelector(".form__btn--emi");
const containerEMi = document.querySelector(".container--Calculator");
const containerBlur = document.querySelector(".container");
const closeCalcBtn = document.querySelector(".closed");
const bodyContainer = document.querySelector(".app");

console.log(bodyContainer);
calcBtn.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("click");
  containerEMi.style.display = "block";
  bodyContainer.style.opacity = 0;
});
closeCalcBtn.addEventListener("click", function (event) {
  event.preventDefault();
  containerEMi.style.display = "none";
  bodyContainer.style.opacity = 100;
});

//////////////////////Calucation Methods /////////////////////////
let toInPayable;
let totalAmount;
let emi;
const inputAmount = document.querySelector(".input-amount");
const inputInterest = document.querySelector(".input-Interest");
const inputTenure = document.querySelector(".input-Tenure");

const Calbtn = document.querySelector(".Cal-btn");

Calbtn.addEventListener("click", function () {
  emi =
    (inputAmount.value *
      (inputInterest.value / 12 / 100) *
      Math.pow(1 + inputInterest.value / 12 / 100, inputTenure.value)) /
    (Math.pow(1 + inputInterest.value / 12 / 100, inputTenure.value) - 1);

  document.querySelector(".loan-emis").textContent = `${Math.trunc(emi).toFixed(
    2
  )} €`;
  console.log(emi);

  totalAmount = Math.trunc(inputTenure.value * emi);
  document.querySelector(".total-amount").textContent = `${Math.trunc(
    totalAmount
  ).toFixed(2)} €`;
  console.log(totalAmount);

  toInPayable = Math.trunc(totalAmount - inputAmount.value);
  document.querySelector(".interest-payable").textContent = `${Math.trunc(
    toInPayable
  ).toFixed(2)} €`;

  Math.trunc(toInPayable);
});

inputAmount.addEventListener("click", function () {
  inputAmount.value = "";
  inputInterest.value = "";
  inputTenure.value = "";
});
//////////////////////////////////////////////////////////////////
// console.log(loanEmi);
// Elements
// const labelWelcome = document.querySelector(".welcome");
// const labelDate = document.querySelector(".date");
// const labelBalance = document.querySelector(".balance__value");
// const labelSumIn = document.querySelector(".summary__value--in");
// const labelSumOut = document.querySelector(".summary__value--out");
// const labelSumInterest = document.querySelector(".summary__value--interest");
// const labelTimer = document.querySelector(".timer");
// const containerApp = document.querySelector(".app");
// const containerMovements = document.querySelector(".movements");
// const btnLogin = document.querySelector(".login__btn");
// const btnTransfer = document.querySelector(".form__btn--transfer");
// const btnLoan = document.querySelector(".form__btn--loan");
// const btnClose = document.querySelector(".form__btn--close");
// const btnSort = document.querySelector(".btn--sort");
// const inputLoginUsername = document.querySelector(".login__input--user");
// const inputLoginPin = document.querySelector(".login__input--pin");
// const inputTransferTo = document.querySelector(".form__input--to");
// const inputTransferAmount = document.querySelector(".form__input--amount");
// const inputLoanAmount = document.querySelector(".form__input--loan-amount");
// const inputCloseUsername = document.querySelector(".form__input--user");
// const inputClosePin = document.querySelector(".form__input--pin");

/////////////////////////////////////////////////
// Functions

/////////////////////// Btn Loan//////////////////////////////

// btnLoan.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("click");
//   const amount = Number(inputLoanAmount.value);

//   console.log(amount);

//   const balance = currentAccount.movements.reduce(function (acc, move) {
//     return acc + move;
//   }, 0);

//   if (
//     // amount > 0 &&
//     // amount >
//     //   currentAccount.movements.some(function (mov) {
//     //     return mov > amount * 10;
//     //   })
//     amount < balance &&
//     amount > 500
//   ) {
//     setTimeout(() => {
//       console.log(`you can get a loan amount ${amount.toFixed(2)}`);
//       currentAccount.movements.push(amount);
//       updateUI(currentAccount);
//       currentAccount.movementsDates.push(new Date());
//     }, 5000);
//   } else {
//     console.log(` you may try again after 90 days`);
//   }
//   console.log(balance);

//   inputLoanAmount.value = "";
// });
// //////////// practice //////////////

// const displayMovements = function (acc) {
//   containerMovements.innerHTML = "";
//   let html;
//   settime();
//   acc.movements.forEach(function (move, i) {
//     const Arraydate = new Date(acc.movementsDates[i]);
//     console.log(Arraydate);
//     const day = `${Arraydate.getDate()}`.padStart(2, 0);
//     const month = `${Arraydate.getMonth()}`.padStart(2, 0);
//     const years = `${Arraydate.getFullYear()}`.padStart(2, 0);
//     const displayDate = `${day}/${month}/${years}`;

//     const type = move > 0 ? "deposit" : "withdrawal";

//     html = `<div class="movements__row">
//              <div class="movements__type movements__type--${type}">${
//       i + 1
//     } : ${type}</div>
//     <div class="movements__date">${displayDate}</div>
//              <div class="movements__value">${move.toFixed(2)} </div>
//             </div>`;
//     containerMovements.insertAdjacentHTML("afterBegin", html);
//   });
// };

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

// let eurToUsd = 1.1;
// const eurotoUsdTrasn = movements.map(function (mov, i) {
//   return `your ${i + 1} movement is ${mov * eurToUsd}`;
// });
// // console.log(eurotoUsdTrasn);

// const calcDisplaySummary = function (accts) {
//   const SumIn = accts.movements
//     .filter(function (move) {
//       return move > 0;
//     })
//     .reduce(function (accu, move) {
//       return accu + move;
//     }, 0);
//   console.log(SumIn);

//   labelSumIn.textContent = `${SumIn.toFixed(2)} €`;

//   const sumOut = accts.movements
//     .filter(function (move) {
//       return move < 0;
//     })
//     .reduce(function (accu, move) {
//       return accu + move;
//     }, 0);
//   console.log(sumOut);

//   labelSumOut.textContent = `${Math.abs(sumOut)} €`;

//   const interest = accts.movements
//     .filter(function (move) {
//       return move > 0;
//     })
//     .map(function (mov) {
//       return mov * 1.2;
//     })
//     .reduce(function (acc, move) {
//       return acc + move;
//     }, 0);

//   labelSumInterest.textContent = `${interest.toFixed(2)} €`;
//   console.log(interest);
// };
// const balance = function (acc) {
//   acc.balanceSummery = acc.movements.reduce(function (acc, move) {
//     return acc + move;
//   });

//   labelBalance.textContent = `${acc.balanceSummery.toFixed(2)} €`;
// };

// //////////////////////
// const account = accounts.find(function (acc) {
//   return acc.owner === "Jessica Davis";
// });
// console.log(account);

// // btnLogin////////////////////////
// const user = "Faruk Jabbar Hundekari";

// const createUsernames = function (acc) {
//   acc.forEach(function (acctns) {
//     acctns.account = acctns.owner
//       .toLowerCase()
//       .split(" ")
//       .map(function (use) {
//         return use[0];
//       })
//       .join("");
//   });
// };
// createUsernames(accounts);
// // console.log(account);
// /////////////////// Btn Login ////////////////////
// let currentAccount;
// btnLogin.addEventListener("click", function (e) {
//   e.preventDefault();

//   currentAccount = accounts.find(function (acct) {
//     return acct.username === inputLoginUsername.value;
//   });

//   if (currentAccount && currentAccount.pin === Number(inputLoginPin.value)) {
//     labelWelcome.textContent = `Welcome Back , ${
//       currentAccount.owner.split(" ")[0]
//     }`;
//     labelWelcome.style.color = "brown";
//     containerApp.style.opacity = 100;

//     //// display movements////
//     updateUI(currentAccount);
//   }
//   // console.log(currentAccount);
//   inputLoginUsername.value = inputLoginPin.value = "";
// });

// const updateUI = function (accc) {
//   displayMovements(accc);
//   /////display balance////
//   balance(accc);
//   ///// summery balance////
//   calcDisplaySummary(accc);
// };
// //////////////// Ammount Transafer ////////////

// btnTransfer.addEventListener("click", function (e) {
//   e.preventDefault();

//   const amount = Number(inputTransferAmount.value);

//   const receiverAcc = accounts.find(function (acct) {
//     return acct.username === inputTransferTo.value;
//   });

//   if (
//     amount > 0 &&
//     receiverAcc.username !== currentAccount.username &&
//     receiverAcc &&
//     amount < 5000
//   ) {
//     console.log(`Transcation is valid `);

//     currentAccount.movements.push(-amount);
//     receiverAcc.movements.push(amount);
//     updateUI(currentAccount);
//     currentAccount.movementsDates.push(new Date());
//     receiverAcc.movementsDates.push(new Date());
//   } else {
//     console.log("transcation is failed");
//   }
//   inputTransferTo.value = inputTransferAmount.value = "";
// });
// /////////////btn close Account //////////
// // inputClosePin
// // inputCloseUsername
// btnClose.addEventListener("click", function (e) {
//   e.preventDefault();

//   if (
//     inputCloseUsername.value === currentAccount.username &&
//     Number(inputClosePin.value) === currentAccount.pin
//   ) {
//     const index = accounts.findIndex(
//       (acc) => acc.username === currentAccount.username
//     );
//     console.log(index);
//     // .indexOf(23)

//     // Delete account
//     accounts.splice(index, 1);

//     // Hide UI
//     containerApp.style.opacity = 0;
//   }

//   inputCloseUsername.value = inputClosePin.value = "";
// });
// /////////////Btn cal Js//////////////

// const openModel = document.querySelector(".form__btn--emi");
// const containerCalculator = document.querySelector(".container--Calculator");
// const overlay = document.querySelector(".overlay");

// openModel.addEventListener("click", function (e) {
//   e.preventDefault();
//   console.log("clicked button");
//   containerCalculator.style.display = "block";
//   overlay.classList.remove("hidden");
// });
// const closed = document.querySelector(".closed");
// closed.addEventListener("click", function (e) {
//   e.preventDefault();
//   containerCalculator.style.display = "none";
//   overlay.classList.add("hidden");
// });

// ////////////////////////Chart JS ///////////////////////////////
// //////////////// Calculator ////////////////////////
// let toInPayable;
// let totalAmount;
// let emi;
// const inputAmount = document.querySelector(".input-amount");
// const inputInterest = document.querySelector(".input-Interest");
// const inputTenure = document.querySelector(".input-Tenure");

// const Calbtn = document.querySelector(".Cal-btn");

// Calbtn.addEventListener("click", function () {
//   emi =
//     (inputAmount.value *
//       (inputInterest.value / 12 / 100) *
//       Math.pow(1 + inputInterest.value / 12 / 100, inputTenure.value)) /
//     (Math.pow(1 + inputInterest.value / 12 / 100, inputTenure.value) - 1);

//   document.querySelector(".loan-emis").textContent = `${Math.trunc(emi).toFixed(
//     2
//   )} €`;
//   console.log(emi);

//   totalAmount = Math.trunc(inputTenure.value * emi);
//   document.querySelector(".total-amount").textContent = `${Math.trunc(
//     totalAmount
//   ).toFixed(2)} €`;
//   console.log(totalAmount);

//   toInPayable = Math.trunc(totalAmount - inputAmount.value);
//   document.querySelector(".interest-payable").textContent = `${Math.trunc(
//     toInPayable
//   ).toFixed(2)} €`;

//   Math.trunc(toInPayable);
// });

// inputAmount.addEventListener("click", function () {
//   inputAmount.value = "";
//   inputInterest.value = "";
//   inputTenure.value = "";
// });
// ////////////Chart JS /////////////////

// containerMovements.addEventListener("mouseover", function () {
//   const notd = [...document.querySelectorAll(".movements__row")];

//   notd.forEach(function (row, i) {
//     row.style.height = "30px";
//     row.style.borderRadius = "5px";
//     if (i % 2 === 0) {
//       row.style.backgroundColor = "#d0d0d0d6";
//     } else {
//       row.style.backgroundColor = "#c6c8cd42";
//     }
//   });
// });

// containerMovements.addEventListener("mouseout", function () {
//   const notd = [...document.querySelectorAll(".movements__row")];

//   notd.forEach(function (row, i) {
//     row.style.borderRadius = "15px";
//     if (i % 2 === 0) {
//       row.style.backgroundColor = "white";
//     } else {
//       row.style.backgroundColor = "white";
//     }
//   });
// });

// /////////Dates /////////////
// const now = new Date();
// const local = navigator.language;
// console.log(local);
// const options = {
//   hour: "numeric",
//   minute: "numeric",
//   day: "numeric",
//   month: "numeric",
//   year: "numeric",
//   weekday: "long",
// };
// console.log(now);
// labelDate.textContent = Intl.DateTimeFormat(local, options).format(now);

// const day = `${now.getDate()}`.padStart(2, 0);
// const month = `${now.getMonth()}`.padStart(2, 0);
// const years = `${now.getFullYear()}`.padStart(2, 0);
// const hours = `${now.getHours()}`.padStart(2, 0);
// const min = `${now.getMinutes()}`.padStart(2, 0);
// const sec = `${now.getSeconds()}`.padStart(2, 0);
// const displayDate = `${day}/${month}/${years} Time ${hours}:${min}:${sec}`;

// const inged = ["methi", "paratha", "poha"];

// const timer = setTimeout(
//   (ing, ing2) => {
//     console.log(`your meal get ready now with ${ing} and ${ing2}`);
//   },
//   3000,
//   ...inged
// );

// if (inged.includes("poha")) {
//   clearTimeout(timer);
// } else {
//   console.log("your meal is ready");
// }
// ///////////// SET TIME OUT FUNACTION/////////////////////

// const settime = function () {
//   let time = 500;
//   const timer = setInterval(function () {
//     const min = Math.trunc(time / 60);
//     const sec = Math.trunc(time % 60);
//     labelTimer.textContent = `${min}:${sec}`;
//     time--;
//     if (time === 0) {
//       clearInterval(timer);
//       labelWelcome.textContent = `Please login to get Started`;
//       labelWelcome.style.color = "brown";
//       containerApp.style.opacity = 0;
//     }
//   }, 1000);
// };

const NewArray2 = [1500, 2250, 3450, 5100, 7650];
const NewArray = [10, 15, 23, 3, 51];

const newNumber = NewArray.map(function (index) {
  return NewArray2.map(function (indexs) {
    return indexs - index * 10;
  });
});

const newNumber2 = NewArray.map(function (index) {
  return;
});
console.log(newNumber);

NewArray2.forEach((num, index) => {
  console.log(`${num + num - num[index]}  ${index}`);
});
