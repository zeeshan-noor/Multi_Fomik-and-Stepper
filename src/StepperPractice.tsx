import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Form1 from './Form1';
import Form2 from './Form2';
import Form3 from './Form3';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    button: {
        marginRight: theme.spacing(1),
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
}));

function getSteps() {
    return ['Form 1', 'Form 2', 'Form 3']
}

function getStepContent(step:number,handleNext:()=>void) {

    switch (step) {
        case 0:
           return <Form1 handleNext={handleNext}/>

        case 1:
            return <Form2 handleNext={handleNext}/>

        case 2:
            return <Form3 handleNext={handleNext}/>

        default:
            break;
    }

}

function StepperPractice() {

    const classes = useStyles();
    const [activeStep,setActiveStep]=React.useState(0);
    const step = getSteps();

    const handleNext =()=>{
        return setActiveStep(activeStep+1)
    }

    const handleReset =()=>{
        return setActiveStep(0)
    }

    return (
        <div className={classes.root}>
            <Stepper activeStep={activeStep} alternativeLabel>
                {step.map((label)=>(
                    <Step key={label}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
            <div>
                {activeStep===step.length?(
                   <div>
                       <Typography className={classes.instructions}>All Steps are Completed</Typography>
                        <Button variant='contained' color='primary' onClick={handleReset}>Reset</Button>
                   </div>
                ):(
                    <div>
                        <Typography className={classes.instructions}>{getStepContent(activeStep,handleNext)}</Typography>
     
                    </div>
                )}

            </div>
        </div>
    )
}

export default StepperPractice
