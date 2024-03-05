/* eslint-disable @next/next/no-img-element */
import { motion } from "framer-motion";

import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";

function Solution() {
  return (
    <section
      id="approach" 
      className="w-full bg-customDarkBg2 mt-12 sm:mt-20 mb-10 lg:my-20pt-[2rem] pt-[6rem] lg:pt-10">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex flex-wrap items-center 2xl:w-[1450px] xl:w-[1300px] w-11/12 mx-auto md:pl-4 xl:pr-16 xl:pl-16">
          <div className="w-11/12 sm:w-3/4 mx-auto lg:w-1/2 flex flex-wrap lg:-mx-4 sm:pr-8 justify-center order-last lg:order-first">
            <div className="mb-8 lg:mb-0 w-3/4 px-2 lg:pl-16 flex flex-col justify-center md:pl-8">
              <div className="mb-4 py-3 md:pl-3 md:pr-20 lg:pr-4 rounded">
                <img
                  src={'filtered.png'}
                  alt="f1"
                  className="rounded-xl bg-[rgb(255,255,255,0.01)] custom-border-gray"
                />
              </div>
              <div className="py-3 md:pl-20 lg:pl-12 md:pr-2 rounded ">
                <img
                  src={'report.png'}
                  alt="f2"
                  className="rounded-xl bg-[rgb(255,255,255,0.01)]  custom-border-gray"
                />
              </div>
            </div>
          </div>

          <div className="w-full lg:w-1/2 mb-12 lg:mb-0 xl:pl-8">
            <div className="mx-auto lg:mx-auto w-11/12 sm:w-4/5 md:w-3/4 lg:w-unset">
              <span className="custom-block-subtitle">
                Our Approach
              </span>
              <h2 className="mt-6 mb-8 text-4xl lg:text-5xl custom-block-big-title">
                Unlike any solution you used before
              </h2>
              <p className="mb-12 text-customGrayText leading-loose">
                At Elega, we specialize in curating connections between businesses and top-tier tech talent, committed to excellence in every match.
              </p>
              <ul className="mb-6 text-white">
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Referral-sourced candidates</span>
                </li>
                <li className="mb-4 flex">
                  <CheckArrowIcon />
                  <span>Pre-screened & interviewed talent</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Solution;