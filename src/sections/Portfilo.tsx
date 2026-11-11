
import { useState } from "react";

import Section from "../components/Section";
import PortfolioCard from "../components/PortfiloCards";

import imagecard from "../assets/Web 1920 – 5 (2).png";

const portfolioItems = [
    {
        image: imagecard,
        color: "#9B782E",
    },
    {
        color: "#F4F0E8",
    },
    {
        image: "/images/project-3.png",
        color: "#39786A",
    },
];

export default function Portfolio() {

    const [currentIndex, setCurrentIndex] = useState(1);
    const handleNext = () => {
        setCurrentIndex((prev) =>
            (prev + 1) % portfolioItems.length
        );
    };
    const handlePrev = () => {
        setCurrentIndex((prev) =>
            (prev - 1 + portfolioItems.length) %
            portfolioItems.length
        );
    };
    const getPosition = (index: number) => {
        if (index === currentIndex) return 0;

        if (
            index ===
            (currentIndex - 1 + portfolioItems.length) %
            portfolioItems.length
        ) {
            return -1;
        }

        return 1;
    };

    return (
        <Section
            variant="secondary"
            contentClassName="w-full relative min-h-192 overflow-hidden pt-10"
            wave={{
                enabled: true,
                direction: "top",
                backgroundColor: "#F4F0E8",
                fillColor: "#043A2E",
                height: 150,
            }}
        >
            <h2 className="text-[#F3EFE8] text-[42px] text-center">نمونه کارهای آریوس</h2>
            <p className="text-[#F3EFE8] text-[30px] text-center mt-7">در آریوس، هر پروژه فرصتی برای خلق تجربه‌ای متفاوت و تبدیل ایده‌ها به نتایجی ماندگار است</p>
            <h3 className="relative z-10 text-center text-[16px] text-[#F3EFE8] mt-7">
                Our Portfolio | Success Stories
            </h3>
            <div className="relative mx-auto mt-17
                    h-190 w-full">

                {portfolioItems.map((item, index) => {
                    const position = getPosition(index);
                    const active = position === 0;

                    return (
                        <div
                            key={index}
                            className="absolute top-0
                                    transition-all duration-500
                                    ease-in-out"
                            style={{
                                left: "50%",
                                transform: `
                                        translateX(calc(-50% + ${position * 450}px))
                                    `,
                                top: active ? "0px" : "10px",
                                zIndex: active ? 3 : 2,
                            }}
                        >
                            <PortfolioCard
                                {...item}
                                active={active}
                            />
                        </div>
                    );
                })}
            </div>
            <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous portfolio"
                className="absolute left-[6.6%] top-[38%]
                        z-30 h-0 w-0
                        border-y-25 border-r-26
                        border-y-transparent
                        border-r-[#D7B36A]
                        transition-opacity hover:opacity-70"
            />
            <button
                type="button"
                onClick={handleNext}
                aria-label="Next portfolio"
                className="absolute right-[7.6%] top-[38%]
                        z-30 h-0 w-0
                        border-y-25 border-l-26
                        border-y-transparent
                        border-l-[#D7B36A]
                        transition-opacity hover:opacity-70"
            />
            <svg
                viewBox="0 0 2048 491"
                width="100%"
                preserveAspectRatio="none"
            >
                <path
                    d="
            M 0 0
            H 900
            C 914 0, 914 18, 930 30
            Q 938 38, 950 38
            H 1098
            Q 1110 38, 1118 30
            C 1134 18, 1134 0, 1148 0
            H 2048
            V 491
            H 0
            Z
        "
                    fill="#043A2E"
                />
            </svg>
        </Section>
    );
}
