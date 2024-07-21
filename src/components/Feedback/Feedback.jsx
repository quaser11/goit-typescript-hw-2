import PropTypes from "prop-types";
import {FeedbackContainer, FeedbackType} from "./Feedback.styled.js";

const Feedback = (props) => {

    const feedback = Object.keys(props.feedback);
    return <FeedbackContainer>
        {feedback.map((feedback, index) =>(
            <FeedbackType key={index}>{feedback}:{props.feedback[feedback]}</FeedbackType>
        ))}
        <FeedbackType>total:{props.totalFeedback}</FeedbackType>
        <FeedbackType>Positive:{props.positiveFeedback}%</FeedbackType>
    </FeedbackContainer>;
}

Feedback.propTypes = PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
})

export default Feedback