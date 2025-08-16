import { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useInView } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import { 
  TrendingUp, 
  Target, 
  Search, 
  Video, 
  Globe, 
  Users, 
  CheckCircle, 
  ArrowRight, 
  Star,
  BarChart3,
  Zap,
  Eye,
  MessageSquare,
  Award,
  Clock,
  Shield
} from 'lucide-react';
import { caseStudiesData } from '@/components/CaseStudy';


const Index = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [parallax, setParallax] = useState(0);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const navigate = useNavigate();
  
  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const offset = Math.max(0, Math.min(1, 1 - rect.top / windowHeight));
      setParallax(offset);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const { ref: servicesRef, className: servicesClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: benefitsRef, className: benefitsClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: auditRef, className: auditClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: testimonialsRef, className: testimonialsClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: caseStudiesRef, className: caseStudiesClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: ctaRef, className: ctaClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');

  const services = [
    {
      icon: Target,
      title: 'Meta Ads',
      description: 'Strategic Facebook and Instagram advertising campaigns that drive conversions and brand awareness.',
      color: 'from-purple-50 to-pink-50'
    },
    {
      icon: Search,
      title: 'Google Ads',
      description: 'Search and display advertising that puts your business in front of customers actively looking for your services.',
      color: 'from-blue-50 to-cyan-50'
    },
    {
      icon: TrendingUp,
      title: 'SEO',
      description: 'Search engine optimization to improve your website\'s visibility and drive organic traffic.',
      color: 'from-green-50 to-emerald-50'
    },
    {
      icon: Video,
      title: 'Short-form Content',
      description: 'Engaging video content for TikTok, Instagram Reels, and YouTube Shorts that captivates your audience.',
      color: 'from-orange-50 to-red-50'
    },
    {
      icon: Globe,
      title: 'Website Creation',
      description: 'Professional, conversion-focused websites that represent your brand and drive business growth.',
      color: 'from-indigo-50 to-purple-50'
    }
  ];

  const benefits = [
    {
      icon: Award,
      title: 'Proven Results',
      description: 'Track record of delivering measurable growth and ROI for businesses across industries.'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: 'Experienced professionals with deep knowledge of digital marketing trends and strategies.'
    },
    {
      icon: Clock,
      title: 'Fast Execution',
      description: 'Quick turnaround times without compromising on quality or strategic depth.'
    },
    {
      icon: Shield,
      title: 'Transparent Process',
      description: 'Clear communication and regular updates throughout every project phase.'
    }
  ];


  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-screen bg-white">
        {/* Enhanced Hero Section */}
        <section 
          aria-label="Hero section" 
          className="w-full flex items-center justify-center min-h-[80vh] py-6 px-2 md:px-4 mt-24 md:mt-32 overflow-hidden"
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <div
            ref={ref}
            className="relative w-full max-w-[100rem] mx-auto rounded-[48px] md:rounded-[48px] bg-white flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-24 overflow-hidden"
            style={{
              minHeight: 520,
              background: `
                radial-gradient(ellipse at 10% 20%, #e0f7fa 0%, transparent 50%),
                radial-gradient(ellipse at 90% 80%, #f3e8ff 0%, transparent 55%),
                radial-gradient(ellipse at 30% 70%, #d1f5e0 0%, transparent 65%),
                radial-gradient(ellipse at 70% 40%, #ffe4fa 0%, transparent 60%),
                linear-gradient(135deg, #f7fafc 0%, #f8fafc 100%)
              `,
              backgroundPosition: `center ${parallax * 40}px`,
              transform: isInView ? 'scale(1)' : 'scale(0.98)',
              opacity: isInView ? 1 : 0,
              transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s',
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
                className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight text-black"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#000000',
                  letterSpacing: '-0.03em',
                  fontWeight: 400,
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
              >
                Transform Your Business<br />with Strategic Digital Marketing
              </h1>
              <p
                className="text-xl md:text-2xl font-normal mb-12 max-w-3xl mx-auto leading-relaxed text-black"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#000000',
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              >
                Data-driven digital marketing that boosts your presence and drives growth.
              </p>
              <div 
                className="flex flex-col md:flex-row gap-4 justify-center"
                style={{
                  transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInView ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                }}
              >
                <Button
                  size="lg"
                  className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                  onClick={() => navigate('/audit')}
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Get Free Audit
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

        {/* Services Overview Section */}
        <section ref={servicesRef} className={`py-24 px-2 md:px-4 bg-white w-full ${servicesClassName}`}>
          <div className="max-w-[90rem] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Comprehensive Digital<br />Marketing Solutions
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                From strategy to execution, we provide end-to-end digital marketing services designed to drive real business results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
              {services.slice(0, 3).map((service, index) => (
                <div
                  key={service.title}
                  className="group"
                  style={{
                    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isInView ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.1}s`
                  }}
                >
                  <div className="text-center h-full flex flex-col justify-between">
                    <div>
                      <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <service.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        {service.title}
                      </h3>
                      <p className="text-[#23272f] leading-relaxed mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        {service.description}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-[#18181b] hover:text-[#23272f] group-hover:translate-x-1 transition-all duration-300"
                      onClick={() => navigate('/services')}
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </div>
                </div>
              ))}
              <div className="lg:col-span-3 flex justify-center gap-12">
                {services.slice(3).map((service, index) => (
                  <div
                    key={service.title}
                    className="group w-full max-w-xs"
                    style={{
                      transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                      opacity: isInView ? 1 : 0,
                      transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.4 + index * 0.1}s`
                    }}
                  >
                    <div className="text-center h-full flex flex-col justify-between">
                      <div>
                        <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <service.icon className="w-8 h-8 text-gray-700" />
                        </div>
                        <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          {service.title}
                        </h3>
                        <p className="text-[#23272f] leading-relaxed mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          {service.description}
                        </p>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        className="text-[#18181b] hover:text-[#23272f] group-hover:translate-x-1 transition-all duration-300"
                        onClick={() => navigate('/services')}
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section ref={benefitsRef} className={`py-24 px-2 md:px-4 bg-gray-50 w-full ${benefitsClassName}`}>
          <div className="max-w-[90rem] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Why Choose Us
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We combine strategic thinking with creative execution to deliver results that matter for your business.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <div
                  key={benefit.title}
                  className="group"
                  style={{
                    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isInView ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.1}s`
                  }}
                >
                  <Card className="border-0 shadow-none bg-white transition-all duration-500 group-hover:scale-[1.02] h-full">
                    <CardContent className="p-8">
                      <div className="flex items-start gap-6">
                        <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="w-7 h-7 text-gray-700" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                            {benefit.title}
                          </h3>
                          <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                            {benefit.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        
        {/* Featured Case Studies Section */}
        <section ref={caseStudiesRef} className={`py-24 px-2 md:px-4 bg-white w-full ${caseStudiesClassName}`}>
          <div className="max-w-[90rem] mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Featured Case Studies
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                See how we've helped businesses like yours achieve remarkable results through strategic digital marketing.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                caseStudiesData.find(study => study.id === 'pet-nutrition'),
                caseStudiesData.find(study => study.id === 'apparel'),
                caseStudiesData.find(study => study.id === 'health-wellness')
              ].map((caseStudy, index) => (
                <div
                  key={caseStudy.id}
                  className="group"
                  style={{
                    transform: isInView ? 'translateY(0)' : 'translateY(20px)',
                    opacity: isInView ? 1 : 0,
                    transition: `all 0.8s cubic-bezier(0.16, 1, 0.3, 1) ${0.1 + index * 0.1}s`
                  }}
                >
                  <Card className="border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="aspect-video w-full bg-gray-100 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-purple-50/50" />
                      <div className="absolute top-4 left-4">
                        <Badge variant="secondary" className="bg-white/90 text-gray-800">
                          {caseStudy.industry}
                        </Badge>
                      </div>
                    </div>
                    <CardHeader>
                      <CardTitle className="text-xl" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        {caseStudy.client}
                      </CardTitle>
                      <CardDescription style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {caseStudy.challenge}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-grow">
                      <p className="text-[#23272f] mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        {caseStudy.solution}
                      </p>
                      <div className="space-y-2">
                        {caseStudy.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="h-4 w-4 text-green-500" />
                            <span className="text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>{result}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                    <div className="p-6 pt-0 mt-auto">
                      <Button
                        variant="ghost"
                        className="text-[#18181b] hover:text-[#23272f] group-hover:translate-x-1 transition-all duration-300 w-full justify-start p-0"
                        onClick={() => navigate(caseStudy.link)}
                      >
                        View Case Study
                        <ArrowRight className="w-4 h-4 ml-1" />
                      </Button>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
            
            <div className="mt-16 text-center">
              <Button
                size="lg"
                className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                onClick={() => navigate('/case-studies')}
                style={{ 
                  fontFamily: 'Montserrat, sans-serif'
                }}
              >
                View All Case Studies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>

        {/* CTA Banner Section */}
        <section ref={auditRef} className={`py-24 px-2 md:px-4 bg-white w-full ${auditClassName}`}>
          <div className="max-w-[90rem] mx-auto">
            <div className="relative rounded-[32px] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse at 10% 20%, #e0f7fa 0%, transparent 50%),
                    radial-gradient(ellipse at 90% 80%, #f3e8ff 0%, transparent 55%),
                    radial-gradient(ellipse at 30% 70%, #d1f5e0 0%, transparent 65%),
                    linear-gradient(135deg, #f7fafc 0%, #f8fafc 100%)
                  `
                }}
              />
              <div className="relative z-10 p-12 md:p-16">
                <div className="max-w-5xl mx-auto text-center">
                  <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                    Ready to Level Up<br />Your Business?
                  </h2>
                  <p className="text-lg md:text-xl text-[#23272f] mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    Let's discuss how we can help you achieve your digital marketing goals and drive sustainable business growth.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                                         <Button
                       size="lg"
                       className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                       onClick={() => navigate('/audit')}
                       style={{ 
                         fontFamily: 'Montserrat, sans-serif'
                       }}
                     >
                       Get Free Audit
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
                     <Button
                       size="lg"
                       variant="outline"
                       className="border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                       onClick={() => navigate('/contact')}
                       style={{ 
                         fontFamily: 'Montserrat, sans-serif', 
                         borderColor: '#18181b'
                       }}
                     >
                       Book Call
                     </Button>
                  </div>
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

export default Index;
