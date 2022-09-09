import React from 'react';
import { ThemeProvider } from 'styled-components';
import { dark, light } from './theme';
import { particlesConfigLight, particlesConfigDark } from "./common/Particles/particles-config";
import {GlobalStyle} from './GlobalStyle';
import { useSelector } from "react-redux";
import { selectIsDarkTheme } from "./common/Header/ThemeSwitch/themeSlice";
import Exchange from './Exchange';
import ParticlesBackground from './common/Particles';

const App = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);

    return (
        <ThemeProvider theme={isDarkTheme ? dark : light} >
            <ParticlesBackground options={isDarkTheme ? particlesConfigDark : particlesConfigLight} />
            <GlobalStyle />
            <Exchange />
        </ThemeProvider>
    );
};

export default App;