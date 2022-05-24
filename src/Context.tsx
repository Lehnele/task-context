import React from 'react';
import { ReactElement, useContext } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = React.createContext({theme: 'light' as Theme});

export function ThemeProvider(props: {
    theme: Theme;
    children: ReactElement;
}) {
return (
    <ThemeContext.Provider value={{theme: props.theme}}>
        {props.children}
    </ThemeContext.Provider>
)}

export function useTheme(): Theme {
    return useContext(ThemeContext).theme
}
