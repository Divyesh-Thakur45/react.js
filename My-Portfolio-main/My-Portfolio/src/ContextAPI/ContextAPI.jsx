import { createContext, useState } from "react";

// for Theme change light and dark Mode
export const ThemeContext = createContext()

export const ThemeContextProvider = ({children}) => {
    const [themeChange, setThemeChange] = useState(true)
    return <ThemeContext.Provider value={{themeChange, setThemeChange}}>{children}</ThemeContext.Provider>
}

// for different color change

export const ColorChangeContext = createContext()

export const ColorChangeContextProvider = ({children}) => {
    const colors = [
        "#ff014f",
        "#c4096a",
        "#00CF5D",
        "#ec1839",
        "#bc06b6",
        "#d4d119",
        "#f021b2",
        "#fa5b0f",
        "#37b182",
        "#49bdf3",
        "#1854b4",
        "#00F7F7"
    ]
    const [colorHandle, setColorHandle] = useState("#ff014f")
    const [showColorPicker, setShowColorPicker] = useState(true)
    return <ColorChangeContext.Provider value={{colors, colorHandle, setColorHandle, showColorPicker, setShowColorPicker}}>{children}</ColorChangeContext.Provider>
}