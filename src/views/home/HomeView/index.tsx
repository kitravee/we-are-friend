import React from 'react';
import type { FC } from 'react';
// import { makeStyles } from '@material-ui/core';
// import Page from 'src/components/Page';
import Hero from './Hero';
import Features from './Features';
import Testimonials from './Testimonials';
import CTA from './CTA';
import FAQS from './FAQS';
import Review from './Reviews';

// const useStyles = makeStyles(() => ({
//   root: {},
// }));

const HomeView: FC = () => (
  // const classes = useStyles();
  // <Page className={classes.root} title="Home">
  <>
    <Hero />
    <Features />
    <Testimonials />
    <CTA />
    <Review />
    <FAQS />
  </>

  // </Page>
);
export default HomeView;
