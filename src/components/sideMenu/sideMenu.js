import React, { useContext } from "react";
import {
    SideMenuContainer,
    MenuWrapper,
    MenuItem,
    BookNowBtn,
    CrossIcon,
    CrossContainer,
    BookNow,
} from "./style";
import { Link } from "react-router-dom";
import { headerContext } from "../../Providers/headerProvider";
import { AccountContext } from "../../Providers/AccountProvider";
const SideMenu = () => {
    const { handleToggleMenu } = useContext(headerContext);
    const { showLoginModal } = useContext(AccountContext);
    const handleBookNow = () => {
        handleToggleMenu();
        showLoginModal();
    };
    return (
        <SideMenuContainer>
            <CrossContainer onClick={handleToggleMenu}>
                <CrossIcon />
            </CrossContainer>
            <MenuWrapper>
                <Link
                    to="/"
                    style={{ textDecoration: "none" }}
                    onClick={handleToggleMenu}
                >
                    <MenuItem>Home</MenuItem>
                </Link>
                <MenuItem>About Us</MenuItem>
                <MenuItem>
                    <BookNowBtn onClick={handleBookNow}>
                        <BookNow>Book Now</BookNow>
                    </BookNowBtn>
                </MenuItem>
            </MenuWrapper>
        </SideMenuContainer>
    );
};

export default SideMenu;
