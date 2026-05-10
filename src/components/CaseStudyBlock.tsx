import React from 'react';
import { DollarSign, TrendingUp, Clock } from 'lucide-react';
import CountingNumber from './ui/CountingNumber';
import { ShineBorder } from './ui/ShineBorder';

interface CaseStudyBlockProps {
  headline: string;
}

const CaseStudyBlock = ({ headline }: CaseStudyBlockProps) => {
  return (
    <section className="px-6 py-24 border-b border-white/5">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-black text-white mb-12">
          {headline}
        </h2>

        {/* Stat Cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <ShineBorder
            borderRadius={12}
            color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
            duration={10}
            className="w-full min-w-0 p-8 flex flex-col items-center text-center"
          >
            <DollarSign className="w-8 h-8 text-blue-400 mb-4" />
            <CountingNumber
              value={565}
              prefix="$"
              duration={1.5}
              className="text-4xl font-black text-blue-400 mb-2"
            />
            <p className="text-gray-400 text-sm">Ad Spend</p>
          </ShineBorder>

          <ShineBorder
            borderRadius={12}
            color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
            duration={12}
            className="w-full min-w-0 p-8 flex flex-col items-center text-center"
          >
            <TrendingUp className="w-8 h-8 text-blue-400 mb-4" />
            <CountingNumber
              value={2025}
              prefix="$"
              duration={2}
              className="text-4xl font-black text-blue-400 mb-2"
            />
            <p className="text-gray-400 text-sm">Revenue Generated</p>
          </ShineBorder>

          <ShineBorder
            borderRadius={12}
            color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
            duration={14}
            className="w-full min-w-0 p-8 flex flex-col items-center text-center"
          >
            <Clock className="w-8 h-8 text-blue-400 mb-4" />
            <CountingNumber
              value={3}
              suffix=" weeks"
              duration={1}
              className="text-4xl font-black text-blue-400 mb-2"
            />
            <p className="text-gray-400 text-sm">To See Results</p>
          </ShineBorder>
        </div>

        {/* Story + Image side by side */}
        <div className="flex flex-col md:flex-row gap-10 items-start">
          <ShineBorder
            borderRadius={12}
            color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
            duration={16}
            className="flex-1 min-w-0 w-full p-8 md:p-10"
          >
            <h3 className="text-xl font-bold text-blue-400 mb-6">The Full Story</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-4">
              Before I came in, this client was averaging 3 to 4 inquiries per month with no consistency. Just 3 vehicles in the fleet.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I launched a paid campaign with a $565 budget. Over 3 weeks:
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-gray-200 text-lg">10 bookings</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-gray-200 text-lg">3 confirmed trips</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-green-500 flex-shrink-0" />
                <span className="text-gray-200 text-lg">$2,025 in revenue</span>
              </div>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed">
              After that initial batch, demand stayed consistent. This wasn't a spike. It was proof that the right approach, applied to the right operator, produces a repeatable result.
            </p>
          </ShineBorder>

          {/* Client Image */}
          <div className="md:w-64 flex-shrink-0">
            <ShineBorder
              borderRadius={16}
              color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
              duration={11}
              className="w-full min-w-0 overflow-hidden p-0"
            >
              <img
                src="/assets/images/client-success.jpg"
                alt="Client Success"
                className="w-full rounded-2xl object-cover"
              />
            </ShineBorder>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudyBlock;
