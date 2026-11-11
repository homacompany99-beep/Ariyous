import type { HTMLAttributes, ReactNode } from "react";

type WaveProps = {
  enabled?: boolean;
  direction?: "top" | "bottom" | "deep";
  backgroundColor?: string;
  fillColor?: string;
  height?: number;
};

type SectionProps = HTMLAttributes<HTMLElement> & {
  variant?: "primary" | "secondary";
  className?: string;
  children: ReactNode;
  wave?: WaveProps;
  contentClassName?: string;
};

export default function Section({
  children,
  variant = "primary",
  className = "",
  wave,
  contentClassName = "",
  ...props
}: SectionProps) {
  const combined = `section ${variant} ${className}`.trim();

  return (
    <section className={combined} {...props}>
      <div className={contentClassName}>
        {children}
      </div>

      {wave?.enabled && (
        <svg
          className="block w-full"
          style={{
            height: `${wave.height ?? 150}px`,
            backgroundColor: wave.backgroundColor ?? "transparent",
          }}
          viewBox="0 0 1440 260"
          preserveAspectRatio="none"
        >
          <path
            d={
              wave.direction === "deep"
                ? "M0 0 C300 0 400 250 720 250 C1040 250 1140 0 1440 0 V260 H0 Z"
                : wave.direction === "bottom"
                  ? "M0 0 C300 0 400 150 720 150 C1040 150 1140 0 1440 0 V260 H0 Z"
                  : "M0 260 C300 260 400 0 720 0 C1040 0 1140 260 1440 260 V0 H0 Z"
            }
            fill={wave.fillColor ?? "#06382E"}
          />
        </svg>
      )}
    </section>
  );
}