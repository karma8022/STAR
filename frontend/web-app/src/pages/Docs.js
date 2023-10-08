import React from "react";
import { QuestionMarkCircleIcon } from "@heroicons/react/24/solid";
import { DocumentIcon } from "@heroicons/react/24/solid";

const Contact = () => {
  return (
    <body className="">
      <div className="">
        <div className="flex justify-center items-center mt-8 mb-12">
          <div className="collapse collapse-arrow bg-base-200 w-3/4 background-with-opacity">
            <input type="radio" name="my-accordion-2" />
            <div className="collapse-title font-medium text-3xl">
              <div className="flex  items-center text-3xl text-white">
                Documentation Details{"   "}
                <DocumentIcon className="w-8 h-8 inline mx-4" />
              </div>
            </div>
            <div className="collapse-content text-2xl  text-white">
              <p>
                Please refer to the links given here to further verify and learn
                about the various sources used by our LLM. These are Provided by
                NASA.{" "}
              </p>
            </div>
          </div>
        </div>

        <div className="m-4 p-16 text-3xl bg-base-200 rounded-xl mx-10 flex flex-col background-with-opacity">
          <a
            href="https://standards.nasa.gov/all-standards"
            className="underline m-4  text-white"
          >
            1. NASA Standards
          </a>
          <a
            href="https://www.spaceappschallenge.org/2023/challenges/star-revolutionizing-technical-standards-with-ai/?tab=resources"
            className="underline m-4  text-white"
          >
            2. NASA Standard 5018, Strength Design and Verification Criteria for
            Glass, Ceramics, and Windows in Human Space Flight Applications
          </a>
          <a
            href="https://www.nasa.gov/wp-content/uploads/2022/05/tb_summary_091922.pdf"
            className="underline m-4  text-white"
          >
            3. NASA Engineering and Safety Center (NESC) Technical Bulletins
          </a>
          <a
            href="https://llis.nasa.gov/"
            className="underline m-4  text-white"
          >
            4. NASA Lessons Learned
          </a>
          <a
            href="https://www.spaceappschallenge.org/2023/challenges/star-revolutionizing-technical-standards-with-ai/?tab=resources"
            className="underline m-4  text-white "
          >
            3. NASA Technical Reports Server (NTRS)
          </a>
          <a
            href="https://www.nasa.gov/general/knowledge-management-km-resources/"
            className="underline m-4  text-white"
          >
            3. NASA Knowledge Management
          </a>
          <a href="https://sti.nasa.gov/" className="underline m-4  text-white">
            3. NASA Scientific and Technical Information (STI) Program
          </a>
        </div>
      </div>
    </body>
  );
};

export default Contact;
