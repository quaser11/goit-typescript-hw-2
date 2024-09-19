import {FC} from "react";
import {FeedbackContainer, FeedbackType} from "./Feedback.styled.js";
import {IFeedback} from "../../types.js";

interface IFeedbackProps {
    feedback: IFeedback;
    totalFeedback: number;
    positiveFeedback: number;
}

const Feedback:FC<IFeedbackProps> = ({feedback, totalFeedback, positiveFeedback}) => {

    const data = Object.keys(feedback) as Array<keyof IFeedback>;
    return <FeedbackContainer>
        {data.map((item:keyof IFeedback, index:number) =>(
            <FeedbackType key={index}>{item}:{feedback[item]}</FeedbackType>
        ))}
        <FeedbackType>total:{totalFeedback}</FeedbackType>
        <FeedbackType>Positive:{positiveFeedback}%</FeedbackType>
    </FeedbackContainer>;
}

export default Feedback