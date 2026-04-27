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
  const [timeLeft, setTimeLeft] = useState({ days: 3, hours: 21, minutes: 27, seconds: 55 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        if (prev.days > 0) return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
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
        <p className="kitcat-tagline mb-6">Have a break, have a KitCat</p>
        <h1 className="kitcat-h1 mb-2">CRUNCHY</h1>
        <h1 className="kitcat-h1 mb-6">COLLECTIVE</h1>
        <p className="text-lg md:text-xl font-medium text-white/90 max-w-md mx-auto leading-relaxed">
          The first Web3 ecosystem designed for the ultimate break. 3,333 unique chocolate-themed felines ready to snap.
        </p>
        <div className="flex flex-col items-center mt-12">
          <span className="text-[10px] font-bold tracking-[0.4em] text-white/80 mb-4 uppercase">SNAP STARTS IN</span>
          <Countdown />
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="mt-20 relative group"
      >
        <div className="absolute inset-0 bg-white/20 rounded-[40px] blur-3xl group-hover:bg-white/30 transition-all duration-500" />
        <img 
          src="https://picsum.photos/seed/kitcat-red/800/800" 
          alt="KitCat Character" 
          className="relative w-full max-w-md rounded-[40px] border-8 border-white shadow-2xl"
          referrerPolicy="no-referrer"
        />
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
            Snap into the <span className="underline decoration-white underline-offset-8">Future</span>
          </h2>
          <div className="space-y-6 text-white/90 text-lg leading-relaxed">
            <p>
              Life in the digital age is a non-stop grind. We believe everyone deserves a moment to snap away from the noise. KitCat isn't just an NFT; it's your ticket to a global community of breakers.
            </p>
            <p className="italic border-l-4 border-white pl-6 py-2 text-white font-bold">
              "Have a break, have a KitCat. We're bringing the crunch back to the blockchain."
            </p>
            <p>
              Join 3,333 visionaries who know that the best ideas happen during a break. Each KitCat is a unique piece of digital chocolate, crafted with precision and a lot of love.
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
      title: "Phase 1: The Snap",
      items: ["Community building", "Genesis launch", "Secondary market", "Breaker roles"]
    },
    {
      number: "2",
      title: "Phase 2: The Crunch",
      items: ["Brand partnerships", "Holder rewards", "Breakroom beta", "Governance"]
    },
    {
      number: "3",
      title: "Phase 3: The Box",
      items: ["Full ecosystem", "$CRUNCH token", "Physical merch", "Global events"]
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
