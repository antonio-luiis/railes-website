"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const clientLogos = [
    "/images/1.png",
    "/images/2.png",
    "/images/3.png",
    "/images/4.png",
    "/images/5.png",
    "/images/6.png",
    "/images/7.png",
    "/images/8.png",
    "/images/9.png",
    "/images/10.png",
];

export function LogoMarquee() {
    // Duplicar o array para criar um loop infinito suave
    const duplicatedLogos = [...clientLogos, ...clientLogos];

    return (
        <div className="w-full overflow-hidden bg-gray-50/50 py-12">
            <div className="container mx-auto px-4 mb-8 text-center">
                <div className="flex items-center justify-center gap-2 text-sm font-medium text-gray-500">
                    <span className="text-purple-500">✦</span> Trusted by industry leaders
                </div>
            </div>

            <div className="relative w-full overflow-hidden">
                {/* Gradient masks nas laterais */}
                <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-gray-50/50 to-transparent z-10 pointer-events-none" />
                <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-gray-50/50 to-transparent z-10 pointer-events-none" />

                <motion.div
                    className="flex gap-12 items-center"
                    animate={{
                        x: [0, -1 * (clientLogos.length * (192 + 48))], // 192px width + 48px gap
                    }}
                    transition={{
                        x: {
                            repeat: Infinity,
                            repeatType: "loop",
                            duration: 25,
                            ease: "linear",
                        },
                    }}
                >
                    {duplicatedLogos.map((logo, index) => (
                        <div
                            key={index}
                            className="relative w-48 h-24 flex-shrink-0 grayscale hover:grayscale-0 opacity-60 hover:opacity-100 transition-all duration-300 cursor-pointer"
                        >
                            <Image
                                src={logo}
                                alt={`Client ${(index % clientLogos.length) + 1}`}
                                fill
                                sizes="192px"
                                className="object-contain"
                            />
                        </div>
                    ))}
                </motion.div>
            </div>
        </div>
    );
}
