import {useState, useEffect} from 'react'
import DescriptionComponent from "./components/Description/Description.jsx";
import Options from "./components/Options/Options.jsx";
import Feedback from "./components/Feedback/Feedback.jsx";
import css from './styles.module.css'


const title = 'Sip Happens Café'
const description = 'Please leave your feedback about our service by selecting one of the options below.'

const App = () => {
    const [feedback, setFeedback] = useState(() => {
        const feedbackOptions = JSON.parse(localStorage.getItem('feedback'))

        if(feedbackOptions !== null){
            return feedbackOptions;
        }

        return {
            good: 0,
            bad:0,
            neutral:0,
        }
    })
    const [totalFeedback, setTotalFeedback] = useState(0)

    useEffect(() => {
        setTotalFeedback(feedback.good + feedback.bad + feedback.neutral)

        localStorage.setItem('feedback', JSON.stringify(feedback))
    }, [feedback.good, feedback.bad, feedback.neutral])

    const UpdateFeedback = (feedbackType) => {
        setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1})
    }

    const resetFeedback = () => {
        setFeedback({good:0,bad:0,neutral:0,})
    }
    return (
        <div className={css.container}>
            <DescriptionComponent title={title} description={description} />
            <Options options={feedback} UpdateFeedback={UpdateFeedback} reset={resetFeedback} />
            {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback}/> : <p>No feedback yet</p>}
        </div>
    )
}

export default App
