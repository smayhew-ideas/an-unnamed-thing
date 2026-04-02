import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import svgPaths from "../../imports/svg-a0ql0raaia";
import thesourceImg from "../assets/thesource.png";

export default function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0a] text-white overflow-x-hidden">
      {/* Desktop: Fixed 1440px centered | Tablet/Mobile: Responsive */}
      <div className="relative w-full max-w-[1440px] min-h-screen lg:h-[960px] mx-auto">
        
        {/* Desktop: Exact Figma layout with absolute positioning */}
        <div className="hidden lg: block">
          <div className="absolute inset-[96px_80px] overflow-visible">
            
            {/* Navigation Cards - Absolute positioned on right */}
            <div className="absolute left-[1004.93px] top-0 w-[195.074px]">
              <Navigation />
            </div>

            {/* Header SVG - "Ai and the unnamed thing" */}
            <div className="absolute h-[201px] left-0 top-0 w-[477.406px]">
              <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 477.406 201">
                <g id="HEADER">
                  <path d={svgPaths.pb226c80} fill="#E70A0A" />
                  <path d={svgPaths.p3a774800} fill="white" />
                  <path d={svgPaths.p19cc8700} fill="white" />
                  <path d={svgPaths.p25bab000} fill="white" />
                  <path d={svgPaths.p2240d880} fill="white" />
                  <path d={svgPaths.p3cf0cf00} fill="white" />
                  <path d={svgPaths.p3a50580} fill="white" />
                  <path d={svgPaths.p3dcc6df0} fill="white" />
                  <path d={svgPaths.p38da100} fill="white" />
                  <path d={svgPaths.p1072d880} fill="white" />
                  <path d={svgPaths.p3dbd3f80} fill="white" />
                  <path d={svgPaths.p2a3c1c00} fill="white" />
                  <path d={svgPaths.p32c439f0} fill="white" />
                  <path d={svgPaths.pbbc3100} fill="white" />
                  <path d={svgPaths.p2a6a1280} fill="white" />
                  <path d={svgPaths.pafabb00} fill="white" />
                  <path d={svgPaths.p24133900} fill="white" />
                  <path d={svgPaths.p7bcd000} fill="white" />
                  <path d={svgPaths.p3744100} fill="white" />
                  <path d={svgPaths.p1176b000} fill="white" />
                </g>
              </svg>
            </div>

            {/* Subtitle Text */}
            <div className="absolute left-0 top-[214px] w-[601px] overflow-hidden">
              <div className="w-[590px]">
                <p 
                  className="font-thin text-[#adadad] text-[38px] tracking-[-0.38px] leading-[48px] mb-0"
                  style={{ fontVariationSettings: "'opsz' 32" }}
                >
                  Ai has virtually bottled human cognition.
                </p>
                <p 
                  className="font-thin text-[#adadad] text-[38px] tracking-[-0.38px] leading-[48px]"
                  style={{ fontVariationSettings: "'opsz' 32" }}
                >
                  But who's name is on the label?
                </p>
              </div>
            </div>

            {/* Central Graphic with Fade Animation */}
            <div
                  className={`absolute h-[490px] w-[980px] left-1/2 top-[calc(50%+15px)] -translate-x-1/2 -translate-y-1/2 transition-all duration-1000 ${...}`}                fadeIn ? "opacity-100" : "opacity-0"
              }`}
              style={{ transform: `translate(-50%, calc(-50% + ${fadeIn ? '0px' : '32px'}))` }}
            >
              <img
                alt="The Source - Identity and Value visualization"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
                src={thesourceImg}
              />
            </div>

            {/* Bottom Text - "Identity and Value" */}
            <div className="absolute top-[596px] right-[195.07px] w-[640px] text-right leading-[0]">
              <p className="font-thin text-white text-[78px] leading-normal mb-0">
                Identity and Value
              </p>
              <p className="font-light text-[#737373] text-[24px] tracking-[-0.48px] leading-[1.71] mb-0">
                A conversation about extractive industries and its new resource
              </p>
              <p className="font-light text-[#737373] text-[24px] tracking-[-0.48px] leading-[1.058]">
                The Human Substrate
              </p>
            </div>

          </div>
        </div>

        {/* Tablet/Mobile: Responsive flexbox layout */}
        <div className="lg:hidden px-6 py-8 md:px-12 md:py-12">
          
          {/* Mobile Navigation Button */}
          <div className="mb-8">
            <Navigation />
          </div>

          {/* Header SVG */}
          <div className="w-full max-w-[477px] mb-6">
            <svg className="w-full h-auto" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 477.406 201">
              <g id="HEADER">
                <path d={svgPaths.pb226c80} fill="#E70A0A" />
                <path d={svgPaths.p3a774800} fill="white" />
                <path d={svgPaths.p19cc8700} fill="white" />
                <path d={svgPaths.p25bab000} fill="white" />
                <path d={svgPaths.p2240d880} fill="white" />
                <path d={svgPaths.p3cf0cf00} fill="white" />
                <path d={svgPaths.p3a50580} fill="white" />
                <path d={svgPaths.p3dcc6df0} fill="white" />
                <path d={svgPaths.p38da100} fill="white" />
                <path d={svgPaths.p1072d880} fill="white" />
                <path d={svgPaths.p3dbd3f80} fill="white" />
                <path d={svgPaths.p2a3c1c00} fill="white" />
                <path d={svgPaths.p32c439f0} fill="white" />
                <path d={svgPaths.pbbc3100} fill="white" />
                <path d={svgPaths.p2a6a1280} fill="white" />
                <path d={svgPaths.pafabb00} fill="white" />
                <path d={svgPaths.p24133900} fill="white" />
                <path d={svgPaths.p7bcd000} fill="white" />
                <path d={svgPaths.p3744100} fill="white" />
                <path d={svgPaths.p1176b000} fill="white" />
              </g>
            </svg>
          </div>

          {/* Subtitle */}
          <div className="mb-8 max-w-[590px]">
            <p 
              className="font-thin text-[#adadad] text-[28px] md:text-[38px] tracking-[-0.38px] leading-[1.2] md:leading-[48px]"
              style={{ fontVariationSettings: "'opsz' 32" }}
            >
              Ai has virtually bottled human cognition.
              <br />
              But who's name is on the label?
            </p>
          </div>

          {/* Central Image with Fade Animation */}
          <div
            className={`w-full max-w-[783px] mx-auto my-12 transition-all duration-1000 ${
              fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="relative aspect-[783/394]">
              <img
                alt="The Source - Identity and Value visualization"
                className="w-full h-full object-contain"
                src={thesourceImg}
              />
            </div>
          </div>

          {/* Bottom Text */}
          <div className="text-center md:text-right max-w-[640px] mx-auto md:ml-auto md:mr-0 space-y-2">
            <h1 className="font-thin text-[48px] md:text-[78px] text-white leading-tight mb-4">
              Identity and Value
            </h1>
            <p className="font-light text-[20px] md:text-[24px] text-[#737373] tracking-[-0.48px] leading-[1.71]">
              A conversation about extractive industries and its new resource
            </p>
            <p className="font-light text-[20px] md:text-[24px] text-[#737373] tracking-[-0.48px] leading-[1.058]">
              The Human Substrate
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
