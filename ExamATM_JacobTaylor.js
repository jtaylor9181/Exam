/**
 *   @author Taylor, Jacob (taylorj@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Mid-Term Exam code || created: 11.7.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

const PIN = 1492;
const CARD_NUMBER =1234567890123456;
const CARD_HOLDER_NAME = 'Jacob Taylor';
const MAX_TRIES = 3;

let checkingBalance = 1000, savingsBalance = 1000, pick = 0;
let cardHolderName, inquireMoney, whichTask;
let withdrawMoney, depositMoney, transferFunds, cardNumber, counter;

function main() {
        setCardHolderName();
        setCardNumber();
        setAccountPin();
        setWhichTask();
    if (whichTask == 1) {
        setWithdrawMoney();
    } else if (whichTask == 2) {
        setDepositMoney();
    } else if (whichTask == 3) {
        setTransferFunds();
    } else if (whichTask == 4) {
        setInquireMoney();
    } else {
        printGoodbye();
    }
}

main();

function setCardHolderName() {
    while (typeof cardHolderName === 'undefined' || !/([A-Z,a-z])/i.test(cardHolderName) || cardHolderName !== CARD_HOLDER_NAME) {
        cardHolderName = PROMPT.question(`\n\tPlease enter the card holders full name:`);
    }
}

function setCardNumber() {
    while (typeof cardNumber === 'undefined' || isNaN(cardNumber) || cardNumber != CARD_NUMBER) {
        cardNumber = PROMPT.question(`\n\tPlease enter the card number:`);
    }
}

function setAccountPin() {
    let accountPin;
    while (typeof accountPin == 'undefined' || isNaN(accountPin) || counter < MAX_TRIES || accountPin !== PIN) {
        accountPin = Number(PROMPT.question(`\n\tPlease enter the pin number for your account:`));
        counter++
    }
    if (accountPin !== PIN) {
        console.log(`\nPIN is not correct, please try again.`);
        return main();
    } else if (accountPin == PIN) {
    }
}

function setWhichTask() {
    whichTask = PROMPT.question(`\n\tHello, would you like to withdraw funds (press 1), deposit funds (press 2), transfer funds (press 3), or inquire on the balance of your account (press 4), or quit (press 5)?`);
}

function setWithdrawMoney() {
    let withdrawChoice;
    withdrawChoice = PROMPT.question(`\n\tWould you like to withdraw funds from your checking account(press 1) or savings account(press 2)?`);
    if (withdrawChoice == 1) {
        console.log(`\nchecking Balance = \$${checkingBalance}`);
        withdrawMoney = PROMPT.question(`How much money would you like to withdraw?`);
        checkingBalance = checkingBalance - withdrawMoney;
        console.log(`New checking balance is \$${checkingBalance}`);
        setWhichTask();
    } else {
        console.log(`\nSavings = \$${savingsBalance}`);
        withdrawMoney = PROMPT.question(`How much money would you like to withdraw?`);
        savingsBalance = savingsBalance - withdrawMoney;
        console.log(`New savings balance is \$${savingsBalance}`);
        setWhichTask();
    }
}

function setDepositMoney() {
    let depositChoice;
    depositChoice = PROMPT.question(`\n\tWould you like to deposit funds into your checking account(press 1) or savings account(press 2)?`);
    if (depositChoice == 1) {
        console.log(`\nChecking Balance = \$${checkingBalance}`);
        depositMoney = PROMPT.question(`How much money would you like to deposit?`);
        checkingBalance = checkingBalance + depositMoney;
        console.log(`New checking balance is \$${checkingBalance}`);
        setWhichTask();
    } else {
        console.log(`\nSavings = \$${savingsBalance}`);
        depositMoney = PROMPT.question(`How much money would you like to deposit?`);
        savingsBalance = savingsBalance + depositMoney;
        console.log(`New savings balance is \$${savingsBalance}`);
        setWhichTask();
    }
}

function setTransferFunds() {
    let transferFrom;
    transferFrom = PROMPT.question(`\n\tWould you like to transfer funds from you checking account(press 1) or savings account(press 2)?`);
    let transferTo;
    transferTo = PROMPT.question(`\n\tWould you like to transfer funds to your checking account(press 1) or savings account(press 2)?`);
    if (transferFrom == 1 && transferTo == 2) {
        console.log(`\nChecking Balance = \$${checkingBalance}`);
        console.log(`\nSavings Balance = \$${savingsBalance}`);
        let transferAmount;
        transferAmount = PROMPT.question(`How much money would you like to transfer?`);
        checkingBalance = checkingBalance - transferAmount;
        savingsBalance = savingsBalance + transferAmount;
        console.log(`New checking balance is \$${checkingBalance}`);
        console.log(`New savings balance is \$${savingsBalance}`);
        setWhichTask();
    } else if (transferFrom == 2 && transferTo == 1) {
        console.log(`\nSavings balance = \$${savingsBalance}`);
        console.log(`\nChecking balance = \$${checkingBalance}`);
        let transferAmount;
        transferAmount = PROMPT.question(`How much money would you like to transfer?`);
        savingsBalance = savingsBalance - transferAmount;
        checkingBalance = checkingBalance + transferAmount;
        console.log(`New savings balance is \$${savingsBalance}`);
        console.log(`New checking balance is \$${checkingBalance}`);
        setWhichTask();
    }
}

function setInquireMoney() {
    console.log(`Checking balance is \$${checkingBalance}`);
    console.log(`Savings balance is \$${savingsBalance}`);
}

function printGoodbye() {
    console.log(`Thank you for your business, ${cardHolderName}`)
}

