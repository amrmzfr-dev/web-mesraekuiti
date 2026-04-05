"use client";

import WaveDivider from "@/components/shared/WaveDivider";

export default function MachineIllustration() {
  return (
    <section className="bg-[#0d1117]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        {/* Heading */}
        <div className="text-center mb-10">
          <p className="font-display font-semibold text-xs text-teal uppercase tracking-widest mb-3">
            See It In Action
          </p>
          <h2 className="font-display font-bold text-white text-2xl sm:text-3xl md:text-4xl mb-4">
            From Machine to Clean Cabin
          </h2>
          <p className="text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Ozone is generated, flows through the tube into your car, circulates through every corner, and eliminates bacteria on contact — reverting safely to O₂.
          </p>
        </div>

        {/* Illustration */}
        <div className="w-full overflow-x-auto">
          <svg
            width="100%"
            viewBox="0 0 960 360"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Ozone machine treatment illustration"
            style={{ minWidth: 480 }}
          >
            <style>{`
              @keyframes machinePulse {
                0%, 100% { opacity: 0.1; }
                50% { opacity: 0.28; }
              }
              @keyframes scanLine {
                0%   { transform: translateY(0px); }
                100% { transform: translateY(54px); }
              }
              @keyframes ledBlink {
                0%, 100% { opacity: 0.55; }
                50%       { opacity: 1; }
              }
              @keyframes ledHalo {
                0%, 100% { opacity: 0; }
                50%       { opacity: 0.15; }
              }
              @keyframes particleMove {
                0%   { transform: translate(0px,0px);   opacity: 0; }
                15%  { opacity: 0.85; }
                85%  { opacity: 0.6; }
                100% { transform: translate(95px,13px); opacity: 0; }
              }
              @keyframes tubeFlow {
                0%   { stroke-dashoffset: 16; }
                100% { stroke-dashoffset: 0; }
              }
              @keyframes entryGlow {
                0%, 100% { opacity: 0.1; transform: scale(1);   }
                50%       { opacity: 0.3; transform: scale(1.5); }
              }
              @keyframes interiorHaze {
                0%, 100% { opacity: 0.07; }
                50%       { opacity: 0.2; }
              }
              @keyframes circFlow {
                0%   { stroke-dashoffset: 0;   }
                100% { stroke-dashoffset: -20; }
              }
              @keyframes o3float0 {
                0%, 100% { transform: translate(0px,0px);  opacity: 0.6; }
                50%       { transform: translate(2px,-8px); opacity: 0.85; }
              }
              @keyframes o3float1 {
                0%, 100% { transform: translate(0px,0px);    opacity: 0.55; }
                40%       { transform: translate(-3px,-10px); opacity: 0.75; }
              }
              @keyframes o3float2 {
                0%, 100% { transform: translate(0px,0px);  opacity: 0.45; }
                60%       { transform: translate(3px,-9px); opacity: 0.65; }
              }
              /* 12s loop. All 4 appear together, then killed one by one at ~2s, 4s, 6s, 8s.
                 All gone from ~8.5s-12s, then loop restarts with all 4 showing again. */

              @keyframes bactBody1 {
                0%, 4%    { opacity: 0; transform: scale(0.2); }
                8%         { opacity: 1; transform: scale(1);   }
                15%        { opacity: 1; transform: scale(1);   }
                20%        { opacity: 0; transform: scale(0.3); }
                21%, 100%  { opacity: 0; }
              }
              @keyframes bactBody2 {
                0%, 4%    { opacity: 0; transform: scale(0.2); }
                8%         { opacity: 1; transform: scale(1);   }
                32%        { opacity: 1; transform: scale(1);   }
                37%        { opacity: 0; transform: scale(0.3); }
                38%, 100%  { opacity: 0; }
              }
              @keyframes bactBody3 {
                0%, 4%    { opacity: 0; transform: scale(0.2); }
                8%         { opacity: 1; transform: scale(1);   }
                49%        { opacity: 1; transform: scale(1);   }
                54%        { opacity: 0; transform: scale(0.3); }
                55%, 100%  { opacity: 0; }
              }
              @keyframes bactBody4 {
                0%, 4%    { opacity: 0; transform: scale(0.2); }
                8%         { opacity: 1; transform: scale(1);   }
                66%        { opacity: 1; transform: scale(1);   }
                71%        { opacity: 0; transform: scale(0.3); }
                72%, 100%  { opacity: 0; }
              }

              @keyframes bactElim1 {
                0%, 15%   { opacity: 0; transform: scale(0.5); }
                18%        { opacity: 1; transform: scale(1.3); }
                22%        { opacity: 0; transform: scale(0.1); }
                23%, 100%  { opacity: 0; }
              }
              @keyframes bactElim2 {
                0%, 32%   { opacity: 0; transform: scale(0.5); }
                35%        { opacity: 1; transform: scale(1.3); }
                39%        { opacity: 0; transform: scale(0.1); }
                40%, 100%  { opacity: 0; }
              }
              @keyframes bactElim3 {
                0%, 49%   { opacity: 0; transform: scale(0.5); }
                52%        { opacity: 1; transform: scale(1.3); }
                56%        { opacity: 0; transform: scale(0.1); }
                57%, 100%  { opacity: 0; }
              }
              @keyframes bactElim4 {
                0%, 66%   { opacity: 0; transform: scale(0.5); }
                69%        { opacity: 1; transform: scale(1.3); }
                73%        { opacity: 0; transform: scale(0.1); }
                74%, 100%  { opacity: 0; }
              }
            `}</style>

            <defs>
              <radialGradient id="carShadow" cx="50%" cy="50%" r="50%">
                <stop offset="0%"   stopColor="#000" stopOpacity=".55" />
                <stop offset="100%" stopColor="#000" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="intGlow" cx="50%" cy="40%" r="55%">
                <stop offset="0%"   stopColor="#0f6e56" stopOpacity=".15" />
                <stop offset="100%" stopColor="#0f6e56" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* OZONE MACHINE                                           */}
            {/* ═══════════════════════════════════════════════════════ */}
            <g>
              {/* outer glow ring */}
              <rect x="14" y="60" width="122" height="158" rx="12" fill="none" stroke="#0f6e56" strokeWidth="9" opacity=".1"
                style={{ animation: "machinePulse 2.5s ease-in-out infinite" }} />
              {/* handle */}
              <rect x="43" y="52" width="64" height="15" rx="5" fill="#131e2d" stroke="#0f6e56" strokeWidth="1" />
              <rect x="48" y="54" width="54" height="4"  rx="2" fill="#0f6e56" opacity=".18" />
              {/* body */}
              <rect x="18" y="65" width="116" height="152" rx="8" fill="#0f1923" stroke="#0f6e56" strokeWidth="1.5" />
              <line x1="18" y1="73" x2="18" y2="208" stroke="#1a3a2a" strokeWidth=".8" opacity=".35" />
              {/* screen bezel */}
              <rect x="28" y="79" width="97" height="64" rx="5" fill="#030c16" stroke="#0a2018" strokeWidth="1.2" />
              {/* screen */}
              <rect x="30" y="81" width="93" height="58" rx="4" fill="#040f1c" stroke="#0f6e56" strokeWidth=".8" />
              {/* scanline */}
              <rect x="30" y="81" width="93" height="4" rx="1" fill="#22d3ee" opacity=".1"
                style={{ animation: "scanLine 2.5s linear infinite", transformOrigin: "30px 81px" }} />
              <text x="76" y="105" textAnchor="middle" fill="#22d3ee" fontSize="21" fontWeight="bold" fontFamily="monospace">O₃</text>
              <text x="76" y="122" textAnchor="middle" fill="#0f6e56" fontSize="7"  fontFamily="monospace" letterSpacing="2">GENERATING</text>
              {/* LED */}
              <circle cx="120" cy="73" r="4"  fill="#22d3ee" style={{ animation: "ledBlink 1.4s ease-in-out infinite" }} />
              <circle cx="120" cy="73" r="11" fill="#22d3ee" opacity="0" style={{ animation: "ledHalo 1.4s ease-in-out infinite" }} />
              {/* vent slots */}
              {[154, 163, 172, 181, 190].map((y) => (
                <rect key={y} x="30" y={y} width="92" height="2.5" rx="1" fill="#0c3020" stroke="#0f6e56" strokeWidth=".4" opacity=".6" />
              ))}
              {/* nozzle */}
              <circle cx="140" cy="170" r="10"  fill="#09151f" stroke="#0f6e56" strokeWidth="1.5" />
              <circle cx="140" cy="170" r="5"   fill="#0f6e56" opacity=".85" style={{ animation: "ledBlink 1.1s ease-in-out infinite" }} />
              <circle cx="140" cy="170" r="2.5" fill="#22d3ee" opacity=".9" />
              {/* machine label */}
              <text x="76" y="228" textAnchor="middle" fill="#253545" fontSize="7.5" fontFamily="monospace" letterSpacing=".8">OZONE MACHINE</text>
              {/* internal particles */}
              {([
                { cy: 157, r: 2.5, opacity: ".85", delay: "0s"   },
                { cy: 160, r: 2,   opacity: ".67", delay: ".6s"  },
                { cy: 155, r: 2,   opacity: ".85", delay: "1.2s" },
              ] as const).map(({ cy, r, opacity, delay }) => (
                <circle key={delay} cx="45" cy={cy} r={r} fill="#22d3ee" opacity={opacity}
                  style={{ animation: "particleMove 1.8s ease-in-out infinite", animationDelay: delay }} />
              ))}
            </g>

            {/* ═══════════════════════════════════════════════════════ */}
            {/* TUBE                                                    */}
            {/* ═══════════════════════════════════════════════════════ */}
            <path d="M 140,170 C 178,170 210,184 234,226" stroke="#050b10" strokeWidth="8"   fill="none" strokeLinecap="round" />
            <path d="M 140,170 C 178,170 210,184 234,226" stroke="#132230" strokeWidth="5"   fill="none" strokeLinecap="round" />
            <path d="M 140,170 C 178,170 210,184 234,226" stroke="#1a3a2a" strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M 140,170 C 178,170 210,184 234,226" stroke="#22d3ee" strokeWidth="2"   fill="none" strokeLinecap="round"
              strokeDasharray="7 9" opacity=".85" style={{ animation: "tubeFlow .55s linear infinite" }} />

            {/* ═══════════════════════════════════════════════════════ */}
            {/* CAR                                                     */}
            {/* ═══════════════════════════════════════════════════════ */}

            {/* ground shadow */}
            <ellipse cx="620" cy="328" rx="295" ry="10" fill="url(#carShadow)" opacity=".7" />

            <g transform="translate(195, 15) scale(2.07, 2.07)">

              {/* ── MAIN BODY SHELL ── */}
              <path fill="#1a2840" stroke="#243550" strokeWidth=".6"
                d="M405.342,84.168V61.9c0,0-0.292-4.429-8.542-6.172c-8.25-1.742-51.318-12.453-51.318-12.453
                   s-43.656-32.699-58.439-36.538c-14.781-3.839-41.766-4.586-49.817-4.151c0,0-48.827-0.132-65.857,6.465
                   c-17.028,6.596-47.326,39.222-58.816,43.045c-11.492,3.823-79.153,18.396-88.884,24.771c0,0-7.569,3.351-9.452,9.15
                   c-1.885,5.798-3.231,16.751-3.231,16.751s-3.899,2.785-4.672,4.679c-0.775,1.895,4.672,23.098,4.672,23.098
                   s0.756,3.169,2.897,3.163c0.388-0.002,12.239-0.002,31.345-0.002c0.358-4.487,1.751-16.821,6.652-25.903
                   c6.093-11.296,21.782-11.766,29.761-11.551c22.509,0.603,25.559,8.05,29.087,15.724c2.414,5.252,3.563,15.676,4.05,21.728
                   c56.851,0.001,126.413,0.002,177.186,0.002c0.357-4.486,1.752-16.82,6.651-25.903c6.093-11.296,21.781-11.766,29.763-11.551
                   c22.508,0.603,25.558,8.05,29.085,15.724c2.414,5.254,3.565,15.68,4.051,21.732c0.064,0,0.101,0,0.101,0l42.85-17.33
                   c0,0,1.742-1.277,2.746-4.175c1-2.896,2.469-16.797,2.469-16.797L405.342,84.168z" />

              {/* body highlight edge top */}
              <path fill="none" stroke="#2a4060" strokeWidth=".5" opacity=".5" d="M 172,43 Q 250,35 345,43" />

              {/* ── WHEEL WELLS ── */}
              <path fill="#0c1620"
                d="M81.641,96.251c-7.98-0.215-23.668,0.255-29.761,11.551c-4.901,9.082-6.293,21.416-6.652,25.903
                   c17.941-0.001,42.282-0.002,69.55-0.002c-0.487-6.053-1.637-16.476-4.05-21.728C107.2,104.301,104.149,96.854,81.641,96.251z" />
              <path fill="#0c1620"
                d="M328.378,96.251c-7.981-0.215-23.67,0.255-29.763,11.551c-4.899,9.083-6.294,21.417-6.651,25.903
                   c39.558,0.001,67.705,0.002,69.55,0.002c-0.485-6.053-1.637-16.479-4.051-21.732C353.935,104.301,350.886,96.854,328.378,96.251z" />

              {/* ── GLASS BOX / CABIN WINDOWS ── */}
              <path fill="#0f1f30" stroke="#1e3a50" strokeWidth=".5"
                d="M222.983,7.906c0,0-46.126-0.837-62.993,12.257c-16.869,13.095-34.427,29.499-35.03,34.291
                   c-0.6,4.793,5.041,66.524,5.041,66.524s0.608,6.245,5.341,5.691h134.574c0,0,6.522-0.251,8.606-4.492
                   c3.475-7.066,2.608-6.947,41.958-61.815c0,0,2.295-2.524,3.625-6.828c0.947-3.061,1.228-9.552,1.228-9.552
                   s0.392-5.59-3.253-9.105c-3.646-3.516-20.088-17.876-32.205-22.096C275.454,7.759,222.983,7.906,222.983,7.906z" />


              {/* windshield A-pillar detail */}
              <path fill="#0d2235"
                d="M322.492,38.075c-2.394-4.045-21.003-17.782-23.667-19.288c-2.664-1.505-9.701-5.704-16.247-6.574
                   c-6.546-0.868-39.734-3.012-39.734-3.012l-26.413-0.404c0,0-30.003,1.447-42.628,6.61
                   c-10.545,4.312-13.326,5.94-18.479,9.975c0,0-6.121,5.543-10.967,9.886c-4.844,4.343-19.902,18.4-16.428,18.901
                   c3.475,0.502,193.724,0,193.724,0s1.297,0.095,1.53-1.815C323.413,50.441,324.885,42.122,322.492,38.075z" />

              {/* ── CIRCULATION LOOP (rounded rectangle) ── */}
              {/* outer ring — dashes flow clockwise */}
              <path
                d="M 183,35 L 279,35 Q 295,35 295,51 L 295,84 Q 295,100 279,100 L 183,100 Q 167,100 167,84 L 167,51 Q 167,35 183,35 Z"
                fill="none" stroke="#93c5fd" strokeWidth="1.2" strokeDasharray="8 12" strokeLinecap="round" opacity=".38"
                style={{ animation: "circFlow .85s linear infinite" }} />
              {/* inner ring — dashes flow counter-clockwise */}
              <path
                d="M 183,35 L 279,35 Q 295,35 295,51 L 295,84 Q 295,100 279,100 L 183,100 Q 167,100 167,84 L 167,51 Q 167,35 183,35 Z"
                fill="none" stroke="#93c5fd" strokeWidth=".8" strokeDasharray="5 15" strokeLinecap="round" opacity=".22"
                style={{ animation: "circFlow 1.3s linear infinite", animationDirection: "reverse" }} />

              {/* interior glow */}
              <ellipse cx="222" cy="75" rx="90" ry="18" fill="url(#intGlow)"
                style={{ animation: "interiorHaze 3.5s ease-in-out infinite" }} />

              {/* lower body crease */}
              <path fill="none" stroke="#1a2e40" strokeWidth=".5" opacity=".4"
                d="M 50,108 Q 200,103 350,106 Q 390,108 405,112" />

              {/* ── TAIL LIGHT ── */}
              <rect x="17" y="97"  width="5" height="14" rx="1.5" fill="#7f1919" stroke="#ef4444" strokeWidth=".4" opacity=".6" />
              <rect x="17" y="102" width="5" height="6"  rx="1"   fill="#ef4444" opacity=".75" />

              {/* ── HEADLIGHT ── */}
              <path d="M 395,73 L 405,76 L 405,84 L 393,82 Z" fill="#041118" stroke="#22d3ee" strokeWidth=".5" opacity=".55" />
              <rect x="397" y="75" width="8" height="2.5" rx="1.2" fill="#22d3ee" opacity=".35"
                style={{ animation: "ledBlink 2s ease-in-out infinite" }} />

              {/* front bumper lower trim */}
              <path d="M 397,108 L 406,106" stroke="#0f6e56" strokeWidth=".7" opacity=".4" fill="none" />

              {/* ── REAR WHEEL ── */}
              <g>
                <circle cx="81.6" cy="133" r="27"   fill="#080d14" />
                <circle cx="81.6" cy="133" r="24"   fill="none" stroke="#0e1820" strokeWidth="3" />
                <circle cx="81.6" cy="133" r="18"   fill="#16243a" stroke="#243550" strokeWidth="1" />
                <path d="M 73,123 Q 80,119 91,122" stroke="#2e4a68" strokeWidth=".8" fill="none" opacity=".6" strokeLinecap="round" />
                <line x1="81.6" y1="115"   x2="81.6" y2="151"   stroke="#243550" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="64.4" y1="122.8" x2="98.8" y2="143.2" stroke="#243550" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="64.4" y1="143.2" x2="98.8" y2="122.8" stroke="#243550" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="69"   y1="116.5" x2="94.2" y2="149.5" stroke="#1e3248" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="69"   y1="149.5" x2="94.2" y2="116.5" stroke="#1e3248" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="81.6" cy="133" r="10"  fill="none" stroke="#1a2e44" strokeWidth=".5" strokeDasharray="2.5 2.5" opacity=".5" />
                <circle cx="81.6" cy="133" r="5.5" fill="#0c1620" stroke="#243550" strokeWidth="1" />
                <circle cx="81.6" cy="133" r="2.5" fill="#1a2a3a" stroke="#2e4060" strokeWidth=".7" />
                <circle cx="81.6" cy="133" r="1"   fill="#243550" />
              </g>

              {/* ── FRONT WHEEL ── */}
              <g>
                <circle cx="328.4" cy="133" r="27"   fill="#080d14" />
                <circle cx="328.4" cy="133" r="24"   fill="none" stroke="#0e1820" strokeWidth="3" />
                <circle cx="328.4" cy="133" r="18"   fill="#16243a" stroke="#243550" strokeWidth="1" />
                <path d="M 320,123 Q 327,119 338,122" stroke="#2e4a68" strokeWidth=".8" fill="none" opacity=".6" strokeLinecap="round" />
                <line x1="328.4" y1="115"   x2="328.4" y2="151"   stroke="#243550" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="311.2" y1="122.8" x2="345.6" y2="143.2" stroke="#243550" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="311.2" y1="143.2" x2="345.6" y2="122.8" stroke="#243550" strokeWidth="2.2" strokeLinecap="round" />
                <line x1="315.8" y1="116.5" x2="341"   y2="149.5" stroke="#1e3248" strokeWidth="1.4" strokeLinecap="round" />
                <line x1="315.8" y1="149.5" x2="341"   y2="116.5" stroke="#1e3248" strokeWidth="1.4" strokeLinecap="round" />
                <circle cx="328.4" cy="133" r="10"  fill="none" stroke="#1a2e44" strokeWidth=".5" strokeDasharray="2.5 2.5" opacity=".5" />
                <circle cx="328.4" cy="133" r="5.5" fill="#0c1620" stroke="#243550" strokeWidth="1" />
                <circle cx="328.4" cy="133" r="2.5" fill="#1a2a3a" stroke="#2e4060" strokeWidth=".7" />
                <circle cx="328.4" cy="133" r="1"   fill="#243550" />
              </g>

              {/* ── O₃ BUBBLES ── */}
              {([
                { cx: 175, cy: 62, r: 10, so: ".28", to: ".8",  anim: "o3float0", dur: "4.5s", delay: "0s"   },
                { cx: 218, cy: 55, r: 10, so: ".25", to: ".75", anim: "o3float1", dur: "5.1s", delay: ".9s"  },
                { cx: 258, cy: 60, r: 10, so: ".22", to: ".7",  anim: "o3float2", dur: "4.8s", delay: "1.8s" },
                { cx: 298, cy: 57, r:  9, so: ".2",  to: ".65", anim: "o3float0", dur: "5.5s", delay: "2.7s" },
                { cx: 235, cy: 72, r:  9, so: ".18", to: ".6",  anim: "o3float1", dur: "4.2s", delay: "3.5s" },
              ] as const).map(({ cx, cy, r, so, to, anim, dur, delay }) => (
                <g key={`${cx}-${cy}`}
                  style={{ animation: `${anim} ${dur} ease-in-out infinite`, animationDelay: delay }}>
                  <circle cx={cx} cy={cy} r={r} fill="none" stroke="#22d3ee" strokeWidth=".7" opacity={so} />
                  <text x={cx} y={cy + 3.5} textAnchor="middle" fill="#22d3ee" fontSize="6.5" fontWeight="bold" fontFamily="system-ui" opacity={to}>O₃</text>
                </g>
              ))}

              {/* ── BACTERIA → ELIMINATED (all visible, killed one by one) ── */}
              {([
                { tx: 195, ty: 65, bodyAnim: "bactBody1", elimAnim: "bactElim1" },
                { tx: 245, ty: 57, bodyAnim: "bactBody2", elimAnim: "bactElim2" },
                { tx: 280, ty: 66, bodyAnim: "bactBody3", elimAnim: "bactElim3" },
                { tx: 165, ty: 76, bodyAnim: "bactBody4", elimAnim: "bactElim4" },
              ] as const).map(({ tx, ty, bodyAnim, elimAnim }) => (
                <g key={`${tx}-${ty}`} transform={`translate(${tx},${ty})`}>
                  {/* spiky bacteria body */}
                  <g style={{ animation: `${bodyAnim} 12s ease-in-out infinite`, transformOrigin: "0 0" }}>
                    <circle r="4.5" fill="#ef4444" opacity=".85" />
                    {([
                      [0,-4.5,0,-8], [3.2,-3.2,5.7,-5.7], [4.5,0,8,0], [3.2,3.2,5.7,5.7],
                      [0,4.5,0,8], [-3.2,3.2,-5.7,5.7], [-4.5,0,-8,0], [-3.2,-3.2,-5.7,-5.7],
                    ] as const).map(([x1,y1,x2,y2], i) => (
                      <line key={i} x1={x1} y1={y1} x2={x2} y2={y2}
                        stroke="#ef4444" strokeWidth="1.3" strokeLinecap="round" />
                    ))}
                    <circle r="1.8" fill="#fca5a5" opacity=".6" />
                  </g>
                  {/* ozone elimination flash */}
                  <g style={{ animation: `${elimAnim} 12s ease-in-out infinite`, transformOrigin: "0 0" }}>
                    <circle r="7" fill="none" stroke="#22d3ee" strokeWidth="1.4" opacity=".6" />
                    <line x1="-4.5" y1="-4.5" x2="4.5"  y2="4.5"  stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" />
                    <line x1="4.5"  y1="-4.5" x2="-4.5" y2="4.5"  stroke="#22d3ee" strokeWidth="1.8" strokeLinecap="round" />
                  </g>
                </g>
              ))}

              {/* ── LABELS ── */}
              <text x="148" y="48" fill="#0f6e56" fontSize="7.5" fontFamily="system-ui" fontWeight="bold" opacity=".8">O₃</text>
              <text x="148" y="57" fill="#374151" fontSize="5.5" fontFamily="system-ui" opacity=".6">flow</text>
              <text x="408" y="76" fill="#0f6e56" fontSize="8"   fontFamily="system-ui" fontWeight="bold" opacity=".5">→O₂</text>

            </g>
          </svg>
        </div>

        {/* Step annotations */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10 max-w-2xl mx-auto">
          {[
            { step: "01", label: "Ozone Generated",      desc: "Machine converts O₂ → O₃ at high concentration" },
            { step: "02", label: "Flows Into Cabin",     desc: "Tube delivers ozone through the car's entry point" },
            { step: "03", label: "Bacteria Eliminated",  desc: "O₃ oxidises pathogens, reverts safely to clean O₂" },
          ].map(({ step, label, desc }) => (
            <div key={step} className="flex flex-col items-center text-center gap-2">
              <span className="font-display font-bold text-teal text-xs uppercase tracking-widest">{step}</span>
              <p className="font-display font-semibold text-white text-sm">{label}</p>
              <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <WaveDivider from="#0d1117" to="#f8f9fa" />
    </section>
  );
}
