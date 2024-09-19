import {useState, useEffect, FC} from 'react'
import DescriptionComponent from "./Description/Description.js";
import Options from "./Options/Options.js";
import Feedback from "./Feedback/Feedback.js";
import Notification from "./Notification/Notification.js";
import {IFeedback} from '../types'
import css from '../styles.module.css'


const title:string = 'Sip Happens Café'
const description:string = 'Please leave your feedback about our service by selecting one of the options below.'

const App:FC = () => {
    const [feedback, setFeedback] = useState<IFeedback>(() => {
        const feedbackOptions:IFeedback | null  = JSON.parse(localStorage.getItem('feedback') || "")

        if(feedbackOptions !== null){
            return feedbackOptions;
        }

        return {
            good: 0,
            bad:0,
            neutral:0,
        }
    })

    const totalFeedback: number = feedback.good + feedback.bad + feedback.neutral
    const positiveFeedback: number = Math.round((feedback.good / totalFeedback) * 100)

    useEffect(() => {
        localStorage.setItem('feedback', JSON.stringify(feedback))
    }, [feedback])

    const UpdateFeedback = (feedbackType:keyof IFeedback): void => {
        setFeedback({...feedback, [feedbackType]: feedback[feedbackType] + 1})
    }

    const resetFeedback = () => {
        setFeedback({good:0,bad:0,neutral:0,})
    }
    return (
        <div className={css.container}>
            <DescriptionComponent title={title} description={description} />
            <Options options={feedback} UpdateFeedback={UpdateFeedback} reset={resetFeedback} totalFeedback={totalFeedback}/>
            {totalFeedback > 0 ? <Feedback feedback={feedback} totalFeedback={totalFeedback} positiveFeedback={positiveFeedback}/> : <Notification><div>
                No feedback yet
            </div></Notification>}
        </div>
    )
}

export default App
