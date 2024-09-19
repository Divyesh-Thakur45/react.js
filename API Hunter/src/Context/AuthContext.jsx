import { createContext, useState } from "react";

export const AuthContext = createContext()

function AuthContextProvider({children}) {
    const [login, setLogin] = useState({
        isAuth: false,
        token: null
    })
    const loginUser = (tokenValue) => {
        setLogin({isAuth: true, token: tokenValue})
    }
    const logOutUser = () => {
        setLogin({isAuth: false, token: null})
    }
    return <AuthContext.Provider value={{login, setLogin, loginUser, logOutUser}}>{children}</AuthContext.Provider>
}
export default AuthContextProvider;