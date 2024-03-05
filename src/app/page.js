'use client'

import About from './components/home/About';
import Divider from './components/common/Divider';
import Footer from './components/common/Footer';
import ScrollUpButton from './components/common/ScrollUpButton';
import Hero from './components/home/Hero';
import Navbar from './components/home/NavBar';
import Solution from './components/home/Solution';
import SolutionDiagonal from './components/home/SolutionDiagonal';
import "./styles/Diagonals.css";
import "./styles/Theme.css";

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