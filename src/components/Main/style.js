import styled from "styled-components";

import Cross from "../icons/cross";
export const SuccessHandler = styled.div`
    display: flex;
    padding: 1.3rem;
    flex-direction: column;
    align-items: center;
    font-weight: 500;
    box-shadow: 3px 3px 3px #3333;
    font-size: 1.2rem;
    border: 3px solid #3333;
    z-index: 3000;
    position: fixed;
    bottom: 0;
    right: 0;
    margin: 1rem;
    background-color: #ffff;
`;
export const SuccessMsg = styled.div`
    color: darkgreen;
    margin-right: 0.5rem;
    padding: 1rem;
`;
export const CrossContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
`;
export const CrossIcon = styled(Cross)``;
