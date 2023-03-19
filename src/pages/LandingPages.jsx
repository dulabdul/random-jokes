import React, { useEffect } from 'react';
import Welcome from '../parts/Welcome';
import Footer from '../parts/Footer';

export default function LandingPages() {
  useEffect(() => {
    window.document.title = 'Jokes For You';
  }, []);
  return (
    <>
      <Welcome />
    </>
  );
}
