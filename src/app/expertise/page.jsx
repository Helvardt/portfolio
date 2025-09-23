"use client";

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const expertiseItems = [
  {
    num: "01",
    title: "Project Management",
    description:
      "Das hier ist ein kurzer Texttext, der diesen Punkt hier beschreibt und kurz definiert, welche Expertise ich in diesem Bereich habe",
    href: "#",
  },
  {
    num: "02",
    title: "Business Analysis",
    description:
      "Das hier ist ein kurzer Texttext, der diesen Punkt hier beschreibt und kurz definiert, welche Expertise ich in diesem Bereich habe",
    href: "#",
  },
  {
    num: "03",
    title: "Digital Consulting",
    description:
      "Das hier ist ein kurzer Texttext, der diesen Punkt hier beschreibt und kurz definiert, welche Expertise ich in diesem Bereich habe",
    href: "#",
  },
  {
    num: "04",
    title: "Coaching",
    description:
      "Das hier ist ein kurzer Texttext, der diesen Punkt hier beschreibt und kurz definiert, welche Expertise ich in diesem Bereich habe",
    href: "#",
  },
];

const Expertise = () => {
  return (
    <section className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0">
      <div className="mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1,
            transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
          }}
          className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        >
          {expertiseItems.map((item) => (
            <div
              key={item.num}
              className="flex-1 flex flex-col justify-center gap-6 group"
            >
              {/* top */}
              <div className="w-full flex items-center justify-between">
                <div className="text-5xl font-extrabold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500">{item.num}</div>
                <Link href={item.href} className="w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45">
                  <BsArrowDownRight className="text-primary text-3xl" />
                </Link>
              </div>

              {/* title */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500" >{item.title}</h2>

              {/* description */}
              <p className="!text-white/60">{item.description}</p>

              {/* border */}
              <div className="border-b border-white/20 w-full" />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Expertise;
