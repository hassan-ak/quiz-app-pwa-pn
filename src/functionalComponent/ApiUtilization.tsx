// Function to shuffle the array of answers fetched from the api
export const shuffleArray = (array: any[]) => 
    [...array].sort(() => Math.random() - 0.5)

// Function to fetch data from Api
export const fetchQuestions = async (Url: string) => {
    if (navigator.onLine) {
        try {
            const endpoint = Url;
            const data = await(await fetch(endpoint)).json();
            return data.results.map((question: Question) => (
                {
                    ...question,
                    answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
                }
            ))
        } catch (error) {
            let data1 = localStorage.getItem('fetchedData');
            if (data1 !== null) {
                let data = JSON.parse(data1)
                return data.results.map((question: Question) => (
                    {
                        ...question,
                        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
                    }
                ))
            }
        }
    } else {
        let data1 = localStorage.getItem('fetchedData');
            if (data1 !== null) {
                let data = JSON.parse(data1)
                return data.results.map((question: Question) => (
                    {
                        ...question,
                        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
                    }
                ))
            }
    }
    
    
};

// Type defination of Question
export type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

// Type defination of QuestionState
export type QuestionState = Question & { answers: string[] };

// Type defination of AnswerObject
export type AnswerObject = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
} 