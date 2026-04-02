import { useEffect, useState } from "react";
import { Navigation } from "../components/Navigation";
import svgPaths from "../../imports/svg-o8qnd15u1e";
import imgTheSourceImage from "figma:asset/e37d13f7f34e191f22699cabf0df2fe50a7a13c8.png";

export default function HomePage() {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation after component mounts
    const timer = setTimeout(() => setFadeIn(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-[#090a0a] text-white overflow-x-hidden">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        {/* Main Container */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Left Content */}
          <div className="flex-1 space-y-6">
            {/* Header SVG - "Ai and the unnamed thing" */}
            <div className="w-full max-w-[477px] h-[201px]">
              <svg className="w-full h-full" fill="none" preserveAspectRatio="xMinYMin meet" viewBox="0 0 477.406 201">
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
            <div className="max-w-[590px]">
              <p className="font-thin text-[#adadad] text-[28px] md:text-[38px] tracking-[-0.38px] leading-[48px]">
                Ai has virtually bottled human cognition.
                <br />
                But who's name is on the label?
              </p>
            </div>

            {/* Central Graphic with Fade Animation */}
            <div
              className={`w-full max-w-[783px] mx-auto my-12 transition-all duration-1000 ${
                fadeIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
            >
              <div className="relative aspect-[783/394]">
                <img
                  alt="The Source - Identity and Value visualization"
                  className="w-full h-full object-contain"
                  src={imgTheSourceImage}
                />
              </div>
            </div>

            {/* Bottom Text */}
            <div className="text-right space-y-2 max-w-[640px] ml-auto">
              <h1 className="font-thin text-[48px] md:text-[78px] text-white leading-none mb-4">
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

          {/* Right Sidebar Navigation */}
          <div className="hidden lg:block">
            <Navigation />
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        <Navigation />
      </div>
    </div>
  );
}