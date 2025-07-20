export const SVGLine1 = () => {
  return (
    <svg
      width="420"
      height="39"
      viewBox="0 0 420 39"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Chemin de base (visible en permanence) */}
      <path
        d="M419.161 0.00791132C419.22 0.671941 419.279 1.33597 419.339 2C412.365 2.6054 405.391 3.2108 398.417 3.81621C272.889 14.7134 147.361 25.6107 21.8325 36.5079C14.8588 37.1133 7.88491 37.7187 0.911144 38.3241C7.88195 37.6855 14.8528 37.0469 21.8236 36.4083C147.299 24.9135 272.773 13.4186 398.248 1.92372C405.219 1.28512 412.19 0.646515 419.161 0.00791132Z"
        fill="oklch(62.3% 0.214 259.815)"
        className="opacity-35"
      />

      {/* Définitions des effets */}
      <defs>
        {/* Gradient animé */}
        <linearGradient id="neonGradient" x1="100%" y1="50%" x2="0%" y2="50%">
          <stop offset="0%" stopColor="#3292FF" stopOpacity="0" />
          <stop offset="40%" stopColor="#3292FF" stopOpacity="1" />
          <stop offset="60%" stopColor="#61DAFB" stopOpacity="1" />
          <stop offset="100%" stopColor="#61DAFB" stopOpacity="0" />
        </linearGradient>

        {/* Filtre de lueur */}
        <filter id="neonGlow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Ligne animée */}
      <path
        d="M419.161 0.00791132C419.22 0.671941 419.279 1.33597 419.339 2C412.365 2.6054 405.391 3.2108 398.417 3.81621C272.889 14.7134 147.361 25.6107 21.8325 36.5079C14.8588 37.1133 7.88491 37.7187 0.911144 38.3241C7.88195 37.6855 14.8528 37.0469 21.8236 36.4083C147.299 24.9135 272.773 13.4186 398.248 1.92372C405.219 1.28512 412.19 0.646515 419.161 0.00791132Z"
        stroke="url(#neonGradient)"
        strokeWidth="2"
        fill="none"
        filter="url(#neonGlow)"
      >
        {/* Animation du gradient */}
        <animateTransform
          attributeName="gradientTransform"
          type="translate"
          from="1 0"
          to="-1 0"
          dur="2s"
          repeatCount="indefinite"
        />
      </path>
    </svg>
  );
};
