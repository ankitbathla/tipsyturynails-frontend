/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useRef, useEffect, Fragment } from "react";
import getAngle from "./getAngle";
import {
    StyledImageSlideShow,
    SlideWrp,
    Slider,
    ArrowLeftWrp,
    StyledArrowMob,
    ArrowRightWrp,
    StyledArrowNonMob,
    ContentWrapper,
    StyledDiv,
} from "./style";
const DEFAULT_DELAY_MS = 3000;

const ImageSliderUI = (props) => {
    const { images } = props;
    const [touchObject, updateTouchObject] = useState({
        x1: 0,
        x2: 0,
        y1: 0,
        y2: 0,
    });
    const [translateValue, updateTranslateValue] = useState(0);
    const sliderEle = useRef(null);
    const index = useRef(0);
    const action = useRef(true);
    const interval = useRef();
    const stopAnimation = useRef(false);

    const slide = (width) => {
        updateTranslateValue(width);
    };

    const oneSlideWidth = () => {
        const slider = sliderEle.current;
        if (!slider) return 0;
        const { children } = slider;
        const childWidth = children[0].offsetWidth;
        return childWidth;
    };

    const animationStoped = () => {
        action.current = true;
        stopAnimation.current = true; // to stop animation

        if (index.current === images.length + 1) {
            index.current = 1;
            const width = -oneSlideWidth() * index.current;
            slide(width);
        }

        if (index.current === 0) {
            index.current = images.length;
            const width = -oneSlideWidth() * index.current;
            slide(width);
        }
    };

    const goToPrevSlide = () => {
        if (!action.current) return;
        action.current = false;

        stopAnimation.current = false;

        index.current -= 1;
        if (index.current < 0) {
            index.current += images.length;
        }
        const width = oneSlideWidth() * index.current;
        slide(-width);
    };

    const goToNextSlide = () => {
        if (!action.current) return;
        action.current = false;

        stopAnimation.current = false;

        index.current += 1;
        const width = oneSlideWidth() * index.current;
        slide(-width);
    };

    const autoScroll = () => {
        clearInterval(interval.current);
        interval.current = setInterval(() => {
            goToNextSlide();
        }, DEFAULT_DELAY_MS);
    };
    const stopAutoScroll = () => {
        clearInterval(interval.current);
    };

    const handleClickLeft = () => {
        autoScroll(); // to clear and start auto scroll
        goToPrevSlide();
    };

    const handleClickRight = () => {
        autoScroll(); // to clear and start auto scroll
        goToNextSlide();
    };

    const handleTouchStart = (event) => {
        const x1 = event.touches[0].clientX;
        const y1 = event.touches[0].clientY;
        updateTouchObject({ ...touchObject, ...{ x1, y1 } });
    };

    const handleTouchEnd = (event) => {
        const x2 = event.changedTouches[0].clientX;
        const y2 = event.changedTouches[0].clientY;
        const { x1 = 0, y1 = 0 } = touchObject;
        const dx = x2 - x1;
        const dy = y2 - y1;

        const angle = getAngle(dx, dy);

        if ((angle >= 0 && angle <= 45) || (angle >= 315 && angle <= 360)) {
            goToPrevSlide();
        } else if (angle >= 135 && angle <= 225) {
            goToNextSlide();
        }
        updateTouchObject({
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 0,
        });
    };
    const handleMouseOver = () => {
        stopAutoScroll();
    };
    const handleMouseLeave = () => {
        autoScroll();
    };
    // To start slide from 1st element(infinite scroll)
    useEffect(() => {
        autoScroll();

        return () => {
            clearInterval(interval.current);
        };
    }, []);
    const infiniteImageData = [images[images.length - 1], ...images, images[0]];
    return (
        <div>
            <StyledImageSlideShow>
                <SlideWrp>
                    <ArrowLeftWrp onClick={handleClickLeft}>
                        <StyledArrowNonMob />
                        <StyledArrowMob />
                    </ArrowLeftWrp>
                    <Slider
                        ref={sliderEle}
                        translateValue={translateValue}
                        stopAnimation={stopAnimation.current}
                        onTransitionEnd={animationStoped}
                        onTouchStart={handleTouchStart}
                        onTouchEnd={handleTouchEnd}
                        onMouseOver={handleMouseOver}
                        onMouseLeave={handleMouseLeave}
                    >
                        {infiniteImageData.map((image, i) => {
                            const keyIndex = i;
                            return (
                                <Fragment key={image.imageUrl + keyIndex}>
                                    <ContentWrapper>
                                        <StyledDiv
                                            backgroundImage={image.imageUrl}
                                        />
                                    </ContentWrapper>
                                </Fragment>
                            );
                        })}
                    </Slider>
                    <ArrowRightWrp onClick={handleClickRight}>
                        <StyledArrowNonMob />
                        <StyledArrowMob />
                    </ArrowRightWrp>
                </SlideWrp>
            </StyledImageSlideShow>
        </div>
    );
};
export default ImageSliderUI;
