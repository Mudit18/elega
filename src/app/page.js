'use client'

import dynamic from 'next/dynamic';
import { Hero } from './components/home/Hero';
import "./styles/Diagonals.css";
import "./styles/Theme.css";

const Navbar = dynamic(() => import('./components/home/Navbar'));
const About = dynamic(() => import('./components/home/About'));
const Divider = dynamic(() => import('./components/common/Divider'));
const Solution = dynamic(() => import('./components/home/Solution'));
const SolutionDiagonal = dynamic(() => import('./components/home/SolutionDiagonal'));
const Footer = dynamic(() => import('./components/common/Footer'));
const ScrollUpButton = dynamic(() => import('./components/common/ScrollUpButton'));

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