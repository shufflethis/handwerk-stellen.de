import React from 'react';
import Hero from '../components/Hero';
import TradeList from '../components/TradeList';
import JobTeaser from '../components/JobTeaser';
import ContentSection from '../components/ContentSection';
import FAQ from '../components/FAQ';
import CallToAction from '../components/CallToAction';
import GermanCities from '../components/geo/GermanCities';
import CareerInfo from '../components/CareerInfo';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <JobTeaser />
      <TradeList />
      <GermanCities />
      <ContentSection />
      <CallToAction />
      <FAQ />
      <CareerInfo />
    </>
  );
};

export default Home;