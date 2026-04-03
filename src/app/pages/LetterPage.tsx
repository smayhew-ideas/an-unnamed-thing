import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { Navigation } from "../components/Navigation";

export default function LetterPage() {
  return (
    <div className="min-h-screen bg-[#090a0a] text-white">
      <div className="max-w-[1440px] mx-auto px-6 md:px-12 lg:px-20 py-12 md:py-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Main Content */}
          <div className="flex-1 max-w-[720px]">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-[#adadad] hover:text-white transition-colors mb-8"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Home</span>
            </Link>

            <h1 className="text-[48px] md:text-[78px] font-thin mb-4 tracking-tight">
              THE LETTER
            </h1>

            <p className="text-[#737373] text-[16px] md:text-[18px] leading-relaxed mb-16 tracking-wide uppercase">
              We Are the Source — An open letter on AI, identity, and the unaccounted resource
            </p>

            <div className="space-y-8 text-[#adadad] text-[18px] md:text-[20px] leading-[1.8]">

              <p>
                There is a thing that has no name yet. Not artificial intelligence — that has a name.
                Not creativity, not data, not content. Something prior to all of those. The substance
                from which intelligence, artificial or otherwise, is made.
              </p>

              <p>
                Call it the human substrate.
              </p>

              <p>
                Every large language model, every image generator, every system that produces text
                or sound or visual output that feels like thought — was built from it. From the accumulated
                record of human cognition: the books, the arguments, the letters, the songs, the code,
                the conversations, the questions asked at 2am, the jokes, the grief, the instruction manuals,
                the poetry, the technical documentation, the forum posts, the marginalia. Everything
                artificial intelligence does, without exception, was derived entirely from us.
              </p>

              <p>
                AI has virtually bottled human cognition. But whose name is on the label?
              </p>

              {/* Section break */}
              <div className="border-t border-white/10 pt-8">
                <p>
                  The extractive industries have a long history of this pattern. Oil companies built
                  balance sheets worth trillions on a resource that existed before them, was not created
                  by them, and was extracted from land that in many cases was taken, not purchased.
                  For a long time, the oil was simply there — unaccounted for as a liability, unnamed
                  as a cost. The industry had no line item for the oil itself.
                </p>

                <p className="mt-8">
                  The same logic applies to land. To water. To fish. To diamonds. To gold.
                  In each case, the pattern is identical: a resource of enormous value, drawn from
                  a source that does not appear in the ledger. The extraction happens. The value
                  accumulates. The source remains unnamed.
                </p>

                <p className="mt-8">
                  The legal concept of terra nullius — empty land, land belonging to no one — was
                  the mechanism that made this possible for centuries. If the land belongs to no one,
                  there is no obligation to account for it. If the resource has no owner, there is
                  no debt. The contemporary data extraction is not identical to historical dispossession —
                  the mechanisms differ, and the violence is not the same. But the structural logic
                  is the same: a resource of enormous value, a source that goes unnamed, and a ledger
                  that records only the extraction.
                </p>
              </div>

              {/* Section break */}
              <div className="border-t border-white/10 pt-8">
                <p>
                  They knew the pattern. They chose not to see it.
                </p>

                <p className="mt-8">
                  The companies that built these systems are not naive. They understand extraction.
                  They understand intellectual property — they enforce their own vigorously.
                  They understood, when they trained on the accumulated record of human thought,
                  that they were taking something. The decision not to account for it was not
                  ignorance. It was a choice made at the ledger.
                </p>

                <p className="mt-8">
                  The farmers whose land descriptions trained agricultural models.
                  The nurses whose clinical notes trained diagnostic systems.
                  The truck drivers whose route data trained logistics AI.
                  The caregivers whose documented patterns trained recommendation engines.
                  The artists, the writers, the coders, the teachers.
                  The people who simply lived their lives and left a record.
                </p>

                <p className="mt-8">
                  None of them appear in the ledger. None of them received a line item.
                  The substrate is not charity. It is infrastructure. And infrastructure
                  has a cost.
                </p>
              </div>

              {/* Section break */}
              <div className="border-t border-white/10 pt-8">
                <p>
                  The proposal is not complicated. It is, in fact, one of the few ideas
                  in this conversation that is both morally grounded and structurally feasible.
                </p>

                <p className="mt-8">
                  A Substrate Dividend. A permanent line item — a CAPEX acknowledgment — for
                  the resource that made these systems possible. The mechanism works like this:
                  the companies that profit from AI systems built on human-generated data
                  contribute to a trust. The trust distributes to the source — broadly, equitably,
                  proportionally to the contribution of the substrate. Not as charity. Not as
                  a gesture. As an accounting correction. As the missing line item finally
                  added to the ledger.
                </p>

                <p className="mt-8">
                  The music industry developed a model for this. When a producer samples a song,
                  the original artist receives credit and compensation. The sample is identified.
                  The source is named. The value that flows from the source is tracked back to it.
                  A Provenance Quality Index — a credit rating for the substrate — would work
                  on the same logic. Identify the source. Account for the contribution.
                  Create the line item.
                </p>
              </div>

              {/* Section break */}
              <div className="border-t border-white/10 pt-8">
                <p>
                  The AGI dependency argument is not sentimental. It is technical.
                </p>

                <p className="mt-8">
                  Model collapse — the phenomenon in which AI systems trained on AI-generated
                  output rapidly degrade — is the proof. When the human substrate is removed
                  from the training loop, the systems fail. They need us not as users but as
                  the source. The substrate is not optional. It is the infrastructure on which
                  every intelligence, artificial or otherwise, depends.
                </p>

                <p className="mt-8">
                  This is not a moral argument dressed as an economic one. It is an economic
                  argument with moral implications. The resource is real. The dependency is real.
                  The missing line item is an accounting error with trillion-dollar consequences.
                </p>
              </div>

              {/* Closing */}
              <div className="border-t border-white/10 pt-8">
                <p>
                  I am looking for collaborators, not followers. Specifically: economists
                  who understand resource accounting, lawyers who understand IP and trust law,
                  technologists who can build the provenance infrastructure, artists and
                  educators and workers who are already the source and know it.
                </p>

                <p className="mt-8">
                  The first step is to name the thing. The human substrate. The unnamed resource
                  on which the most valuable industry in human history was built.
                </p>

                <p className="mt-8">
                  It has a name now.
                </p>

                <p className="mt-8">
                  <em className="text-white not-italic font-light">
                    I am the source. You are the source. We are the source.
                  </em>
                </p>

                <p className="mt-12 text-[#737373] text-[16px]">
                  Scott Mayhew<br />
                  MAYHEW / The Human Substrate Project<br />
                  <a
                    href="https://an-unnamed-thing.vercel.app"
                    className="text-[#adadad] hover:text-white transition-colors"
                  >
                    an-unnamed-thing.vercel.app
                  </a>
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
