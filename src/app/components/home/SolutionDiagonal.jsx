import { motion } from "framer-motion";
import { useState } from "react";

import { InvitationModal } from "./InvitationModal";
import { CheckArrowIcon } from "../../assets/icons/CheckArrowIcon";

const SolutionDiagonal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="lg:mb-8 w-full flex flex-col justify-center items-center bg-customDarkBg1 ">
      <div className="custom-shape-divider-bottom-1665696614">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div>
      <motion.div
        id="solution" 
        className="pt-[4rem] "
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className=" 2xl:w-[1150px] xl:w-[1050px]  md:w-4/5 flex justify-center bg-customDarkBg1 pt-12 lg:pt-24 pb-8 lg:pb-20 mx-auto lg:flex-row flex-col mb-16">
          <div className="w-3/4 lg:w-1/2 flex flex-col lg:mx-unset mx-auto">
            <span className="custom-block-subtitle">
              Why choose us?
            </span>
            <h2 className="mt-10 mb-8 text-4xl lg:text-5xl custom-block-big-title">
              One-stop tech hiring solution
            </h2>
            <p className="mb-8 text-customGrayText leading-loose">
              We understand the importance of quality when it comes to building your team. Our goal is simple: to connect you with talent that not only meets but exceeds your expectations.
            </p>
            <ul className="mb-6 text-white">
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Efficient process &#8208; save time & resources</span>
              </li>
              <li className="mb-4 flex">
                <CheckArrowIcon />
                <span>Thorough screening ensures quality candidates.</span>
              </li>
            </ul>
            <a target="_blank" rel="noopener noreferrer" href="https://forms.gle/fYN7bn3TsMzzbccS9">
              <div
                className="mt-5 w-[210px] h-12 custom-button-colored mr-10 "
                onClick={null}
              >
                Get Started
              </div>
            </a>
          </div>
          <div className="w-4/5 lg:w-1/2 lg:pl-16 flex justify-center mx-auto pt-16 lg:pt-0">
            <img
              src={'profiling.png'}
              alt="f1"
              className="rounded-xl bg-[rgb(255,255,255,0.01)] px-4 py-8 custom-border-gray"
            />
          </div>
        </div>
      </motion.div>
      {/* <div className="custom-shape-divider-top-1665696661 w-full">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="custom-bg-dark2"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="custom-bg-dark1"
          ></path>
        </svg>
      </div> */}
      {isModalOpen && (
        <InvitationModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} />
      )}
    </section>
  );
};

export default SolutionDiagonal;