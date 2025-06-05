import React, {useState} from 'react';
import Menu from '../Menu/Menu';
import Question from '../Question/Question';
import questions from '../../mock/questions.json';

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const handleStart = () => {
    setStarted(true);
    setCurrentQuestion(0);
  };

  return (
    <div>
      {!started ? (
        <Menu onStart={handleStart} />
      ) : (
        <Question mock={questions[currentQuestion]} />
      )}
    </div>
  );
};

export default Quiz;
