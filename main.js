// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Invoke mimicServerCall to simulate making a server request
// When the "server" returns a failure status:
// Respond to the error using a .catch(() => {}) block after your .then(() => {}) block.
// Display the error modal by removing the .hidden class
// Display the server error message in the modal
const likes = document.querySelectorAll(".like-glyph")
likes.forEach(like => {
  like.addEventListener("click", (event) => {
    mimicServerCall()
    .then(() => clickHandler(event.target))
    .catch(handleError)
  })
});
// like.addEventListener("click", (event) => {
//   mimicServerCall()
//   .then(() => clickHandler(event.target))
//   .catch(handleError)
// })

function clickHandler(like){
  if (like.textContent === EMPTY_HEART) {
    like.textContent = FULL_HEART
    like.classList.add("activated-heart")
  }
  else if (like.textContent === FULL_HEART) {
    like.textContent = EMPTY_HEART
    like.classList.remove("activated-heart")
  }
}
function handleError(message) {
  modal.classList.remove("hidden");
  modal.textContent = message;
  setTimeout(() => modal.classList.add("hidden"), 3000)
}


//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
