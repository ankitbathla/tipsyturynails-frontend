import React, { useContext } from "react";
import { List } from "./list";

import {
    ServicesContainer,
    ServicesList,
    ServiceImg,
    ServiceContent,
    ServiceTitle,
    ServiceDes,
} from "./style";
import { Link } from "react-router-dom";
import { ReviewContext } from "../../Providers/ReviewsProvider";
const Services = () => {
    const { getAllComment, hideReviewForm } = useContext(ReviewContext);
    const handleService = (item) => {
        localStorage.setItem("showDetails", JSON.stringify(item));
        getAllComment();
        hideReviewForm();
    };
    return (
        <div id="services">
            <ServicesContainer>
                {List &&
                    List.map((item, index) => {
                        return (
                            <Link
                                to={`details/${item.url}`}
                                style={{ textDecoration: "none" }}
                                key={index}
                            >
                                <ServicesList
                                    onClick={() => handleService(item)}
                                >
                                    <ServiceImg
                                        img={item.ImageUrl}
                                    ></ServiceImg>
                                    <ServiceContent>
                                        <ServiceTitle>{item.name}</ServiceTitle>
                                        <ServiceDes>{item.title}</ServiceDes>
                                    </ServiceContent>
                                </ServicesList>
                            </Link>
                        );
                    })}
            </ServicesContainer>
        </div>
    );
};

export default Services;
