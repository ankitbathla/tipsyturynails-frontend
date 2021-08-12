import styled from "styled-components";
import ArrowNonMob from "../icons/Arrow_Left";
import ArrowMob from "../icons/ARROW_MOB";

const Button = styled.button`
    padding: 0;
    border: none;
    outline: none;
    background-color: transparent;
    cursor: pointer;
    font-family: inherit;
`;
export const StyledArrowMob = styled(ArrowMob)`
    transform: rotate(180deg);
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        display: none;
    }
`;
export const StyledArrowNonMob = styled(ArrowNonMob)`
    display: none;
    color: white;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        display: block;
    }
`;
export const StyledImageSlideShow = styled.div`
    position: relative;
    margin: 0 auto;
    width: 100%;
    overflow: hidden;
    padding: 0;
`;
export const StyledDiv = styled.div`
    background-image: url(${(props) => props.backgroundImage});
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
`;
export const ContentWrapper = styled.a`
    display: inline-block;
    vertical-align: middle;
    width: 100%;
    position: relative;
    padding-top: 27%;
`;
export const SlideWrp = styled.div``;

export const Slider = styled.div`
    white-space: nowrap;
    height: 100%;
    transform: translateX(${(props) => props.translateValue}px);
    transition: ${(props) =>
        props.stopAnimation ? "none" : "transform ease-out 0.3s"};
`;

export const styledButton = styled(Button)`
    stroke: "#fff";
`;

export const ArrowWrp = styled(styledButton)`
    width: 3rem;
    height: 3rem;
    border: 0rem;
    border-radius: 50em;
    z-index: 1;
    cursor: pointer;
    background-color: "#000";
    box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.23);
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const ArrowLeftWrp = styled(ArrowWrp)`
    left: 0;
    box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.23);
`;

export const ArrowRightWrp = styled(ArrowWrp)`
    right: 0;
    transform: translateY(-50%) rotate(180deg);
`;
