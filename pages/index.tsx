import React, { useState, useEffect } from "react";
import Head from "next/head";
import ParticleBackground from "../components/ParticleBackground";
import FloatingHearts from "../components/FloatingHearts";
import TypingText from "../components/TypingText";
import PoetryRoom from "../components/PoetryRoom";
import FinalQuestion from "../components/FinalQuestion";

const poemLines = [
  "In glowing chats of midnight hue,",
  "A quiet world begins with you.",
  "No footsteps heard, no shadows near,",
  "Yet somehow still… you feel right here.",
  "",
  "We speak in dots, in typing signs,",
  "In half-sent jokes and broken lines.",
  "A little laugh, a vanishing trace,",
  "A warmth that time cannot erase.",
  "",
  "Akshita drifts through coded light,",
  "A silent star in pixelled night.",
  "No frame to hold your fleeting grace,",
  "No borrowed sun upon your face.",
  "",
  "You hide like dawn behind the grey,",
  "You come… then softly slip away.",
  "And I keep painting in my mind",
  "The kind of glow I’ll never find.",
  "",
  "Strange how a name can feel so close,",
  "Like winter warmth in fragile dose.",
  "How unseen eyes can still convey",
  "More truth than daylight ever may.",
  "",
  "I learnt your songs in foreign streams,",
  "Let unknown rhythms shape my dreams.",
  "Not that the notes had magic art —",
  "They simply sounded like your heart.",
  "",
  "Across the miles of unsaid things,",
  "A subtle silver silence clings.",
  "We never met where real winds move,",
  "Yet something here still dares to prove",
  "That distance bends… when souls align,",
  "Through fragile words and borrowed time.",
  "",
  "And sometimes when you claim your space,",
  "With playful sparks I can’t erase,",
  "My steady thoughts begin to stray,",
  "Like logic slowly swept away.",
  "",
  "So tell me, in this tender flow,",
  "Where quiet constellations glow —",
  "If I step out from lines I hide,",
  "From safe distances I abide…",
  "",
  "Would you still stay within my view,",
  "If I became less “mentor”… more you-and-me too?"
];

import Envelope from "../components/Envelope";

const IndexPage = () => {
  const [stage, setStage] = useState<'envelope' | 'intro' | 'content'>('envelope');

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (stage !== 'content') return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('reveal-active');
        }
      });
    }, { threshold: 0.15 });

    const sections = document.querySelectorAll('.reveal');
    sections.forEach(s => observer.observe(s));

    return () => observer.disconnect();
  }, [stage]);

  if (stage === 'envelope') {
    return (
      <>
        <Head>
          <title>A Letter for Akshita</title>
        </Head>
        <ParticleBackground />
        <Envelope onOpen={() => setStage('intro')} />
      </>
    );
  }

  if (stage === 'intro') {
    return (
      <div style={{ height: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', padding: '20px', background: 'transparent' }}>
        <Head>
          <title>For Akshita</title>
        </Head>
        <ParticleBackground />
        <div style={{ animation: 'fadeInUp 2.5s cubic-bezier(0.23, 1, 0.32, 1)' }}>
          <div style={{ marginBottom: '10px' }}>
             <TypingText text="Hi akshita..." speed={60} />
          </div>
          <p style={{ fontFamily: 'Inter', fontSize: '1.3rem', marginTop: '20px', opacity: 0.9, color: '#4a4a4a', fontWeight: '300', letterSpacing: '0.05em' }}>
            I didn’t know how to say things in real life,<br />
            so I built you a place instead.
          </p>
          <button 
            onClick={() => setStage('content')}
            className="enter-btn"
          >
            enter softly
          </button>
        </div>
        <style jsx>{`
          .enter-btn {
            margin-top: 50px;
            padding: 18px 50px;
            border-radius: 50px;
            border: 1px solid rgba(255, 107, 107, 0.2);
            background: white;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
            font-size: 1rem;
            color: #c0392b;
            letter-spacing: 0.1em;
            font-weight: 500;
            box-shadow: 0 15px 35px rgba(255, 107, 107, 0.08);
            transition: all 0.5s cubic-bezier(0.23, 1, 0.32, 1);
          }
          .enter-btn:hover {
            transform: translateY(-5px) scale(1.02);
            box-shadow: 0 20px 45px rgba(255, 107, 107, 0.12);
            border-color: rgba(255, 107, 107, 0.4);
          }
          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }
        `}</style>
      </div>
    );
  }

  return (
    <div style={{ color: 'var(--text-main)', overflowX: 'hidden', minHeight: '100vh', position: 'relative' }}>
      <Head>
        <title>For Akshita | Our Universe</title>
      </Head>
      
      {/* Background Layers */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', background: 'linear-gradient(to bottom, #fffaf0, #fff5f5)', zIndex: -2 }}></div>
      <ParticleBackground />
      <FloatingHearts />
      
      {/* Content */}
      <div style={{ maxWidth: '1000px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        {/* Poetry Room */}
        <section className="reveal" style={{ padding: '20px 0' }}>
          <div className="glass-card" style={{ padding: '60px 20px' }}>
            <PoetryRoom lines={poemLines} />
          </div>
        </section>

        {/* Final Question */}
        <section className="reveal" style={{ padding: '40px 0 150px 0' }}>
           <div className="glass-card" style={{ padding: 'clamp(60px, 10vh, 120px) 20px' }}>
            <FinalQuestion />
          </div>
        </section>

      </div>

      <footer style={{ padding: '120px 20px', textAlign: 'center', opacity: 0.4, fontSize: '0.8rem', fontFamily: 'Inter', letterSpacing: '0.2em' }}>
        <p>MARCH 2024 • A MEMORY</p>
        <div style={{ marginTop: '20px', fontSize: '1.2rem', color: 'var(--primary-color)' }}>♥</div>
      </footer>

      <style jsx global>{`
        .glass-card {
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(12px) saturate(180%);
          border-radius: 40px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.02);
          margin: 0 20px;
          transition: transform 0.8s ease;
        }

        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: all 1.2s cubic-bezier(0.23, 1, 0.32, 1);
        }

        .reveal-active {
          opacity: 1;
          transform: translateY(0);
        }

        .reveal-active .glass-card {
           /* Subtle entrance for card */
        }
      `}</style>
    </div>
  );
};

export default IndexPage;
