import React from 'react';
import ContactForm from './ContactForm';
import CaseStudyBlock from './CaseStudyBlock';
import { ShineBorder } from './ui/ShineBorder';

const ExoticCarPage = () => {
  return (
    <div className="pt-20">

      {/* SECTION 1 - HERO */}
      <section className="min-h-[90vh] flex items-center px-6 py-24">
        <div className="max-w-6xl mx-auto w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-black leading-[1.05] tracking-tight text-white mb-8">
                More Trips. Longer Bookings.{' '}
                <span className="text-gray-500">A Clearer Next Move.</span>
              </h1>
              <p className="text-xl text-gray-400 leading-relaxed">
                For exotic and luxury rental operators who are doing fine, but know there's more demand out there and don't want to waste money testing random marketing ideas.
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
                  src="/assets/images/exotic/6723fbf1321f2.jpg"
                  alt="Exotic car"
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
                  src="/assets/images/exotic/most-rented-luxury-cars.jpg"
                  alt="Most rented luxury exotic cars"
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
          <p className="text-sm uppercase tracking-widest text-blue-400 font-semibold mb-6">For Operators who want to</p>
          <ul className="space-y-4 inline-block text-left">
            {[
              'Increase in bookings and trips',
              'Generate more multi-day trips',
              'Identify what\'s actually limiting growth',
              'Stop wasting money on random marketing tests',
              'Build a stronger luxury brand presence online',
              'Find the next acquisition channel worth scaling',
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
              You're not failing. But you're not growing either. You're stagnant.
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              You've probably tried ads. Maybe a new website. Maybe both. Something moved for a minute, felt like it was growing, then stopped. You keep putting in work and the ceiling doesn't move.
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
                    src="/assets/images/exotic/IMG_1304-1024x759.jpg"
                    alt="Exotic luxury car"
                    className="w-full h-[420px] object-cover rounded-2xl"
                  />
                </div>
              </ShineBorder>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">
                Everybody's situation is different. In this case, every business's situation.
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed">
                Every other marketer pitches a package before asking a single question. I have a different approach. I start by understanding what's currently running and what's being left on the table. Conversation before strategy. Strategy before execution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 - PROOF */}
      <CaseStudyBlock headline="Here's what happens when I identify the right move." />

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
              This isn't a sales call. This is a chance for us to meet each other, we spend roughly 10–15 minutes going through what you're currently doing. By the end, we'll know exactly what's the next best move for your business to get moving forward again.
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

export default ExoticCarPage;
