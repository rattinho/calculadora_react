import styled from "styled-components";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    background-color: lightgrey;

    display: flex;
    align-items: center;
    justify-content: center;
    
`

const Content = styled.div`
    background-color: white;
    width: 40%;
    min-height: 100px;
    border-radius: 10px 10px 0px 0px;
    box-shadow: 0px 0px 10px #999999;
`

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
`

export { Container, Content }