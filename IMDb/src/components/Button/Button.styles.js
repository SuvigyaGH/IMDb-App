import styled from "styled-components";

export const Wrapper = styled.button`

    display: block;
    background: var(--darkGrey);
    width: 25%;
    min-width: 200px;
    height: 60px;
    border-radius: 30px;
    color: var(--white);
    margin: 20px auto;
    border: 0;
    font-size: var(--fontBig);
    outline: none;
    transition: all 0.3s;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }

`;