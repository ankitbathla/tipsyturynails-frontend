import "./App.css";
import { ThemeProvider } from "styled-components";
import Header from "./components/header/Header";
import { Theme } from "./components/theme";
import { HeaderProvider } from "./Providers/headerProvider";
import { AccountProvider } from "./Providers/AccountProvider";
import Footer from "./components/Footer/footer";
import { Route, Switch, HashRouter } from "react-router-dom";
import Main from "./components/Main/Main";
import DetailsPage from "./components/detailsPage/details";
import { BookNowProvider } from "./Providers/BookNowProvider";
import { ReviewProvider } from "./Providers/ReviewsProvider";
import BookNow from "./components/BookNow/BookNow";

function App() {
    return (
        <HashRouter>
            <ThemeProvider theme={Theme}>
                <HeaderProvider>
                    <BookNowProvider>
                        <AccountProvider>
                            <ReviewProvider>
                                <div className="App">
                                    <Header />
                                    <BookNow />
                                    <div style={{ flex: 2 }}>
                                        <Switch>
                                            <Route
                                                exact
                                                path="/"
                                                component={() => <Main />}
                                            />
                                            <Route
                                                exact
                                                path="/details/:name"
                                                component={() => (
                                                    <DetailsPage />
                                                )}
                                            />
                                        </Switch>
                                    </div>
                                    <Footer />
                                </div>
                            </ReviewProvider>
                        </AccountProvider>
                    </BookNowProvider>
                </HeaderProvider>
            </ThemeProvider>
        </HashRouter>
    );
}

export default App;
