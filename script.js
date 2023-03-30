const generateButton = document.querySelector("#generateBtn");
const quesAnswers = document.querySelector("#quesAnswers");
const answer = document.querySelector("#answer");
const categ = document.querySelector("#categ");
const diff = document.querySelector("#diff");

const genBtnClicked = () => {
  if (answer.innerText != "") {
    console.log("question is present on the page");
    getQuestion();
    clearValues();
  } else {
    console.log("SYSTEM MSG: generating questions in progress...");
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

function clearValues() {
  answer.innerText = "";
  categ.innerText = "";
  diff.innerText = "";
}
