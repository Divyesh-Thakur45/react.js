import React from 'react'
import Signin from './Signin'
import About from './About'

const PrivatePage = () => {
    const isShow = localStorage.getItem("token")
    console.log(isShow)
    if (!isShow) {
        return <Signin />
    } else {
        return <About />
    }
}

export default PrivatePage