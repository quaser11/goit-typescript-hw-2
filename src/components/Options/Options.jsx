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
            {props.totalFeedback > 0&& <Button type='button' onClick={props.reset}>reset</Button>}
        </OptionsContainer>
    )
}

export default Options