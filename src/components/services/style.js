import styled from "styled-components";

export const ServicesContainer = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        flex-direction: row;
    } ;
`;

export const ServicesList = styled.div`
    display: flex;
    flex-direction: column;
    flex: 0.2;
    box-shadow: 0 0 15px 0 rgb(0 0 0 / 18%);
    background-color: #fff;
    border-radius: 8px;
    position: relative;
    min-height: 395px;
    text-decoration: none;
    margin: 20px 10px;
`;

export const ServiceImg = styled.div`
    flex: 1;
    background-image: ${({ img }) => `url(${img})`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
`;
export const ServiceContent = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
`;
export const ServiceTitle = styled.div`
    flex: 0.2;
    align-self: center;
    font-size: 1.3rem;
    padding-top: 1rem;
    font-weight: 600;
`;
export const ServiceDes = styled.div`
    flex: 0.5;
    padding: 1rem;
    align-self: flex-start;
    color: #333;
`;

export const BookNowBtn = styled.div`
    align-self: center;
    padding: 1rem;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
    background-color: darkgreen;
`;
