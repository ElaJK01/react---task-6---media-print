import React from "react";
import { Route, Switch } from "react-router-dom";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { HTML5Backend } from "react-dnd-html5-backend";
import { DndProvider } from "react-dnd";
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Languages from "./pages/languages";
import Countries from "./pages/countries";
import Layout from "./components/layout";
import LanguageDetails from "./pages/languageDetails";
import CountryDetails from "./pages/countryDetails";
import ContinentDetails from "./pages/continentDetails";
import { darkTheme, lightTheme } from "./themes";
import ThemeToggler from "./components/themeToggler";
import useThemeMode from "./useThemeMode";
import styled from 'styled-components';

const GlobalStyle = createGlobalStyle`

  * {
    font-family: "Gill Sans", sans-serif;
    font-size: 14px;
  }

  html,
  body {
    width: 100%;
    overflow-x: hidden;
    box-sizing: border-box;
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.50s linear;
    font-size: 14px;
  }

  p {
    font-size: 12px;
  }

  @media screen and (min-width: 320px) and (max-width: 768px) {
    body {
      width: 90%;
    }
}
  
  @page {
    margin: 5px;
  }
`;

const PrintableBodyWrapper = styled.div`
  @media print {
    nav {
      display: none;
    }

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

function App() {
  const [theme, themeToggler] = useThemeMode("light");

  const mode = theme === "light" ? lightTheme : darkTheme;

  return (
    <DndProvider backend={HTML5Backend}>
      <ThemeProvider theme={mode}>
        <div>
          <GlobalStyle />
          <PrintableBodyWrapper>
          <ThemeToggler toggleTheme={themeToggler} theme={theme} />
          <Layout>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/contact" component={Contact} />
              <Route exact path="/countries" component={Countries} />
              <Route exact path="/languages" component={Languages} />
              <Route path="/languages/:code" component={LanguageDetails} />
              <Route path="/countries/:code" component={CountryDetails} />
              <Route path="/continents/:code" component={ContinentDetails} />
            </Switch>
          </Layout>
          </PrintableBodyWrapper>
        </div>
      </ThemeProvider>
    </DndProvider>
  );
}

export default App;
