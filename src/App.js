import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./Component/Navbar";
import Hero from "./Component/Hero";
import Footer from "./Component/Footer";

import QuizCard from "./Component/QuizCard";
import Leaderboard from "./Component/Leaderboard";
import About from "./Component/About";
import SignIn from "./Component/Signin";
import CodingChallenges from "./Data/CodingChallenges";
import Profile from "./Component/Profile";




function App() {

  const location = useLocation();

  return (
    <div>

      <Navbar />

      <AnimatePresence mode="wait">

        <Routes location={location} key={location.pathname}>

          {/* HOME PAGE */}
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
              >
                <Hero />
              </motion.div>
            }
          />


          {/* QUIZ PAGE */}
          <Route
            path="/quiz"
            element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
              >
                <QuizCard />
              </motion.div>
            }
          />


          {/* LEADERBOARD PAGE */}
          <Route
            path="/leaderboard"
            element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
              >
                <Leaderboard />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/Signin"
            element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
              >
                <SignIn />
              </motion.div>
            }

          />
          <Route
            path="/profile"
            element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
              >
                <Profile />
              </motion.div>
            }

          />
          <Route path="/Challange"
            element={
              <motion.div
                initial={{ opacity: 0, x: 80 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -80 }}
                transition={{ duration: 0.4 }}
              >
                <CodingChallenges />
              </motion.div>
            }
          />


          <Route path="/quiz/:subject" element={<CodingChallenges />} />


        </Routes>

      </AnimatePresence>

      <Footer />

    </div>
  );
}

export default App;