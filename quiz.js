let currentQuestion = 0;
let score = 0;

fetch("questions.json")
  .then(response => response.json())
  .then(data => {
    showQuestion(data.questions[currentQuestion]);
  });

function showQuestion(question) {
  document.getElementById("question").textContent = question.text;
}

function checkAnswer() {
  const answer = document.getElementById("answer").value.toLowerCase();
  const correctAnswer = questions.questions[currentQuestion].answer.toLowerCase();
  if (answer === correctAnswer) {
    score++;
    alert("Correct! Your score is " + score);
  } else {
    alert("Incorrect! Your score is " + score);
  }
  currentQuestion++;
  if (currentQuestion < questions.questions.length) {
    showQuestion(questions.questions[currentQuestion]);
  } else {
    alert("Quiz complete! Your final score is " + score);
  }
}
