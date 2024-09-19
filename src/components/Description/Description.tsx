import {FC} from 'react'
import {Title, Description} from "./Description.styled.js";

interface DescriptionProps {
    title: string,
    description: string,
}

const DescriptionComponent: FC<DescriptionProps> = ({title, description}) => {
    return <>
        <Title>{title}</Title>
        <Description>{description}</Description>
    </>
}

export default DescriptionComponent