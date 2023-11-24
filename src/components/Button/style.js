import styled from "styled-components";

export const ButtonContainer = styled.button`
    padding: 10px;
    border: 1px solid grey;
    cursor: pointer;
    font-size: 24px;
    font-weight: 700;
    flex: 1;
    transition: all 0.2s ease-in-out;

    &:hover{
        opacity:0.4;
    }
`