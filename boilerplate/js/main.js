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
        topic: 'js',
        question: 'What is the difference between an expression and a statement in JavaScript?',
        text: 'There are two main syntactic categories in JavaScript: expressions and statements. A third one is both together, referred to as an expression statement. They are roughly summarized as: \'Expression: produces a value \'Statement: performs an action \'Expression statement: produces a value and performs an action',
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
    },
    {
        topic: 'html',
        question: 'What are some differences that XHTML has compared to HTML?',
        text: 'Some of the key differences are\' An XHTML element must have an XHTML <DOCTYPE> Attributes values must be enclosed in quotes\'Attribute minimization is forbidden (e.g. one has to use checked="checked" instead of checked)\'Elements must always be properly nested\'Elements must always be closed\'Special characters must be escaped',
        showData: true
    },
    {
        topic: 'css',
        question: 'What is the difference between em and rem units?',
        text: 'Both em and rem units are based on the font-size CSS property. The only difference is where they inherit their values from.\' em units inherit their value from the font-size of the parent element\'rem units inherit their value from the font-size of the root element (html)\'n most browsers, the font-size of the root element is set to 16px by default.',
        showData: true
    },
    {
        topic: 'css',
        question: "What is the difference between '+' and '~' sibling selectors?",
        text: 'The General Sibling Selector ~ selects all elements that are siblings of a specified element. \' The Adjacent Sibling Selector + selects all elements that are the adjacent siblings of a specified element.',
        showData: true
    },
    {
        topic: 'css',
        question: "What is a focus ring? What is the correct solution to handle them?",
        text: 'A focus ring is a visible outline given to focusable elements such as buttons and anchor tags. It varies depending on the vendor, but generally it appears as a blue outline around the element to indicate it is currently focused. \' The best solution is an upcoming pseudo-selector :focus-visible which can be polyfilled today with JavaScript. It will only show a focus ring if the user is using a keyboard and leave it hidden for mouse users. This keeps both aesthetics for mouse use and accessibility for keyboard use.',
        showData: true
    },
    {
        topic: 'js',
        question: "What is a callback?",
        text: 'Callbacks are functions passed as an argument to another function to be executed once an event has occurred or a certain task is complete, often used in asynchronous code. Callback functions are invoked later by a piece of code but can be declared on initialization without being invoked.',
        showData: true
    },
    {
        topic: 'js',
        question: "How do you clone an object in JavaScript?",
        text: "Using the object spread operator ..., the object's own enumerable properties can be copied into the new object. \' Object.assign({}, obj) is another alternative.",
        showData: true
    },
    {
        topic: 'js',
        question: "How do you compare two objects in JavaScript?",
        text: "Even though two different objects can have the same properties with equal values, they are not considered equal when compared using == or ===. This is because they are being compared by their reference (location in memory), unlike primitive values which are compared by value. \' In order to test if two objects are equal in structure, a helper function is required. It will iterate through the own properties of each object to test if they have the same values, including nested objects. Optionally, the prototypes of the objects may also be tested for equivalence by passing true as the 3rd argument.",
        showData: true
    },
    {
        topic: 'js',
        question: "What is event delegation?",
        text: "Event delegation is a technique of delegating events to a single common ancestor. Due to event bubbling, events 'bubble' up the DOM tree by executing any handlers progressively on each ancestor element up to the root that may be listening to it.",
        showData: true
    },
    {
        topic: 'js',
        question: "What is event delegation useful?",
        text: "DOM events provide useful information about the element that initiated the event via Event.target. This allows the parent element to handle behavior as though the target element was listening to the event, rather than all children of the parent or the parent itself.",
        showData: true
    },
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
        cardToshowData = cardDataCopy[randomNum].topic === type ? cardDataCopy[randomNum] : cardDataCopy[randomNum];
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
}

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


