import React from 'react'

const PrivacyPage = ({children}) => {
    const isAuth = localStorage.getItem("Token");

    if(!isAuth) {
        alert("Please login first");
        window.location.href = "/login"
    }
    else{
        return children 
    }
}

export default PrivacyPage
