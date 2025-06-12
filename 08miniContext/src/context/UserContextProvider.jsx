import React from "react";
import UserContext from "./UserContext";


// Part-2 (Setting up the UserContextProvider to provide the access of all the componenets)

const UserContextProvider = ({children}) => {
    const [user, setUser] = React.useState(null);
    return(
        <UserContext.Provider value={{user, setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider;