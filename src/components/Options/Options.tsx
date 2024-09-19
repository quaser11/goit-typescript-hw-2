import  {FC} from 'react'
import {OptionsContainer, Button} from "./Options.styled.js";
import {IFeedback} from '../../types'

interface IOptionsProps {
    options: IFeedback;
    UpdateFeedback: (feedback:keyof IFeedback) => void;
    reset:() => void;
    totalFeedback: number;
}

const Options: FC<IOptionsProps> = ({options, UpdateFeedback, reset, totalFeedback}) => {

    const data = Object.keys(options) as Array<keyof IFeedback>;

    return (
        <OptionsContainer>
            {
                data.map((option:keyof IFeedback, index:number) => (
                    <Button type='button' key={index} onClick={() => UpdateFeedback(option)}>{option}</Button>
                ))
            }
            {totalFeedback > 0 && <Button type='button' onClick={reset}>reset</Button>}
        </OptionsContainer>
    )
}

export default Options