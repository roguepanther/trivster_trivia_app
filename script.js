const generateButton = document.querySelector("#generateBtn");
const resetButton = document.querySelector("#resetBtn");
const quesAnswers = document.querySelector("#quesAnswers");
// Initialise variables for displaying the answers
const answer = document.querySelector("#answer");
const categ = document.querySelector("#categ");
const diff = document.querySelector("#diff");
// Initialise the variables for resetting the variables
const retrievedAnsw = document.querySelector("retrievedAnsw");
const retrievedCateg = document.querySelector(".retrievedCateg");
const retrievedQues = document.querySelector(".retrievedQues");
const retrievedDiff = document.querySelector(".retrievedDiff");
// Initialise the variables to be used in the Login form\
const loginButton = document.querySelector("#logInBtn");
const logResBtn = document.querySelector("#logResBtn");
const userEmail = document.querySelector("#userEmail");
const userPass = document.querySelector("#userPass");

const genBtnClicked = () => {
  if (answer.innerText != "") {
    console.log("question is present on the page");
    getQuestion();
    clearValues();
  } else {
    console.log("SYSTEM MSG: generating questions in progress...");
    showHeaders();
    getQuestion();
  }
};

function getQuestion() {
  // Initialise the request for fetching data from the Open Trivia API endpoint
  fetch("https://opentdb.com/api.php?amount=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0]);
      answer.innerText += data.results[0].question.toString();
      categ.innerText += data.results[0].category;
      diff.innerText += data.results[0].difficulty.toUpperCase();
    })
    .catch((error) => console.error(error));
}

// Function to display the paragraph and h3 values which show the questions and difficulty text for the users.
function showHeaders() {
  retrievedCateg.style.display = "inline";
  retrievedQues.style.display = "inline";
  retrievedDiff.style.display = "inline";
}

// Function to clear out the screen and bring the application back to default state
function resetQuestions() {
  retrievedQues.style.display = "none";
  retrievedCateg.style.display = "none";
  retrievedDiff.style.display = "none";
}

function clearValues() {
  answer.innerText = "";
  categ.innerText = "";
  diff.innerText = "";
}

// TODO: Implement the Login functionality with Firebase
loginButton.addEventListener("click", (e) => {
  // Prevents the default behaviour on when the user hits submit
  e.preventDefault();

  // Test console log when clicking the button
  console.log("Login button has been clicked...");
  signUpFunction();
});

// call the sign in with email and password method

const signUpFunction = () => {
  const email = userEmail.value;
  const password = userPass.value;

  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      //signed in successfully
      const user = userCredential.user;
      console.log(`Signed up as ${user.email}`);
      window.location.href = "/index.html";
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error(`Error signing in: ${errorMessage}`);
    });
};
