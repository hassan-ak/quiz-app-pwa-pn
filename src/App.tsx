// Imports
// React Imports
import React , {useState} from 'react';
// Components Imports
import { Header } from './components/Header';
import { StartQuiz } from './components/StartQuiz';
import { Loading } from './components/Loading';
import { Score } from './components/Score';
import { QuestionsCard } from './components/QuestionsCard';
import { Next } from './components/Next';
import { EndGame } from './components/EndGame';
import { PlayAgain } from './components/PlayAgain';
import Footer from './components/Footer';
// Functional Component Imports
import { ApiUrlProvider } from './functionalComponent/ApiUrlProvider';
import { QuestionState } from './functionalComponent/ApiUtilization';
import { AnswerObject } from './functionalComponent/ApiUtilization';
// Styles Imports
import './App.css';

// App Function
function App() {
  
  // useState definations for different constants
  // for selected number of questions
  const [selectedNumberOfQuestions, setSelectedNumberOfQuestions] = useState(10)
  // for catagery of questions
  const [selectedCategory, setSelectedCategory] = useState(0)
  // for difficulty of selected questions
  const [selectedDifficulty, setSelectedDifficulty] = useState("")
  // for checking if data is loading or loaded
  const [loading, setLoading] = useState(false);
  // for checking if game is over or not
  const [gameOver, setGameOver] = useState(true);
  // for fetched questions
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  // for score
  const [score, setScore] = useState(0);
  // for user answer
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  // for next question number
  const [number, setNumber] = useState(0);
  // for ending game
  const [endGame, setEndGame] = useState(false);

  // Function Definations
  // Functions to define functions for recieving data from components
  async function numberOfQuestions(value:number) {
    setSelectedNumberOfQuestions(value) 
  }
  async function category(value:number) {
    setSelectedCategory(value)
  }
  async function difficulty(value:string) {
    setSelectedDifficulty(value)
  }
  async function checkLoading(value:boolean) {
    setLoading(value)
  }
  async function checkGameOver(value:boolean) {
    setGameOver(value)
  }
  async function checkQuestions(value:QuestionState[]) {
    setQuestions(value)
  }
  async function checkScore(value:number) {
    setScore(value)
  }
  async function checkUserAnswers(value:AnswerObject[]) {
    setUserAnswers(value)
  }
  async function checkNumber(value:number) {
    setNumber(value)
  }
  // for checking user answer
  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!gameOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
        if (correct) setScore(prev => prev + 1)
          const answerObject = {
          question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer
      }
      setUserAnswers(prev => [...prev, answerObject])
    }
  };
  // for setting next question number
  const nextQuestion = async() => {
    setNumber(number + 1);
  };
  // For ending the game
  const checkEndGame = async()=>{
    setEndGame(true);
  }
  // for playing again
  const playagin = async()=>{
    setGameOver(true);
    setEndGame(false);
  }
  // return of App
  return (
    <div className="container">
      <ApiUrlProvider
        numberOfQuestions={selectedNumberOfQuestions}
        category={selectedCategory}
        difficulty={selectedDifficulty}
      >
        <Header/>
        {gameOver ? (
          <StartQuiz
            recieveNumberOfQuestions={numberOfQuestions}
            recieveCategory={category}
            recieveDifficulty={difficulty}
            recieveCheckLoading={checkLoading}
            recieveCheckGameOver={checkGameOver}
            recieveCheckQuestions={checkQuestions}
            recieveCheckScore={checkScore}
            recieveCheckUserAnswers={checkUserAnswers}
            recieveCheckNumber={checkNumber}
          />
        ): null }
        {loading ? (
          <Loading/>
        ): null }
        {!gameOver && !loading && !endGame? (
          <Score setScore={score}/>
        ): null }
        {!loading && !gameOver && !endGame? (
          <QuestionsCard
            questionNum={number + 1}
            totalQuestions={selectedNumberOfQuestions}
            question={questions[number].question}
            category = {questions[number].category}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined }
            callback={checkAnswer}
          />
        ) : null }
        {!gameOver && !loading && userAnswers.length === number + 1 && number !== selectedNumberOfQuestions - 1 ? (
          <Next callback={nextQuestion}/>
        ): null }
        { userAnswers.length === number + 1 && number === selectedNumberOfQuestions - 1 && !gameOver && !loading &&!endGame?  (
          <EndGame callback={checkEndGame}/>
        ): null }
        {endGame ? (
          <PlayAgain
            callback={playagin}
            setScore={score}
            totalQuestions={selectedNumberOfQuestions}
          />
        ) : null }
        <Footer/>
      </ApiUrlProvider>
    </div>
  );
}

export default App;