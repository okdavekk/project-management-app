import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import { Switch } from "react-router";

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

// function App() {
//   return (
//     <ApolloProvider client={client}>
//       <Router>
//         <main style={styles.main}>
//           <Header />
//           <Routes>
//             <Route path="/"
//               element={
//                 <>
//                   <AboutNav />
//                   <About />
//                 </>
//               }
//             />
//             <Route 
//               path="/signin" 
//               element={
//                 <>
//                 <SignInNav />
//                 <Signin />
//                 </>
//               } 
//             />
//               <Route 
//                 path="/signup" 
//                 element={
//                   <>
//                   <SignUpNav />
//                   <Signup />
//                 </>
//                 } 
//               />
//             <Route
//               path="/projects"
//               element={
//                 <>
//                   <SignedInNav />
//                   <Projects />
          
//                 </>
//               }>
//               <Route
//                 path="project"
//                 element={
//                   <>
//                     <ProjectNav />
//                     <Project />
//                   </>
//                 }>    
//                   <Route
//                   path="/wbs"
//                   element={
//                     <>
//                       <WBSNav />
//                       <WBS />
//                     </>
//                   }
//                   />
//                   <Route
//                   path="/pn"
//                   element={
//                     <>
//                     <PNNav />
//                     <PN />
//                   </>
//                   }
//                   />
//                   <Route
//                   path="/ghantt"
//                   element={
//                     <>
//                     <GhanttNav />
//                     <Ghantt />
//                   </>
//                   }
//                   />

//               </Route>
//              </Route>
//             />
//             <Route
//               path="/signout"
//               element={
//                 <>
//                   <SignedOutNav />
//                   <Signout />
//                 </>
//               }
//             />
//           </Routes>
//           <Footer />
//         </main>
//       </Router>
//     </ApolloProvider>
//   );
// }

function App() {
  return (
    <ApolloProvider client={client}>
        <Router>
        <main style={styles.main}>
          <Header />
          <Routes>
            {/* MAIN PATHS */}
            <Route path="/" element={<><AboutNav /> <About /></>} />
            <Route path="signin" element={<><SignInNav /> <Signin /></>}/>
            <Route path="signup" element={<><SignUpNav /> <Signup /></>}/>
            <Route path="signout" element={<><SignedOutNav /> <Signout /></>}/>

            {/* PROJECTS PATHS */}
            <Route path="projects" element={<><SignedInNav /> <Projects /></>}/>
            <Route path="projects/add" element={<><SignedInNav /> <Projects /></>}/>
            <Route path="projects/delete/:id" element={<><SignedInNav /> <Projects /></>}/>
            <Route path="projects/edit/:id" element={<><SignedInNav /> <Projects /></>}/>

            {/* PROJECT PATHS */}
            <Route path="projects/:id/project" element={<><ProjectNav /> <Project /></>}/>
            <Route path="projects/:id/project/add" element={<><ProjectNav /> <Project /></>}/>
            <Route path="projects/:id/project/delete/:id" element={<><ProjectNav /> <Project /></>}/>
            <Route path="projects/:id/project/edit/:id" element={<><ProjectNav /> <Project /></>}/>

            {/* PROJECT TO WBS */}
            <Route path="projects/:id/project/wbs/" element={<><WBSNav /> <WBS /></>}/>
            <Route path="projects/:id/project/wbs/add" element={<><WBSNav /> <WBS /></>}/>
            <Route path="projects/:id/project/wbs/delete/:id" element={<><WBSNav /> <WBS /></>}/>
            <Route path="projects/:id/project/wbs/edit/:id" element={<><WBSNav /> <WBS /></>}/>

            {/* PROJECT TO PN */}
            <Route path="projects/:id/project/pn/" element={<><PNNav /> <PN /></>}/>
            <Route path="projects/:id/project/pn/add" element={<><PNNav /> <PN /></>}/>
            <Route path="projects/:id/project/pn/delete/:id" element={<><PNNav /> <PN /></>}/>
            <Route path="projects/:id/project/pn/edit/:id" element={<><PNNav /> <PN /></>}/>


            {/* PROJECT TO GHANTT */}
            <Route path="projects/:id/project/ghantt/" element={<><GhanttNav /> <Ghantt /></>}/>
            <Route path="projects/:id/project/ghantt/add" element={<><GhanttNav /> <Ghantt /></>}/>
            <Route path="projects/:id/project/ghantt/delete/:id" element={<><GhanttNav /> <Ghantt /></>}/>
            <Route path="projects/:id/project/ghantt/edit/:id" element={<><GhanttNav /> <Ghantt /></>}/>
            
          </Routes>
           <Footer />
          </main>
        </Router>



    </ApolloProvider>


  );
}

export default App;
