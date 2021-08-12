import React from "react";
import ImageSliderUI from "../ImageCarousel/ImageSlideUi";
import Services from "../services/service";
import ImageOne from "./a.jpg";
import ImageTwo from "./b.jpg";
import ImageThree from "./c.jpg";
import ImageFour from "./d.png";
const images = [
    {
        imageUrl: ImageOne,
    },
    {
        imageUrl: ImageTwo,
    },
    {
        imageUrl: ImageThree,
    },
    {
        imageUrl: ImageFour,
    },
];

const Main = () => {
    return (
        <>
            <ImageSliderUI images={images} />
            <Services />
        </>
    );
};

export default Main;
