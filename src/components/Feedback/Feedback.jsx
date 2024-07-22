import PropTypes from "prop-types";
import {FeedbackContainer, FeedbackType} from "./Feedback.styled.js";

const Feedback = ({feedback, totalFeedback, positiveFeedback}) => {

    const data = Object.keys(feedback);
    return <FeedbackContainer>
        {data.map((item, index) =>(
            <FeedbackType key={index}>{item}:{feedback[item]}</FeedbackType>
        ))}
        <FeedbackType>total:{totalFeedback}</FeedbackType>
        <FeedbackType>Positive:{positiveFeedback}%</FeedbackType>
    </FeedbackContainer>;
}

Feedback.propTypes = PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
})

export default Feedback