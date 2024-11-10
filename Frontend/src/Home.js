import React, { useState, useEffect } from 'react';
import Menubar from './Menubar';

function Home() {
  const [quizData, setQuizData] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);

  useEffect(() => {
    fetch('http://localhost:8080/QuizProject/quiz/getall')
      .then((response) => response.json())
      .then((data) => setQuizData(data))
      .catch((error) => console.error(error));
  }, []);

  const handleOptionSelect = (optionKey) => {
    const selectedOptionContent = quizData[currentQuestionIndex][optionKey];
    setSelectedOption(selectedOptionContent);
  };


  const handleNextQuestion = () => {
    // Ensure both selectedOption and correctoption are strings
    const selectedOptionString = String(selectedOption);
    const correctOptionString = String(quizData[currentQuestionIndex].correctoption);

    // Trim leading and trailing spaces
    const trimmedSelectedOption = selectedOptionString.trim();
    const trimmedCorrectOption = correctOptionString.trim();

    console.log('Correct Option:', trimmedCorrectOption);
    console.log(selectedOptionString)

    // Check if the selected option is correct and update score if needed
    if (trimmedSelectedOption === trimmedCorrectOption) {
      console.log('Answer is correct!');
      setScore(score + 1);
    } else {
      console.log('Answer is incorrect.');
    }

    // Move to the next question
    setCurrentQuestionIndex(currentQuestionIndex + 1);

    // Clear the selected option for the next question
    setSelectedOption(null);
  };
  const handleRestartQuiz = () => {
    // Reset the quiz state to its initial values
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setScore(0);
  };
  
  const handlePreviousQuestion = () => {
    // Move to the previous question
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      
    }
  };

  return (
    <>
      <Menubar />
      <div className="mainbox">
        {quizData.length > 0 && currentQuestionIndex < quizData.length ? (
          <div className="box">
            <h1>{currentQuestionIndex + 1}. {quizData[currentQuestionIndex].problem}</h1>
            <div className="option">
              {['option1', 'option2', 'option3', 'option4'].map((optionKey, index) => (
                <div key={index}>
                  <input
                    type="radio"
                    id={optionKey}
                    name="options" // Add the name attribute with the same value for all options
                    value={optionKey}
                    checked={selectedOption === quizData[currentQuestionIndex][optionKey]}
                    onChange={() => handleOptionSelect(optionKey)}
                  />
                  <label htmlFor={optionKey}>{quizData[currentQuestionIndex][optionKey]}</label>
                </div>
              ))}
            </div>
            <div className="action">
              <button className="btn1" onClick={handlePreviousQuestion}>&larr;  Back</button>
              <button className="btn2" onClick={handleNextQuestion}>Next  &rarr;</button>
            </div>
          </div>
        ) : (
          <div className="result">
            <h1>Quiz Completed!</h1>
            <p>Your Score: {score}</p>
            <button className="btn3" onClick={handleRestartQuiz}>
            Restart Test
          </button>
          </div>
        )}
      </div>
    </>
  );
}

export default Home;
