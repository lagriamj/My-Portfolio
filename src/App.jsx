import myImage from "./assets/me-transparent1.png";
import vectorImg from "./assets/vector-img.png";
import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import "./App.css";

function App() {
  const [scrolled, setScrolled] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled down more than a certain threshold
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2, // Adjust the stagger duration as needed
      },
    },
  };

  const paragraphVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  const rightToLeftpargraph = {
    hidden: { opacity: 0, x: 50 }, // Change x value to start from the right
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeInOut" },
    },
  };

  useEffect(() => {
    // Animate the background color change
    controls.start({ backgroundColor: scrolled ? "#800000" : "transparent" });
  }, [scrolled, controls]);

  return (
    <div>
      <AnimatePresence>
        <motion.header
          initial={{ backgroundColor: "transparent" }}
          animate={controls}
          exit={{ backgroundColor: "transparent" }}
          className={`h-[14vh] w-full ${
            scrolled
              ? "bg-main text-white fixed z-20  shadow-xl"
              : "bg-transparent text-red-700"
          } flex items-center  font-sans ease-out duration-500`}
        >
          <div>
            <h1 className="text-center text-4xl font-semibold ml-0 lg:ml-36">
              Lagria
            </h1>
          </div>
          <nav className="ml-auto mr-28 text-2xl font-medium">
            <ul className="flex items-center justify-center gap-16">
              <li>About Me</li>
              <li>What I do</li>
              <li>Works</li>
              <li>Contact</li>
            </ul>
          </nav>
        </motion.header>
      </AnimatePresence>

      <AnimatePresence>
        <main className="font-sans">
          <div className="flex items-center justify-center h-[86vh] w-full text-black">
            <div className="w-1/2 h-[86vh] ">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col w-[90%] ml-32 mt-10"
              >
                <motion.p
                  variants={paragraphVariants}
                  className="text-4xl font-medium mb-12"
                >
                  Software Developer
                </motion.p>
                <motion.p
                  variants={paragraphVariants}
                  className="text-[3.0rem]"
                >
                  Hello, my name is{" "}
                  <span className="font-bold italic text-red-700">
                    Mark John Lagria
                  </span>{" "}
                  a software developer.
                </motion.p>
                <motion.p
                  variants={paragraphVariants}
                  className="w-[90%] text-xl mt-10"
                >
                  I am an aspiring software developer who is passionate about
                  creating innovative solutions and delivering high-quality web
                  and mobile applications. I am commited to continues growth and
                  learning and I am currently studying at the University of
                  Mindanao
                </motion.p>
                <motion.div variants={paragraphVariants} className="flex">
                  <button className="font-bold px-4 py-3 border-2 border-red-700 text-red-700 rounded-full mt-10 mr-10 relative overflow-hidden transition-all duration-300 group">
                    Download CV
                    <span className="absolute inset-0 bg-red-700 transition-all duration-300 flex items-center justify-center text-white transform scale-x-0 group-hover:scale-x-100">
                      Download CV
                    </span>
                  </button>
                  <button className="font-bold px-4 py-3 border-2 border-red-700 text-red-700 rounded-full mt-10 mr-10 relative overflow-hidden transition-all duration-300 group">
                    Contact Me
                    <span className="absolute inset-0 bg-red-700 transition-all duration-300 flex items-center justify-center text-white transform scale-x-0 group-hover:scale-x-100">
                      Contact Me
                    </span>
                  </button>
                </motion.div>
              </motion.div>
            </div>
            <div className="w-1/2 h-[86vh] relative">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="w-[90%] h-[100%]"
              >
                <motion.img
                  variants={rightToLeftpargraph}
                  src={vectorImg}
                  alt="react-logo"
                  className="w-[85%] ml-24 mt-10 h-[70vh] absolute"
                />
                <motion.img
                  variants={rightToLeftpargraph}
                  src={myImage}
                  alt=""
                  className="absolute top-0 right-14 h-[60vh] z-10 rounded-full"
                />
              </motion.div>
            </div>
          </div>
          <div className="h-[100vh]">WE</div>
        </main>
      </AnimatePresence>
    </div>
  );
}

export default App;
