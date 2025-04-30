'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { crumbleVariants, breakVariants } from './../lib/variants';

export default function HeadingShatter() {
  const [crumbled, setCrumbled] = useState(false);
  const [broken, setBroken]   = useState(false);

  const devText = 'DEVELOPER';
  const mid     = Math.floor(devText.length/2);
  const left    = devText.slice(0,mid);
  const right   = devText.slice(mid);

  return (
    <div className="flex flex-col items-center space-y-4 pt-8 cursor-pointer ml-1 z-20">
      <motion.div onClick={()=> setCrumbled(true)}
        className="cursor-pointer select-none "
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        style={{ pointerEvents: 'auto' }}>
        {'SAKACOGU'.split('').map((ch,i)=>(
          
          <motion.span onClick={()=> setCrumbled(true)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          key={i} custom={i}
          style={{ pointerEvents: 'auto' }}
            variants={crumbleVariants}
            initial="initial"
            animate={crumbled?'crumble':'initial'}
            className="inline-block text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold cursor-pointer"
          >{ch}</motion.span>
        ))}
      </motion.div>

      <motion.div onClick={()=> setBroken(true)}
        className="cursor-pointer select-none flex items-center"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        style={{ pointerEvents: 'auto' }}
        >
          
        <motion.span
        onClick={()=> setBroken(true)}
        style={{ pointerEvents: 'auto' }}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
          variants={breakVariants}
          initial="initial"
          animate={broken?'brokenLeft':'initial'}
          className="inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light cursor-pointer"
        >{left}</motion.span>

        <motion.span
        onClick={()=> setBroken(true)}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
          variants={breakVariants}
          initial="initial"
          animate={broken?'brokenRight':'initial'}
          className="inline-block text-lg sm:text-xl md:text-2xl lg:text-3xl font-light cursor-pointer"
          style={{ pointerEvents: 'auto' }}
        >{right}
        </motion.span>

      </motion.div>
    </div>
  );
}
