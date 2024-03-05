import { motion } from "framer-motion";

import search from "../assets/images/hiring.png";
import standout from "../assets/images/standout.png";
import time from "../assets/images/time.png";
import confused from "../assets/images/confused-2.png";
import { WrongArrowIcon } from "../assets/icons/WrongArrowIcon";

export const About = () => {
  return (
    <section
      id="problem"
      className="w-full bg-customDarkBg2 mt-8 mb-8 sm:mt-16 sm:mb-16 xl:mt-0  xl:m pt-[6rem] lg:pt-16"
    >
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">The Problem</span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              Cost of Traditional Hiring
              </h2>
              <p className="mb-10 text-customGrayText leading-loose">
              Traditional hiring overwhelms recruiters with too many profiles, sacrificing quality. Consequently, companies waste engineering bandwidth on unqualified candidates.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <WrongArrowIcon />
                  <span>Quantity over Quality</span>
                </li>
                <li className="mb-4 flex">
                  <WrongArrowIcon />
                  <span>Lost engineering bandwidth</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 lg:pt-10 justify-center lg:pl-4 xl:px-8">
            <div className="mb-8 lg:mb-0 w-full sm:w-1/2 px-2 lg:px-0">
              <div className="mb-4 py-3 pl-3 pr-2 rounded">
                <img
                  src={standout}
                  alt="f1"
                  className="rounded-xl bg-[rgb(255,255,255,0.01)] px-6 py-6 custom-border-gray mx-auto sm:mx-unset"
                />
              </div>
              <div className="py-1 px-1 rounded ">
                <img
                  src={time}
                  alt="f2"
                  className="rounded-xl custom-border-gray mx-auto px-6 py-6 sm:mx-unset bg-[rgb(255,255,255,0.01)]"
                />
              </div>
            </div>
            <div className="w-1/2 lg:mt-20  pt-12 lg:pt-0 px-2 hidden sm:inline-block">
              <div className="mb-4 py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={search}
                  alt="f3"
                  className="rounded-xl bg-[rgb(255,255,255,0.01)] custom-border-gray"
                />
              </div>
              <div className="py-3 pl-3 pr-2 rounded-lg ">
                <img
                  src={confused}
                  alt="f4"
                  className="rounded-xl bg-[rgb(255,255,255,0.01)] custom-border-gray"
                />
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};
