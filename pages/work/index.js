import WorkSlider from "../../components/WorkSlider"
import Bulb from "../../components/Bulb"
import Circles from "../../components/Circles";

//framer motion
import { motion } from 'framer-motion'
import { fadeIn } from "../../variants";

const Work = () => {
  return (<div className="h-full bg-primary/30 py-36 flex items-center">
    <Circles />
    <div className="container mx-auto">
      <div className="flex flex-col xl:flex-row gap-x-8">
        {/*text */}
        <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
          <motion.h2
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2  xl:mt-8"
          >
            My Work <span className="text-accent">.</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="mb-4 max-w-[400px] mx-auto lg:mx-0"
          >

            This is a collection of projects that I built, some of which I used React, Node.js and Bootstrap in the front-end, Node.js in the back-end, and some of which I used WordPress with some custom programming.

          </motion.p>
        </div>
        {/*slider */}
        <motion.div
          variants={fadeIn("down", 0.6)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full  xl:max-w-[65%]"
        >
          <WorkSlider />
        </motion.div>
      </div>

    </div>
    <Bulb />
  </div>);
};

export default Work;
