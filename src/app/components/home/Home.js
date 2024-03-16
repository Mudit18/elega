'use client'

import React from 'react';
/* eslint-disable @next/next/no-async-client-component */

import Divider from '../common/Divider';
import Footer from '../common/Footer';
import ScrollUpButton from '../common/ScrollUpButton';
import About from './About';
import Hero from './Hero';
import Navbar from './NavBar';
import Solution from './Solution';
import SolutionDiagonal from './SolutionDiagonal';

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Divider />
      <Solution />
      {/*
        <Testimonials client:load />
      */}
      <SolutionDiagonal />
      {/*
        <Pricing client:load />
        <Brands client:load />
        <FAQ client:load />
      */}
      <Footer />
      <ScrollUpButton />
    </>
  );
}