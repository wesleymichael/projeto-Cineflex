import styled from "styled-components";
import {ORANGE, GRAY } from "../constants/colors";

export default function Header(){
    return (
        <NavContainer>CINEFLEX</NavContainer>
    );
}

const NavContainer = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${GRAY};
    color: ${ORANGE};
    font-family: 'Roboto', sans-serif;
    font-size: 34px;
    position: fixed;
    top: 0;
`;