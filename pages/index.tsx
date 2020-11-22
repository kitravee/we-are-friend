import React from 'react';
import type { FC } from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Topbar from 'src/layouts/MainLayout/Topbar';
import HomeView from '../src/views/home/HomeView';

const Home: FC = () => {
  const { t } = useTranslation();
  return (
    <>
      <Head>
        <title>{t('home.header.title')}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Topbar />
      <HomeView />
    </>
  );
};
export default Home;
