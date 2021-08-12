import React, { Fragment, useContext } from "react";
import DatePicker from "react-datetime";
import moment from "moment";
import Spinner from "../spinner/spinner";
import "react-datetime/css/react-datetime.css";
import {
    BookNowContainer,
    BookNowWrapper,
    CrossContainer,
    CrossIcon,
    BookNowHeader,
    BookNowHeading,
    BookNowFormContainer,
    ModalInputField,
    Input,
    ModalLabel,
    BookNowApp,
    Submit,
    TimeContainer,
    TimeHeading,
    ArrowWrp,
    ArrowRightWrp,
    Arrow,
    SlotsContainer,
    ContentWrapper,
    Slide,
    ErrorHandler,
    SuccessHandler,
    SuccessMsg,
} from "./style";
import { BookNowContext } from "../../Providers/BookNowProvider";
const BookNow = () => {
    const {
        bookNowModal,
        closeBookNowModal,
        bookNowForm,
        handleBookNowForm,
        SubmitBookNow,
        slideValue,
        sliderEle,
        handleLeftClick,
        handleRightClick,
        index,
        BookNow,
        loader,
    } = useContext(BookNowContext);
    var yesterday = moment().subtract(1, "day");
    var valid = function (current) {
        return current.isAfter(yesterday);
    };
    const time = [
        {
            time: "12.00AM - 1.00PM",
        },
        {
            time: "1.30PM - 2.30PM",
        },
        {
            time: "3.00PM - 4.00PM",
        },
        {
            time: "4.30PM - 5.30PM",
        },
        {
            time: "6.00PM - 7.00PM",
        },
    ];

    const onMobileChange = (e) => {
        handleBookNowForm({
            ...bookNowForm,
            mobile: e.target.value,
        });
    };
    const onDateChange = (val) => {
        handleBookNowForm({
            ...bookNowForm,
            date: val,
        });
    };
    const onTimeChange = (val, index) => {
        handleBookNowForm({
            ...bookNowForm,
            time: val,
            index: index,
        });
    };
    const BookAppointmentHelper = () => {
        let timer;
        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                SubmitBookNow();
            });
        };
    };
    const BookAppointment = BookAppointmentHelper();
    return (
        <>
            {bookNowModal.show && (
                <BookNowContainer>
                    <BookNowWrapper>
                        <CrossContainer onClick={closeBookNowModal}>
                            <CrossIcon />
                        </CrossContainer>
                        <BookNowHeader>
                            <BookNowHeading>
                                Book your Appointment
                            </BookNowHeading>
                        </BookNowHeader>
                        <BookNowFormContainer>
                            <ModalInputField>
                                <ModalLabel>Mobile</ModalLabel>
                                <Input type="tel" onChange={onMobileChange} />
                            </ModalInputField>
                            <ModalInputField>
                                <ModalLabel>Date-</ModalLabel>
                                <DatePicker
                                    inputProps={{
                                        style: {
                                            backgroundColor: "#fff",
                                            borderRadius: "3px",
                                            outline: "none",
                                            height: "2rem",
                                            fontSize: "inherit",
                                            color: "#666",
                                            alignSelf: "flex-start",
                                            boxShadow:
                                                "inset 0 2px 2px 0 rgb(0 0 0 / 5%)",
                                            border: "1px solid #dcdcdc",
                                        },
                                    }}
                                    dateFormat="DD-MM-YYYY"
                                    timeFormat={false}
                                    isValidDate={valid}
                                    value={bookNowForm.date}
                                    onChange={(val) => onDateChange(val)}
                                />
                            </ModalInputField>
                            <TimeContainer>
                                <Arrow>
                                    {index.current !== 0 && (
                                        <ArrowWrp onClick={handleLeftClick}>
                                            <span
                                                className="fa fa-arrow-left fa-lg"
                                                style={{ color: "#333" }}
                                            />
                                        </ArrowWrp>
                                    )}
                                    <TimeHeading>Select Time -</TimeHeading>

                                    {index.current !== time.length - 1 && (
                                        <ArrowRightWrp
                                            onClick={handleRightClick}
                                        >
                                            <span
                                                className="fa fa-arrow-right fa-lg"
                                                style={{ color: "#333" }}
                                            />
                                        </ArrowRightWrp>
                                    )}
                                </Arrow>
                                <SlotsContainer>
                                    <div>
                                        <div
                                            slide={slideValue}
                                            ref={sliderEle}
                                            style={{
                                                whiteSpace: "nowrap",
                                                height: "100%",
                                                transform: `translateX(${slideValue}px)`,
                                                transition:
                                                    "transform ease-out 0.3s",
                                            }}
                                        >
                                            {time.map((item, index) => {
                                                return (
                                                    <Fragment key={index}>
                                                        <ContentWrapper
                                                            onClick={() =>
                                                                onTimeChange(
                                                                    item.time,
                                                                    index
                                                                )
                                                            }
                                                            selected={
                                                                index ===
                                                                bookNowForm.index
                                                            }
                                                        >
                                                            <Slide>
                                                                {item.time}
                                                            </Slide>
                                                        </ContentWrapper>
                                                    </Fragment>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </SlotsContainer>
                            </TimeContainer>

                            <BookNowApp onClick={BookAppointment}>
                                <Submit>Submit</Submit>
                            </BookNowApp>
                            {loader && <Spinner />}
                            {BookNow.error && (
                                <ErrorHandler>{BookNow.error}</ErrorHandler>
                            )}
                        </BookNowFormContainer>
                    </BookNowWrapper>
                </BookNowContainer>
            )}
            {BookNow.success && (
                <SuccessHandler>
                    <CrossContainer>
                        <CrossIcon />
                    </CrossContainer>
                    <SuccessMsg>Appointment booked!!!</SuccessMsg>
                </SuccessHandler>
            )}
        </>
    );
};
export default BookNow;
