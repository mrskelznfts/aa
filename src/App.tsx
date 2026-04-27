import { motion } from "motion/react";
import { 
  Twitter, 
  MessageCircle, 
  Globe
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

const Navbar = () => {
  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="absolute top-6 left-10 md:left-20 z-50 flex items-center gap-10"
    >
      <img src="/logo.png" alt="KitCat Logo" className="h-16 w-auto" />
      <div className="hidden md:flex gap-8">
        <a href="#story" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Break</a>
        <a href="#gallery" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Collection</a>
        <a href="#roadmap" className="text-xs font-bold uppercase tracking-widest text-white/80 hover:text-white transition-colors">Journey</a>
      </div>
    </motion.nav>
  );
};

const Countdown = () => {
  // Set target to exactly 2 days and 20 hours from current global time
  const targetDate = new Date("2026-04-30T15:00:00Z").getTime();
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      } else {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex gap-4 mt-8">
      {[
        { label: "DAYS", value: timeLeft.days },
        { label: "HOURS", value: timeLeft.hours },
        { label: "MINUTES", value: timeLeft.minutes },
        { label: "SECONDS", value: timeLeft.seconds }
      ].map((item, i) => (
        <div key={i} className="flex flex-col items-center">
          <div className="w-16 h-20 sm:w-20 sm:h-24 bg-white rounded-xl flex items-center justify-center border-4 border-[#D11013] shadow-lg">
            <span className="text-2xl sm:text-4xl font-heading font-black tracking-tighter text-[#D11013]">{String(item.value).padStart(2, '0')}</span>
          </div>
          <span className="text-[10px] font-bold mt-2 text-white tracking-widest">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <section className="relative pt-24 pb-12 px-6 overflow-hidden flex flex-col items-center justify-center text-center">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="kitcat-tagline mb-6">Have a break. Have a KitCat.</p>
        <h1 className="kitcat-h1 mb-6">KITCAT</h1>
        <p className="text-lg md:text-xl font-medium text-white/90 max-w-xl mx-auto leading-relaxed">
          It starts with a break. It evolves into a loop. It becomes an economy.<br />
          911 KitCats ready to snap into an AI-powered system where NFTs, tokens, and gameplay connect.
        </p>
        <div className="flex flex-col items-center mt-12">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/80 mb-4 uppercase">MINT LIVE IN</span>
          <Countdown />
        </div>
      </motion.div>

    </section>
  );
};

const Gallery = () => {
  const cats = [
    { id: 1, image: "/NFT - 1.png", title: "Milk Chocolate" },
    { id: 2, image: "/NFT - 2.png", title: "Dark Cocoa" },
    { id: 3, image: "/NFT - 3.png", title: "White Cream" },
    { id: 4, image: "/NFT - 4.png", title: "Strawberry Snap" },
    { id: 5, image: "/NFT - 5.png", title: "Matcha Break" },
  ];

  return (
    <section id="gallery" className="py-16 px-6 bg-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-4xl md:text-6xl font-heading font-bold text-white">Freshly Snapped</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {cats.map((cat, i) => (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="chocolate-card overflow-hidden group transition-all duration-300">
                <div className="p-0 relative">
                  <img 
                    src={cat.image} 
                    alt={cat.title} 
                    className="w-full aspect-square object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#4B2C20]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <h3 className="text-xl font-black tracking-tighter uppercase text-white">{cat.title}</h3>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Story = () => {
  return (
    <section id="story" className="py-16 px-6 max-w-7xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-6xl font-heading font-bold mb-8 leading-tight text-white">
            SNAP INTO THE SYSTEM
          </h2>
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              The world doesn’t slow down, it never did, so something inside it broke, and from that fracture, 911 entities slipped through, adapting, learning, and moving silently across the network. KitCat isn’t just an NFT, it’s your access point into a live AI-driven system where every action, every outcome, and every interaction feeds into a loop that never stops evolving.
            </p>
            <p className="italic border-l-4 border-white pl-6 py-2 text-white font-bold">
              “Have a break, have a KitCat” was never meant to go this far, but now the break watches back, responds, and pulls you deeper, where probability bends, intelligence reacts in real time, and the line between player and system disappears.
            </p>
            <p>
              You don’t just hold anymore, you don’t just observe, you step in, you play, and whether you realize it or not, you’ve already become part of the system.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="absolute -inset-4 bg-white/10 blur-2xl rounded-full" />
          <img 
            src="/Post - 11 (1).png" 
            alt="KitCat Story" 
            className="relative rounded-[40px] border-8 border-white shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Roadmap = () => {
  const phases = [
    {
      number: "1",
      title: "PHASE 1 — THE BREAK",
      items: ["Community activation", "Genesis launch (911 supply)", "GTD free mint distribution", "First system access"]
    },
    {
      number: "2",
      title: "PHASE 2 — THE LOOP",
      items: ["AI system goes live", "Casino mechanics unlocked", "NFT boosts & progression", "Early token integration"]
    },
    {
      number: "3",
      title: "PHASE 3 — THE ECONOMY",
      items: ["Full ecosystem expansion", "$KITCAT token launch", "Advanced gameplay + PvP", "Global scaling"]
    }
  ];

  return (
    <section id="roadmap" className="py-16 px-6 bg-white/5">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-16 text-white">
          <h2 className="text-4xl md:text-6xl font-heading font-bold">Roadmap</h2>
        </div>

        <div className="relative space-y-12">
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/20 -translate-x-1/2 hidden md:block" />

          {phases.map((phase, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className={`flex flex-col md:flex-row gap-8 items-center ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
            >
              <div className="flex-1 w-full text-white">
                <div className="chocolate-card p-8">
                  <h3 className="text-2xl font-black mb-4 uppercase">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-3 text-white/80 text-sm font-medium">
                        <span className="w-2 h-2 bg-white mt-1.5 shrink-0 rounded-full" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="relative z-10 w-12 h-12 bg-white border-4 border-[#4B2C20] flex items-center justify-center font-black text-[#D11013] text-lg shrink-0 rounded-full shadow-lg">
                {phase.number}
              </div>

              <div className="flex-1 hidden md:block" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/20 text-center flex flex-col items-center">
      <img src="/logo.png" alt="KitCat Logo" className="h-20 w-auto mb-8" />
      <p className="text-white/60 text-xs font-bold uppercase tracking-widest mb-8">HAVE A BREAK. HAVE A KITCAT.</p>
      <div className="flex justify-center gap-8">
        {[Twitter, MessageCircle, Globe].map((Icon, i) => (
          <a key={i} href="#" className="text-white hover:text-white/60 transition-colors">
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-[#D11013] text-white selection:bg-white selection:text-[#D11013]">
      <div className="relative overflow-hidden w-full">
        <Navbar />
        <main>
          <Hero />
          <Story />
          <Gallery />
          <Roadmap />
        </main>
        <Footer />
      </div>
    </div>
  );
}
