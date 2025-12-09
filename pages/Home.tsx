import React from 'react';
import Hero from '../components/Hero';
import TradeList from '../components/TradeList';
import JobTeaser from '../components/JobTeaser';
import ContentSection from '../components/ContentSection';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <TradeList />
      <JobTeaser />
      <ContentSection />
      <CallToAction />
      <FAQ />
    </>
  );
};

export default Home;