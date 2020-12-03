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
    console.log(questions)
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
    // return of App
  return (
    <div className="container">
      <ApiUrlProvider
        numberOfQuestions={selectedNumberOfQuestions}
        category={selectedCategory}
        difficulty={selectedDifficulty}
      >
        <Header/>
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
        <Loading/>
        <Score/>
        <QuestionsCard/>
        <Next/>
        <EndGame/>
        <PlayAgain/>
        <Footer/>
      </ApiUrlProvider>
    </div>
  );
}

export default App;