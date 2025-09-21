"use client";

import { animate, motion } from "framer-motion";



//variants
const StairAnimation = {
    initial: {
        top: "0%",
    },
    animate: {
        top: "100%",
    },
    exit: {
        top: ["100%", "0%"],
    }
}

//calc reverse index

const reverseIndex = (index) => {
    const totalSteps = 6;
    return totalSteps - index - 1;
}


const Stairs = () => {
  return <>
  {
/*render 6 motion divs, each representing a step of the stairs.
Each div will have the same animation defined by the stairsAnimation object.
The delay for each div is calculated sinomically based on its reversed index.
creating a staggered effect with decreasing delay for each subsequent step.

*/
  }
  {[...Array(6)].map((_, index)=> {
    return (
        <motion.div
            key={index}
            variants={StairAnimation}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{
                duration: 0.3,
                ease: "easeInOut",
                delay: reverseIndex(index) * 0.07,
            }}
            className="h-full w-full bg-[#1b2a26] relative"
        />
    );
  })}
</>
};

export default Stairs
