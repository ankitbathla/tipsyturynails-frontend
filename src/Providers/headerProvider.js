import React, { useState } from "react";

const headerContext = React.createContext({
    handleToggleMenu: () => {},
});
const HeaderProvider = (props) => {
    const [showToggleMenu, setToggleMenu] = useState(false);
    const handleToggleMenu = () => {
        setToggleMenu(!showToggleMenu);
    };
    return (
        <headerContext.Provider value={{ showToggleMenu, handleToggleMenu }}>
            {props.children}
        </headerContext.Provider>
    );
};
export { HeaderProvider, headerContext };
