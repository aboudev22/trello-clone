export default function page() {
  return (
    <div className="w-screen h-screen bg-neutral-900 flex justify-center items-center">
      <div
        style={{ transform: "perspective(1000px) rotateY(30deg)" }}
        className="w-xs h-36 bg-amber-100 perspective-distant transform-3d rotate-y-12"
      ></div>
    </div>
  );
}

const ButtonWithAnimatedBorder = () => {
  return (
    <button className="relative overflow-hidden rounded-lg bg-gray-900 px-6 py-3 text-white">
      <span className="relative z-10">Hover Me</span>

      {/* SVG pour l'effet lumineux */}
      <svg
        className="absolute left-0 top-0 h-full w-full"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {/* Le tracé de la bordure (un rectangle arrondi) */}
        <path
          d="M5,5 L95,5 A5,5 0 0,1 100,10 L100,90 A5,5 0 0,1 95,95 L5,95 A5,5 0 0,1 0,90 L0,10 A5,5 0 0,1 5,5 Z"
          fill="none"
          stroke="transparent"
          strokeWidth="2"
          strokeDasharray="0, 1000" // Empêche le tracé d'être visible
        />

        {/* La lumière animée (un petit segment qui suit le tracé) */}
        <path
          d="M5,5 L95,5 A5,5 0 0,1 100,10 L100,90 A5,5 0 0,1 95,95 L5,95 A5,5 0 0,1 0,90 L0,10 A5,5 0 0,1 5,5 Z"
          fill="none"
          stroke="url(#light-gradient)"
          strokeWidth="5"
          strokeLinecap="round"
          strokeDasharray="10, 1000" // Longueur du segment lumineux
        >
          <animate
            attributeName="stroke-dashoffset"
            from="0"
            to="1000"
            dur="8s"
            repeatCount="indefinite"
          />
        </path>

        {/* Dégradé pour l'effet lumineux */}
        <defs>
          <linearGradient
            id="light-gradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            {/* transparent */}
            <stop offset="0%" stopColor="#3b82f6" />
            <stop offset="30%" stopColor="#3b82f6" />
            <stop offset="70%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
        </defs>
      </svg>
    </button>
  );
};
