import styled, { keyframes } from "styled-components";
export const spin = keyframes`
0% {
         -webkit-transform: rotate(0deg);
     }
     100% {
         -webkit-transform: rotate(360deg);
     }
`;
export const LoaderContainer = styled.div`
    display: flex;
    justify-content: center;
`;
export const Loader = styled.div`
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #666;
    width: 2rem;
    height: 2rem;
    animation: ${spin} 2s linear infinite;
`;
