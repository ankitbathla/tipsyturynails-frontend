import axios from "axios";
import React, { useState, useRef } from "react";
import moment from "moment";

const BookNowContext = React.createContext({
    openBookNowModal: () => {},
});

const BookNowProvider = (props) => {
    const [bookNowModal, setBookNowModal] = useState({
        show: false,
        hide: true,
    });
    const [loader, setLoader] = useState(false);
    const [bookNowForm, handleBookNowForm] = useState({
        mobile: "",
        date: moment(),
        time: "",
        index: "",
    });
    const [BookNow, setBookNowError] = useState({
        error: "",
        success: false,
    });

    const openBookNowModal = () => {
        setBookNowModal({
            ...bookNowModal,
            show: true,
            hide: false,
        });
    };
    const closeBookNowModal = () => {
        setBookNowModal({
            ...bookNowModal,
            show: false,
            hide: true,
        });
        handleBookNowForm({
            ...bookNowForm,
            mobile: "",
            date: moment(),
            time: "",
            index: "",
        });
    };

    const [slideValue, updateSlideValue] = useState(0);
    const index = useRef(0);
    const sliderEle = useRef(null);

    const slide = (width) => {
        updateSlideValue(width);
    };
    const onSlideWidth = () => {
        const slider = sliderEle.current;
        if (!slider) return 0;
        const { children } = slider;
        const childWidth = children[0].offsetWidth;
        return childWidth;
    };

    const handleLeftClick = () => {
        index.current -= 1;

        const width = onSlideWidth() * index.current;
        slide(-width);
    };
    const handleRightClick = () => {
        index.current += 1;

        const width = onSlideWidth() * index.current;
        slide(-width);
    };

    const SubmitBookNow = async () => {
        try {
            setLoader(true);
            const user = JSON.parse(localStorage.getItem("user"));

            const mobile = bookNowForm.mobile;
            const date = bookNowForm.date.format("DD-MM-YYYY");
            const request = {
                userId: user.data.userId,
                mobile: mobile,
                date: date,
                time: bookNowForm.time,
            };
            console.log(request);
            const res = await axios.post(
                `${process.env.REACT_APP_URL}/bookNow`,
                request
            );
            if (res) {
                setLoader(false);
                setBookNowError({
                    ...BookNow,
                    success: true,
                });
                setTimeout(() => {
                    setBookNowError({
                        ...BookNow,
                        success: false,
                    });
                }, 2000);
            }
            setTimeout(() => {
                closeBookNowModal();
            }, 2500);
        } catch (err) {
            setLoader(false);
            setBookNowError({
                ...BookNow,
                error: err?.response?.data?.error?.message,
            });
        }
    };
    return (
        <BookNowContext.Provider
            value={{
                openBookNowModal,
                bookNowModal,
                closeBookNowModal,
                bookNowForm,
                handleBookNowForm,
                SubmitBookNow,
                slideValue,
                handleLeftClick,
                handleRightClick,
                sliderEle,
                index,
                BookNow,
                loader,
            }}
        >
            {props.children}
        </BookNowContext.Provider>
    );
};
export { BookNowContext, BookNowProvider };
