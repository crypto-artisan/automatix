'use client'
import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation, useInView } from "framer-motion";

export default function WhyUs() {
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
        <div ref={ref1} data-scroll-index='1' id="WhyUs" className="flex flex-col py-[40px] w-full mt-[20px] gap-4 bg-theme">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto w-full xl:w-[1200px] md:h-[400px]">
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                            x: -50
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            x: 0
                        },
                    }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="main-title w-full md:w-1/3 h-full"
                >
                    <div className="card flex flex-col h-full text-left text-theme-dark bg-white p-8 gap-4 rounded-xl">
                        <Image src="/assets/service1.png" alt="service" width={80} height={100} />
                        <h1 className="text-[24px] leading-7">Simplified AI Deployment</h1>
                        <p className="text-[18px] opacity-80">Automatix automates AI installation and configuration, requiring no technical expertise.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                            x: -50
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            x: 0
                        },
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="main-title w-full md:w-1/3 h-full"
                >
                    <div className="card flex flex-col h-full text-left text-theme-dark bg-white p-8 gap-4 rounded-xl">
                        <Image src="/assets/service2.png" alt="service" width={80} height={100} />
                        <h1 className="text-[24px] leading-7">Customizable Computing Power</h1>
                        <p className="text-[18px] opacity-80">Select from pre-configured bundles tailored to your project needs.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            x: 50,
                            y: -50
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                            y: 0
                        },
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="main-title flex-grow w-full md:w-1/3 h-full"
                >
                    <div className="card flex flex-col h-full text-left text-theme-dark bg-white p-8 gap-4 rounded-xl">
                        <Image src="/assets/service3.png" alt="service" width={80} height={100} />
                        <h1 className="text-[24px] leading-7">Pay as you go model</h1>
                        <p className="text-[18px] opacity-80">Users will be charged based on the computing resources utilized for deploying and managing their Al/ML models.</p>
                    </div>
                </motion.div>

            </div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mx-auto lg:px-[80px] w-full xl:w-[1200px] md:h-[360px]">
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
                    transition={{ duration: 1, delay: 0.8 }}
                    className="main-title w-full md:w-1/3 h-full"
                >
                    <div className="card flex flex-col h-full text-left text-theme-dark bg-white p-8 gap-4 rounded-xl">
                        <Image src="/assets/service4.png" alt="service" width={80} height={100} />
                        <h1 className="text-[24px] leading-7">User-Friendly Interface</h1>
                        <p className="text-[18px] opacity-80">Navigate easily with our intuitive interface designed for all users.</p>
                    </div>
                </motion.div>
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 50,
                            x: -50
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                            x: 0
                        },
                    }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="main-title w-full md:w-1/3 h-full"
                >
                    <div className="card flex flex-col h-full text-left text-theme-dark bg-white p-8 gap-4 rounded-xl">
                        <Image src="/assets/service5.png" alt="service" width={80} height={100} />
                        <h1 className="text-[24px] leading-7">Scalable Cloud Resources</h1>
                        <p className="text-[18px] opacity-80">Leverage cloud-based GPU resources for intensive AI tasks without needing local high-end hardware.</p>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}