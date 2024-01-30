"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import anshu from "@/assets/images/anshu.png";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-36 pb-2 uppercase tracking-[20px] text-[#9e7f29] text-2xl ">
        About
      </h3>

      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}>
        <Image
          src={anshu}
          alt="anshu"
          className="-mb-20 mt-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[500px] xl:h-[600px] xl:top-12"
        />
      </motion.div>

      <div className="space-y-5 px=0 md:px-10">
        <h4 className="text-4xl font-semibold">
          Here is a <span className="underline decoration-white">little</span>{" "}
          background...
        </h4>
        <p className="text-base text-white">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          pharetra nulla vel ligula tincidunt tempor non non ligula. Aenean ac
          pharetra nisi, nec congue ante. Duis ac tortor tincidunt, posuere
          tellus eu, dignissim velit. Nunc dictum, ligula id rutrum aliquam,
          eros tellus fringilla mauris, in dictum diam tellus in massa.
          Pellentesque viverra auctor ante, ac dictum nisl vehicula venenatis.
          Etiam accumsan sed eros sit amet cursus. Morbi vitae dictum nulla, sit
          amet consequat mi. Nullam eu scelerisque quam. Vestibulum ut laoreet
          augue, sit amet volutpat nibh. Donec feugiat leo mattis, blandit
          ligula quis, placerat sem.
        </p>
      </div>
    </motion.div>
  );
}
