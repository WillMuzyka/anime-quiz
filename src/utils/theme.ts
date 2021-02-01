import { DefaultTheme } from "styled-components";

export interface ITheme extends DefaultTheme{
  colors: {
    primary: string;
    secondary: string;
    mainBg: string;
    contrastText: string;
    wrong: string;
    success: string;
  },
  borderRadius: string;
}

const theme: ITheme = {
  "colors": {
    "primary": "#ff5722",
    "secondary": "#651fff",
    "mainBg": "#181818",
    "contrastText": "#FFFFFF",
    "wrong": "#FF5722",
    "success": "#4CAF50"
  },
  "borderRadius": "4px"
}

export default theme;