
import type { FC } from "react";

interface PortfolioCardProps {
    image?: string;
    color?: string;
    active?: boolean;
    className?: string;
}

const PortfolioCard: FC<PortfolioCardProps> = ({
    image,
    color = "#F4F0E8",
    active = false,
    className = "",
}) => {
    return (
        <div
            className={`
                relative h-[598px] w-[318px] shrink-0
                transition-transform duration-500
                ${active ? "scale-100" : "scale-[0.8]"}
                ${className}
            `}
        >
            <div
                className="relative h-[567px] w-full rounded-[28px]"
                style={{ backgroundColor: color }}
            >
                <svg
                    viewBox="0 0 446 90"
                    className="absolute -top-4.25 left-1/2
                    h-5 w-22.5 -translate-x-1/2
                    rounded-t-[45px]"
                >
                    <path
                        d="M70 0 H376 Q399 0 413 25 L446 90 H0 L33 25 Q47 0 70 0 Z"
                        fill={color}
                    />
                </svg>
                {image && (
                    <div
                        className="absolute inset-x-3.5 top-5.5
                        bottom-22.5 overflow-hidden rounded-[18px]  backdrop-blur-md [mask-image:linear-gradient(to_top,transparent,black)]"
                    >
                        <img
                            src={image}
                            alt="Portfolio preview"
                            className="h-full w-full object-cover"
                        />
                        {!active && (
                            <div
                                className="absolute inset-0"
                                style={{
                                    backgroundColor: color,
                                    opacity: 0.35,
                                    mixBlendMode: "multiply",
                                }}
                            />
                        )}
                    </div>
                )}
            </div>
            <div className="absolute bottom-0 left-1/2 flex
    h-8 w-35 -translate-x-1/2
    items-center justify-evenly">

                <svg
                    viewBox="0 0 666 133"
                    className="absolute inset-0 z-0 h-full w-full"
                    preserveAspectRatio="none"
                >
                    <path
                        d="
                M 0 0
                H 666
                C 640 18, 632 102, 566 128
                Q 558 133, 548 133
                H 118
                Q 108 133, 100 128
                C 34 102, 26 18, 0 0
                Z
            "
                        fill={color}
                    />
                </svg>

                <span className="relative z-10 h-2.75 w-2.75 rounded-full bg-[#072C23]" />

                <span className="relative z-10 h-3 w-3 rounded-full bg-white" />

                <span
                    className="relative z-10 h-0 w-0 border-x-[7px]
        border-b-12 border-x-transparent
        border-b-[#072C23]"
                />
            </div>
        </div >
    );
};

export default PortfolioCard;
