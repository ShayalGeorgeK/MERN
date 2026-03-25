import { Children, createContext } from "react";

//create context
export const UserContext = createContext();

//povider component
export const UserProvider = ({ children }) => {

    // Static data
    const role = "admin" ;

    return(
        // providing static value globally
        <UserContext.Provider value={{role}}>
            {children}
        </UserContext.Provider>
    );
};