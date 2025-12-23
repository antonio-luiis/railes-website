"use client";

import { motion } from "framer-motion";

const textLogos = [
    "BIAL", "Pfizer", "TEKEVER", "VIPEX", "SITECNA", "BIAL", "Pfizer", "TEKEVER"
];

export function LogoMarquee() {
    return (
        <div className="w-full overflow-hidden bg-gray-50/50 py-8">
            <div className="container mx-auto px-4 mb-4 text-center">
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
                    <span className="text-purple-500">✦</span> Trusted by
                </div>
            </div>
            <div className="relative flex w-full overflow-hidden mask-image-linear-gradient">
                <motion.div
                    className="flex min-w-full shrink-0 gap-12 items-center justify-around px-12"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {textLogos.map((logo, index) => (
                        <span
                            key={index}
                            className="text-2xl font-bold text-gray-300 uppercase tracking-widest whitespace-nowrap"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>
                <motion.div
                    className="flex min-w-full shrink-0 gap-12 items-center justify-around px-12 absolute top-0 left-full"
                    animate={{ x: ["0%", "-100%"] }}
                    transition={{
                        repeat: Infinity,
                        ease: "linear",
                        duration: 20,
                    }}
                >
                    {textLogos.map((logo, index) => (
                        <span
                            key={`duplicate-${index}`}
                            className="text-2xl font-bold text-gray-300 uppercase tracking-widest whitespace-nowrap"
                        >
                            {logo}
                        </span>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
