import { ReactNode } from "react";

interface SectionWrapperProps {
  id?: string;
  className?: string;
  children: ReactNode;
}

export default function SectionWrapper({
  id,
  className = "",
  children,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 px-4 sm:px-6 lg:px-8 ${className}`}>
      <div className="max-w-[1200px] mx-auto">{children}</div>
    </section>
  );
}
