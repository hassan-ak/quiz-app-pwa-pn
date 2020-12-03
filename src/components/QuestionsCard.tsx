// Imports
// React Imports
import React from 'react';
// Styles Imports
import { ButtonWrapper } from './QuestionCard.styles';

// Question Card Function
export const QuestionsCard = () =>{
    // Dimy data to display
    const questionNum = 1;
    const totalQuestions = 10;
    const question = 'Which city of Pakistan is known as "City of Hockey"?'
    const answers = [
        "Lahore",
        "Karachi",
        "Gojra",
        "Larkana",
    ]
    // Function return
    return (
        // Main div for Question Card
        <div className="cardContainer">
            {/* Display Current Question of total Questions */}
            <p>
                <strong>
                    Question: {questionNum} / {totalQuestions}
                </strong>
            </p>
            {/* Display Question Number */}
            <p dangerouslySetInnerHTML={{ __html: question}} className="question"/>
            {/* Div to map over answers and diaply them in the app */}
            <div>
                {answers.map((answer,i) => (
                    <div className="answers" key={i}>
                        <ButtonWrapper>
                            <button value={answer}>
                                <span dangerouslySetInnerHTML={{ __html: answer }} />
                            </button>
                        </ButtonWrapper>
                    </div>
                ))}
            </div>
        </div>
    )
}