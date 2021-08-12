import styled from "styled-components";

export const DetailsPageWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;
export const DetailsContainer = styled.div`
    padding: 1rem;
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: stretch;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        flex-direction: row;
    }
`;
export const ImageContainer = styled.div`
    flex: 1;
    border-bottom: 2px solid #333;
    padding: 1rem;
    display: flex;
    align-items: center;
    @media (min-width: ${({ theme }) => theme.BreakPoints.tablet}) {
        border-right: 2px solid #333;
        border-bottom: unset;
    }
`;
export const InfoContainer = styled.div`
    flex: 1;
    padding: 1rem;
    display: flex;
    flex-direction: column;
`;

export const InfoHeading = styled.div`
    font-weight: 600;
    align-self: center;
    font-size: 1.3rem;
`;
export const InfoContent = styled.div`
    font-size: 1rem;
    font-weight: 300;
    padding: 1.3rem;
    color: #333;
`;
export const Price = styled.div`
    font-size: 1.2rem;
    font-weight: 500;
    color: #444;
    padding: 1.3rem;
`;
export const BookNowBtnContainer = styled.div`
    padding: 1rem;
    flex: 1;
    margin: 2rem;
    cursor: pointer;
    color: #ffffff;
    box-shadow: 5px 0px 5px #333;
    background-color: darkgreen;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const BookNow = styled.div``;

export const ReviewContainer = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    padding: 1rem;
`;
export const ReviewHeadingContainer = styled.div`
    padding: 1rem;
    flex: 1;
    font-weight: 600;
    color: #666;
    display: flex;
    align-items: center;
    flex-direction: row;
    font-size: 1.3rem;
`;
export const ReviewHeading = styled.div`
    border-right: 1px solid #333;
    padding-right: 0.5rem;
`;
export const WriteReviewContainer = styled.div`
    display: flex;
    cursor: pointer;
    align-items: center;
`;
export const AddReview = styled.div`
    font-size: 1rem;
    margin-left: 1rem;
`;
