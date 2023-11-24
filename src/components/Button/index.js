import { ButtonContainer } from './style.js'

const Button = ({label, onClick}) => {
    return (
        <ButtonContainer onClick={onClick}>
            {label}
        </ButtonContainer>
    );
}

export default Button;
