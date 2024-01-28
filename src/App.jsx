import myImage from "./assets/me-transparent1.png";
import vectorImg from "./assets/vector-img.png";
import me1 from "./assets/me2.jpeg";
import { useState, useEffect } from "react";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
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

  const [ref, inView] = useInView({
    triggerOnce: true,
  });

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
    controls.start({
      backgroundColor: scrolled ? "rgba(128, 0, 0, 1)" : "rgba(128, 0, 0, 0)",
    });
  }, [scrolled, controls]);

  return (
    <AnimatePresence>
      <div>
        <motion.header
          initial={{ backgroundColor: "transparent" }}
          animate={controls}
          exit={{ backgroundColor: "transparent" }}
          className={`h-[12vh] w-full ${
            scrolled
              ? "bg-main text-white fixed z-20  shadow-xl"
              : "bg-transparent text-red-700"
          } flex items-center  font-sans ease-in-out duration-500`}
        >
          <div>
            <h1 className="text-center text-2xl font-semibold ml-0 lg:ml-36">
              Lagria
            </h1>
          </div>
          <nav className="ml-auto mr-28 text-xl font-semibold">
            <ul className="flex items-center justify-center gap-10">
              <li>About Me</li>
              <li>What I do</li>
              <li>Works</li>
              <li>Contact</li>
            </ul>
          </nav>
        </motion.header>

        <main className="font-sans text-md">
          <div className="flex items-center justify-center h-[86vh] w-full text-black">
            <div className="w-1/2 h-[88vh] ">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate="visible"
                className="flex flex-col w-[90%] ml-32 mt-10"
              >
                <motion.p
                  variants={paragraphVariants}
                  className="text-2xl font-medium mb-12"
                >
                  Software Developer
                </motion.p>
                <motion.p variants={paragraphVariants} className="text-4xl">
                  Hello, I am{" "}
                  <span className="font-bold italic text-red-700">
                    Mark John Lagria
                  </span>{" "}
                  a software developer.
                </motion.p>
                <motion.p
                  variants={paragraphVariants}
                  className="w-[90%] text-lg mt-10"
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
                  className="w-[80%] ml-24 mt-10 h-[70vh] absolute"
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
          <div className="h-[88vh]  w-full bg-gray-200">
            <motion.div
              className="w-full h-[100%] flex items-center"
              ref={ref}
              initial={{ opacity: 0, x: "-100%" }}
              animate={{ opacity: 1, x: inView ? "0%" : "100%" }}
              exit={{ opacity: 0, x: "100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <motion.div className="h-[75%] w-[30%] border-2 border-gray-700 relative ml-52 rounded-2xl">
                <motion.img
                  src={me1}
                  alt=""
                  className="w-full h-[100%] absolute -top-3 -left-3 rounded-2xl object-cover"
                />
              </motion.div>
              <motion.div className="w-[40%]">
                <motion.p className="text-4xl font-bold ml-10">
                  About Me
                </motion.p>
                <motion.p className="text-lg ml-10 mt-10">
                  I am Mark John H. Lagria, a 4th-year IT student at the
                  University of Mindanao. I am an aspiring software developer
                  who is passionate about creating innovative solutions and
                  delivering high-quality web and mobile applications. I live in
                  Edullantes Compound, Camasura Phase 2, SGR Village, Catalunan
                  Grande Davao City. My hobbies are playing computer games,
                  watching anime, live-action tv series, and coding.
                </motion.p>
              </motion.div>
            </motion.div>
          </div>
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;
