import React, { useContext } from "react";
import { AccountContext } from "../../Providers/AccountProvider";
import Spinner from "../spinner/spinner";
import {
    LoginContainer,
    LoginWrapper,
    LoginHeader,
    LoginBtn,
    SignUpBtn,
    CrossContainer,
    CrossIcon,
    LoginFormContainer,
    ModalInputField,
    ModalLabel,
    Input,
    LoginSubmit,
    ErrorHandler,
    SuccessHandler,
    SuccessMsg,
} from "./style";
const Login = () => {
    const {
        hideLoginModal,
        SignUp,
        error,
        validate,
        checkValidate,
        loader,
        openLoginTab,
        closeLoginTab,
        loginActive,
        handleLoginUser,
        loginData,
        handleLogin,
        signUpData,
        handleSignUpData,
        auth,
    } = useContext(AccountContext);

    const handleEmailChange = (e) => {
        const regex =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        const res = e.target.value;
        if (!regex.test(signUpData.email)) {
            checkValidate({
                ...validate,
                email: true,
            });
        } else {
            checkValidate({
                ...validate,
                email: false,
            });
        }
        handleSignUpData({
            ...signUpData,
            email: res,
        });
    };
    const handleNameChange = (e) => {
        const res = e.target.value;
        if (res.length < 3) {
            checkValidate({
                ...validate,
                name: true,
            });
        } else {
            checkValidate({
                ...validate,
                name: false,
            });
        }
        handleSignUpData({
            ...signUpData,
            name: res,
        });
    };
    const handlePasswordChange = (e) => {
        const res = e.target.value;
        if (res.length < 8) {
            checkValidate({
                ...validate,
                password: true,
            });
        } else {
            checkValidate({
                ...validate,
                password: false,
            });
        }
        handleSignUpData({
            ...signUpData,
            password: res,
        });
    };
    const handleSignUp = () => {
        let timer;

        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                SignUp(signUpData.name, signUpData.email, signUpData.password);
            }, 200);
        };
    };
    const LoginUser = () => {
        let timer;

        return function () {
            clearTimeout(timer);
            timer = setTimeout(() => {
                handleLoginUser(loginData.email, loginData.password);
            }, 200);
        };
    };

    const handleLoginEmail = (e) => {
        const res = e.target.value;
        handleLogin({
            ...loginData,
            email: res,
        });
    };
    const handleLoginPassword = (e) => {
        const res = e.target.value;
        handleLogin({
            ...loginData,
            password: res,
        });
    };
    const signUp = handleSignUp();
    const login = LoginUser();
    return (
        <>
            <LoginContainer>
                <LoginWrapper>
                    <CrossContainer onClick={hideLoginModal}>
                        <CrossIcon />
                    </CrossContainer>
                    <LoginHeader>
                        <LoginBtn login={loginActive} onClick={openLoginTab}>
                            Login
                        </LoginBtn>
                        <SignUpBtn login={loginActive} onClick={closeLoginTab}>
                            SignUp
                        </SignUpBtn>
                    </LoginHeader>
                    {loginActive && (
                        <LoginFormContainer>
                            <ModalInputField>
                                <ModalLabel>Email</ModalLabel>
                                <Input
                                    type="email"
                                    onChange={handleLoginEmail}
                                />
                            </ModalInputField>
                            <ModalInputField>
                                <ModalLabel>Password</ModalLabel>
                                <Input
                                    type="password"
                                    onChange={handleLoginPassword}
                                />
                            </ModalInputField>
                            <LoginSubmit onClick={login}>Login</LoginSubmit>
                            {loader && <Spinner />}
                            {error.login && (
                                <ErrorHandler>{error.login}</ErrorHandler>
                            )}
                        </LoginFormContainer>
                    )}
                    {!loginActive && (
                        <LoginFormContainer>
                            <ModalInputField>
                                <ModalLabel>Name</ModalLabel>
                                <Input
                                    onChange={handleNameChange}
                                    validate={validate.name}
                                />
                            </ModalInputField>
                            <ModalInputField>
                                <ModalLabel>Email</ModalLabel>
                                <Input
                                    type="email"
                                    onChange={handleEmailChange}
                                    validate={validate.email}
                                />
                            </ModalInputField>
                            <ModalInputField>
                                <ModalLabel>Password</ModalLabel>
                                <Input
                                    type="password"
                                    onChange={handlePasswordChange}
                                    validate={validate.password}
                                />
                            </ModalInputField>
                            <LoginSubmit onClick={signUp}>SignUp</LoginSubmit>
                            {loader && <Spinner />}
                            {error.signUp && (
                                <ErrorHandler>{error.signUp}</ErrorHandler>
                            )}
                        </LoginFormContainer>
                    )}
                </LoginWrapper>
            </LoginContainer>
            {auth.signUp && (
                <SuccessHandler>
                    <CrossContainer>
                        <CrossIcon />
                    </CrossContainer>
                    <SuccessMsg>SuccessFull signed in!!!</SuccessMsg>
                </SuccessHandler>
            )}
            {auth.login && (
                <SuccessHandler>
                    {console.log(auth.login)}
                    <CrossContainer>
                        <CrossIcon />
                    </CrossContainer>
                    <SuccessMsg>SuccessFull logged in!!!</SuccessMsg>
                </SuccessHandler>
            )}
        </>
    );
};
export default Login;
