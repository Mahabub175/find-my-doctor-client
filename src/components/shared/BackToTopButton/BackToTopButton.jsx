/* eslint-disable react-refresh/only-export-components */
import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`${
        isVisible ? "opacity-100" : "opacity-0"
      } fixed bottom-10 right-10 bg-primary p-3 rounded-full cursor-pointer transition-opacity hover:scale-105 duration-300 z-40`}
      onClick={scrollToTop}
    >
      <FaArrowUp className="text-white text-bold text-xl" />
    </div>
  );
};

export default BackToTopButton;
