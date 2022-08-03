import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Signin from "./pages/SignIn";
import Signup from "./pages/SignUp";
import Projects from "./pages/Projects";
import Project from "./pages/Project";
import WBS from "./pages/WBS";
import PN from "./pages/PN";
import Ghantt from "./pages/Ghantt";
import Signout from "./pages/SignOut";

import Header from "./components/Header";
import AboutNav from "./components/Navbars/AboutNav";
import SignedInNav from "./components/Navbars/SignedInNav";
import SignedOutNav from "./components/Navbars/SignedOutNav";
import SignInNav from "./components/Navbars/SignInNav"
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


// TODO: Are these the right paths to everything we need to do?  
function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
        <main style={styles.main}>
          <Header />
          <Routes>
            {/* theseare our views */}
            {/* what are the pages or views that a user will experience
            landingpage => /
            login=> /signin
            siugnup => singup
            logout -> /logout
            seeAll my projects /projects  => query all projects mutate - add project delete project update
            seeOneproject /project/:projectId */}
            {/* MAIN PATHS */}
            <Route path="/" element={<><AboutNav /> <About /></>} />
            <Route path="/signin" element={<><SignInNav /> <Signin /></>}/>
            <Route path="/signup" element={<><SignUpNav /> <Signup /></>}/>
            <Route path="/signout" element={<><SignedOutNav /> <Signout /></>}/>
            <Route path="/projects" element={<><SignedInNav /> <Projects /></>}/>
            <Route path="/projectId/:id" element={<><ProjectNav /> <Project /></>}/>
          </Routes>
           <Footer />
          </main>
        </Router>



    </ApolloProvider>


  );
}

export default App;
