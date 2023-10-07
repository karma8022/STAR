import { ArrowUpIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

const ScrollButton = () => {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
      /* you can also use 'auto' behaviour
		in place of 'smooth' */
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <button
      className="btn btn-accent btn-circle fixed bottom-0 right-0 m-8 btn-lg flex justify-center"
      style={{ display: visible ? "inline" : "none" }}
      onClick={scrollToTop}
    >
      <div className="flex justify-center">
        <ArrowUpIcon className="w-8 h-8 self-center" />
      </div>
      {/* <FaArrowCircleUp
				
			/> */}
    </button>
  );
};

export default ScrollButton;
