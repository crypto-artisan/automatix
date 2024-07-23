'use client'
import { useRef, useEffect } from "react"
import { Button } from "@nextui-org/button"
import NextLink from "next/link"
import { siteConfig } from "@/config/site"
import { motion, useAnimation, useInView } from "framer-motion";

export default function JoinUs() {
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
        <div ref={ref1} data-scroll-index='6' id="JoinUs" className="flex flex-col py-[40px] w-full mt-[20px] gap-4 bg-theme">
            <div className="flex flex-row items-center justify-center gap-4 mx-auto">
                <motion.div
                    initial="hidden"
                    animate={mainControls}
                    variants={{
                        hidden: {
                            opacity: 0,
                            y: 100,
                        },
                        visible: {
                            opacity: 1,
                            y: 0,
                        },
                    }}
                    transition={{ duration: 1, delay: 0 }}
                    className="main-title flex-grow w-1/3"
                >
                    <div className="flex flex-col items-center justify-center text-left text-theme-dark bg-white w-full xl:w-[800px] mx-auto p-8 md:px-32 gap-8 rounded-2xl">
                        <h1 className="text-[56px] text-theme-dark">
                            <span className="text-[56px] text-theme-blue">Join</span>
                            us
                        </h1>
                        <p className="text-[24px] text-center">
                            Join the Automatix community to be part of the AI revolution. Follow us for updates and share your feedback as we democratize AI.
                        </p>
                        <div className="flex flex-row gap-2">
                            <NextLink href={siteConfig.links.telegram}>
                                <Button isIconOnly aria-label="Like" className="group rounded-full bg-transparent border-[2px] border-[#0474f1] w-[50px] h-[50px] hover:bg-theme hover:[&path{fill: 'yellow'}]">
                                    <svg width={24} height={24} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:fill-[white] fill-[#0474f1]" d="M446.7 98.6l-67.6 318.8c-5.1 22.5-18.4 28.1-37.3 17.5l-103-75.9-49.7 47.8c-5.5 5.5-10.1 10.1-20.7 10.1l7.4-104.9 190.9-172.5c8.3-7.4-1.8-11.5-12.9-4.1L117.8 284 16.2 252.2c-22.1-6.9-22.5-22.1 4.6-32.7L418.2 66.4c18.4-6.9 34.5 4.1 28.5 32.2z">
                                        </path>
                                    </svg>
                                </Button>
                            </NextLink>
                            <NextLink href={siteConfig.links.twitter}>
                                <Button isIconOnly aria-label="Like" className="rounded-full bg-transparent border-[2px] border-[#0474f1] w-[50px] h-[50px] hover:bg-theme">
                                    <svg width={24} height={24} viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                                        <path className="group-hover:fill-[white] fill-[#0474f1]" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                                        </path>
                                    </svg>
                                </Button>
                            </NextLink>
                        </div>
                    </div>
                </motion.div>
            </div>

        </div>
    )
}