import React, { useContext } from "react";
import {
    AddReviewContainer,
    RatingContainer,
    RatingHeading,
    Star,
    CommentContainer,
    Input,
    SubmitReviewContainer,
    CancelReviewContainer,
    Button,
} from "./style";
import { ReviewContext } from "../../Providers/ReviewsProvider";
const AddReview = () => {
    const {
        hideReviewForm,
        handleReview,
        rating,
        setRating,
        setReviewData,
        reviewData,
        yourReview,
        handleEditSubmit,
    } = useContext(ReviewContext);

    const AddRating = (index) => {
        setRating(index);
    };
    const handleComment = (e) => {
        const res = e.target.value;
        setReviewData({
            ...reviewData,
            comment: res,
        });
    };
    const addReviewHelper = () => {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                handleReview();
            });
        };
    };
    const editReviewHelper = () => {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                handleEditSubmit();
            });
        };
    };

    const AddReview = addReviewHelper();
    const EditReview = editReviewHelper();
    return (
        <AddReviewContainer>
            <RatingContainer>
                <RatingHeading>Add Rating -</RatingHeading>
                {Array.from({ length: 5 }, (_, index) => index + 1).map(
                    (_, index) => {
                        return (
                            <Star
                                key={index}
                                onClick={() => AddRating(index)}
                                value={index <= rating}
                            >
                                <span className="fa fa-star fa-lg"></span>
                            </Star>
                        );
                    }
                )}
            </RatingContainer>
            <CommentContainer>
                <Input
                    onChange={handleComment}
                    defaultValue={reviewData.comment ? reviewData.comment : ""}
                />
            </CommentContainer>
            <Button>
                {yourReview?.length === 0 ? (
                    <SubmitReviewContainer onClick={AddReview}>
                        Submit
                    </SubmitReviewContainer>
                ) : (
                    <SubmitReviewContainer onClick={EditReview}>
                        Edit
                    </SubmitReviewContainer>
                )}
                <CancelReviewContainer onClick={hideReviewForm}>
                    Cancel
                </CancelReviewContainer>
            </Button>
        </AddReviewContainer>
    );
};
export default AddReview;
