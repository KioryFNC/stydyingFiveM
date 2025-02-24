import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./Router";
import { MembersProvider } from "./contexts/MembersProvider";

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <MembersProvider>
          <Router />      
        </MembersProvider>
      </BrowserRouter>
      <GlobalStyle />
    </ThemeProvider>
  )
}