import React from "react";
import {
    FooterContainer,
    ContactUs,
    QuickLinks,
    SpecialDiscount,
    DiscountHeading,
    ModalInputField,
    ModalLabel,
    Input,
    QuickLinksHeading,
    ContactUsHeading,
    PhoneNo,
    SocialIcons,
    CopyRight,
    FooterWrapper,
} from "./style";
const Footer = () => {
    return (
        <FooterWrapper>
            <FooterContainer>
                <SpecialDiscount>
                    <DiscountHeading>
                        Get Your Special Discount in your inbox
                    </DiscountHeading>
                    <ModalInputField>
                        <span
                            className=" fa fa-envelope fa-lg"
                            style={{ paddingRight: "5px", color: "#fff" }}
                        ></span>
                        <Input />
                        <ModalLabel>Send</ModalLabel>
                    </ModalInputField>
                </SpecialDiscount>
                <QuickLinks>
                    <QuickLinksHeading>Tipsy Turvy Nails</QuickLinksHeading>
                    <SocialIcons>
                        <a
                            className="btn btn-social-icon btn-facebook"
                            href="http://www.facebook.com/profile.php?id="
                        >
                            <i className="fa fa-facebook"></i>
                        </a>
                        <a
                            className="btn btn-social-icon btn-linkedin"
                            href="http://www.linkedin.com/in/"
                        >
                            <i className="fa fa-linkedin"></i>
                        </a>
                        <a
                            className="btn btn-social-icon btn-instagram"
                            href="http://twitter.com/"
                        >
                            <i className="fa fa-instagram"></i>
                        </a>
                        <a
                            className="btn btn-social-icon btn-google"
                            href="http://youtube.com/"
                        >
                            <i className="fa fa-youtube"></i>
                        </a>
                    </SocialIcons>
                </QuickLinks>
                <ContactUs>
                    <ContactUsHeading>
                        <span
                            className=" fa fa-phone fa-lg"
                            style={{ marginRight: "10px" }}
                        ></span>
                        FOR ANY HELP YOU MAY CALL US AT
                    </ContactUsHeading>
                    <PhoneNo>+91- 9871761501</PhoneNo>
                    <PhoneNo>
                        (Monday-Saturday, 8AM to 10PM and Sunday, 10AM to 7PM)
                    </PhoneNo>
                </ContactUs>
            </FooterContainer>
            <CopyRight>© Copyright 2021 Bathla Corporation</CopyRight>
        </FooterWrapper>
    );
};
export default Footer;
