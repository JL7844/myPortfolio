import React from 'react'
import { ButtonPrimary } from './button';

const Footer = () => {

  const sitemap = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Project', href: '#project' },
    { label: 'Contact me', href: '#contact' }
  ];

  const socials = [
    { label: 'GitHub', href: 'https://www.github.com/JL7844' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yosephlegesse' },
    { label: 'Twitter X', href: 'https://x.com/yosephlegesse' },
    { label: 'Instagram', href: 'https://www.instagram.com/codewithsadee' },
  ];

  return (
    <footer className="text-white bg-gradient-to-b from-black via-zinc-900 to-white pb-10 pt-16">
      <div className="container mx-auto px-6">

        {/* Content section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          <div>
            <h2 className="text-4xl font-bold mb-6 reveal-up">Let&apos;s work together today!</h2>
            <ButtonPrimary
              href="mailto:jossylegesse27@gmail.com"
              label="Start Project"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-6 lg:pl-16 lg:ml-20">
            <div>
              <p className="text-lg font-semibold mb-3 reveal-up">Sitemap</p>
              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className='block text-sm text-zinc-400 py-1 hover:text-white transition-colors reveal-up'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="ml-20">
              <p className="text-lg font-semibold mb-3 reveal-up">Socials</p>
              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target='_blank'
                      rel="noopener noreferrer"
                      className='block text-sm text-zinc-400 py-1 hover:text-white transition-colors reveal-up'
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>

      </div>

      
      <div className="border-t border-zinc-700 mt-16 pt-6 text-center">
        <p className="text-zinc-500 text-sm reveal-up">
          &copy; 2024 <span className='text-zinc-700 font-medium'>yoseph legesse</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
