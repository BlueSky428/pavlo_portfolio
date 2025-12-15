import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Cursor = () => {
    const cursorRef = useRef(null);
    const smallCursorRef = useRef(null);

    useEffect(() => {
        const cursor = cursorRef.current;
        const smallCursor = smallCursorRef.current;

        const handleMouseMove = (e) => {
            if (cursor && smallCursor) {
                gsap.to(cursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 1,
                    ease: "power3.out",
                });
                gsap.to(smallCursor, {
                    x: e.clientX,
                    y: e.clientY,
                    duration: 1.8,
                    ease: "power3.out",
                });
            }
        };

        const onMouseEnter = () => {
            if (cursor) {
                gsap.to(cursor, {
                    width: "3.5rem",
                    height: "3.5rem",
                    backgroundColor: "#797878",
                    opacity: "0.2",
                    duration: 0.5,
                });
            }
        };

        const onMouseLeave = () => {
            if (cursor) {
                gsap.to(cursor, {
                    width: "2.5rem",
                    height: "2.5rem",
                    backgroundColor: "transparent",
                    borderColor: "#797878",
                    opacity: "1",
                    duration: 0.5,
                });
            }
        };

        document.addEventListener("mousemove", handleMouseMove);
        const hoverTargets = document.querySelectorAll(".hover-target");
        hoverTargets.forEach((target) => {
            target.addEventListener("mouseenter", onMouseEnter);
            target.addEventListener("mouseleave", onMouseLeave);
        });

        return () => {
            document.removeEventListener("mousemove", handleMouseMove);
            hoverTargets.forEach((target) => {
                target.removeEventListener("mouseenter", onMouseEnter);
                target.removeEventListener("mouseleave", onMouseLeave);
            });
        };
    }, []);

    return (
        <>
            <div
                ref={cursorRef}
                className="fixed top-0 left-0 w-[2.5rem] h-[2.5rem] bg-transparent border border-[#333333] rounded-full pointer-events-none z-[1000] transform -translate-x-1/2 -translate-y-1/2"
            ></div>
            <div
                ref={smallCursorRef}
                className="fixed top-0 left-0 w-2.5 h-2.5 bg-[#797878] rounded-full pointer-events-none z-[1000] transform -translate-x-1/2 -translate-y-1/2"
            ></div>
        </>
    );
};

export default Cursor;