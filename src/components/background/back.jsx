import React from 'react';
import './back.css';
const SVGComponent = () => {
  return (
    <div className="container">
      <div className="background"></div>

      {/* SVG Vector Background */}
      <svg
        className="vector-background"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Subtle Grid Pattern */}
        <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
          <path
            d="M 40 0 L 0 0 0 40"
            fill="none"
            stroke="#e6e6e6"
            strokeWidth="0.5"
          />
        </pattern>
        <rect width="100%" height="100%" fill="url(#grid)" opacity="0.3" />

        {/* Code Bracket Elements */}
        <g fill="#3498db" opacity="0.06">
          <path d="M 50,100 L 20,150 L 50,200" stroke="#3498db" strokeWidth="5" fill="none" />
          <path d="M 100,100 L 130,150 L 100,200" stroke="#3498db" strokeWidth="5" fill="none" />
          <path d="M 1340,700 L 1310,750 L 1340,800" stroke="#3498db" strokeWidth="5" fill="none" />
          <path d="M 1390,700 L 1420,750 L 1390,800" stroke="#3498db" strokeWidth="5" fill="none" />
        </g>

        {/* Abstract Mountain Shapes */}
        <path
          d="M 0,900 L 300,600 L 500,750 L 700,450 L 900,650 L 1100,500 L 1300,700 L 1440,550 L 1440,900 Z"
          fill="#3498db"
          opacity="0.05"
        />
        <path
          d="M 0,900 L 200,700 L 400,800 L 600,600 L 800,750 L 1000,650 L 1200,800 L 1440,650 L 1440,900 Z"
          fill="#2ecc71"
          opacity="0.05"
        />

        {/* Compass */}
        <g transform="translate(1300, 200)">
          <circle cx="0" cy="0" r="40" fill="#f8f9fa" stroke="#e74c3c" strokeWidth="2" />
          <path d="M 0,-35 L 0,35 M -35,0 L 35,0" stroke="#e74c3c" strokeWidth="2" fill="none" />
          <path d="M 0,-30 L 5,-5 L 0,-15 L -5,-5 Z" fill="#e74c3c" />
          <text x="0" y="-45" textAnchor="middle" fill="#e74c3c" fontSize="12">
            N
          </text>
          <text x="45" y="0" textAnchor="middle" fill="#e74c3c" fontSize="12">
            E
          </text>
          <text x="0" y="55" textAnchor="middle" fill="#e74c3c" fontSize="12">
            S
          </text>
          <text x="-45" y="0" textAnchor="middle" fill="#e74c3c" fontSize="12">
            W
          </text>
        </g>

        {/* Binary/Code Elements */}
        <g fontFamily="monospace" fill="#2c3e50" opacity="0.08">
          <text x="100" y="350" fontSize="14">
            01001100
          </text>
          <text x="100" y="370" fontSize="14">
            10101010
          </text>
          <text x="100" y="390" fontSize="14">
            function travel() {'{'}
          </text>
          <text x="100" y="410" fontSize="14">
            {'  '}return code;
          </text>
          <text x="100" y="430" fontSize="14">
            {'}'}
          </text>

          <text x="1100" y="550" fontSize="14">
            01001100
          </text>
          <text x="1100" y="570" fontSize="14">
            10101010
          </text>
          <text x="1100" y="590" fontSize="14">
            const explore = () =&gt; {'{'}
          </text>
          <text x="1100" y="610" fontSize="14">
            {'  '}discover();
          </text>
          <text x="1100" y="630" fontSize="14">
            {'}'};
          </text>
        </g>

        {/* World Map Outline */}
        <path
          d="M300,150 C320,140 340,145 360,135 C380,125 400,130 420,140 C440,150 460,140 480,145 C500,150 520,145 540,150 C560,155 580,150 600,145 C620,140 640,150 660,155 C680,160 700,155 720,150 C740,145 760,150 780,155 C800,160 820,155 840,150 C860,145 880,150 900,155 C920,160 940,155 960,150 C980,145 1000,150 1020,155"
          fill="none"
          stroke="#3498db"
          strokeWidth="2"
          opacity="0.2"
        />

        {/* Connection Lines */}
        <g stroke="#3498db" strokeWidth="1" opacity="0.15">
          <path
            d="M 200,250 C 300,280 400,230 500,260 C 600,290 700,240 800,270 C 900,300 1000,250 1100,280"
            fill="none"
          />
          <path
            d="M 150,350 C 250,380 350,330 450,360 C 550,390 650,340 750,370 C 850,400 950,350 1050,380"
            fill="none"
          />
          <path
            d="M 100,450 C 200,480 300,430 400,460 C 500,490 600,440 700,470 C 800,500 900,450 1000,480"
            fill="none"
          />
        </g>

        {/* Location Pins */}
        <g>
          <path
            d="M 300,250 C 300,240 290,230 280,230 C 270,230 260,240 260,250 C 260,270 280,300 280,300 C 280,300 300,270 300,250 Z"
            fill="#e74c3c"
            opacity="0.3"
          />
          <path
            d="M 800,350 C 800,340 790,330 780,330 C 770,330 760,340 760,350 C 760,370 780,400 780,400 C 780,400 800,370 800,350 Z"
            fill="#e74c3c"
            opacity="0.3"
          />
          <path
            d="M 500,180 C 500,170 490,160 480,160 C 470,160 460,170 460,180 C 460,200 480,230 480,230 C 480,230 500,200 500,180 Z"
            fill="#e74c3c"
            opacity="0.3"
          />
          <path
            d="M 1100,300 C 1100,290 1090,280 1080,280 C 1070,280 1060,290 1060,300 C 1060,320 1080,350 1080,350 C 1080,350 1100,320 1100,300 Z"
            fill="#e74c3c"
            opacity="0.3"
          />
        </g>

        {/* Dotted Circuit Lines */}
        <g stroke="#2ecc71" strokeWidth="1.5" strokeDasharray="5,5" opacity="0.2">
          <path
            d="M 50,600 L 200,600 L 200,700 L 350,700 L 350,600 L 500,600"
            fill="none"
          />
          <path
            d="M 950,600 L 1100,600 L 1100,700 L 1250,700 L 1250,600 L 1400,600"
            fill="none"
          />
          <circle cx="200" cy="600" r="5" fill="#2ecc71" />
          <circle cx="350" cy="700" r="5" fill="#2ecc71" />
          <circle cx="1100" cy="600" r="5" fill="#2ecc71" />
          <circle cx="1250" cy="700" r="5" fill="#2ecc71" />
        </g>
      </svg>
    </div>
  );
};

export default SVGComponent;
