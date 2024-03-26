import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";

const FaQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const faqData = [
    {
      question:
        "How do you ensure your designs align with our brand's identity?",
      answer:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. lorem50  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam deserunt accusantium assumenda est sed voluptas itaque eius quis, molestiae doloribus accusamus ut animi ex nostrum quaerat iste hic soluta cumque maxime laborum nobis a. Repellat fuga est facere itaque ipsam explicabo ab blanditiis deserunt officia repellendus, ullam debitis voluptates eveniet!",
    },
    {
      question: "Can you build a dynamic website with CMS integration?",
      answer:
        "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
    {
      question:
        "Can You do the APIs integration with the Website and Mobile App?",
      answer:
        "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      question:
        "How do you ensure your designs align with our brand's identity?",
      answer:
        "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    },
    {
      question:
        "How do you ensure your designs align with our brand's identity?",
      answer:
        "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    },
  ];

  return (
    <>
      <span>
        <p className="text-3xl font-Lato font-medium text-center p-4">
          Frequently Asked Questions
        </p>

        <span className="w-full flex justify-center items-center">
          <span className="ss:w-[70%] w-full  border border-primary rounded-xl m-[2rem]">
            {faqData.map((item, index) => (
              <div key={index}>
                <span
                  className={`flex gap-2   px-4 py-3 query  m-[1.5rem] rounded-xl`}
                >
                  <span className="h-[10px] pt-2">
                    <FaPlay
                      className={`text-white mb-0   ss:text-base text-xl cursor-pointer    ${
                        activeIndex === index
                          ? "  transition-all ease-in-out duration-500 rotate-90 "
                          : "  transition-all ease-in-out  duration-500"
                      }`}
                      onClick={() => handleAccordionClick(index)}
                    />
                  </span>
                  <p className="ss:text-lg text-sm font-Lato">
                    {item.question}
                    {activeIndex === index && (
                      <p
                        className={` ss:text-lg  text-sm font-light text-start font-Lato  py-3  ${
                          activeIndex === index
                            ? "transition-all ease-in-out duration-500 bg-blue-400"
                            : "transition-all ease-in-out delay-1000 duration-500 "
                        }  bg-red-700 `}
                      >
                        {item.answer}
                      </p>
                    )}
                  </p>
                </span>
              </div>
            ))}
          </span>
        </span>
      </span>
    </>
  );
};

export default FaQ;
