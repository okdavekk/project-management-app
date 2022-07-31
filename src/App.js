import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import ProjectAboutMe from './components/ProjectAboutMe';
import ProjectContact from './components/ProjectContact';
import ProjectPortfolio from './components/ProjectPortfolio';
import ProjectResume from './components/ProjectResume';
import Footer from './components/Footer';


const styles = {
  main: {
    background: "#2f2f2f",
    paddingTop: 0.1,
    minHeight: '100vh',
  },
}

function App() {
  
  const [page, setPage] = useState('projectAboutMe');

  let CurrentPage;

  if (page === 'projectAboutMe') CurrentPage= ProjectAboutMe;
  if (page === 'projectPortfolio') CurrentPage= ProjectPortfolio;
  if (page === 'projectContact') CurrentPage= ProjectContact;
  if (page === 'projectResume') CurrentPage= ProjectResume;

  return (
    <main style={styles.main}>
    <>
      <Header  />
      <Navbar setPage={setPage}/>
      <CurrentPage />
      <Footer />
    </>
    </main>
  );
}

export default App;
