import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import About from "./pages/About";
import WBS from "./pages/WBS";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import PN from "./pages/PN";
import Ghantt from "./pages/Ghantt";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import SignOut from "./pages/SignOut";

import Header from "./components/Header";
import AboutNav from "./components/Navbars/AboutNav";
import SignedInNav from "./components/Navbars/SignedInNav";
import SignedOutNav from "./components/Navbars/SignedOutNav";
import SignUpNav from "./components/Navbars/SignUpNav";
import ProjectNav from "./components/Navbars/ProjectNav";
import WBSNav from "./components/Navbars/WBSNav";
import PNNav from "./components/Navbars/PNNav";
import GhanttNav from "./components/Navbars/GhanttNav";
import Footer from "./components/Footer";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

const styles = {
  main: {
    background: "#2f2f2f",
    paddingTop: 0.1,
    minHeight: "100vh",
  },
};

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <main style={styles.main}>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <AboutNav />
                  <About />
                </>
              }
            />
            <Route 
              Path="/SignIn" 
              element={
                <SignIn />
              } 
            />
            <Route
              Path="/Projects/:username"
              element={
                <>
                  <SignedInNav />
                  <Projects />
                </>
              }
            />
            <Route
              Path="/Projects/:ProjectId"
              element={
                <>
                  <ProjectNav />
                  <Project />
                </>
              }
            />
            <Route
              Path="/Projects/:ProjectId/WBS/:WBSId"
              element={
                <>
                  <WBSNav />
                  <WBS />
                </>
              }
            />
            <Route
              Path="/Projects/:ProjectId/PN/:PNId"
              element={
                <>
                  <PNNav />
                  <PN />
                </>
              }
            />
            <Route
              Path="/Projects/:ProjectId/Ghantt/:GhantId"
              element={
                <>
                  <GhanttNav />
                  <Ghantt />
                </>
              }
            />
            <Route 
              Path="/SignUp" 
              element={
                <>
                <SignUpNav />
                <SignUp />
              </>
              } 
            />
            <Route
              Path="/SignOut"
              element={
                <>
                  <SignedOutNav />
                  <SignOut />
                </>
              }
            />
          </Routes>
          <Footer />
        </main>
      </Router>
    </ApolloProvider>
  );
}

export default App;
