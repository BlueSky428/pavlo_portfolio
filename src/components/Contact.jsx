import { motion } from 'framer-motion';
import { useState } from 'react';
import { styles } from '../styles';
import { SectionWrapper } from '../hoc';
import { github } from '../assets';
import { fadeIn, textVariant } from '../utils/motion';
import { ToastContainer, toast } from 'react-toastify';

// SVG Icons
const EmailIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
  </svg>
);

const TelegramIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
);

const WhatsAppIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

const LinkedInIcon = () => (
  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const Contact = () => {
  const emailAddress = 'bluesky.engineer428@gmail.com';

  const handleEmailClick = (e) => {
    e.preventDefault();
    // Open Gmail compose with email pre-filled
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(emailAddress)}`;
    window.open(gmailComposeUrl, '_blank');
  };

  const contactLinks = [
    {
      name: 'Email',
      icon: <EmailIcon />,
      href: `mailto:${emailAddress}`,
      label: emailAddress,
      color: 'text-[#EA4335]',
      isEmail: true
    },
    {
      name: 'Telegram',
      icon: <TelegramIcon />,
      href: 'https://t.me/kevin8221',
      label: '@kevin8221',
      color: 'text-[#0088cc]'
    },
    {
      name: 'WhatsApp',
      icon: <WhatsAppIcon />,
      href: 'https://wa.me/380955440691',
      label: '+380 95 544 0691',
      color: 'text-[#25D366]'
    },
    {
      name: 'GitHub',
      icon: <img src={github} alt="GitHub" className="w-8 h-8 object-contain" />,
      href: 'https://github.com/BlueSky428',
      label: 'github.com/BlueSky428',
      color: 'text-[#333333]'
    },
    {
      name: 'LinkedIn',
      icon: <LinkedInIcon />,
      href: 'https://www.linkedin.com/in/pavlo-stepanenko-b423aa363/',
      label: 'pavlo-stepanenko',
      color: 'text-[#0077B5]'
    }
  ];

  return (
    <div className="mt-0 relative">
      <motion.div variants={textVariant()} className="relative z-10">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h2 className={`${styles.sectionHeadText} relative z-10`}>Contact</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-6 text-taupe text-[18px] max-w-3xl leading-[30px] relative z-10">
        Feel free to reach out through any of these platforms. I'm always open to discussing new opportunities, projects, or just having a chat about technology.
      </motion.p>

      <div className="mt-20 flex flex-wrap justify-center gap-6 max-w-7xl mx-auto relative z-10">
        {contactLinks.map((contact, index) => (
          <motion.a
            key={contact.name}
            href={contact.href}
            onClick={contact.isEmail ? handleEmailClick : undefined}
            target="_blank"
            rel="noopener noreferrer"
            variants={fadeIn('up', 'spring', index * 0.1, 0.75)}
            whileHover={{ y: -10, scale: 1.05 }}
            className="group relative flex flex-col items-center justify-center
            bg-jetLight p-8 rounded-2xl w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] xl:w-[calc(20%-20px)]
            min-h-[220px] max-w-[280px]
            hover:bg-jet transition-all duration-300 
            cursor-pointer shadow-lg border border-jet
            hover:border-battleGray hover:shadow-2xl"
          >
            <div className={`mb-6 p-4 rounded-2xl bg-jet ${contact.color} 
              group-hover:scale-110 transition-all duration-300
              flex items-center justify-center w-16 h-16
              shadow-lg`}>
              {contact.icon}
            </div>
            
            <h4 className="text-timberWolf font-bold font-beckman text-lg mb-3 
              group-hover:text-eerieBlack transition-colors duration-300 text-center">
              {contact.name}
            </h4>
            
            <p className="text-taupe text-xs group-hover:text-timberWolf 
              transition-colors duration-300 break-words leading-relaxed text-center
              px-2">
              {contact.label}
            </p>

            <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 
              transition-opacity duration-300">
              <svg className="w-4 h-4 text-taupe" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </div>
          </motion.a>
        ))}
      </div>
      <ToastContainer 
        position="bottom-center"
        autoClose={2000}
        hideProgressBar
        toastClassName="bg-jetLight text-timberWolf border border-jet rounded-lg shadow-lg"
        bodyClassName="text-taupe font-poppins"
        progressClassName="bg-french"
      />
    </div>
  );
};

export default SectionWrapper(Contact, 'contact');
