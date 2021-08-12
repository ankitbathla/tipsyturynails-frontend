import styled from "styled-components";

export const UserReviewContainer = styled.div`
    display: flex;
    padding: 1rem;
    flex-direction: column;
`;
export const UserReviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: 1rem;
    border-bottom: 0.5px solid #666;
`;
export const ReviewHeaderContainer = styled.div`
    display: flex;
    align-items: center;
`;
export const ReviewUser = styled.div`
    font-size: 1.3rem;
    color: #666;
    font-weight: 600;
    padding: 1rem;
`;
export const StarContainer = styled.div``;

export const CommentsWrapper = styled.div`
    padding: 1rem;
    font-size: 1rem;
    color: #666;
`;

export const AddReviewContainer = styled.div`
    display: flex;
    flex-direction: column;
    margin: 1rem;
    justify-content: center;
    border: 1px solid #333;
`;

export const RatingContainer = styled.div`
    display: flex;
    padding: 1rem;
    color: #333;
    align-items: center;
`;
export const RatingHeading = styled.div`
    font-size: 1.1rem;
`;
export const Star = styled.div`
    padding: 0.3rem;
    color: ${({ value }) => (value ? "orange" : "grey")};
    cursor: pointer;
`;
export const CommentContainer = styled.div`
    display: flex;
    flex: 1;
    padding: 1rem;
`;
export const Input = styled.textarea`
    padding: 1rem;
    flex: 1;
    background-color: #fff;
    border-radius: 3px;
    align-self: flex-start;
    box-shadow: inset 0 2px 2px 0 rgb(0 0 0 / 5%);
    color: #666;
    font-size: inherit;
    outline: none;
`;
export const Button = styled.div`
    display: flex;
    padding: 1rem;
    align-items: center;
`;

export const SubmitReviewContainer = styled.div`
    padding: 1rem;
    width: max-content;
    background-color: darkgreen;
    box-shadow: 2px 2px 2px #333;
    color: #fff;
    margin-right: 1rem;
    cursor: pointer;
    font-weight: 600;
`;
export const CancelReviewContainer = styled.div`
    padding: 1rem;
    background-color: #666;
    box-shadow: 2px 2px 2px #333;
    color: #fff;
    font-weight: 600;
    cursor: pointer;
`;
