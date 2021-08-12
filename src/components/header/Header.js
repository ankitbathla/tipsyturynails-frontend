import React, { useContext } from "react";
import { headerContext } from "../../Providers/headerProvider";
import {
    HeaderContainer,
    HeaderWrapper,
    LogoWrapper,
    MenuWrapper,
    MenuItem,
    BookNowBtn,
    Line,
    NavIcon,
} from "./style";
import SideMenu from "../sideMenu/sideMenu";
import Login from "../login-signup/login";
import { Link } from "react-router-dom";
import { AccountContext } from "../../Providers/AccountProvider";

const Header = () => {
    const { showToggleMenu, handleToggleMenu } = useContext(headerContext);
    const { openModal, showLoginModal } = useContext(AccountContext);
    return (
        <>
            {showToggleMenu && <SideMenu />}
            {openModal && <Login />}
            <HeaderContainer>
                <HeaderWrapper>
                    <Link to="/">
                        <LogoWrapper />
                    </Link>
                    <MenuWrapper>
                        <Link to="/" style={{ textDecoration: "none" }}>
                            <MenuItem
                                style={{ borderRight: "1px solid lightgrey" }}
                            >
                                Home
                            </MenuItem>
                        </Link>
                        <MenuItem
                            style={{ borderRight: "1px solid lightgrey" }}
                        >
                            About Us
                        </MenuItem>
                        <MenuItem onClick={showLoginModal}>
                            <BookNowBtn>Book Now</BookNowBtn>
                        </MenuItem>
                    </MenuWrapper>
                    <NavIcon onClick={handleToggleMenu}>
                        <Line open={showToggleMenu} />
                        <Line open={showToggleMenu} />
                        <Line open={showToggleMenu} />
                    </NavIcon>
                </HeaderWrapper>
            </HeaderContainer>
        </>
    );
};

export default Header;
