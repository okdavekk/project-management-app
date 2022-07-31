import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Header from './components/Header';
import About from './components/About';
import WBS from './components/WBS';
import Projects from './components/Projects';
import PN from './components/PN';
import Footer from './components/Footer';
import Ghantt from './components/Ghantt';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';


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
