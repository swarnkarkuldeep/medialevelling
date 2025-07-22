import { useState, useRef } from 'react';
import { useInView } from 'framer-motion';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  TrendingUp, 
  Target, 
  Video, 
  Globe, 
  CheckCircle,
  ArrowRight,
  FileText,
  BarChart3,
  Zap,
  Eye,
  MessageSquare,
  Award,
  Clock,
  Shield,
  Users,
  Star,
  Play,
  ChevronDown,
  ChevronUp,
  Lightbulb,
  Rocket,
  Activity,
  TrendingDown,
  AlertTriangle,
  ThumbsUp
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useNavigate } from 'react-router-dom';

const Audit = () => {
  const heroRef = useRef(null);
  const isInViewHero = useInView(heroRef, { once: true, amount: 0.3 });
  const { ref: formRef, className: formClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: whyAuditRef, className: whyAuditClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: widgetRef, className: widgetClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: competitorRef, className: competitorClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: pathRef, className: pathClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: methodologyRef, className: methodologyClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: resultsRef, className: resultsClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: testimonialsRef, className: testimonialsClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: faqRef, className: faqClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: finalCtaRef, className: finalCtaClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    service: '',
    budget: '',
    timeline: '',
    description: '',
    services: [] as string[]
  });

  const [auditScore, setAuditScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const handleInputChange = (field: string, value: string | string[]) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleServiceToggle = (service: string) => {
    setFormData(prev => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter(s => s !== service)
        : [...prev.services, service]
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/contact');
  };

  const generateAuditScore = () => {
    const score = Math.floor(Math.random() * 40) + 35; // Random score between 35-75
    setAuditScore(score);
    setShowScore(true);
  };

  const whyAuditReasons = [
    {
      icon: Eye,
      title: 'Uncover Hidden Issues',
      description: 'Discover what\'s holding your digital marketing back and identify missed opportunities for growth.'
    },
    {
      icon: TrendingUp,
      title: 'Maximize ROI',
      description: 'Get actionable insights to improve your marketing spend efficiency and drive better results.'
    },
    {
      icon: Target,
      title: 'Strategic Direction',
      description: 'Receive a clear roadmap with prioritized recommendations for immediate and long-term success.'
    },
    {
      icon: Zap,
      title: 'Quick Wins',
      description: 'Identify low-hanging fruit that can deliver immediate improvements to your marketing performance.'
    }
  ];

  const competitorMetrics = [
    { metric: 'Organic Traffic', you: 45, competitor: 78, industry: 65 },
    { metric: 'Conversion Rate', you: 2.1, competitor: 3.8, industry: 2.9 },
    { metric: 'Page Speed', you: 3.2, competitor: 1.8, industry: 2.5 },
    { metric: 'Social Engagement', you: 1.2, competitor: 4.5, industry: 2.8 }
  ];

  const pathSteps = [
    {
      icon: Search,
      title: 'Deep Analysis',
      description: 'We analyze every aspect of your digital presence - from technical SEO to conversion funnels.'
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Our team identifies gaps, opportunities, and provides benchmarking against your competitors.'
    },
    {
      icon: Rocket,
      title: 'Strategic Roadmap',
      description: 'You receive a prioritized action plan with clear steps to achieve your marketing goals.'
    }
  ];

  const methodologySteps = [
    'Technical Website Audit',
    'SEO Performance Analysis',
    'Paid Advertising Review',
    'Content Strategy Assessment',
    'Competitor Benchmarking',
    'Conversion Optimization Review'
  ];

  const resultStats = [
    { number: '87%', label: 'Average Traffic Increase', icon: TrendingUp },
    { number: '156%', label: 'ROI Improvement', icon: Target },
    { number: '48hrs', label: 'Audit Delivery Time', icon: Clock },
    { number: '500+', label: 'Successful Audits', icon: Award }
  ];

  const testimonials = [
    {
      quote: "The audit revealed issues we never knew existed. Within 3 months, our organic traffic doubled!",
      author: "Sarah Chen",
      company: "TechStart Inc.",
      rating: 5
    },
    {
      quote: "Incredibly detailed analysis. The recommendations were spot-on and easy to implement.",
      author: "Michael Rodriguez",
      company: "GrowthCo",
      rating: 5
    },
    {
      quote: "Best investment we made. The audit saved us thousands in wasted ad spend.",
      author: "Emily Johnson",
      company: "RetailPlus",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "How long does the audit take?",
      answer: "We deliver comprehensive audits within 48 hours. Our team works efficiently to provide you with actionable insights quickly."
    },
    {
      question: "What's included in the free audit?",
      answer: "Our free audit includes technical SEO analysis, performance review, competitor benchmarking, and a prioritized action plan with quick wins."
    },
    {
      question: "Do I need to provide access to my accounts?",
      answer: "For the most accurate analysis, we may need read-only access to your Google Analytics, Search Console, and advertising accounts. All access is secure and temporary."
    },
    {
      question: "What happens after I receive the audit?",
      answer: "You'll get a detailed report with actionable recommendations. We also offer a free consultation call to discuss the findings and next steps."
    },
    {
      question: "Is this really free?",
      answer: "Yes, absolutely! We provide genuine value upfront. There's no obligation to work with us, though many clients choose to after seeing the quality of our analysis."
    }
  ];

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-screen bg-white">
        {/* Hero Section with CTA */}
        <section 
          ref={heroRef}
          className="w-full flex items-center justify-center min-h-[80vh] py-8 px-4 md:px-8 mt-24 md:mt-32 overflow-hidden"
          style={{
            opacity: isInViewHero ? 1 : 0,
            transform: isInViewHero ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <div
            className="relative w-full max-w-7xl mx-auto rounded-[48px] md:rounded-[48px] bg-white flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-24 overflow-hidden"
            style={{
              minHeight: 520,
              background: `
                radial-gradient(ellipse at 10% 20%, #e0f7fa 0%, transparent 50%),
                radial-gradient(ellipse at 90% 80%, #f3e8ff 0%, transparent 55%),
                radial-gradient(ellipse at 30% 70%, #d1f5e0 0%, transparent 65%),
                radial-gradient(ellipse at 70% 40%, #ffe4fa 0%, transparent 60%),
                linear-gradient(135deg, #f7fafc 0%, #f8fafc 100%)
              `,
              transform: isInViewHero ? 'scale(1)' : 'scale(0.98)',
              opacity: isInViewHero ? 1 : 0,
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
                className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#18181b',
                  letterSpacing: '-0.03em',
                  fontWeight: 400,
                  transform: isInViewHero ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInViewHero ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s'
                }}
              >
                Get Your Free Digital<br />Marketing Audit
              </h1>
              <p
                className="text-xl md:text-2xl font-normal mb-12 max-w-3xl mx-auto leading-relaxed"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#23272f',
                  transform: isInViewHero ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInViewHero ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              >
                Discover what's holding your business back and get a clear roadmap to digital marketing success. Delivered in 48 hours.
              </p>
              <div 
                className="flex flex-col md:flex-row gap-4 justify-center"
                style={{
                  transform: isInViewHero ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInViewHero ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.4s'
                }}
              >
                <Button
                  size="lg"
                  className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  Get My Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    borderColor: '#18181b'
                  }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch Video
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Video Section (VSL) */}
        <section id="video-section" className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                See How We Transform Businesses
              </h2>
              <p className="text-lg text-[#23272f] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Watch this 3-minute video to understand our audit process and see real results from businesses like yours.
              </p>
            </div>
            
            <div className="relative rounded-2xl overflow-hidden shadow-2xl bg-gray-100 aspect-video max-w-4xl mx-auto">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="Digital Marketing Audit Process"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </section>

        {/* Form Section (Above the fold) */}
        <section id="audit-form" ref={formRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${formClassName}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                Get Your Free Audit Report
              </h2>
              <p className="text-lg text-[#23272f] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Fill out this quick form and we'll deliver a comprehensive audit of your digital marketing within 48 hours.
              </p>
            </div>
            
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-gray-50 to-white pb-8">
                <CardTitle className="text-2xl font-normal text-center" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                  Free Digital Marketing Audit
                </CardTitle>
                <CardDescription className="text-center text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  No cost, no commitment - just valuable insights for your business
                </CardDescription>
              </CardHeader>
              <CardContent className="p-8">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="name" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Full Name *
                      </Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        required
                        className="mt-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="email" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Email Address *
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        required
                        className="mt-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="company" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Company Name
                      </Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className="mt-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                    <div>
                      <Label htmlFor="website" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Website URL *
                      </Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        required
                        className="mt-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      What are your main marketing challenges?
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Tell us about your current marketing efforts and what you'd like to improve..."
                      className="mt-2 min-h-[120px]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>
                  
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-[#18181b] hover:bg-[#23272f] text-white px-12 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Get My Free Audit Report
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <p className="text-sm text-gray-500 mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Delivered within 48 hours • No spam, ever
                    </p>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Why Go For Audit Section */}
        <section ref={whyAuditRef} className={`py-24 px-4 md:px-8 bg-white ${whyAuditClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Why Every Business Needs<br />a Digital Marketing Audit
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Most businesses are leaving money on the table without even knowing it. Our audit reveals exactly where and how to fix it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {whyAuditReasons.map((reason, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-none bg-white transition-all duration-500 hover:scale-[1.02] h-full"
                  style={{
                    animationDelay: `${idx * 150}ms`
                  }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                        <reason.icon className="w-8 h-8 text-gray-700" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          {reason.title}
                        </h3>
                        <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Audit Score Widget */}
        <section ref={widgetRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${widgetClassName}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-normal mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                What's Your Current Marketing Score?
              </h2>
              <p className="text-lg text-[#23272f] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Get an instant preview of how your digital marketing might be performing. Click below for a sample score.
              </p>
            </div>
            
            <Card className="shadow-xl border-0 overflow-hidden bg-white">
              <CardContent className="p-12 text-center">
                {!showScore ? (
                  <div>
                    <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                      <BarChart3 className="w-16 h-16 text-gray-600" />
                    </div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Discover Your Marketing Performance
                    </h3>
                    <p className="text-[#23272f] mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Click the button below to see a sample audit score and understand what we analyze.
                    </p>
                    <Button
                      onClick={generateAuditScore}
                      size="lg"
                      className="bg-[#18181b] hover:bg-[#23272f] text-white px-8 py-3 rounded-lg font-semibold"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Generate Sample Score
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="relative w-32 h-32 mx-auto mb-8">
                      <div className="w-32 h-32 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-3xl font-bold text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {auditScore}
                          </div>
                          <div className="text-sm text-gray-600">/ 100</div>
                        </div>
                      </div>
                      {auditScore < 60 && (
                        <AlertTriangle className="absolute -top-2 -right-2 w-8 h-8 text-orange-500" />
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Sample Marketing Score: {auditScore < 60 ? 'Needs Improvement' : auditScore < 80 ? 'Good' : 'Excellent'}
                    </h3>
                    <p className="text-[#23272f] mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      {auditScore < 60 
                        ? 'There are significant opportunities to improve your digital marketing performance.'
                        : auditScore < 80 
                        ? 'Your marketing is performing well, but there\'s room for optimization.'
                        : 'Your digital marketing is performing excellently!'
                      }
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-semibold text-[#18181b]">SEO</div>
                        <div className="text-sm text-gray-600">{Math.floor(Math.random() * 30) + 40}/100</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-semibold text-[#18181b]">Ads</div>
                        <div className="text-sm text-gray-600">{Math.floor(Math.random() * 30) + 45}/100</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-semibold text-[#18181b]">Content</div>
                        <div className="text-sm text-gray-600">{Math.floor(Math.random() * 30) + 35}/100</div>
                      </div>
                      <div className="text-center p-4 bg-gray-50 rounded-lg">
                        <div className="text-lg font-semibold text-[#18181b]">Technical</div>
                        <div className="text-sm text-gray-600">{Math.floor(Math.random() * 30) + 50}/100</div>
                      </div>
                    </div>
                    <Button
                      onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                      size="lg"
                      className="bg-[#18181b] hover:bg-[#23272f] text-white px-8 py-3 rounded-lg font-semibold"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Get My Real Audit Score
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Competitor Benchmark Section */}
        <section ref={competitorRef} className={`py-24 px-4 md:px-8 bg-white ${competitorClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                How Do You Stack Up<br />Against Competitors?
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Our audit includes comprehensive competitor analysis to show you exactly where you stand and what opportunities you're missing.
              </p>
            </div>
            
            <div className="bg-white rounded-2xl shadow-xl p-8 overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-gray-200">
                    <th className="text-left py-4 px-4 font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Metric
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      You
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Top Competitor
                    </th>
                    <th className="text-center py-4 px-4 font-semibold text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      Industry Average
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {competitorMetrics.map((metric, idx) => (
                    <tr key={idx} className="border-b border-gray-100">
                      <td className="py-4 px-4 font-medium" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        {metric.metric}
                      </td>
                      <td className="text-center py-4 px-4">
                        <div className="flex items-center justify-center gap-2">
                          <span className="font-semibold text-blue-600">{metric.you}</span>
                          {metric.you < metric.competitor && <TrendingDown className="w-4 h-4 text-red-500" />}
                          {metric.you > metric.competitor && <TrendingUp className="w-4 h-4 text-green-500" />}
                        </div>
                      </td>
                      <td className="text-center py-4 px-4 font-semibold text-red-600">
                        {metric.competitor}
                      </td>
                      <td className="text-center py-4 px-4 font-semibold text-gray-600">
                        {metric.industry}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-[#23272f] mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Don't let competitors outperform you. Get detailed insights into their strategies.
              </p>
              <Button
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-[#18181b] hover:bg-[#23272f] text-white px-8 py-3 rounded-lg font-semibold"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Analyze My Competition
              </Button>
            </div>
          </div>
        </section>

        {/* Our Proven Path to Agency Success */}
        <section ref={pathRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${pathClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Our Proven Path to<br />Marketing Success
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We've helped hundreds of businesses transform their digital marketing. Here's our proven 3-step process.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {pathSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-[#18181b] flex items-center justify-center">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Methodology */}
        <section ref={methodologyRef} className={`py-24 px-4 md:px-8 bg-white ${methodologyClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                  Our Comprehensive<br />Audit Methodology
                </h2>
                <p className="text-lg md:text-xl text-[#23272f] mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  We leave no stone unturned. Our audit covers every aspect of your digital marketing to ensure you get the complete picture.
                </p>
                <div className="space-y-4">
                  {methodologySteps.map((step, idx) => (
                    <div key={idx} className="flex items-center gap-4">
                      <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span className="text-[#23272f] font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {step}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-lg">
                  <div className="text-center">
                    <Activity className="w-16 h-16 mx-auto mb-6 text-gray-700" />
                    <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      360° Analysis
                    </h3>
                    <p className="text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      We analyze every touchpoint of your digital presence to identify opportunities and gaps that others miss.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* We Get Results Fast */}
        <section ref={resultsRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${resultsClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                We Get Results Fast
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Our audits don't just identify problems - they provide actionable solutions that deliver quick wins and long-term growth.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {resultStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center group"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className="w-8 h-8 text-gray-700" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.number}
                  </h3>
                  <p className="text-sm md:text-base text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials / Clients */}
        <section ref={testimonialsRef} className={`py-24 px-4 md:px-8 bg-white ${testimonialsClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                What Our Clients Say
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Real results from real businesses. Here's what happens when you get a professional audit.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-lg bg-white transition-all duration-500 hover:scale-[1.02] h-full"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center gap-2 mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-base text-[#23272f] leading-relaxed mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-center">
                      <p className="font-semibold text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {testimonial.author}
                      </p>
                      <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section ref={faqRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${faqClassName}`}>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Got questions about our free audit? We've got answers.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="border border-gray-200 shadow-sm">
                  <CardContent className="p-0">
                    <button
                      className="w-full py-6 px-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <h3 className="text-lg font-semibold pr-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        {faq.question}
                      </h3>
                      {openFaq === idx ? (
                        <ChevronUp className="w-5 h-5 text-[#18181b] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#18181b] flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === idx && (
                      <div className="pb-6 px-6">
                        <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA (Repeating) */}
        <section ref={finalCtaRef} className={`py-24 px-4 md:px-8 bg-white ${finalCtaClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[32px] overflow-hidden">
              <div
                className="absolute inset-0"
                style={{
                  background: `
                    radial-gradient(ellipse at 10% 20%, #e0f7fa 0%, transparent 50%),
                    radial-gradient(ellipse at 90% 80%, #f3e8ff 0%, transparent 55%),
                    radial-gradient(ellipse at 30% 70%, #d1f5e0 0%, transparent 65%),
                    radial-gradient(ellipse at 70% 40%, #ffe4fa 0%, transparent 60%),
                    linear-gradient(135deg, #f7fafc 0%, #f8fafc 100%)
                  `
                }}
              />
              <div className="relative z-10 p-12 md:p-16">
                <div className="max-w-4xl mx-auto text-center">
                  <Badge className="mb-6 bg-[#18181b] text-white px-4 py-2 rounded-full">
                    Limited Time • 100% Free
                  </Badge>
                  <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                    Ready to Unlock Your<br />Marketing Potential?
                  </h2>
                  <p className="text-lg md:text-xl text-[#23272f] mb-12 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    Join hundreds of businesses who've transformed their digital marketing with our comprehensive audit. Get yours free today.
                  </p>
                  <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <Button
                      size="lg"
                      className="bg-[#18181b] hover:bg-[#23272f] text-white px-12 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                      onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      Get My Free Audit Now
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-12 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                      onClick={() => navigate('/contact')}
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif', 
                        borderColor: '#18181b'
                      }}
                    >
                      Talk to an Expert
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-6" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    No cost • No commitment • Delivered in 48 hours
                  </p>
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

export default Audit;