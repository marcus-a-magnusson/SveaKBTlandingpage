// src/components/Survey.jsx
import { useState } from 'react';
import { surveyQuestions } from './surveyItems';
import Button from './Button';
import Result from './Result';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Survey = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState(Array(5).fill(3)); // default middle
  const [isComplete, setIsComplete] = useState(false);

  const currentQuestion = surveyQuestions[currentIndex];

  const handleSliderChange = (value) => {
    const updated = [...answers];
    updated[currentIndex] = Number(value);
    setAnswers(updated);
  };

  const handleNext = () => {
    if (currentIndex < surveyQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsComplete(true);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const totalScore = answers.reduce((sum, val) => sum + val, 0);

  const handleRestart = () => {
    setAnswers(Array(5).fill(3));
    setCurrentIndex(0);
    setIsComplete(false);
  };

  // Update the return statement:
  if (isComplete) {
    return <Result score={totalScore} onRestart={handleRestart} />;
  }

  return (
    <div className="survey">
      <div className="survey-progress-container">
        <FontAwesomeIcon
          icon={faArrowLeft}
          onClick={handlePrevious}
          className="back-arrow"
          aria-hidden="true"
        />
        <p className="survey-progress">
          {currentIndex + 1} / {surveyQuestions.length}
        </p>
      </div>

      <h2>{currentQuestion.text}</h2>

      <div className="scale-indicator">
        <span>1 - {currentQuestion.minLabel}</span>

        <span className="scale-value">{answers[currentIndex]}</span>

        <span>5 - {currentQuestion.maxLabel}</span>
      </div>
      <div className="range-wrapper">
        <input
          type="range"
          min="1"
          max="5"
          step="1"
          value={answers[currentIndex]}
          onChange={(e) => handleSliderChange(e.target.value)}
          className="survey-slider"
          style={{
            '--percent': `${((answers[currentIndex] - 1) / 4) * 100}%`,
          }}
        />
      </div>
      <Button onClick={handleNext}>
        {currentIndex === surveyQuestions.length - 1
          ? 'Visa resultat'
          : 'Nästa'}
      </Button>
    </div>
  );
};

export default Survey;
