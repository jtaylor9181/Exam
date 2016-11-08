/**
 *   @author Taylor, Jacob (taylorj@student.ncmich.edu)
 *   @version 0.0.1
 *   @summary Mid-Term Exam code || created: 11.7.2016
 *   @todo
 */

"use strict";
const PROMPT = require('readline-sync');

const PIN = 1492;
const CARD_NUMBER = 1234567891012345;
const CARD_HOLDER_NAME = 'Jacob Taylor';
const MAX_TRIES = 3;

let checkingBalance = 1000, savingsBalance = 1000, pick = 0;
let cardHolderName, inquireMoney, whichTask;
let withdrawMoney, depositMoney, transferFunds, cardNumber, accountPin, cardName;

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
    while (typeof cardNumber === 'undefined' || isNaN(cardNumber) || cardNumber !== CARD_NUMBER) {
        cardNumber = PROMPT.question(`\n\tPlease enter the card number:`);
    }
}

function setAccountPin() {
    let answered = 0,
        counter = 0;
    while (counter < MAX_TRIES && answered !== -1) {
        accountPin = PROMPT.question(`\n\tPlease enter the pin number for your account:`);
        if (accountPin !== PIN) {
            console.log(`\nPIN is not correct, please try again.`);
            counter++
        } else if (accountPin == PIN) {
            answered = -1
        }
    }
}

function setWhichTask() {
    if (pick == 0) {
        whichTask = PROMPT.question(`\n\tHello, would you like to withdraw funds (press 1), deposit funds (press 2), transfer funds (press 3), or inquire on the balance of your account (press 4)?`);
    } else {
        whichTask = PROMPT.question(`\n\tHello, would you like to withdraw funds (press 1), deposit funds (press 2), transfer funds (press 3), or inquire on the balance of your account (press 4), or quit (press 5)?`);
    }
    pick = 1;
}

function setWithdrawMoney() {
    let withdrawChoice;
    withdrawChoice = PROMPT.question(`\n\tWould you like to withdraw funds from your checking account(press 1) or savings account(press 2)?`);
    if (withdrawChoice == 1) {
        console.log(`\nchecking Balance = ${checkingBalance}`);
        withdrawMoney = PROMPT.question(`how much do u wanna withdraw???`);
        checkingBalance = checkingBalance - withdrawMoney;
        console.log(`New checking balance is ${checkingBalance}`);
        setWhichTask();
    } else {
        console.log(`\nSavings = ${savingsBalance}`);
        setWhichTask();
    }
}

function printGoodbye() {
    console.log(`thank you for your business, ${cardHolderName}`)
}
