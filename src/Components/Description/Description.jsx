import PropTypes from "prop-types";
import {Title, Description} from "./Description.styled.js";
const DescriptionComponent = (props) => {
    return <>
        <Title>{props.title}</Title>
        <Description>{props.description}</Description>
    </>
}

DescriptionComponent.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
}

export default DescriptionComponent