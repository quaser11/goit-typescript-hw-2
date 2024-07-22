import {OptionsContainer, Button} from "./Options.styled.js";

const Options = ({options, UpdateFeedback, reset, totalFeedback}) => {

    const data = Object.keys(options);

    return (
        <OptionsContainer>
            {
                data.map((option, index) => (
                    <Button type='button' key={index} onClick={() => UpdateFeedback(option)}>{option}</Button>
                ))
            }
            {totalFeedback > 0 && <Button type='button' onClick={reset}>reset</Button>}
        </OptionsContainer>
    )
}

export default Options