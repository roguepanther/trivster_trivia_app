const generateButton = document.querySelector("#generateBtn");
const quesAnswers = document.querySelector("#quesAnswers");

const genBtnClicked = () => {
  console.log("SYSTEM MSG: generate questions in progress...");

  // Initialise the request for fetching data from the Open Trivia API endpoint
  fetch("https://opentdb.com/api.php?amount=5")
    .then((res) => res.json())
    .then((data) => {
      console.log(data.results[0]);
    })
    .catch((error) => console.error(error));
};
