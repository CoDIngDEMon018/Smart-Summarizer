// // const textArea = document.getElementById("text_to_summarize");

// // const submitButton = document.getElementById("submit-button");

// // const summarizedTextArea = document.getElementById("summary");

// // element.addEventListener("<event type>", <callback function>);
// // var button = document.getElementById("myButton");

// // button.addEventListener("click", function() {

// //     document.getElementById("myParagraph").innerHTML = "Hello,           world!";

// //   });
// // textArea.addEventListener("input", verifyTextLength);

// // submitButton.addEventListener("click", submitData);
// // Select the necessary elements from the DOM
// const textArea = document.getElementById("text_to_summarize");
// const submitButton = document.getElementById("submit-button");
// const summarizedTextArea = document.getElementById("summary");
// const myButton = document.getElementById("myButton");




// // Event listener for text input in the textarea
// textArea.addEventListener("input", verifyTextLength);

// // Event listener for submit button click
// submitButton.addEventListener("click", submitData);

// // Additional example button event (from your example)
// myButton.addEventListener("click", function() {
//     document.getElementById("myParagraph").innerHTML = "Hello, world!";
// });
// // First, we disable the submit button by default when the user loads the website.
// submitButton.disabled = true;

// // Next, we define a function called verifyTextLength(). This function will be called when the user enters something in the text area. It receives an event, called ‘e’ here
// function verifyTextLength(e) {

//   // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called ‘textarea’
//   const textarea = e.target;

//   // Check if the text in the text area is the right length - between 200 and 100,000 characters
//   if (textarea.value.length > 200 && textarea.value.length < 100000) {
//     // If it is, we enable the submit button.
//     submitButton.disabled = false;
//   } else {
//     // If it is not, we disable the submit button.
//     submitButton.disabled = true;
//   }
// }
// function submitData(e) {

//   // This is used to add animation to the submit button
//   submitButton.classList.add("submit-button--loading");

//   const text_to_summarize = textArea.value;

//   const myHeaders = new Headers();
//   myHeaders.append("Content-Type", "application/json");
//   myHeaders.append("Authorization", "Bearer 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");

//   const raw = JSON.stringify({
//     "text_to_summarize": "Amelia, a curious astronomer, spotted a peculiar comet through her telescope. It emitted a mesmerizing glow and seemed to change course. Determined to investigate, she built a spaceship. On her journey, she encountered cosmic wonders, yet the comet remained elusive. Finally, at the edge of the universe, she understood its secret: the comet was a celestial guide, leading her to discover the boundless wonders within herself. Grateful for the voyage, Amelia returned, sharing her newfound wisdom with the world, inspiring others to explore both the cosmos and the depths of their souls."
//   });

//   const requestOptions = {
//     method: "POST",
//     headers: myHeaders,
//     body: raw,
//     redirect: "follow"
//   };

//   fetch("PASTE YOUR REPLIT WEBVIEW URL HERE AND IN CURRENT VALUE COLUMN/summarize", requestOptions)
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.error(error));

// }
const textArea = document.getElementById("text_to_summarize");
const submitButton = document.getElementById("submit-button");
const summarizedTextArea = document.getElementById("summary");

submitButton.disabled = true;

textArea.addEventListener("input", verifyTextLength);
submitButton.addEventListener("click", submitData);

function verifyTextLength(e) {
 // The e.target property gives us the HTML element that triggered the event, which in this case is the textarea. We save this to a variable called 'textarea'
  const textarea = e.target;

  // Verify the TextArea value.
  if (textarea.value.length > 200 && textarea.value.length < 100000) {
    // Enable the button when text area has value.
    submitButton.disabled = false;
  } else {
    // Disable the button when text area is empty.
    submitButton.disabled = true;
  }
}

function submitData(e) {

 // This is used to add animation to the submit button
  submitButton.classList.add("submit-button--loading");

  const text_to_summarize = textArea.value;

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    "text_to_summarize": text_to_summarize
  });

  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };

  // Send the text to the server using fetch API

 // Note - here we can omit the “baseUrl” we needed in Postman and just use a relative path to “/summarize” because we will be calling the API from our Replit!  
  fetch('/summarize', requestOptions)
    .then(response => response.text()) // Response will be summarized text
    .then(summary => {
      // Do something with the summary response from the back end API!

      // Update the output text area with new summary
      summarizedTextArea.value = summary;

      // Stop the spinning loading animation
      submitButton.classList.remove("submit-button--loading");
    })
    .catch(error => {
      console.log(error.message);
    });
}