import {dark,basic,light} from '../themes/';
import THEMES from '../constants/themes';

export const getTheme = (themeName) => {
    switch(themeName) {
        case THEMES.dark: return dark;
        case THEMES.light: return light;
        default: return basic;
    }
}