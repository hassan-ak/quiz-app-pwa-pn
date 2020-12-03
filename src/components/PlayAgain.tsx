// Imports
// React Imports
import React from 'react';
// Material UI Imports
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import ReplayIcon from '@material-ui/icons/Replay';
// Web animations Imports
import useWebAnimations, {flipInX} from "@wellyshen/use-web-animations";

// Dimy data to display
const score = 1;
const totalQuestions = 10;

// useStyles for stying material UI components
const useStyles = makeStyles((theme) => ({
  startButton: {
    background: 'linear-gradient(45deg, #FF8E53 30%, #FE6B8B 90%)',
  }
}));

// StartQuiz component Function
export const PlayAgain = () => {
    // useStyles for stying material UI component
    const classes = useStyles();
    // useWebAnimations
    const { ref } = useWebAnimations({...flipInX});
    // Function return
    return (
        // Overall Component
        <div className="playAgainContainer">
            <h2>Thank you for taking the Quiz</h2>
            {/* Display Final Score */}
            <div className="finalScore">
                You Final Score was : <strong ref={ref}>{score} / {totalQuestions}</strong>  
            </div>
            <h2>Hope to See you Again</h2>
            {/* Button to Play Quiz */}
            <div>
                <Button
                    variant="contained"
                    className={classes.startButton}
                    endIcon={<ReplayIcon/>}
                >
                    Play Again
                </Button>
            </div>
        </div>
    );
}