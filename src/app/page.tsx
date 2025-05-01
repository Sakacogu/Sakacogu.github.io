'use client';

import React, { JSX, useState } from 'react';
import CloudNav from './components/cloudNav';
import DarkToggle from './components/DarkToggle';
import HeadingShatter from './components/HeadingShatter';
import SkillsTicker from './components/SkillsTicker';
import QuoteDisplay from './components/QuoteDisplay';
import ImageTextSwitcher from './components/ImageTextSwitcher';
import useVisitorCount from './hooks/useVisitorCount';
import useRandomQuote from './hooks/useRandomQuote';
import { dragonVariants, bearVariants, darkBearVariants, darkDragonVariants } from './lib/variants';

export default function HomePage(): JSX.Element {
  const visitorCount = useVisitorCount();
  const [quote, nextQuote] = useRandomQuote();
  const [dark, setDark] = useState(false);

  return (
    <>
      <main
        className={`
          relative min-h-screen flex flex-col items-center
          pt-65 sm:pt-65 md:pt-75 lg:pt-65
          overflow-hidden text-white
          bg-gradient-to-br
          ${dark ? 'from-red-500 to-black' : 'from-blue-500 to-purple-600'}
        `}
      >
        <CloudNav />

        <DarkToggle dark={dark} toggleDark={() => setDark(d => !d)} />

        <p className="text-sm sm:text-lg md:text-md lg:text-xl absolute bottom-75 sm:bottom-72 md:bottom-65 lg:top-50">
          You have reloaded this page <strong>{visitorCount}</strong> times!
        </p>

        <HeadingShatter />

        <SkillsTicker />

        <QuoteDisplay quote={quote} next={nextQuote} />
      </main>

      <ImageTextSwitcher
        key={`mascot-0-${dark}`}
        variants={dark ? dragonVariants:darkDragonVariants}
        className="
          absolute
          top-25  sm:top-25   md:top-64    lg:top-42
          left-5  sm:left-10   md:left-6    lg:left-8
        "
        imgProps={{
          width: 24,
          height: 24,
          className: 'w-10 h-15 sm:w-15 sm:h-20 md:w-20 md:h-30 lg:w-25 lg:h-35'
        }}
      />

<ImageTextSwitcher
       key={`mascot-1-${dark}`} 
       variants={dark ? bearVariants:darkBearVariants}
       className="
       absolute flex flex-col-reverse
       bottom-60   sm:bottom-65     md:bottom-64    lg:bottom-64
       right-2     sm:right-6       md:right-6      lg:right-22
     "
     imgProps={{
       width: 24,
       height: 24,
       className: 'w-10 h-15 sm:w-15 sm:h-20 md:w-20 md:h-30 lg:w-25 lg:h-35'
        }}
      />
    </>
  );
}