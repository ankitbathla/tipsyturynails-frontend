/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AccountContext } from "./AccountProvider";
const ReviewContext = React.createContext({
    showReviewForm: () => {},
    hideReviewForm: () => {},
});

const ReviewProvider = (props) => {
    const [comments, setComments] = useState([]);
    const [yourReview, setYourReview] = useState("");
    const { showLoginModal } = useContext(AccountContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                await getAllComment();
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);
    const [ReviewForm, setReview] = useState({
        show: false,
        hide: true,
    });
    const [reviewData, setReviewData] = useState({
        comment: "",
    });
    let [rating, setRating] = useState(-1);

    const getAllComment = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            const details = JSON.parse(localStorage.getItem("showDetails"));
            const userId = user?.data?.userId;
            const service = details?.name;

            const res = await axios.get(
                `${process.env.REACT_APP_URL}/comments`
            );
            if (res) {
                setComments(res?.data?.data);
                const filterReview = res?.data?.data?.filter(
                    (item) => item.userid === userId && item.service === service
                );
                if (filterReview?.length === 1) {
                    setReviewData({
                        ...reviewData,
                        comment: filterReview[0].comment,
                    });
                    setRating(filterReview[0].rating - 1);
                } else {
                    setReviewData({
                        ...reviewData,
                        comment: "",
                    });
                    setRating(-1);
                }
                setYourReview(filterReview);
            }
        } catch (err) {
            console.log(err);
        }
    };
    const showReviewForm = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user && !user?.authToken) {
            showLoginModal();
        } else {
            setReview({
                ...ReviewForm,
                show: true,
                hide: false,
            });
        }
    };
    const hideReviewForm = () => {
        setReview({
            ...ReviewForm,
            hide: true,
            show: false,
        });
    };
    const handleEditSubmit = async () => {
        try {
            const id = parseInt(yourReview[0].id);
            const Rating = rating + 1;
            const comment = reviewData.comment;
            const request = {
                id: id,
                comment: comment,
                rating: Rating,
            };
            const res = await axios.put(
                `${process.env.REACT_APP_URL}/comments`,
                request
            );
            if (res) {
                hideReviewForm();
                await getAllComment();
            }
        } catch (err) {}
    };
    const handleReview = async () => {
        try {
            const user = JSON.parse(localStorage.getItem("user"));
            const details = JSON.parse(localStorage.getItem("showDetails"));
            console.log(reviewData.comment, "com");
            const request = {
                userId: parseInt(user.data.userId),
                username: user.data.username,
                rating: parseInt(rating) + 1,
                service: details.name,
                comment: reviewData.comment,
            };
            console.log(request, "req");
            const res = await axios.post(
                `${process.env.REACT_APP_URL}/comments`,
                request
            );
            if (res) {
                await getAllComment();
                hideReviewForm();
            }
        } catch (err) {}
    };
    return (
        <ReviewContext.Provider
            value={{
                ReviewForm,
                showReviewForm,
                hideReviewForm,
                rating,
                setRating,
                reviewData,
                handleReview,
                setReviewData,
                comments,
                getAllComment,
                yourReview,
                handleEditSubmit,
            }}
        >
            {props.children}
        </ReviewContext.Provider>
    );
};
export { ReviewContext, ReviewProvider };
