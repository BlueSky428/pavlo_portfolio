import React from 'react';
import { motion } from 'framer-motion';
import { styles } from '../styles';
import { services } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[20px] shadow-card">
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-jetLight rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-taupe text-[18px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  );
};

const About = () => {
  return (
    <div className="-mt-[4rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-taupe text-[18px] max-w-3xl leading-[30px]">
        I'm a Full Stack Developer and Project Manager from Ukraine with over 6 years of experience building robust, scalable applications. I specialize in modern web technologies, blockchain development, and delivering high-quality solutions that drive business success. My expertise spans from frontend interfaces to backend systems, with a proven track record of working with international teams and managing complex projects.
      </motion.p>

      <motion.div
        variants={fadeIn('', '', 0.2, 1)}
        className="mt-8">
        <h3 className="text-timberWolf font-bold font-beckman text-xl mb-4">
          Key Accomplishments
        </h3>
        <ul className="space-y-3 text-taupe text-[16px] sm:leading-[28px] leading-[26px]">
          <li className="flex items-start">
            <span className="text-french mr-3 font-bold flex-shrink-0 mt-1">•</span>
            <span>Led development of high-traffic platforms handling live gaming and real-time transactions for major clients including Mavi and Cargill</span>
          </li>
          <li className="flex items-start">
            <span className="text-french mr-3 font-bold flex-shrink-0 mt-1">•</span>
            <span>Built secure, scalable blockchain solutions and payment systems supporting multiple currencies and fraud protection</span>
          </li>
          <li className="flex items-start">
            <span className="text-french mr-3 font-bold flex-shrink-0 mt-1">•</span>
            <span>Successfully managed multiple concurrent projects as both developer and project manager, delivering on-time results for Upwork clients and Sonex Digital</span>
          </li>
          <li className="flex items-start">
            <span className="text-french mr-3 font-bold flex-shrink-0 mt-1">•</span>
            <span>Implemented automated monitoring systems, CI/CD pipelines, and performance optimizations that improved platform responsiveness and reduced downtime</span>
          </li>
          <li className="flex items-start">
            <span className="text-french mr-3 font-bold flex-shrink-0 mt-1">•</span>
            <span>Mentored junior developers and collaborated with cross-functional teams to deliver enterprise-level solutions</span>
          </li>
        </ul>
      </motion.div>

      <motion.div
        variants={fadeIn('', '', 0.3, 1)}
        className="mt-6 text-taupe text-[16px]">
        <span className="font-semibold">Nationality:</span> Ukraine
      </motion.div>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, 'about');