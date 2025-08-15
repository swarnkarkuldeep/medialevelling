import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion'; // Keep this for existing animations if needed, though useInViewAnimation might supersede some.
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight,
  Users,
  Award,
  Clock,
  Shield,
  TrendingUp,
  Target, // For 'Our Approach'
  Search, // For 'Our Approach'
  Video, // For 'Our Approach'
  Globe // For 'Our Approach'
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useNavigate } from 'react-router-dom';

const stats = [
  { number: 500, label: "Projects Completed", suffix: "+", icon: Award },
  { number: 98, label: "Client Satisfaction", suffix: "%", icon: Users },
  { number: 50, label: "Team Members", suffix: "+", icon: Users },
  { number: 5, label: "Years Experience", suffix: "+", icon: Clock }
];

// Counter component for animated numbers - moved outside to be reusable
const CountUpNumber = ({ end, suffix, animate }: { end: number; suffix: string; animate: boolean }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(0); // Use ref to store the current count

  useEffect(() => {
    if (!animate) return;

    const duration = 2000;
    const startTime = performance.now();

    const animateCount = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const value = Math.floor(progress * end);

      setCount(value);

      if (progress < 1) {
        requestAnimationFrame(animateCount);
      } else {
        setCount(end); // Ensure it lands exactly on the end number
      }
    };

    requestAnimationFrame(animateCount);

    return () => {
      // Cleanup is handled by requestAnimationFrame's natural completion
    };
  }, [end, animate]);

  return <span>{count}{suffix}</span>;
};

const About = () => {
  const [hasAnimatedStats, setHasAnimatedStats] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);
  const isStatsInView = useInView(statsRef, { once: true, amount: 0.5 }); // Detect when stats section is in view

  const mainAnim = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const backgroundRef = useInViewAnimation<HTMLDivElement>('animate-fade-in-up', '0px 0px -10% 0px'); // Adjusted offset
  const differenceRef = useInViewAnimation<HTMLDivElement>('animate-fade-in-up', '0px 0px -10% 0px'); // Adjusted offset
  const approachRef = useInViewAnimation<HTMLDivElement>('animate-fade-in-up', '0px 0px -10% 0px'); // New animation ref
  const servicesRef = useInViewAnimation<HTMLDivElement>('animate-fade-in-up', '0px 0px -10% 0px'); // Adjusted offset
  const navigate = useNavigate();

  useEffect(() => {
    if (isStatsInView && !hasAnimatedStats) {
      setHasAnimatedStats(true);
    }
  }, [isStatsInView, hasAnimatedStats]);

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-screen bg-white">
                 {/* Hero Section */}
         <section className="w-full flex items-center justify-center min-h-[80vh] py-8 px-2 md:px-4 mt-24 md:mt-32 overflow-hidden">
           <div className="relative w-full max-w-7xl mx-auto rounded-[48px] md:rounded-[48px] bg-white flex flex-col items-center justify-center px-6 md:px-16 py-12 md:py-20 overflow-hidden"
             style={{
               minHeight: 520,
               background: `
                 radial-gradient(ellipse at 10% 20%, #e0f7fa 0%, transparent 50%),
                 radial-gradient(ellipse at 90% 80%, #f3e8ff 0%, transparent 55%),
                 radial-gradient(ellipse at 30% 70%, #d1f5e0 0%, transparent 65%),
                 radial-gradient(ellipse at 70% 40%, #ffe4fa 0%, transparent 60%),
                 linear-gradient(135deg, #f7fafc 0%, #f8fafc 100%)
               `
             }}
           >
             <div className="absolute inset-0 rounded-[48px] z-0 overflow-hidden pointer-events-none">
               <div
                 className="animate-gradient-move"
                 style={{
                   width: '100%',
                   height: '100%',
                   background: `
                     radial-gradient(ellipse at 15% 25%, #e0f7fa 0%, transparent 55%),
                     radial-gradient(ellipse at 85% 75%, #f3e8ff 0%, transparent 50%),
                     radial-gradient(ellipse at 25% 65%, #d1f5e0 0%, transparent 60%),
                     radial-gradient(ellipse at 75% 35%, #ffe4fa 0%, transparent 65%)
                   `,
                   opacity: 0.7,
                   position: 'absolute',
                   inset: 0,
                   backgroundSize: '200% 200%',
                 }}
               />
             </div>
             <div className="relative z-10 flex flex-col items-center justify-center h-full text-center w-full">
               <h1
                 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight"
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   color: '#18181b',
                   letterSpacing: '-0.03em',
                   fontWeight: 400
                 }}
               >
                 We Transform<br />Digital Marketing
               </h1>
               <p
                 className="text-xl md:text-2xl font-normal mb-12 max-w-3xl mx-auto leading-relaxed"
                 style={{
                   fontFamily: 'Montserrat, sans-serif',
                   color: '#23272f'
                 }}
               >
                 At Media Levelling, we blend creative strategy with data-driven insights to elevate brands and drive remarkable business growth in the digital landscape.
               </p>
               <div className="flex flex-col md:flex-row gap-4 justify-center">
                 <Button
                   size="lg"
                   className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                   onClick={() => navigate('/contact')}
                   style={{ 
                     fontFamily: 'Montserrat, sans-serif'
                   }}
                 >
                   Get in Touch
                   <ArrowRight className="ml-2 h-5 w-5" />
                 </Button>
                 <Button
                   size="lg"
                   variant="outline"
                   className="border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                   onClick={() => navigate('/services')}
                   style={{ 
                     fontFamily: 'Montserrat, sans-serif', 
                     borderColor: '#18181b'
                   }}
                 >
                   View Services
                 </Button>
               </div>
             </div>
           </div>
         </section>

                 {/* Stats Section */}
         <section ref={statsRef} className="py-16 px-4 md:px-8 bg-white">
           <div className="max-w-6xl mx-auto">
             <div className="text-center mb-12">
               <h2 className="text-2xl md:text-3xl font-normal mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                 Our Impact in Numbers
               </h2>
               <p className="text-lg text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                 Real results from real partnerships
               </p>
             </div>
             <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
               {stats.map((stat, index) => (
                 <div key={index} className="text-center group">
                   <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                     <stat.icon className="w-8 h-8 text-gray-700" />
                   </div>
                   <h3 className="text-3xl md:text-4xl font-semibold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                     <CountUpNumber end={stat.number} suffix={stat.suffix} animate={hasAnimatedStats} />
                   </h3>
                   <p className="text-sm md:text-base text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                     {stat.label}
                   </p>
                 </div>
               ))}
             </div>
           </div>
         </section>
        
        {/* About Section - Who We Are */}
        <section id="about" className="py-24 px-4 md:px-8 bg-white">
          <div ref={mainAnim.ref} className={`max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 items-stretch ${mainAnim.className}`}>
            {/* Left: Heading and mission */}
            <div className="flex-1 flex flex-col justify-center lg:pr-12 mb-10 lg:mb-0">
              <h2 className="text-5xl md:text-6xl font-normal mb-8 text-left animate-fade-in-up" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', lineHeight: 1.1, animationDelay: '200ms' }}>
                Who.<br />We.<br />Are.
              </h2>
              <h3 className="text-3xl md:text-4xl font-semibold mb-8 text-left text-gray-800 animate-fade-in-up" style={{ fontFamily: 'Montserrat, sans-serif', animationDelay: '350ms' }}>
                Your Dedicated Digital Marketing Experts
              </h3>
              <p className="text-lg md:text-xl text-[#23263a] mb-6 max-w-lg animate-fade-in-up" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400, animationDelay: '500ms' }}>
                We're a passionate digital marketing team dedicated to elevating brands through **creative strategy**, **data-driven insights**, and a relentless pursuit of excellence in digital media and business growth.
              </p>
              <p className="text-base md:text-lg text-[#18181b] max-w-lg animate-fade-in-up" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 450, animationDelay: '650ms' }}>
                Our mission: **Empowering businesses to grow, connect, and inspire** through innovative media solutions that deliver measurable impact.
              </p>
            </div>
            {/* Right: Cards */}
            <div className="flex-[1.5] flex flex-col sm:flex-row gap-8 min-w-[320px] justify-center">
              {/* Values Card with abstract SVG */}
              <Card className="flex-1 max-w-md rounded-2xl flex flex-col items-center justify-center p-8 min-h-[380px] animate-fade-in-up relative overflow-hidden transition-all duration-300" style={{ 
                animationDelay: '800ms',
                background: `
                  radial-gradient(ellipse at 60% 10%, #e0f7fa 0%, transparent 65%),
                  radial-gradient(ellipse at 80% 80%, #f3e8ff 0%, transparent 60%),
                  radial-gradient(ellipse at 20% 90%, #d1f5e0 0%, transparent 70%),
                  radial-gradient(ellipse at 50% 50%, #ffe4fa 0%, transparent 55%)
                `,
                backgroundSize: '200% 200%'
              }}>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mb-6" role="img" aria-label="Interlocking hands/abstract shapes representing digital marketing values">
                  <ellipse cx="36" cy="36" rx="32" ry="32" fill="#6366f1" fillOpacity="0.10" />
                  <rect x="18" y="36" width="18" height="10" rx="5" fill="#6366f1" />
                  <rect x="36" y="26" width="18" height="10" rx="5" fill="#a5b4fc" />
                  <rect x="27" y="18" width="18" height="10" rx="5" fill="#ffe4fa" />
                </svg>
                <div className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Our Values
                </div>
                <div className="text-lg text-[#000] mb-3 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Integrity, Creativity, Collaboration
                </div>
                <div className="text-base text-gray-600 text-center px-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  We believe in honest work, bold ideas, and the power of teamwork to drive real, sustainable results for our clients.
                </div>
              </Card>
              {/* Vision Card with abstract SVG */}
              <Card className="flex-1 max-w-md rounded-2xl flex flex-col items-center justify-center p-8 min-h-[380px] animate-fade-in-up relative overflow-hidden transition-all duration-300" style={{ 
                animationDelay: '950ms',
                background: `
                  radial-gradient(ellipse at 15% 30%, #e0f7fa 0%, transparent 60%),
                  radial-gradient(ellipse at 90% 20%, #f3e8ff 0%, transparent 65%),
                  radial-gradient(ellipse at 60% 90%, #d1f5e0 0%, transparent 75%),
                  radial-gradient(ellipse at 80% 60%, #ffe4fa 0%, transparent 50%)
                `,
                backgroundSize: '200% 200%'
              }}>
                <svg width="72" height="72" viewBox="0 0 72 72" fill="none" className="mb-6" role="img" aria-label="Upward arrow with milestones representing business growth in digital marketing">
                  <ellipse cx="36" cy="36" rx="32" ry="32" fill="#6366f1" fillOpacity="0.10" />
                  <polyline points="20,52 36,36 52,44" stroke="#6366f1" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <circle cx="36" cy="36" r="5" fill="#6366f1" />
                  <circle cx="20" cy="52" r="4" fill="#a5b4fc" />
                  <circle cx="52" cy="44" r="4" fill="#ffe4fa" />
                  <polyline points="36,36 36,20" stroke="#6366f1" strokeWidth="4" fill="none" strokeLinecap="round" />
                  <polygon points="36,12 32,20 40,20" fill="#6366f1" />
                </svg>
                <div className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Our Vision
                </div>
                <div className="text-lg text-[#000] mb-3 font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  Inspire Growth & Connection
                </div>
                <div className="text-base text-gray-600 text-center px-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  To inspire transformative growth and deep connection for every brand we touch, making a lasting impact in the dynamic digital world.
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Company Background Section */}
        <section ref={backgroundRef.ref} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${backgroundRef.className}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Our Story: From Vision to Impact
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Discover the journey that shaped Media Levelling into the digital marketing powerhouse it is today, driven by innovation and client success.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h3 className="text-2xl md:text-3xl font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Founded with a Clear Vision
                </h3>
                <p className="text-lg text-[#23272f] leading-relaxed mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Media Levelling was born from a simple yet powerful idea: every business, regardless of size, deserves access to **world-class digital marketing expertise**. What started as a small, agile team of passionate marketers has organically grown into a comprehensive digital marketing agency.
                </p>
                <p className="text-lg text-[#23272f] leading-relaxed mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  We began by helping local businesses establish and amplify their online presence, quickly realizing that our **data-driven approach** and **creative strategies** consistently delivered exceptional, measurable results. This early success fueled our expansion and refined our commitment to client-centric solutions.
                </p>
                <p className="text-lg text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Today, we proudly serve a diverse portfolio of businesses across various industries, from innovative startups seeking their initial breakthrough to established enterprises aiming for sustained digital dominance. We empower them to navigate the ever-evolving digital landscape with confidence, achieving remarkable and **sustainable growth**.
                </p>
              </div>
              <div className="relative flex justify-center items-center">
                <div className="w-full max-w-md h-80 md:h-96 rounded-[32px] bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white flex items-center justify-center">
                      <TrendingUp className="w-12 h-12 text-gray-700" />
                    </div>
                    <h4 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      A Journey of Continuous Growth
                    </h4>
                    <p className="text-lg text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Evolving from local roots to global digital impact.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us / Our Approach Section */}
        <section ref={approachRef.ref} className={`py-24 px-4 md:px-8 bg-white ${approachRef.className}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Our Winning Approach
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We believe in a strategic and holistic approach to digital marketing. Here's how we ensure your brand not only stands out but thrives.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Data-Driven Strategy */}
              <div className="group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Search className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Data-Driven Strategy
                </h3>
                <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Every campaign we launch is backed by in-depth market research and analytical insights, ensuring optimal performance and ROI.
                </p>
              </div>

              {/* Creative Innovation */}
              <div className="group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Video className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Creative Innovation
                </h3>
                <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  We constantly explore new creative avenues and cutting-edge technologies to keep your brand ahead of the curve.
                </p>
              </div>

              {/* Client-Centric Partnership */}
              <div className="group bg-gray-50 rounded-2xl p-8 transition-all duration-300 hover:bg-white">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Target className="w-8 h-8 text-gray-700" />
                </div>
                <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Client-Centric Partnership
                </h3>
                <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Your success is our priority. We work as an extension of your team, providing personalized strategies and dedicated support.
                </p>
              </div>
            </div>
          </div>
        </section>


        {/* What Sets Us Apart Section */}
        <section ref={differenceRef.ref} className={`pt-12 pb-24 px-4 md:px-8 bg-white ${differenceRef.className}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Why Choose Media Levelling?
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We don't just follow industry trends—we set them. Here's what makes Media Levelling the partner of choice for forward-thinking businesses.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {/* Proven Results */}
              <Card className="border-0 bg-white transition-all duration-500 hover:scale-[1.02] h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center transition-transform duration-300">
                      <Award className="w-8 h-8 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Proven, Measurable Results
                      </h3>
                      <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        Our track record speaks for itself. We've helped hundreds of businesses achieve measurable growth through strategic, results-driven digital marketing campaigns.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Expert Team */}
              <Card className="border-0 bg-white transition-all duration-500 hover:scale-[1.02] h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center transition-transform duration-300">
                      <Users className="w-8 h-8 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Dedicated Expert Team
                      </h3>
                      <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        Our team consists of industry veterans and creative professionals who are constantly learning and applying the latest digital marketing trends and technologies.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Fast Execution */}
              <Card className="border-0 bg-white transition-all duration-500 hover:scale-[1.02] h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center transition-transform duration-300">
                      <Clock className="w-8 h-8 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Agile & Fast Execution
                      </h3>
                      <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        We understand that time is money in the fast-paced digital world. Our streamlined processes ensure quick turnaround times without compromising on quality or impact.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Transparent Process */}
              <Card className="border-0 bg-white transition-all duration-500 hover:scale-[1.02] h-full">
                <CardContent className="p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center transition-transform duration-300">
                      <Shield className="w-8 h-8 text-gray-700" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Complete Transparency
                      </h3>
                      <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        We believe in complete transparency throughout our partnership. You'll always be informed about our progress and how it directly contributes to your business goals.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Combined CTA Section */}
        <section ref={servicesRef.ref} className={`pt-12 pb-24 px-4 md:px-8 bg-white ${servicesRef.className}`}>
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[32px] overflow-hidden p-12 md:p-16"
              style={{
                background: `
                  radial-gradient(ellipse at 10% 20%, #e0f7fa 0%, transparent 50%),
                  radial-gradient(ellipse at 90% 80%, #f3e8ff 0%, transparent 55%),
                  radial-gradient(ellipse at 30% 70%, #d1f5e0 0%, transparent 65%),
                  linear-gradient(135deg, #f7fafc 0%, #f8fafc 100%)
                `
              }}>
              <div className="relative z-10 text-center">
                <h2 className="text-3xl md:text-5xl font-normal mb-8 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                  Ready to Transform Your Business <br className="hidden md:inline"/>with Digital Excellence?
                </h2>
                <p className="text-lg md:text-xl text-[#23272f] mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Discover our comprehensive digital marketing services designed to drive real, measurable results and accelerate your business growth.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                    onClick={() => navigate('/services')}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    View Services
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-2 border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                    onClick={() => navigate('/audit')}
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    Get a Free Audit
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <BackToTop />
      </main>
      <Footer />
    </>
  );
};

export default About;