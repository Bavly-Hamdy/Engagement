import { motion } from "motion/react";
import Countdown from "./Countdown";
import { MapPin } from "lucide-react";
import Sparkles from "./Sparkles";

export default function Invitation() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 1.0, ease: [0.16, 1, 0.3, 1] as const } 
    },
  };

  const cornerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 0.95, scale: 1, transition: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as const } },
  };

  return (
    <div className="min-h-screen w-full relative pb-24 overflow-hidden flex flex-col items-center bg-transparent font-serif text-brand-primary">
      {/* Background Decor */}
      <motion.div variants={cornerVariants} initial="hidden" animate="visible" className="absolute top-0 right-0 w-64 h-64 border-r-[3px] border-t-[3px] border-brand-border m-8 origin-top-right"></motion.div>
      <motion.div variants={cornerVariants} initial="hidden" animate="visible" className="absolute bottom-0 left-0 w-64 h-64 border-l-[3px] border-b-[3px] border-brand-border m-8 pointer-events-none origin-bottom-left"></motion.div>
      
      <div className="max-w-4xl w-full px-6 pt-16 sm:pt-24 flex flex-col items-center text-center z-10">
        
        {/* Intro Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-20 mt-8"
        >
          <h2 className="font-arabic text-3xl sm:text-4xl text-brand-accent mb-10 font-bold">
            بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ
          </h2>
          <p className="font-arabic text-xl sm:text-3xl text-brand-primary leading-relaxed max-w-xl mx-auto font-bold">
            "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا وَجَعَلَ بَيْنَكُم مَّوَدَّةً وَرَحْمَةً"
          </p>
          <p className="font-arabic text-xs sm:text-sm text-brand-secondary mt-6 tracking-[0.1em] font-bold">— صدق الله العظيم —</p>
        </motion.div>

        {/* Names Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 relative w-full"
        >
          <span className="absolute text-[90px] sm:text-[180px] font-sans font-black text-brand-faint -z-10 opacity-80 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none">CELEBRATE</span>

          <h2 className="font-arabic text-lg sm:text-xl text-brand-primary font-extrabold tracking-[0.2em] mb-12 uppercase" dir="rtl">
            نتشرف بدعوتكم لحضور حفل خطوبتنا
          </h2>
          
          <div className="relative inline-block w-full max-w-lg mt-8">
            <Sparkles count={20} />
            <h1 className="text-7xl sm:text-9xl font-bold leading-none text-brand-primary z-10 block relative">
              Rashad
            </h1>
            <span className="text-5xl font-serif italic font-normal text-brand-accent block my-6 relative z-10">&amp;</span>
            <h1 className="text-7xl sm:text-9xl font-bold leading-none text-brand-primary z-10 block relative">
              Esraa
            </h1>
          </div>
        </motion.div>

        {/* Date & Countdown */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-24 w-full"
        >
           <h2 className="tracking-[0.3em] text-xs uppercase font-sans font-extrabold text-brand-primary mb-4">Save The Date</h2>
           <p className="text-2xl font-normal italic mb-12">Friday, September 25th, 2026</p>
          
          <Countdown />
        </motion.div>

        {/* Location Section */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full relative text-center flex flex-col items-center"
          dir="rtl"
        >
          <div className="flex items-center gap-4 mb-10 justify-center">
             <div className="w-12 h-12 rounded-full border border-brand-border flex items-center justify-center text-brand-primary">
               <MapPin size={24} strokeWidth={1} />
             </div>
             <div className="text-right" dir="ltr">
                <div className="text-[10px] uppercase tracking-widest font-sans font-extrabold text-brand-primary">The Venue</div>
                <div className="text-sm font-sans font-semibold mt-1">نادي حرس الحدود، الزمالك</div>
             </div>
          </div>

          <p className="font-arabic text-xl sm:text-2xl text-brand-primary font-light mb-12 leading-loose max-w-lg">
            بكل الحب ننتظركم لتشاركونا فرحتنا يوم الجمعة ٢٥ سبتمبر ٢٠٢٦،
            <br />
            في نادي حرس الحدود بالزمالك - قاعة أوركيدا.
          </p>

          {/* Map */}
          <div className="w-full max-w-2xl h-80 bg-brand-bg relative mb-12 border border-brand-border overflow-hidden">
             {/* Map overlays */}
             <div className="absolute inset-0 border-[10px] border-brand-bg/20 z-10 pointer-events-none"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d13813.1952542065!2d31.22129!3d30.0573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458410708f39fc7%3A0x6b19a3b754988775!2sZamalek%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1700000000000!5m2!1sen!2seg" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
            />
          </div>

          <a 
            href="https://goo.gl/maps/generic_link" 
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-4 bg-brand-primary text-brand-bg text-[11px] uppercase tracking-[0.3em] font-sans hover:bg-brand-accent transition-colors"
          >
            الوصول عبر الخريطة
          </a>
        </motion.div>
        
        {/* Footer */}
        <motion.div 
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="mt-32 mb-10 text-center w-full relative"
        >
           <span className="absolute text-[80px] sm:text-[120px] font-sans font-black text-brand-faint -z-10 opacity-60 uppercase tracking-tighter top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">THANK YOU</span>
          <p className="font-serif italic text-4xl text-brand-primary mb-6 z-10 relative">Thank You</p>
          <p className="font-arabic text-brand-secondary font-bold tracking-[0.15em] z-10 relative">عقبال عندكم جميعاً</p>
        </motion.div>

      </div>
    </div>
  );
}
