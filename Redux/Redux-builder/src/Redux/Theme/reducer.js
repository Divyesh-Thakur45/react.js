import { DarkTheme, LightTheme } from "../actiontype"

const initialState = {
    theme: true
}
export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case LightTheme:
            return {...state, theme:!state.theme}
        case DarkTheme:
            return {...state, theme:action.payload}
        default:
            return state
    }
}