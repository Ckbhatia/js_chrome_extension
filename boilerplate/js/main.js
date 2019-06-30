// You js goes here

// Card data Array
const cardData = [
    {
        topic: 'html',
        question: 'What is the purpose of the alt attribute on images?',
        text: 'The alt attribute provides alternative information for an image if a user cannot view it. The alt attribute should be used to describe any images except those which only serve a decorative purposes, in which case it should be left empty.',
        showData: true
    },
    {
        topic: 'css',
        question: 'What is CSS BEM?',
        text: 'The BEM methodology is a naming convention for CSS classes in order to keep CSS more maintainable by defining namespaces to solve scoping issues. BEM stands for Block Element Modifier which is an explanation for its structure. A Block is a standalone component that is reusable across projects and acts as a "namespace" for sub components (Elements). Modifiers are used as flags when a Block or Element is in a certain state or is different in structure or style.',
        showData: true
    },
    {
        topic: 'html',
        question: 'Can a web page contain multiple <header> elements? What about <footer> elements?',
        text: 'Yes to both. The W3 documents state that the tags represent the header(<header>) and footer(<footer>) areas of their nearest ancestor "section". So not only can the page <body> contain a header and a footer, but so can every <article> and <section> element.',
        showData: true
    },
    {
        topic: 'html',
        question: 'What is the DOM?',
        text: 'The DOM (Document Object Model) is a cross-platform API that treats HTML and XML documents as a tree structure consisting of nodes. These nodes (such as elements and text nodes) are objects that can be programmatically manipulated and any visible changes made to them are reflected live in the document. In a browser, this API is available to JavaScript where DOM nodes can be manipulated to change their styles, contents, placement in the document, or interacted with through event listeners.',
        showData: true
    },
    {
        topic: 'html',
        question: 'Can a web page contain multiple <header> elements? What about <footer> elements?',
        text: 'Yes to both. The W3 documents state that the tags represent the header(<header>) and footer(<footer>) areas of their nearest ancestor "section". So not only can the page <body> contain a header and a footer, but so can every <article> and <section> element.',
        showData: true
    },
    {
        topic: 'js',
        question: 'What is the difference between the postfix i++ and prefix ++i increment operators?',
        text: 'Both increment the variable value by 1. The difference is what they evaluate to. \n The postfix increment operator evaluates to the value before it was incremented. \n The prefix increment operator evaluates to the value after it was incremented.',
        showData: true
    },
    {
        topic: 'css',
        question: 'What are the advantages of using CSS preprocessors?',
        text: 'CSS preprocessors add useful functionality that native CSS does not have, and generally make CSS neater and more maintainable by enabling DRY (Don\'t Repeat Yourself) principles. Their terse syntax for nested selectors cuts down on repeated code. They provide variables for consistent theming (however, CSS variables have largely replaced this functionality) and additional tools like color functions (lighten, darken, transparentize, etc), mixins, and loops that make CSS more like a real programming language and gives the developer more power to generate complex CSS.',
        showData: true
    },
    {
        topic: 'css',
        question: 'Can you name the four types of @media properties?',
        text: 'all, which applies to all media type devices, n\ print, which only applies to printers. \n screen, which only applies to screens (desktops, tablets, mobile etc.) \speech, which only applies to screenreaders',
        showData: true
    },
    {
        topic: 'js',
        question: 'What is the difference between the equality operators == and ===?',
        text: 'Triple equals (===) checks for equality and does\'nt allow coersion, which means both the type and value must be the same ( Doesn\'t compare for truthy or falsy value). Double equals (==) on the other hand first performs type coercion so that both operands are of the same type and then applies comparison.',
        showData: true
    }
]; 

// 2nd copy array for mutate the data
let cardDataCopy = cardData.slice();
console.log(cardDataCopy, 'Copied successfully');

// Generate Random Card data
let cardToshowData;
let randomNum;
let randomCard = (type) => {
    let length = cardDataCopy.length-1;
    // In Testing
    randomNum = Math.round(Math.random() * length);
    // if (cardDataCopy[randomNum].showData || cardDataCopy[randomNum] ) {
        cardToshowData = cardDataCopy[randomNum].topic === type ? cardDataCopy[randomNum] : cardDataCopy[randomNum];
    // }
    // Above part is in Testing
    // randomNum = Math.round(Math.random() * length);
    // In testing
    // console.log(cardDataCopy[randomNum].type == type);
    // cardToshowData = cardDataCopy[randomNum].topic === type ? cardDataCopy[randomNum] : cardDataCopy[randomNum];
    // console.log(`${cardDataCopy[randomNum].topic} Card selected, From randomCard`);
}

// Select the topic
let topicText = document.querySelector('.flash-card-text');
let topicHeading = document.querySelector('.flash-card-heading');
let topicPara = document.querySelector('.flash-card-para');

// Select option
let selectOption = document.querySelector('#select-options');

// Filter data by topic type
let filterDataByTopic = (event) => {
    // Assign value to topic
    let topic = event.target.value;
    console.log(topic, 'is selected, From filterDataByTopic');
    // Invoke runNow function
    cardDataCopy.forEach(item => console.log(item.topic));

    if (topic !== 'all') {
        let fillData = cardData.filter(item => item.topic === topic);
        console.log(fillData, "From filter function");
        console.log(`I'm from filter value of type is ${topic}`)
        // Re-assign cardDataCopy filtered array
        cardDataCopy = fillData;
        randomCard();
        console.log(cardDataCopy, "cardData Copyhas changed to", topic, 'only');
        // displayData(fillData);
    }
    else {
        cardDataCopy = cardData;
        randomCard();
    }
    // In test topic
    // cardToshowData.topic === type ? displayData(filData) : randomCard(type);
    // Check above second condition
    // runNow();
}

// Below function isn't usefull, recommended to delete in future
// // Check and compare the topic type
// let handleType = (event) => {
//     filterDataByTopic(event.target.value);
    // switch(event.target.value) {
    //     case 'html': {
    //         filterDataByTopic('html');
    //         break;
    //     }
    //     case 'css': {
    //         filterDataByTopic('css');
    //         break;
    //     }
    //     case 'js': {
    //         filterDataByTopic('js');
    //         break;
    //     }
    //     default: {
    //         filterDataByTopic('all');
    //     }
    // }
// }
// Listen for select option selection
selectOption.addEventListener('click', filterDataByTopic);

// Buttons
let btn = document.querySelector('.flash-card-btn-container');

// Handle Button function
let handleBtn = (event) => {
    let clickVal = event.target.id === 'true' ? true : false;
    // In test
    if (clickVal) {
        cardDataCopy[randomNum].showData = false;
        console.log(cardDataCopy[randomNum].showData);
        // Invoke runNow function
        runNow();
    }
}

// Listen for button selection
btn.addEventListener('click', handleBtn);


// Select Next button and store to nextBtn
let nextBtn = document.querySelector('.btn-next');
// Event listener for click nextBtn
nextBtn.addEventListener('click', function() {
    // Invoke runNow() function
    runNow();
    }
);

// DisplayData Function to modify the data of card
let displayData = (data) => {
    topicText.innerText = data.topic;
    topicHeading.innerText = data.question;
    topicPara.innerText = data.text;
}

// IIFE Function to run functions
let runNow = () => {
    // randomValue();
    randomCard();
    changecolor();
    displayData(cardToshowData);
}
(() => {
    // randomValue();
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
// TEMP
 let changecolor = () => {
    color = `rgb(${randomColor(), randomColorVal}, ${randomColor(), randomColorVal}, ${randomColor(), randomColorVal})`;
    container.style.backgroundColor = color;
 }
// TEMP ABOVE

// Auto background color change
(() => {
    color = `rgb(${randomColor(), randomColorVal}, ${randomColor(), randomColorVal}, ${randomColor(), randomColorVal})`;
    container.style.backgroundColor = color;
})();


// Flash card settings icon
let settingsIcon = document.querySelector('.flash-card-settings-icon');

// Flash card settings menu
let settingsMenu = document.querySelector('.flash-card-settings-menu');

// Toggle id, settings-menu
let toggleMenu = () => {
    if (settingsMenu.getAttribute('id') === 'hidden') {
        settingsMenu.setAttribute('id', 'show');
    }
    else {
        settingsMenu.setAttribute('id', 'hidden');
    }
}
// Event listner on click
settingsIcon.addEventListener('click', toggleMenu);