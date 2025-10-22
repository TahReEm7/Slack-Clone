"use client";


import { IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const words = ["Work", "Culture", "AI" , "Work"];

function BannerIntro() {
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(true);

 
  useEffect(() => {
    if (index < words.length - 1) {
      const timeout = setTimeout(() => {
        setIndex((prev) => prev + 1);
      }, 1000);
      return () => clearTimeout(timeout);
    } else {
      const resetTimeout = setTimeout(() => {
        setIsAnimating(false);
      }, 1000);
      return () => clearTimeout(resetTimeout);
    }
  }, [index]);

  return (
    <section className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 my-8 px-4 text-center">
      <div className="space-y-6">
        <h1 className="text-3xl relative sm:text-5xl font-bold flex flex-wrap justify-center items-center ">
          {/* Left word */}
          <motion.span
            animate={{
              x: isAnimating ? -60 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            Where
          </motion.span>

                {/* Middle sliding word */}
            <span className="relative w-[150px] text-[#891494] text-center inline-block">
              <AnimatePresence mode="wait">
                <motion.span
                  key={words[index]}
                  initial={{ y: 50, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -50, opacity: 0 }}
                  transition={{ duration: 0.2, ease: "easeIn" }}
                  className="inline-block"
                >
                  {words[index]}
                </motion.span>
              </AnimatePresence>
            </span>


          {/* Right word */}
          <motion.span
            animate={{
              x: isAnimating ? 60 : 0,
            }}
            transition={{
              duration: 0.6,
              ease: "easeInOut",
            }}
            className="inline-block"
          >
            Happens
          </motion.span>
        </h1>

        <p className="font-normal text-base sm:text-lg text-gray-700">
          Share it. Discuss it. Get it done. Side-by-side with AI agents.
        </p>
      </div>

      <div className="mt-6 w-full flex flex-col sm:flex-row items-center justify-center gap-4">
        <Link
          href="/login"
          className="bg-[#611F69] px-6 py-3 rounded-sm text-white font-semibold w-full sm:w-auto text-center"
        >
          GET STARTED
        </Link>

        <Link
          href="/"
          className="bg-white px-6 py-3 rounded-sm text-[#611F69] border-2 border-[#611F69] font-semibold w-full sm:w-auto text-center flex items-center justify-center gap-2 transition-all hover:bg-[#f9f2fa]"
        >
          Find Your Plan
          <IconArrowRight/>
        </Link>
      </div>
    </section>
  );
}

export default BannerIntro;
