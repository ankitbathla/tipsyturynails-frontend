import React, { useContext } from "react";
import {
    DetailsContainer,
    ImageContainer,
    InfoContainer,
    InfoHeading,
    BookNowBtnContainer,
    BookNow,
    InfoContent,
    ReviewContainer,
    DetailsPageWrapper,
    ReviewHeading,
    ReviewHeadingContainer,
    WriteReviewContainer,
    AddReview,
    Price,
} from "./style";
import ImageOne from "./d.jpeg";
import ImageTwo from "./e.png";
import ImageThree from "./f.jpg";
import ImageSliderUI from "../ImageCarousel/ImageSlideUi";
import Reviews from "../Reviews/Review";
import { ReviewContext } from "../../Providers/ReviewsProvider";
import { AccountContext } from "../../Providers/AccountProvider";
const DetailsPage = () => {
    const { showReviewForm, comments, yourReview } = useContext(ReviewContext);
    const { showLoginModal } = useContext(AccountContext);
    const images = [
        {
            imageUrl: ImageTwo,
        },
        {
            imageUrl: ImageOne,
        },
        {
            imageUrl: ImageThree,
        },
    ];
    const Type = JSON.parse(localStorage.getItem("showDetails"));
    const reviews = comments?.filter((item) => item?.service === Type?.name);

    const handleBookNowBtn = () => {
        showLoginModal();
    };
    return (
        <DetailsPageWrapper>
            <DetailsContainer>
                <ImageContainer>
                    <div style={{ flex: "1" }}>
                        <ImageSliderUI images={images} />
                    </div>
                </ImageContainer>
                <InfoContainer>
                    <InfoHeading>{Type?.name}</InfoHeading>
                    <InfoContent>{Type?.content}</InfoContent>
                    <Price>Price per Hand: ₹ 800</Price>
                    <BookNowBtnContainer onClick={handleBookNowBtn}>
                        <BookNow>Book Now</BookNow>
                    </BookNowBtnContainer>
                </InfoContainer>
            </DetailsContainer>
            <ReviewContainer>
                <ReviewHeadingContainer>
                    <ReviewHeading>Client Reviews</ReviewHeading>
                    <WriteReviewContainer>
                        <AddReview onClick={showReviewForm}>
                            {" "}
                            {yourReview.length === 0
                                ? "+ ADD Review"
                                : "+ Edit Review"}
                        </AddReview>
                    </WriteReviewContainer>
                </ReviewHeadingContainer>
                <Reviews comments={reviews} />
            </ReviewContainer>
        </DetailsPageWrapper>
    );
};

export default DetailsPage;
