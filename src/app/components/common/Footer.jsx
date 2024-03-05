import { WhatsAppIcon } from "../../assets/icons/WhatsAppIcon";
import { MailIcon } from "../../assets/icons/MailIcon";

const footerData = [
  {
    title: "Products",
    items: ["Services", "About Us", "News and Stories", "Roadmap"],
  },
  {
    title: "Important Links",
    items: [
      "Organization Team",
      "Our Journeys",
      "Pricing Plans",
      "Roadmap",
      "Terms & Conditions",
      "Privacy Policy",
    ],
  },
  {
    title: "Company",
    items: ["About Us", "Jobs", "Press", "Contact Us"],
  },
];

const Footer = () => {
  return (
    <footer id="contact">
      <div className="pt-5 lg:pt-0 lg:pb-4 bg-customDarkBg2 radius-for-skewed ">
        <div className="container mx-auto px-4 w-full md:w-11/12 lg:w-10/12 xl:w-4/5 2xl:w-2/3">
          <div className="flex flex-wrap justify-center w-full">
            <div className="sm:w-[22rem] lg:w-[20rem] xl:w-[24rem] lg:w-1/3 mb-8">
              <div className="flex justify-center lg:justify-center items-center">
                <div className="text-white font-['Inter'] font-bold text-xl">
                  Contact Us
                </div>
              </div>
              <div className="w-full flex flex-wrap justify-center pt-5 mx-auto lg:mx-0">
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="https://wa.me/+919799143281"
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  <WhatsAppIcon />
                </a>
                <a
                  className="inline-block w-10  h-10 mr-2 p-2 bg-customDarkBg2 custom-border-gray  hover:bg-gray-700 rounded-xl"
                  href="mailto:contact@elega.co.in"
                  target="_blank"
                  rel="noopener noreferrer" 
                >
                  <MailIcon />
                </a>
              </div>
            </div>
            {/* <div className="w-full lg:w-2/3  lg:pl-16 hidden lg:flex flex-wrap justify-between">
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">Products</h3>
                <ul>
                  {footerData[0].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto mb-16 md:mb-0">
                <h3 className="mb-6 text-2xl font-bold text-white">
                  Important Links
                </h3>
                <ul>
                  {footerData[1].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="w-full md:w-1/3 lg:w-auto">
                <h3 className="mb-6 text-2xl font-bold text-white">Company</h3>
                <ul>
                  {footerData[2].items.map((item, i) => (
                    <li key={i} className="mb-4">
                      <a
                        className="text-gray-400 hover:text-gray-300"
                        href="#"
                        aria-label=""
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div> */}
          </div>
          <p className="text-center text-sm text-gray-400 border-t border-[rgb(255,255,255,0.2)] py-4 lg:pt-4 lg:pb-0">
            &copy; 2024 Elega - All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;