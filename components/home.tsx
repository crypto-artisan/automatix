'use client'
import { useRef, useEffect } from "react"
import { Button } from "@nextui-org/button"
import { ArrowIcon, BookIcon } from "./icons"
import Image from "next/image"
import { siteConfig } from "@/config/site";
import NextLink from "next/link"
import { motion, useAnimation, useInView } from "framer-motion";

export default function MyHome() {
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
        <div ref={ref1} data-scroll-index='0' id="Home" className="flex flex-row py-[40px] w-full xl:w-[1200px] mx-auto mt-[150px]">
            <div className="flex flex-col flex-1 items-center justify-center gap-4">
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
                    <Image width={700} height={100} alt="robot" src="/logo-blue.png" className="w-[300px] md:w-[700px]" />
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
                    transition={{ duration: 1, delay: 1 }}
                    className="main-title"
                >
                    <h1 className="text-[36px] md:text-[56px] text-theme-blue">
                        <span className="line-through text-[32px] text-theme-dark">Artificial</span>
                        Architectural
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
                    transition={{ duration: 1, delay: 2 }}
                    className="main-title"
                >
                    <h1 className="text-[56px] text-theme-blue">
                        Inteligence
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
                    transition={{ duration: 1, delay: 3 }}
                    className="main-title"
                >
                    <h1 className="text-[24px]">
                        We simplify architecture for AI innovators
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
                    transition={{ duration: 1, delay: 3 }}
                    className="main-title"
                >
                    <div className="flex flex-row gap-2 md:gap-4 py-8">
                        <NextLink href={siteConfig.links.dapp}>
                            <Button className="customBtn flex flex-row py-6 text-[12px] md:text-[16px] border-1 self-start"
                                endContent={<ArrowIcon color='#ffffff' />}
                            >
                                Launch Dapp
                            </Button>
                        </NextLink>
                        <NextLink href={siteConfig.links.whitepaper}>
                            <Button className="customBtn flex flex-row py-6 text-[12px] md:text-[16px] border-1 self-start text-theme-dark"
                                endContent={<BookIcon color='#334155' />}
                            >
                                Whitepaper
                            </Button>
                        </NextLink>
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
                            x: 300,
                        },
                        visible: {
                            opacity: 1,
                            x: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="main-title"
                >
                    <Image width={500} height={800} alt="robot" src="/assets/robot.png" />
                </motion.div>
            </div>

        </div>
    )
}