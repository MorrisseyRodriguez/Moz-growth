import React from 'react';
import ContactForm from './ContactForm';
import LimoCaseStudy from './LimoCaseStudy';
import { ShineBorder } from './ui/ShineBorder';

const LimoPage = () => {
  return (
    <div className="pt-20">

      {/* SECTION 1 - HERO */}
      <section className="min-h-[90vh] flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white mb-8">
                You're not struggling.{' '}
                <span className="text-gray-500">But you're not growing either. Things feel stuck.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                Maybe you've tried ads. Maybe you rebuilt the website. Maybe you hired someone for SEO or social media. Something worked for a little while, bookings picked up, then things leveled right back out again.
              </p>
            </div>
            <div className="relative h-[480px]">
              <ShineBorder
                borderRadius={16}
                color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
                duration={10}
                className="absolute top-0 right-0 w-[80%] h-[75%] z-10 overflow-hidden p-0"
              >
                <img
                  src="/assets/images/limo/blackcarservice.jpg"
                  alt="Black luxury car service"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </ShineBorder>
              <ShineBorder
                borderRadius={16}
                color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
                duration={12}
                className="absolute bottom-0 left-0 w-[60%] h-[60%] z-20 overflow-hidden p-0"
              >
                <img
                  src="/assets/images/limo/IMG_2553.webp"
                  alt="Luxury chauffeur vehicle"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </ShineBorder>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 1.5 - FOR OPERATORS WHO WANT TO */}
      <section className="px-6 py-20 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-6">For limousine and chauffeur operators who want to</p>
          <ul className="space-y-4 inline-block text-left">
            {[
              'Increase hourly bookings',
              'Create more consistent demand throughout the month/year',
              'Identify the bottlenecks limiting growth',
              'Stop guessing what marketing move to make next',
              'Strengthen their luxury positioning online',
              'Find scalable acquisition channels beyond referrals and partnerships',
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-gray-300 text-lg">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 2 - PROBLEM AGITATION */}
      <section className="px-6 py-24 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The work keeps going in. But the business doesn't feel like it's moving forward.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Most limousine and chauffeur companies eventually hit this point. More competition. Same marketing everyone else is running. No clear answer on what actually creates more airport transfers, hourly bookings, or repeat clients consistently. And every marketer seems to show up with the same pitch before they even understand the business.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 - DIFFERENTIATOR */}
      <section className="px-6 py-24 bg-dark-800/40 border-y border-white/5">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative order-2 md:order-1">
              <ShineBorder
                borderRadius={16}
                color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
                duration={11}
                className="overflow-hidden p-0"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent rounded-2xl z-10" />
                  <img
                    src="/assets/images/limo/c370df48-6345-4883-9323-ec22f2c7d290-1024x819.png"
                    alt="Luxury limousine service"
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              </ShineBorder>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                I take a different approach.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Before recommending anything, I look at what's already working, what's underperforming, and what opportunities are being left on the table. Conversation first. Strategy second. Execution after that.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PROOF */}
      <LimoCaseStudy />

      {/* SECTION 5 - CREDIBILITY */}
      <section className="px-6 py-24 border-b border-white/5">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex items-start gap-4 max-w-xl">
              <div className="w-1 h-16 bg-blue-500 rounded-full flex-shrink-0 mt-1" />
              <div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm Morrissey Rodriguez. I work exclusively with experience-focused transportation businesses, primarily limousine and exotic rental operators.
                </p>
                <p className="text-gray-400 text-base leading-relaxed mt-4">
                  Most marketers walk into these businesses already trying to sell ads, SEO, or a new website before understanding a single thing about the operation itself. I think that's backwards.
                </p>
                <p className="text-gray-400 text-base leading-relaxed mt-4">
                  Every business has different bottlenecks, different opportunities, and different reasons growth has slowed down. My job is to identify those first, then build strategy around what actually makes sense for that specific company.
                </p>
              </div>
            </div>
            <div className="relative h-[340px]">
              <ShineBorder
                borderRadius={16}
                color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
                duration={10}
                className="absolute top-0 right-0 w-[72%] h-[72%] z-10 overflow-hidden p-0"
              >
                <img
                  src="/assets/images/moz/Screenshot_20260508_205737_Gallery.jpg"
                  alt="Morrissey Rodriguez"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </ShineBorder>
              <ShineBorder
                borderRadius={16}
                color={["#3B82F6", "#0EA5E9", "#1D4ED8"]}
                duration={13}
                className="absolute bottom-0 left-0 w-[68%] h-[68%] z-20 overflow-hidden p-0"
              >
                <img
                  src="/assets/images/moz/a1fbc436-8187-4a82-a89f-1e5320e8a5f9.png"
                  alt="Morrissey Rodriguez"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </ShineBorder>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 - RISK REVERSAL */}
      <section className="px-6 py-24 bg-dark-800/40 border-y border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
              Just a look at where you're at.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              This isn't a sales call. This is a chance for us to meet each other, we spend roughly 10-15 minutes going through what you're currently doing. By the end, we'll know exactly what's the next best move for your business to get moving forward again.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 7 - FORM */}
      <section className="px-6 py-24" data-section="contact">
        <div className="max-w-4xl mx-auto">
          <div className="max-w-md mx-auto">
            <ContactForm
              buttonText="Let's talk about your business"
              reassurance="No commitment. I reach out within 24 hours."
            />
          </div>
        </div>
      </section>

    </div>
  );
};

export default LimoPage;
