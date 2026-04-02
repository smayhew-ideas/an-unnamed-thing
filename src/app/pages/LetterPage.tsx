import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "../components/Navigation";

export default function LetterPage() {
  return (
    <div className="min-h-screen bg-[#090a0a] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          {/* Main Content */}
          <div className="flex-1">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#adadad] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-[48px] md:text-[78px] font-thin mb-8">THE LETTER</h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-[#adadad] text-[18px] md:text-[24px] leading-relaxed mb-6">
                An open letter to the related AI IA thinking.
              </p>

              <div className="mt-12 p-8 border border-white/20 rounded-lg">
                <p className="text-[#adadad] text-[16px] leading-relaxed">
                  Content coming soon...
                </p>
              </div>
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
