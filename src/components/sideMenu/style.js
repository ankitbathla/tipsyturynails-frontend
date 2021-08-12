import styled from "styled-components";
import Cross from "../icons/cross";
export const SideMenuContainer = styled.div`
    display: flex;
    position: fixed;
    left: 0;
    top: 0;
    flex-direction: column;
    flex: 1;
    padding: 1rem;
    width: 50%;
    height: 100vh;
    z-index: 2000;
    background-color: #fff;
    box-shadow: 0px 0px 1rem #333;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        display: none;
    }
`;

export const MenuWrapper = styled.div`
    display: flex;
    align-content: flex-end;
    flex-direction: column;
`;
export const MenuItem = styled.div`
    padding: 1rem;
    font-size: 1rem;
    font-weight: 600;
    color: #800000;
    cursor: pointer;
`;
export const BookNowBtn = styled.div`
    padding: 1rem;
    color: #fffafa;
    display: flex;
    background-color: #666;
    justify-content: center;
    box-shadow: 1rem 0px auto black;
`;

export const BookNow = styled.div`
    flex: 1;
`;
export const CrossContainer = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
`;
export const CrossIcon = styled(Cross)``;
