import React, { useState, useContext } from "react";
import axios from "axios";
import { BookNowContext } from "./BookNowProvider";
const AccountContext = React.createContext({
    showLoginModal: () => {},
    hideLoginModal: () => {},
    SignUp: () => {},
});
const AccountProvider = (props) => {
    const { openBookNowModal } = useContext(BookNowContext);
    const [openModal, setOpenModal] = useState(false);
    const [error, setError] = useState({
        login: "",
        signUp: "",
    });
    const [loader, setLoader] = useState(false);
    const [loginActive, setLoginActive] = useState(true);

    const [validate, checkValidate] = useState({
        name: false,
        email: false,
        password: false,
        signUp: false,
    });
    const [auth, checkAuth] = useState({
        signUp: false,
        login: false,
    });
    const [loginData, handleLogin] = useState({
        email: "",
        password: "",
    });
    const [signUpData, handleSignUpData] = useState({
        name: "",
        email: "",
        password: "",
    });

    const showLoginModal = () => {
        const user = JSON.parse(localStorage.getItem("user"));
        if (!user && !user?.authToken) {
            setOpenModal(true);
        } else {
            openBookNowModal();
        }
    };
    const hideLoginModal = () => {
        setOpenModal(false);
        setError({
            ...error,
            login: "",
            signUp: "",
        });
        setLoginActive(false);
        checkValidate({
            name: false,
            email: false,
            password: false,
        });
    };
    const openLoginTab = () => {
        setLoginActive(true);
    };
    const closeLoginTab = () => {
        setLoginActive(false);
        setError({
            ...error,
            login: "",
            signUp: "",
        });
    };
    const SignUp = async (username, email, password) => {
        if (
            validate.password ||
            validate.email ||
            validate.name ||
            username === "" ||
            email === "" ||
            password === ""
        ) {
            setError({
                ...error,
                signUp: "Please fill the fields according to guidelines",
            });
        } else {
            setError({
                ...error,
                signUp: "",
            });
            setLoader(true);
            try {
                const request = {
                    username: username,
                    password: password,
                    email: email,
                };
                const response = await axios.post(
                    `${process.env.REACT_APP_URL}/signUp`,
                    request,
                    {
                        headers: {
                            "Access-Control-Allow-Origin": "*",
                        },
                    }
                );
                if (response) {
                    setLoader(false);
                    handleSignUpData({
                        ...signUpData,
                        email: "",
                        name: "",
                        password: "",
                    });
                    openLoginTab();
                    checkAuth({
                        ...auth,
                        signUp: true,
                    });

                    setTimeout(() => {
                        checkAuth({
                            ...auth,
                            signUp: false,
                        });
                    }, 3000);
                }
            } catch (err) {
                setLoader(false);
                setError({
                    ...error,
                    signUp: err?.response?.data?.error?.message,
                });
            }
        }
    };

    const handleLoginUser = async (email, password) => {
        if (email === "") {
            setError({
                ...error,
                login: "email cannot be empty",
            });
        } else if (password === "") {
            setError({
                ...error,
                login: "password cannot be empty",
            });
        } else {
            setError({
                ...error,
                login: "",
            });
            setLoader(true);
            try {
                const request = {
                    email: email,
                    password: password,
                };

                const res = await axios.post(
                    `${process.env.REACT_APP_URL}/login`,
                    request
                );
                if (res) {
                    localStorage.setItem("user", JSON.stringify(res.data));
                    setLoader(false);
                    handleLogin({
                        ...loginData,
                        email: "",
                        password: "",
                    });
                    checkAuth({
                        ...auth,
                        login: true,
                    });
                    setTimeout(() => {
                        checkAuth({
                            ...auth,
                            login: false,
                        });
                    }, 3000);
                    setTimeout(() => {
                        hideLoginModal();
                    }, 1000);
                }
            } catch (err) {
                setLoader(false);
                setError({
                    ...error,
                    login: err?.response?.data?.error?.message,
                });
            }
        }
    };
    return (
        <AccountContext.Provider
            value={{
                showLoginModal,
                openModal,
                hideLoginModal,
                SignUp,
                error,
                setError,
                validate,
                checkValidate,
                loader,
                openLoginTab,
                closeLoginTab,
                loginActive,
                auth,
                handleLoginUser,
                loginData,
                handleLogin,
                signUpData,
                handleSignUpData,
            }}
        >
            {props.children}
        </AccountContext.Provider>
    );
};

export { AccountProvider, AccountContext };
