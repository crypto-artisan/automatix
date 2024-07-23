'use client'
import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion";

export default function Tokenomics() {
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
        <div ref={ref1} data-scroll-index='4' id="Tokenomics" className="flex flex-row py-[40px] mt-[20px] w-full xl:w-[1200px] mx-auto">
            <div className="flex flex-col flex-1 items-start text-left gap-4">
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
                    <h1 className="text-[56px] text-theme-blue">
                        <span className="text-[56px] text-theme-dark">Token</span>
                        omics
                    </h1>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: -100,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="main-title"
                >
                    <div className="text-[16px] md:text-[20px] rounded-xl px-4 py-2 text-white bg-theme opacity-80 border-[3px] border-[#334155]">
                        Ecosystem development and marketing : 20%
                    </div>
                </motion.div>
                <div className="flex flex-row gap-4">
                    <motion.div
                        initial="hidden"
                        animate={mainControls}
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: -100,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                        transition={{ duration: 1, delay: 0 }}
                        className="main-title"
                    >

                        <div className="text-[16px] md:text-[20px] rounded-xl px-4 py-2 text-white bg-[#e43efc] opacity-80 border-[3px] border-[#334155]">
                            CEX : 5%
                        </div>
                    </motion.div>
                    <motion.div
                        initial="hidden"
                        animate={mainControls}
                        variants={{
                            hidden: {
                                opacity: 0,
                                x: 100,
                            },
                            visible: {
                                opacity: 1,
                                x: 0,
                            },
                        }}
                        transition={{ duration: 1, delay: 0 }}
                        className="main-title"
                    >
                        <div className="text-[16px] md:text-[20px] rounded-xl px-4 py-2 text-white bg-[#f7a245] opacity-80 border-[3px] border-[#334155]">
                            Staking rewards : 5%
                        </div>
                    </motion.div>

                </div>
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
                    <div className="text-[16px] md:text-[20px] rounded-xl px-4 py-2 text-white bg-theme opacity-80 border-[3px] border-[#334155]">
                        Liquidity : 70%
                    </div>
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
                    <Image width={300} height={800} alt="tokenomics" src="/assets/tokenomics.png" />
                </motion.div>
            </div>
        </div>
    )
}