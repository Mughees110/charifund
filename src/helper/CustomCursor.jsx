"use client";

import { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorOuterRef = useRef(null);
  const cursorInnerRef = useRef(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    // Desktop fine pointer only — hide blue dot on touch/mobile
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const sync = () => setEnabled(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const cursorOuter = cursorOuterRef.current;
    const cursorInner = cursorInnerRef.current;
    if (!cursorOuter || !cursorInner) return;

    let mouseX = 0;
    let mouseY = 0;

    const moveCursor = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursorInner.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      cursorOuter.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
    };

    const addHoverClass = () => {
      cursorInner.classList.add("cursor-hover");
      cursorOuter.classList.add("cursor-hover");
    };

    const removeHoverClass = () => {
      cursorInner.classList.remove("cursor-hover");
      cursorOuter.classList.remove("cursor-hover");
    };

    document.addEventListener("mousemove", moveCursor);

    const hoverElements = document.querySelectorAll(
      "a, button, .cursor-pointer"
    );
    hoverElements.forEach((el) => {
      el.addEventListener("mouseenter", addHoverClass);
      el.addEventListener("mouseleave", removeHoverClass);
    });

    cursorInner.style.visibility = "visible";
    cursorOuter.style.visibility = "visible";

    return () => {
      document.removeEventListener("mousemove", moveCursor);
      hoverElements.forEach((el) => {
        el.removeEventListener("mouseenter", addHoverClass);
        el.removeEventListener("mouseleave", removeHoverClass);
      });
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <>
      <div ref={cursorOuterRef} className='mouseCursor cursor-outer' />
      <div ref={cursorInnerRef} className='mouseCursor cursor-inner' />
    </>
  );
};

export default CustomCursor;
