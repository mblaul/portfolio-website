import App from "next/app";
import React from "react";
import "../public/normalize.css";
import "../public/styles.css";
import { ThemeProvider } from "styled-components";
import theme from '../config/theme';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
