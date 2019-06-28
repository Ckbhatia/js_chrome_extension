// You js goes here

// Card data Array
let cardData = [
    {
        topic: 'CSS',
        question: 'Question 1st',
        text: 'You can select all selectors with universal selector * in css. It will apply the properties to all elements of html file.',
        state: false
    },
    {
        topic: 'JS',
        question: 'Question 2nd',
        text: 'You can select all selectors with universal selector * in css. It will apply the properties to all elements of html file.',
        state: false
    },
    {
        topic: 'HTML',
        question: 'Question 3rd',
        text: 'You can select all selectors with universal selector * in css. It will apply the properties to all elements of html file.',
        state: false
    },
    {
        topic: 'CSS',
        question: 'Question 4th',
        text: 'You can select all selectors with universal selector * in css. It will apply the properties to all elements of html file.',
        state: false
    },
    {
        topic: 'CSS',
        question: 'Question 5th',
        text: 'You can select all selectors with universal selector * in css. It will apply the properties to all elements of html file.',
        state: false
    },
    {
        topic: 'CSS',
        question: 'Question 6th',
        text: 'You can select all selectors with universal selector * in css. It will apply the properties to all elements of html file.',
        state: false
    }
]; 

// Generates random number
let randomNum;
let randomValue = () => {
    randomNum = Math.round(Math.random() * cardData.length);
}

// Generate Random Card data
let cardToshowData;
let randomCard = () => {
    cardToshowData = cardData[randomNum];
}

// Select the topic
let topicText = document.querySelector('.flash-card-text');
let topicHeading = document.querySelector('.flash-card-heading');
let topicPara = document.querySelector('.flash-card-para');

// DisplayData Function to modify the data of card
let displayData = (data) => {
    // if (data.type === )
    topicText.innerHTML = data.topic;
    topicHeading.innerHTML = data.question;
    topicPara.innerHTML = data.text;
}

// IIFE Function to run functions
// let runNow = 
(() => {
    randomValue();
    randomCard();
    displayData(cardToshowData);
})();


// Select card container
let container = document.querySelector('.flash-card-container');

// Color Generator function
let randomColorVal;
let randomColor = () => {
    randomColorVal = Math.round(Math.random() * 255);
    return randomColorVal;
}

// Random container color changer function
// let changecolor = 
(() => {
    color = `rgb(${randomColor(), randomColorVal}, ${randomColor(), randomColorVal}, ${randomColor(), randomColorVal})`;
    container.style.backgroundColor = color;
    console.log(`Function randomCol ran and color Value ${color}`)
})();