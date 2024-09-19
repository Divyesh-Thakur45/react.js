import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { DarkTheme, LightTheme } from '../Redux/actiontype'

const Theme = () => {
    const {theme} = useSelector((data)=>data.themeReducer)
    console.log(theme)
    const dispatch = useDispatch()
  return (
       <div className="Sub-Main">
         <div className="Counter-Box-Top">
           <button
             onClick={()=>dispatch({type: LightTheme, theme: theme})}
             disabled={theme}
             className="WhiteMode"
           >
             Switch To Light
           </button>
           <button
           onClick={()=>dispatch({type: DarkTheme, theme: theme})}
           disabled={!theme}
             className="DarkMode"
           >
             Switch To Dark
           </button>
         </div>
         </div>
  )
}

export default Theme