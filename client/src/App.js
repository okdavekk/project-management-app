import React, { useState } from 'react';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import About from './pages/About';
import WBS from './pages/WBS';
import Projects from './pages/Projects';
import PN from './pages/PN';
import Ghantt from './pages/Ghantt';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import SignOut from './pages/SignOut';


const styles = {
  main: {
    background: "#2f2f2f",
    paddingTop: 0.1,
    minHeight: '100vh',
  },
}

function App() {
  
  const [page, setPage] = useState('About');

  let CurrentPage;

  if (page === 'About') CurrentPage= About;
  if (page === 'Projects') CurrentPage= Projects;
  if (page === 'WBS') CurrentPage= WBS;
  if (page === 'PN') CurrentPage= PN;
  if (page === 'Ghantt') CurrentPage= Ghantt;
  if (page === 'SignIn') CurrentPage= SignIn;
  if (page === 'SignUp') CurrentPage= SignUp;
  if (page === 'SignOut') CurrentPage= SignOut;

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
