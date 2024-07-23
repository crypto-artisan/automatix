'use client'
import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion";

export default function OurVision() {
    const ref1 = useRef(null);
    const isInView = useInView(ref1, { once: true });

    const mainControls = useAnimation();

    useEffect(() => {
        const sequence = async () => {
            await mainControls.start("visible");
            mainControls.start({
                y: [0],
                transition: { duration: 1 },
            });
        };

        if (isInView) {
            sequence();
        }
    }, [isInView, mainControls]);

    return (
        <div ref={ref1} data-scroll-index='2' id="OurVision" className="flex flex-row py-[40px] w-full xl:w-[1200px] mx-auto mt-[20px]">
            <div className="flex flex-col flex-1 items-start gap-4 text-left">
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="main-title"
                >
                    <h1 className="text-[56px] text-theme-blue">
                        <span className="text-[56px] text-theme-dark">Our</span>
                        Vision
                    </h1>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0.3 }}
                    className="main-title"
                >
                    <h1 className="text-[32px] text-theme-dark">
                        Democratizing AI Access
                    </h1>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="main-title"
                >
                    <p className="text-[24px] text-theme-dark">
                        Automatix aims to make AI and ML technologies simple, affordable, and accessible, breaking down barriers and empowering everyone to use advanced AI.
                    </p>
                </motion.div>
            </div>
            <div className="hidden md:flex flex-1 items-center justify-center">
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: 500,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="main-title"
                >
                    <Image width={500} height={800} alt="robot" src="/assets/robot-vision.png" />
                </motion.div>
            </div>

        </div>
    )
}