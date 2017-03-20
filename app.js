'use strict';

const outputDiv = document.getElementById('output');
const quizKey = [
    { 
        question: '2 + 2 =',
        answer: 4
    },
    {
        question: '5 - 3 =',
        answer: 2
    },
    {
        question: '8 / 2 =',
        answer: 4
    },
    {
        question: '3 * 3 =',
        answer: 9
    },
    {
        question: '9 % 4 =',
        answer: 2
    }
];
let correctCount = 0;
let question;
let answer;
let input;
let html = '';
let correctQuestions = [];
let incorrectQuestions = [];

const print = (message) => {
    outputDiv.innerHTML = message;
}

const listBuilder = (arr) => {
    let listString = `<ul>`;
    for (let i = 0; i < arr.length; i++) {
        listString += `<li>${arr[i]}</li>`;
    }
    listString += `</ul>`;
    return listString;
}

for (let i = 0; i < quizKey.length; i++) {
    question = quizKey[i].question;
    answer = quizKey[i].answer;
    input = parseInt(prompt(question));
    if (input === answer) {
        correctCount++;
        correctQuestions.push(question);
    } else {
        incorrectQuestions.push(question);
    }
}

html += `<h2>You got ${correctCount} questions right.</h2>`;
html += `<h2>These are the questions you got right:</h2>`;
html += `${listBuilder(correctQuestions)}`
html += `<h2>These are the questions you got wrong:</h2>`;
html += `${listBuilder(incorrectQuestions)}`
print(html);
