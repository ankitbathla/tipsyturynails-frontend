import styled from "styled-components";
import logo from "./logo2.png";
export const HeaderContainer = styled.div`
    display: flex;
    flex-direction: row;
    position: sticky;
    top: 0;
    z-index: 999;
`;
export const NavIcon = styled.button`
    background: none;
    cursor: pointer;
    border: none;
    outline: none;
    padding-right: auto;
    position: absolute;
    left: 0;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        display: none;
    }
`;
export const Line = styled.div`
    display: block;
    border-radius: 50px;
    width: 25px;
    height: 3px;
    margin: 5px;
    background-color: #800000;
    transition: width 0.4s ease-in-out;
    :nth-child(2) {
        width: ${(props) => (props.open ? "40%" : "70%")};
    }
`;

export const HeaderWrapper = styled.div`
    flex: 1;
    padding: 0.5rem;
    background-color: #ffffff;
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        flex-direction: row;
    }
`;
export const LogoWrapper = styled.div`
    align-content: flex-start;
    background-image: url(${logo});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: 10px;
    padding: 3.4rem;
    width: 2rem;
`;
export const MenuWrapper = styled.div`
    display: none;
    margin-left: auto;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        display: flex;
    }
`;
export const MenuItem = styled.div`
    padding: 1.1rem;
    font-size: 1.3rem;
    font-weight: 600;
    color: #800000;
    cursor: pointer;
`;
export const BookNowBtn = styled.div`
    padding: 1rem;
    color: #ffff;
    background-color: #666;
    box-shadow: 1rem #333;
`;
