// Imports
// React Imports
import React, { useContext } from 'react';
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import { Button, FormControl, InputLabel, Select } from '@material-ui/core';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
// Functional Component Imports
import ApiURLContext from '../functionalComponent/ApiUrlContext';
import { fetchQuestions } from '../functionalComponent/ApiUtilization';

// Options definations
// Const to define options for selection of number of questions
const noOfQuestions : number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50];
// Const to define options for selection of category
const category = [
  { value: 0, label: 'Any Category',},
  { value: 27, label: 'Animals',},
  { value: 25, label: 'Art',},
  { value: 26, label: 'Celebrities',},
  { value: 16, label: 'Entertainment: Board Games',},
  { value: 10, label: 'Entertainment: Books',},
  { value: 32, label: 'Entertainment: Cartoon & Animations',},
  { value: 29, label: 'Entertainment: Comics',},
  { value: 11, label: 'Entertainment: Film',},
  { value: 31, label: 'Entertainment: Japanise Anime & Manga',},
  { value: 12, label: 'Entertainment: Music',},
  { value: 13, label: 'Entertainment: Musical & Theatre',},
  { value: 14, label: 'Entertainment: Television',},
  { value: 15, label: 'Entertainment: Video Games',},
  { value: 9, label: 'General Knowledge',},
  { value: 22, label: 'Geography',},
  { value: 23, label: 'History',},
  { value: 20, label: 'Mythology',},
  { value: 24, label: 'Politics',},
  { value: 17, label: 'Science & Nature',},
  { value: 18, label: 'Science: Computers',},
  { value: 30, label: 'Science: Gadgets',},
  { value: 19, label: 'Science: Mathematics',},
  { value: 21, label: 'Sports',},
  { value: 28, label: 'Vehicles',},
];
// Const to define options for selection of difficulty
const difficulty = [
  { value: "", label: 'Any Difficulty',},
  { value: "easy", label: 'Easy',},
  { value: "medium", label: 'Medium',},
  { value: "hard", label: 'Hard',},
];
// Define data type props
type Props = {
    recieveNumberOfQuestions: any;
    recieveCategory: any;
    recieveDifficulty: any;
    recieveCheckLoading: any;
    recieveCheckGameOver: any;
    recieveCheckQuestions: any;
    recieveCheckScore : any;
    recieveCheckUserAnswers: any;
    recieveCheckNumber: any;
  }
// useStyles for stying material UI components
const useStyles = makeStyles((theme) => ({
  startButton: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  }
}));

// StartQuiz component Function
export const StartQuiz1 : React.FC<Props> = ({ 
                                                recieveNumberOfQuestions, 
                                                recieveCategory,
                                                recieveDifficulty,
                                                recieveCheckLoading,
                                                recieveCheckGameOver,
                                                recieveCheckQuestions,
                                                recieveCheckScore,
                                                recieveCheckUserAnswers,
                                                recieveCheckNumber,
                                            }) => {
    // useStyles for stying material UI component
    const classes = useStyles();
    // const for useContext for apiUrl
    const context = useContext(ApiURLContext);
    const contextValues = Object.values(context);
    const url:any = contextValues[0];
    // Function to run on click of start quiz
    const startQuiz = async() => {
        recieveCheckLoading(true);
        recieveCheckGameOver(false);
        const newQuestions = await fetchQuestions(url)
        recieveCheckQuestions(newQuestions);
        recieveCheckScore(0);
        recieveCheckUserAnswers([]);
        recieveCheckNumber(0);
        recieveCheckLoading(false);
      };
    // Function return
    return (
        // Overall Component
        <div className="startQuizContainer">
            {/* Select Option for Number of questions */}
            <div><p>Options Will only be Available if you are connected to Internet</p></div>
            <div><p>You can still play the game with previous Questions.</p></div>
            <div>
                <FormControl variant="outlined" className="formControl" disabled>
                <InputLabel htmlFor="numberOfQuestions">Number of Questions</InputLabel>
                <Select native label="Number of Questions" onChange={(e)=>recieveNumberOfQuestions(Number(e.target.value))}>
                    <option aria-label="None" value=""/>
                    {noOfQuestions.map((option) => (<option key={option} value={+option}>{option}</option>))}
                </Select>
                </FormControl>
            </div>
            {/* Select Option for Catagery of questions*/}
            <div>
                <FormControl variant="outlined" className="formControl" disabled>
                <InputLabel htmlFor="category">Category</InputLabel>
                <Select native label="Category" onChange={(e)=>recieveCategory(Number(e.target.value))}>
                    <option aria-label="None" value="" />
                    {category.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
                </Select>
                </FormControl>
            </div>
            {/* Select Option for Difficulty of questions */}
            <div>
                <FormControl variant="outlined" className="formControl" disabled>
                <InputLabel htmlFor="difficulty">Difficulty</InputLabel>
                <Select native label="Difficulty">
                    <option aria-label="None" value="" />
                    {difficulty.map((option) => (<option key={option.value} value={option.value}>{option.label}</option>))}
                </Select>
                </FormControl>
            </div>
            {/* Select Option for Type of questions (disabled) */}
            <div>
                <FormControl variant="outlined" className="formControl" disabled>
                <InputLabel htmlFor="type">Type</InputLabel>
                <Select native label="Type">
                    <option  value="Multiple Choice" label="Multiple Choice"/>
                </Select>
                </FormControl>
            </div>
            {/* Button to Start the Quiz */}
            <div>
                <Button
                    variant="contained"
                    className={classes.startButton}
                    endIcon={<KeyboardArrowRightIcon />}
                    onClick={startQuiz}
                >
                    Start Quiz
                </Button>
            </div>
        </div>
    );
}