import React, { useContext } from "react";
import {
    UserReviewContainer,
    UserReviewWrapper,
    ReviewHeaderContainer,
    ReviewUser,
    StarContainer,
    CommentsWrapper,
} from "./style";
import AddReview from "./AddReview";
import { ReviewContext } from "../../Providers/ReviewsProvider";
import Spinner from "../spinner/spinner";
const Reviews = (props) => {
    const { comments } = props;
    const { ReviewForm } = useContext(ReviewContext);
    return (
        <>
            {ReviewForm.show && <AddReview />}
            <UserReviewContainer>
                {comments.length > 0 ? (
                    comments.map((item, index) => {
                        return (
                            <UserReviewWrapper key={index}>
                                <ReviewHeaderContainer>
                                    <ReviewUser>{item?.username}</ReviewUser>
                                    <StarContainer>
                                        {Array.from(
                                            { length: item.rating },
                                            (_, index) => index + 1
                                        ).map((_, index) => {
                                            return (
                                                <span
                                                    key={index}
                                                    className="fa fa-star fa-lg"
                                                    style={{ color: "orange" }}
                                                />
                                            );
                                        })}
                                    </StarContainer>
                                </ReviewHeaderContainer>
                                <CommentsWrapper>
                                    {item.comment}
                                </CommentsWrapper>
                            </UserReviewWrapper>
                        );
                    })
                ) : comments.length === 0 ? (
                    <div
                        style={{
                            display: "flex",
                            flex: "1",
                            justifyContent: "center",
                            fontWeight: 600,
                            fontSize: "1.7rem",
                            color: "#666",
                        }}
                    >
                        no Reviews!!
                    </div>
                ) : (
                    <Spinner />
                )}
            </UserReviewContainer>
        </>
    );
};

export default Reviews;
