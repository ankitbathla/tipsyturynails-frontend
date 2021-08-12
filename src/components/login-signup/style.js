import styled from "styled-components";
import Cross from "../icons/cross";

export const LoginContainer = styled.div`
    position: absolute;
    top: 20rem;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 3000;
    width: max-content;
    background-color: #fffafa;
    box-shadow: 1rem 0px 1rem #666;
`;
export const LoginWrapper = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`;

export const LoginHeader = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
`;
export const LoginBtn = styled.div`
    flex: 1;
    padding: 0.5rem;
    cursor: pointer;
    color: ${({ login }) => (login ? "darkgreen" : "darkred")};
    border-bottom: 5px solid ${({ login }) => (login ? "darkgreen" : "#666")};
`;
export const SignUpBtn = styled.div`
    flex: 1;
    padding: 0.5rem;
    cursor: pointer;
    color: ${({ login }) => (!login ? "darkgreen" : "darkred")};
    border-bottom: 5px solid ${({ login }) => (!login ? "darkgreen" : "#666")};
`;
export const CrossContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
`;
export const CrossIcon = styled(Cross)``;

export const LoginFormContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const ModalInputField = styled.div`
    display: flex;
    align-items: center;
    padding: 1rem;
    justify-content: space-evenly;
`;
export const ModalLabel = styled.div`
    padding-right: 1rem;
    font-size: 1rem;
    flex: 0.3;
    font-weight: 600;
`;
export const Input = styled.input`
    background-color: #fff;
    border-radius: 3px;
    flex: 1;
    align-self: flex-start;
    border: 1px solid ${({ validate }) => (validate ? "darkred" : "#dcdcdc")};
    box-shadow: inset 0 2px 2px 0 rgb(0 0 0 / 5%);
    color: #666;
    font-size: inherit;
    height: 2rem;
    outline: none;
`;
export const LoginSubmit = styled.div`
    padding: 1rem;
    align-self: center;
    background-color: #666;
    color: #ffff;
    cursor: pointer;
    font-weight: 600;
    box-shadow: inset 0 2px 2px 0 rgb(0 0 0 / 5%);
`;
export const ErrorHandler = styled.div`
    display: flex;
    padding: 1rem;
    font-weight: 500;
    font-size: 1.2rem;
    justify-content: center;
    color: darkred;
`;
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
export const Redirect = styled.div`
    color: darkblue;
    padding: 0.5rem;
    font-weight: 600;
`;
