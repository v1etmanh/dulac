import { useEffect, useMemo, useState } from 'react';
import Navbar from './components/Navbar.jsx';
import IntroGate from './components/IntroGate.jsx';
import HeroSection from './components/HeroSection.jsx';
import StorySection from './components/StorySection.jsx';
import CharacterSection from './components/CharacterSection.jsx';
import WorldSection from './components/WorldSection.jsx';
import ShopSection from './components/ShopSection.jsx';
import NewsletterSection from './components/NewsletterSection.jsx';
import Footer from './components/Footer.jsx';

function hasPlayedIntroThisSession() {
  return Boolean(window.__duLacIntroPlayed || window.history.state?.duLacIntroPlayed);
}

function rememberIntroForThisSession() {
  window.__duLacIntroPlayed = true;
  window.history.replaceState(
    { ...(window.history.state || {}), duLacIntroPlayed: true },
    '',
    window.location.href,
  );
}

function App() {
  const [introComplete, setIntroComplete] = useState(hasPlayedIntroThisSession);
  const [activePage, setActivePage] = useState(() => window.location.hash.replace('#', '') || 'home');
  const [introKey, setIntroKey] = useState(0);

  useEffect(() => {
    const onHashChange = () => setActivePage(window.location.hash.replace('#', '') || 'home');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 },
    );

    document.querySelectorAll('.reveal').forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, [activePage, introComplete]);

  useEffect(() => {
    if (introComplete) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activePage, introComplete]);

  const completeIntro = (goHome = true) => {
    rememberIntroForThisSession();
    setIntroComplete(true);

    if (goHome && window.location.hash !== '#home') {
      window.location.hash = 'home';
      setActivePage('home');
    }
  };

  const pages = useMemo(() => ({
    home: <HeroSection onReplayIntro={() => { setIntroKey((key) => key + 1); setIntroComplete(false); }} />,
    story: <StorySection />,
    characters: <CharacterSection />,
    world: <WorldSection />,
    shop: <ShopSection />,
    newsletter: <NewsletterSection />,
  }), []);

  if (!introComplete) {
    return <IntroGate key={introKey} onComplete={() => completeIntro(introKey === 0)} />;
  }

  return (
    <>
      <Navbar />
      {pages[activePage] || pages.home}
      <Footer />
    </>
  );
}

export default App;
