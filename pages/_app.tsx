import '../i18n';
import '../styles/globals.css';
import React, { useEffect } from 'react';
import { create } from 'jss';
import rtl from 'jss-rtl';
import type { AppContext, AppInitialProps, AppProps } from 'next/app';
import { useTranslation } from 'react-i18next';
import { useRouter } from 'next/router';
import { jssPreset, StylesProvider, ThemeProvider } from '@material-ui/core';
import { NextComponentType } from 'next';
import { createTheme } from 'src/theme';
import useSettings from 'src/hooks/useSettings';
import { THEMES } from 'src/constants';

const MyApp: NextComponentType<AppContext, AppInitialProps, AppProps> = ({
  Component,
  pageProps,
}: AppProps) => {
  const { settings } = useSettings();
  const jss = create({ plugins: [...jssPreset().plugins, rtl()] });
  const { i18n } = useTranslation();
  const router = useRouter();
  const { locale } = router;

  const theme = createTheme({
    direction: settings.direction,
    responsiveFontSizes: settings.responsiveFontSizes,
    // theme: settings.theme,
    theme: THEMES.LIGHT,
  });

  useEffect(() => {
    i18n?.changeLanguage(locale || '');
  }, [locale]);

  return (
    <ThemeProvider theme={theme}>
      <StylesProvider jss={jss}>
        <Component {...pageProps} />
      </StylesProvider>
    </ThemeProvider>
  );
};

export default MyApp;
