import { ReactNode, useState, useEffect } from 'react';
import { Link as ScrollLink, Events } from 'react-scroll';
import ContactPopup from './ContactPopup';
import Footer from './Footer';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    Events.scrollEvent.register('begin', () => {});
    Events.scrollEvent.register('end', () => {});
    return () => {
      Events.scrollEvent.remove('begin');
      Events.scrollEvent.remove('end');
    };
  }, []);

  const isLightSection = activeSection === 'ads';

  return (
    <div className="min-h-screen flex flex-col scroll-smooth">
      <nav className={`fixed top-6 left-1/2 transform -translate-x-1/2 w-[1140px] h-[60px] px-6 py-[10px] ${isLightSection ? 'bg-white text-black' : 'bg-white/5 text-white'} border border-white/10 rounded-[10px] backdrop-blur-md shadow-md flex items-center justify-between z-50 transition-all duration-300`}>
        <a
          href="#home"
          className={`text-xl font-semibold tracking-wide ${isLightSection ? 'text-black' : 'text-white'}`}
          style={{ fontFamily: 'Tajawal', fontWeight: 600 }}
        >
          IOGO
        </a>

        <div className="flex items-center gap-8">
          {['home', 'ads', 'products'].map((section) => {
            const isActive = activeSection === section;
            const baseColor = isLightSection ? 'text-black' : 'text-white';
            const hoverColor = isLightSection ? 'hover:text-purple-600' : 'hover:text-purple-300';
            const activeColor = 'text-purple-500';

            return (
              <ScrollLink
                key={section}
                to={section}
                smooth={true}
                spy={true}
                offset={-80}
                duration={500}
                onSetActive={() => setActiveSection(section)}
                className={`text-[18px] font-medium transition-all duration-200 cursor-pointer ${isActive ? activeColor : `${baseColor} ${hoverColor}`}`}
                style={{ fontFamily: 'Tajawal' }}
              >
                {section === 'home' ? 'Home' : section.charAt(0).toUpperCase() + section.slice(1)}
              </ScrollLink>
            );
          })}
        </div>

        <button
          className={`w-[112px] h-[40px] px-[20px] py-[10px] border ${isLightSection ? 'border-black text-black hover:bg-black/10' : 'border-white/20 text-white hover:bg-white/20'} rounded-[12px] bg-transparent font-medium shadow transition-all duration-300`}
          style={{ fontFamily: 'Tajawal', fontSize: '16px', fontWeight: 500 }}
        >
          Login
        </button>
      </nav>

      <main className="flex-grow">{children}</main>

      <Footer />
      <ContactPopup isOpen={isContactOpen} onClose={() => setIsContactOpen(false)} />
    </div>
  );
}
