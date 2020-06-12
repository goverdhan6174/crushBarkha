import React, { useEffect } from 'react'
import imgArr from "./helper/images";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { animationVariants } from './helper/animationVariants';
import useMobileDetect from './helper/useMobileDetect';



function VideoSection() {
    const { isMobile } = useMobileDetect();
    const animation = useAnimation();
    const [containerRef, inView] = useInView({ triggerOnce: true, rootMargin: isMobile() ? "-40%" : "-30%" });

    useEffect(() => {
        if (inView) {
            animation.start("visible")
        }
    }, [inView, animation])

    return (
        <div className="crushVideoSection" ref={containerRef}>
            <motion.div className="crushVideoContianer" animate={animation} initial={"hidden"} variants={animationVariants(0, 0, 0.95)}>
                <motion.img src={imgArr[6].src} alt="" id="crushVideoThumbnail" animate={animation} initial={"hidden"} variants={animationVariants(0, 0, 0.97)} />
            </motion.div>
            <motion.blockquote id="crushFewLinesAboutVideo" animate={animation} initial={"hidden"} variants={animationVariants(0, 30, 1, 0.8, 3)}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
            </motion.blockquote>
        </div >
    )
}

export default VideoSection
