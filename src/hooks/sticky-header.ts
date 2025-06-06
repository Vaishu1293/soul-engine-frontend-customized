
import {  useEffect } from "react";
import useGlobalContext from "./use-context";
const useScrollDirection = (element: HTMLElement | null) => {
  const {scrollDirection, setScrollDirection} = useGlobalContext()
  
  useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > prevScrollY) {
        setScrollDirection?.("down");
      } else {
        setScrollDirection?.("up");
      }
      prevScrollY = scrollTop;
    };

    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    };

    window.addEventListener("scroll", handleScroll);
    if (element) {
      element.addEventListener("click", handleClick);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [element,setScrollDirection]);

  return scrollDirection;
};

export default useScrollDirection;