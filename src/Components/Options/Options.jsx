import PropTypes from "prop-types";
import {OptionsContainer, Button} from "./Options.styled.js";

const Options = (props) => {

    const options = Object.keys(props.options);

    return (
        <OptionsContainer>
            {
                options.map((option, index) => (
                    <Button type='button' key={index} onClick={() => props.UpdateFeedback(option)}>{option}</Button>
                ))
            }
            <Button type='button' onClick={props.reset}>reset</Button>
        </OptionsContainer>
    )
}

Options.propTypes = PropTypes.shape({
    good: PropTypes.number,
    neutral: PropTypes.number,
    bad: PropTypes.number,
})

export default Options