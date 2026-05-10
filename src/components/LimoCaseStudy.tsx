import React from 'react';
import { TrendingUp, Clock, Zap } from 'lucide-react';
import CountingNumber from './ui/CountingNumber';
import { ShineBorder } from './ui/ShineBorder';

const LimoCaseStudy = () => {
  return (
    <section className="px-6 py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
          Same industry. Different results.
        </h2>
        <p className="text-gray-400 text-lg mb-12 max-w-2xl">
          This is a project in progress. The results aren't finished. I'm sharing it because it's real, it's in this industry, and it's still growing.
        </p>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ShineBorder
            borderRadius={12}
            color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
            duration={10}
            className="w-full min-w-0 p-8 flex flex-col items-center text-center"
          >
            <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
            <CountingNumber
              value={3200}
              prefix="$"
              suffix="+"
              duration={2}
              className="text-4xl font-black text-blue-400 mb-2"
            />
            <p className="text-gray-400 text-sm">Total Revenue Attributed</p>
          </ShineBorder>

          <ShineBorder
            borderRadius={12}
            color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
            duration={12}
            className="w-full min-w-0 p-8 flex flex-col items-center text-center"
          >
            <Clock className="w-8 h-8 text-blue-400 mb-4" />
            <CountingNumber
              value={3}
              duration={1}
              className="text-4xl font-black text-blue-400 mb-2"
            />
            <p className="text-gray-400 text-sm">Months Running</p>
          </ShineBorder>

          <ShineBorder
            borderRadius={12}
            color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
            duration={14}
            className="w-full min-w-0 p-8 flex flex-col items-center text-center"
          >
            <Zap className="w-8 h-8 text-blue-400 mb-4" />
            <div className="text-4xl font-black text-blue-400 mb-2">30 yrs</div>
            <p className="text-gray-400 text-sm">In Business, New Channel</p>
          </ShineBorder>
        </div>

        {/* Story Block */}
        <ShineBorder
          borderRadius={12}
          color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
          duration={16}
          className="w-full min-w-0 p-8 md:p-10 mb-8"
        >
          <h3 className="text-xl font-bold text-blue-400 mb-6">The Story</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-4">
            A limousine company in LA. Over 30 years in business. In that time they tested a lot, found what worked, stuck with it, and built a solid operation. But at some point the growth stopped. Not because they did anything wrong. Every channel they knew had a ceiling, and they'd already hit it.
          </p>
          <p className="text-gray-300 text-lg leading-relaxed mb-6">
            I introduced something they hadn't touched: getting their business in front of clients through AI platforms. The kind of search happening on ChatGPT, Perplexity, Google AI. Organic, not paid. It takes time to build, but once it starts, it compounds.
          </p>

          <div className="border-t border-white/10 pt-6 mb-6">
            <p className="text-gray-400 text-sm font-semibold uppercase tracking-widest mb-4">Results by month</p>
            <div className="space-y-3">
              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm">Month 1</span>
                <span className="text-white font-bold">$1,200+, First results came in</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm">Month 2</span>
                <span className="text-white font-bold">$400, Single booking</span>
              </div>
              <div className="flex items-center justify-between py-3 border-b border-white/5">
                <span className="text-gray-400 text-sm">Month 3 (May 1st)</span>
                <span className="text-white font-bold">$1,600+, Still running</span>
              </div>
              <div className="flex items-center justify-between py-3">
                <span className="text-gray-400 text-sm">Total so far</span>
                <span className="text-blue-400 font-black text-lg">$3,200+</span>
              </div>
            </div>
          </div>

          <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg px-5 py-4">
            <p className="text-blue-300 text-base leading-relaxed">
              This isn't a finished case study. It's a live engagement with results already coming in. A 30-year-old business found a new channel it had never used, and it's producing.
            </p>
          </div>
        </ShineBorder>
      </div>
    </section>
  );
};

export default LimoCaseStudy;
