'use client'
import { useRef, useEffect } from "react"
import { motion, useAnimation, useInView } from "framer-motion";

export default function RoadMap() {
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
        <div ref={ref1} data-scroll-index='5' id="RoadMap" className="flex flex-col w-full xl:w-[1200px] mx-auto gap-4 mt-[20px]">
            <div className="flex flex-col md:flex-row items-start text-left gap-4 w-full md:h-[160px]">
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 70,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="main-title md:w-1/2 w-full h-full"
                >
                    <div className="flex flex-col h-full text-theme-dark py-4 px-4 rounded-xl border-[2px] border-[#0474f11a]">
                        <h2 className="text-[24px]">Q3 2024</h2>
                        <p className="text-[18px]">
                            Launch of Automatix platform with core features including simplified AI deployment and customizable computing power bundles.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 70,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="main-title md:w-1/2 w-full h-full"
                >
                    <div className="flex flex-col h-full text-theme-dark py-4 px-4 rounded-xl border-[2px] border-[#0474f11a]">
                        <h2 className="text-[24px]">Q4 2024</h2>
                        <p className="text-[18px]">
                            Integration with additional cloud providers and enhanced security features.
                        </p>
                    </div>
                </motion.div>
            </div>
            <div className="flex flex-col md:flex-row items-start text-left gap-4 w-full md:h-[140px]">
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 70,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="main-title md:w-1/2 w-full h-full"
                >
                    <div className="flex flex-col h-full text-theme-dark py-4 px-4 rounded-xl border-[2px] border-[#0474f11a]">
                        <h2 className="text-[24px]">Q1 2025</h2>
                        <p className="text-[18px]">
                            Expansion of supported AI applications and continuous improvement based on user feedback.
                        </p>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 70,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="main-title md:w-1/2 w-full h-full"
                >
                    <div className="flex flex-col h-full text-theme-dark py-4 px-4 rounded-xl border-[2px] border-[#0474f11a]">
                        <h2 className="text-[24px]">Q2 2025</h2>
                        <p className="text-[18px]">
                            Development of advanced AI integration capabilities and new user interface enhancements.
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}