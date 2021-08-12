import styled from "styled-components";
import Cross from "../icons/cross";

export const BookNowContainer = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 3000;
    width: max-content;
    transform: translate(-50%, -50%);
    background-color: #fffafa;
    box-shadow: 1rem 0px 1rem #666;
`;
export const BookNowWrapper = styled.div`
    padding: 0.5rem;
    display: flex;
    flex-direction: column;
`;
export const CrossContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
    cursor: pointer;
`;
export const CrossIcon = styled(Cross)``;

export const BookNowHeader = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    font-size: 1.4rem;
    font-weight: 600;
    border-bottom: 1px solid #666;
`;
export const BookNowHeading = styled.div`
    flex: 1;
    padding: 0.7rem;
    cursor: pointer;
    color: darkgreen;
`;
export const BookNowFormContainer = styled.div`
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
    padding-right: 0.4rem;
    font-size: 1rem;
    flex: 1;
    font-weight: 600;
`;
export const Input = styled.input`
    background-color: #fff;
    border-radius: 3px;
    flex: 1;
    align-self: flex-start;
    border: 1px solid #dcdcdc;
    box-shadow: inset 0 2px 2px 0 rgb(0 0 0 / 5%);
    color: #666;
    font-size: inherit;
    height: 2rem;
    outline: none;
`;
export const BookNowApp = styled.div`
    padding: 0.5rem;
    display: flex;
    align-items: center;
    color: #fff;
    flex: 0.5;
    background-color: #666;
    justify-content: center;
    font-weight: 600;
    cursor: pointer;
`;
export const Submit = styled.div`
    align-self: center;
`;

export const TimeContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;
export const TimeHeading = styled.div`
    align-self: center;
    flex: 1;
    font-size: 1rem;
    font-weight: 600;
`;
export const ContentSlider = styled.div`
    flex: 1;
    overflow: hidden;
    display: flex;
    align-items: center;
    flex-direction: row;
`;
export const Arrow = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;
export const ArrowWrp = styled.div`
    width: 2rem;
    height: 2rem;
    display: flex;
    padding: 0.2rem;
    border-radius: 50%;
    align-items: center;
    z-index: 1;
    cursor: pointer;
    display: flex;
`;
export const ArrowRightWrp = styled(ArrowWrp)`
    margin-left: auto;
`;

export const SlotsContainer = styled.div`
    position: relative;
    width: 100%;
    margin: 0 auto;
    overflow: hidden;
`;
export const ContentWrapper = styled.div`
    display: inline-block;
    vertical-align: middle;
    position: relative;
    width: 50%;
    padding: 1.2rem;
    border: 2px solid ${({ selected }) => (selected ? "red" : "#fff")};
    background-color: yellow;
    color: #333;
    font-weight: 600;
    box-shadow: inset 0 2px 2px 0 rgb(0 0 0 / 5%);
`;
export const Slide = styled.div`
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
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
