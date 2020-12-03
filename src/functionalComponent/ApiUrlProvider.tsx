// Imports
// React Imports
import React, { useState, useEffect } from 'react';
// ApiUrlContext import
import ApiUrlContext from './ApiUrlContext';

// Define Data type Props
type Props = {
    numberOfQuestions: number;
    category: number;
    difficulty: string;
}

// function export
export const ApiUrlProvider : React.FC<Props> = ({ children, numberOfQuestions, category, difficulty}) => {
    // usestate for defining initial Url to fetch api data
    const [apiUrl, setApiUrl] = useState('https://opentdb.com/api.php?amount=10&type=multiple');
    // use effect function to genrate api based upon 
    useEffect(() => {
        if (numberOfQuestions === 0 && category === 0 && difficulty==="") {
            setApiUrl('https://opentdb.com/api.php?amount=10&type=multiple')
        } else if(numberOfQuestions === 0 && category === 0 && difficulty!=="") {
            setApiUrl(`https://opentdb.com/api.php?amount=10&difficulty=${difficulty}&type=multiple`)
        }else if(numberOfQuestions === 0 && category !== 0 && difficulty===""){
            setApiUrl(`https://opentdb.com/api.php?amount=10&category=${category}&type=multiple`)
        }else if(numberOfQuestions === 0 && category !== 0 && difficulty!==""){
            setApiUrl(`https://opentdb.com/api.php?amount=10&category=${category}&difficulty=${difficulty}&type=multiple`)
        }else if (numberOfQuestions !== 0 && category === 0 && difficulty==="") {
            setApiUrl(`https://opentdb.com/api.php?amount=${numberOfQuestions}&type=multiple`)
        } else if(numberOfQuestions !== 0 && category === 0 && difficulty!=="") {
            setApiUrl(`https://opentdb.com/api.php?amount=${numberOfQuestions}&difficulty=${difficulty}&type=multiple`)
        }else if(numberOfQuestions !== 0 && category !== 0 && difficulty===""){
            setApiUrl(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&type=multiple`)
        }else{
            setApiUrl(`https://opentdb.com/api.php?amount=${numberOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple`)
        }
    }, [numberOfQuestions, category,difficulty])


    return (
        <ApiUrlContext.Provider
            value = {{ apiUrl,
                      }}>
                {children}
        </ApiUrlContext.Provider>
    )} 