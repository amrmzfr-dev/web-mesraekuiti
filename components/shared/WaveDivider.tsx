interface WaveDividerProps {
  from: string; // CSS color or hex
  to: string;
  flip?: boolean;
  className?: string;
}

export default function WaveDivider({
  from,
  to,
  flip = false,
  className = "",
}: WaveDividerProps) {
  return (
    <div
      className={`w-full overflow-hidden leading-[0] ${flip ? "scale-y-[-1]" : ""} ${className}`}
      aria-hidden="true"
      style={{ background: from }}
    >
      <svg
        viewBox="0 0 1440 56"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="block w-full"
        style={{ height: "56px" }}
      >
        <path
          d="M0,28 C240,56 480,0 720,28 C960,56 1200,0 1440,28 L1440,56 L0,56 Z"
          fill={to}
        />
      </svg>
    </div>
  );
}
