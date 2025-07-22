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
  ThumbsUp,
  Download,
  Calendar,
  Phone,
  Mail,
  Building,
  DollarSign,
  Percent,
  MousePointer,
  Smartphone,
  Monitor,
  Wifi,
  Lock,
  Gauge,
  PieChart,
  LineChart,
  BarChart,
  Layers,
  Settings,
  Megaphone,
  Camera,
  Edit,
  Share2,
  Heart,
  MessageCircle,
  Repeat,
  BookOpen,
  Briefcase,
  Coffee,
  ShoppingCart,
  Home,
  Car,
  Utensils,
  Dumbbell,
  Palette,
  Stethoscope,
  GraduationCap,
  Wrench
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useNavigate } from 'react-router-dom';

const Audit = () => {
  const heroRef = useRef(null);
  const isInViewHero = useInView(heroRef, { once: true, amount: 0.3 });
  const { ref: videoRef, className: videoClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: formRef, className: formClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: whyAuditRef, className: whyAuditClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: problemsRef, className: problemsClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: widgetRef, className: widgetClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: competitorRef, className: competitorClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: pathRef, className: pathClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: methodologyRef, className: methodologyClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: resultsRef, className: resultsClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: caseStudyRef, className: caseStudyClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: testimonialsRef, className: testimonialsClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: faqRef, className: faqClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const { ref: finalCtaRef, className: finalCtaClassName } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    industry: '',
    monthlyBudget: '',
    primaryGoal: '',
    currentChallenges: '',
    timeline: '',
    services: [] as string[],
    hearAboutUs: '',
    additionalInfo: ''
  });

  const [auditScore, setAuditScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitting(false);
    navigate('/contact');
  };

  const generateAuditScore = () => {
    const score = Math.floor(Math.random() * 40) + 35;
    setAuditScore(score);
    setShowScore(true);
  };

  const whyAuditReasons = [
    {
      icon: Eye,
      title: 'Uncover Hidden Revenue Leaks',
      description: 'Discover the gaps in your digital strategy that are costing you customers and revenue every single day.',
      stat: '73% of businesses have major optimization gaps'
    },
    {
      icon: TrendingUp,
      title: 'Maximize Marketing ROI',
      description: 'Get data-driven insights to optimize your marketing spend and achieve better results with the same budget.',
      stat: 'Average 156% ROI improvement'
    },
    {
      icon: Target,
      title: 'Strategic Growth Roadmap',
      description: 'Receive a prioritized action plan with clear steps to accelerate your business growth and market dominance.',
      stat: '90-day implementation timeline'
    },
    {
      icon: Zap,
      title: 'Immediate Quick Wins',
      description: 'Identify low-effort, high-impact opportunities that can deliver results within the first 30 days.',
      stat: 'Results visible in 2-4 weeks'
    }
  ];

  const commonProblems = [
    {
      icon: TrendingDown,
      title: 'Declining Website Traffic',
      description: 'Your organic visibility is dropping, and you\'re losing potential customers to competitors.',
      percentage: 68
    },
    {
      icon: DollarSign,
      title: 'High Cost Per Acquisition',
      description: 'You\'re spending too much to acquire each customer, eating into your profit margins.',
      percentage: 74
    },
    {
      icon: MousePointer,
      title: 'Poor Conversion Rates',
      description: 'Visitors come to your site but don\'t take action, resulting in missed opportunities.',
      percentage: 82
    },
    {
      icon: Smartphone,
      title: 'Mobile Experience Issues',
      description: 'Your mobile experience is driving away the majority of your potential customers.',
      percentage: 59
    }
  ];

  const competitorMetrics = [
    { metric: 'Organic Traffic Growth', you: 12, competitor: 45, industry: 28, unit: '%' },
    { metric: 'Conversion Rate', you: 1.8, competitor: 4.2, industry: 2.9, unit: '%' },
    { metric: 'Page Load Speed', you: 4.1, competitor: 1.9, industry: 2.8, unit: 's' },
    { metric: 'Social Engagement Rate', you: 0.9, competitor: 3.7, industry: 2.1, unit: '%' },
    { metric: 'Email Open Rate', you: 18, competitor: 28, industry: 23, unit: '%' },
    { metric: 'Cost Per Click', you: 3.20, competitor: 1.85, industry: 2.45, unit: '$' }
  ];

  const pathSteps = [
    {
      icon: Search,
      title: 'Comprehensive Analysis',
      description: 'We conduct a 360-degree analysis of your digital presence, examining every touchpoint where customers interact with your brand.',
      details: ['Technical SEO audit', 'Content gap analysis', 'User experience review', 'Performance benchmarking']
    },
    {
      icon: BarChart3,
      title: 'Data-Driven Insights',
      description: 'Our experts analyze the data to identify critical issues, missed opportunities, and competitive advantages.',
      details: ['Competitor intelligence', 'Market positioning', 'Growth opportunities', 'Risk assessment']
    },
    {
      icon: Rocket,
      title: 'Strategic Action Plan',
      description: 'You receive a prioritized roadmap with specific recommendations, timelines, and expected outcomes.',
      details: ['Quick win strategies', '90-day action plan', 'Resource requirements', 'Success metrics']
    }
  ];

  const methodologySteps = [
    { category: 'Technical Analysis', items: ['Website speed optimization', 'Mobile responsiveness', 'Core Web Vitals', 'Security assessment'] },
    { category: 'SEO Performance', items: ['Keyword ranking analysis', 'Content optimization', 'Backlink profile review', 'Local SEO audit'] },
    { category: 'Paid Advertising', items: ['Campaign performance review', 'Audience targeting analysis', 'Ad creative assessment', 'Budget optimization'] },
    { category: 'Content Strategy', items: ['Content gap analysis', 'Engagement metrics', 'Brand voice consistency', 'Content calendar review'] },
    { category: 'Conversion Optimization', items: ['Funnel analysis', 'Landing page review', 'User journey mapping', 'A/B testing opportunities'] },
    { category: 'Competitive Intelligence', items: ['Market positioning', 'Competitor strategies', 'Industry benchmarks', 'Opportunity gaps'] }
  ];

  const resultStats = [
    { number: '247%', label: 'Average Traffic Increase', icon: TrendingUp, description: 'Within 6 months of implementation' },
    { number: '189%', label: 'ROI Improvement', icon: Target, description: 'Measured across all marketing channels' },
    { number: '24hrs', label: 'Audit Delivery', icon: Clock, description: 'Comprehensive report delivered fast' },
    { number: '850+', label: 'Successful Audits', icon: Award, description: 'Businesses transformed' }
  ];

  const caseStudyHighlight = {
    client: 'TechFlow Solutions',
    industry: 'B2B SaaS',
    challenge: 'Low conversion rates and high customer acquisition costs',
    solution: 'Comprehensive audit revealed 12 critical issues in their funnel',
    results: [
      { metric: 'Conversion Rate', before: '1.2%', after: '4.8%', improvement: '+300%' },
      { metric: 'Cost Per Lead', before: '$145', after: '$62', improvement: '-57%' },
      { metric: 'Monthly Revenue', before: '$28K', after: '$89K', improvement: '+218%' }
    ],
    timeline: '90 days'
  };

  const testimonials = [
    {
      quote: "The audit revealed issues we never knew existed. Within 3 months, our organic traffic tripled and our conversion rate doubled!",
      author: "Sarah Chen",
      company: "GrowthTech Inc.",
      role: "Marketing Director",
      rating: 5,
      results: "+312% traffic growth"
    },
    {
      quote: "Incredibly detailed analysis with actionable recommendations. The ROI from implementing their suggestions was immediate.",
      author: "Michael Rodriguez",
      company: "ScaleUp Solutions",
      role: "CEO",
      rating: 5,
      results: "+189% ROI improvement"
    },
    {
      quote: "Best investment we made this year. The audit saved us thousands in wasted ad spend and showed us exactly where to focus.",
      author: "Emily Johnson",
      company: "RetailMax",
      role: "E-commerce Manager",
      rating: 5,
      results: "-43% acquisition cost"
    }
  ];

  const faqs = [
    {
      question: "How comprehensive is the free audit?",
      answer: "Our free audit is extremely thorough, covering 50+ data points across technical SEO, content performance, user experience, conversion optimization, and competitive analysis. You'll receive a detailed 15-20 page report with specific recommendations and priority rankings."
    },
    {
      question: "How long does it take to complete the audit?",
      answer: "We deliver your comprehensive audit report within 24-48 hours of receiving your information. Our team works efficiently to provide you with actionable insights quickly, so you can start implementing improvements right away."
    },
    {
      question: "What access do you need to my accounts?",
      answer: "For the most accurate analysis, we may request read-only access to your Google Analytics, Search Console, and advertising accounts. All access is secure, temporary, and used solely for audit purposes. We can also work with screenshots if you prefer."
    },
    {
      question: "Is this really completely free?",
      answer: "Yes, absolutely! We provide genuine value upfront with no hidden costs or obligations. Our goal is to demonstrate our expertise and help you understand your opportunities. Many clients choose to work with us after seeing the quality of our analysis, but there's no pressure."
    },
    {
      question: "What happens after I receive the audit?",
      answer: "You'll receive a detailed report with prioritized recommendations. We also offer a complimentary 30-minute strategy call to discuss the findings and answer any questions. You can then choose to implement the recommendations yourself or work with our team."
    },
    {
      question: "How is this different from other free audits?",
      answer: "Unlike basic automated tools, our audits are conducted by experienced digital marketing professionals who manually review your entire digital presence. We provide strategic insights, not just technical data, with clear explanations and actionable next steps."
    },
    {
      question: "What if my website is new or small?",
      answer: "We work with businesses of all sizes! For newer websites, we focus on foundational elements, growth opportunities, and competitive positioning. Even small sites benefit greatly from professional optimization and strategic direction."
    },
    {
      question: "Can you audit e-commerce websites?",
      answer: "Absolutely! We have extensive experience auditing e-commerce sites. Our audit includes product page optimization, checkout process analysis, shopping campaign review, and conversion funnel assessment specific to online retail."
    }
  ];

  const industries = [
    { value: 'technology', label: 'Technology & Software', icon: Monitor },
    { value: 'ecommerce', label: 'E-commerce & Retail', icon: ShoppingCart },
    { value: 'healthcare', label: 'Healthcare & Medical', icon: Stethoscope },
    { value: 'finance', label: 'Finance & Insurance', icon: Building },
    { value: 'education', label: 'Education & Training', icon: GraduationCap },
    { value: 'realestate', label: 'Real Estate', icon: Home },
    { value: 'automotive', label: 'Automotive', icon: Car },
    { value: 'food', label: 'Food & Beverage', icon: Utensils },
    { value: 'fitness', label: 'Fitness & Wellness', icon: Dumbbell },
    { value: 'creative', label: 'Creative & Design', icon: Palette },
    { value: 'consulting', label: 'Consulting & Services', icon: Briefcase },
    { value: 'other', label: 'Other', icon: Settings }
  ];

  const services = [
    { id: 'seo', label: 'Search Engine Optimization (SEO)', icon: Search },
    { id: 'google-ads', label: 'Google Ads Management', icon: Target },
    { id: 'meta-ads', label: 'Meta Ads (Facebook/Instagram)', icon: Users },
    { id: 'content', label: 'Content Marketing', icon: Edit },
    { id: 'social-media', label: 'Social Media Management', icon: Share2 },
    { id: 'website', label: 'Website Development', icon: Globe },
    { id: 'email', label: 'Email Marketing', icon: Mail },
    { id: 'video', label: 'Video Marketing', icon: Video }
  ];

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-screen bg-white">
        {/* Hero Section with Enhanced CTA */}
        <section 
          ref={heroRef}
          className="w-full flex items-center justify-center min-h-[85vh] py-8 px-4 md:px-8 mt-24 md:mt-32 overflow-hidden"
          style={{
            opacity: isInViewHero ? 1 : 0,
            transform: isInViewHero ? 'translateY(0)' : 'translateY(20px)',
            transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
          }}
        >
          <div
            className="relative w-full max-w-7xl mx-auto rounded-[48px] md:rounded-[48px] bg-white flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-24 overflow-hidden"
            style={{
              minHeight: 600,
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
              <Badge 
                className="mb-6 bg-[#18181b] text-white px-6 py-2 rounded-full text-sm font-semibold"
                style={{
                  transform: isInViewHero ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInViewHero ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s'
                }}
              >
                🎯 Limited Time • 100% Free • No Obligations
              </Badge>
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
                className="text-xl md:text-2xl font-normal mb-8 max-w-4xl mx-auto leading-relaxed"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#23272f',
                  transform: isInViewHero ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInViewHero ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s'
                }}
              >
                Discover exactly what's holding your business back and get a clear roadmap to digital marketing success. Our comprehensive audit reveals hidden opportunities worth thousands in additional revenue.
              </p>
              <div 
                className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto"
                style={{
                  transform: isInViewHero ? 'translateY(0)' : 'translateY(20px)',
                  opacity: isInViewHero ? 1 : 0,
                  transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.35s'
                }}
              >
                <div className="flex items-center gap-3 text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span>Delivered in 24-48 hours</span>
                </div>
                <div className="flex items-center gap-3 text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span>50+ optimization points</span>
                </div>
                <div className="flex items-center gap-3 text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  <CheckCircle className="w-6 h-6 text-green-500 flex-shrink-0" />
                  <span>Actionable recommendations</span>
                </div>
              </div>
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
                  className="bg-[#18181b] hover:bg-[#23272f] text-white px-12 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 shadow-xl"
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
                  className="border-2 border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-12 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                  onClick={() => document.getElementById('video-section')?.scrollIntoView({ behavior: 'smooth' })}
                  style={{ 
                    fontFamily: 'Montserrat, sans-serif', 
                    borderColor: '#18181b'
                  }}
                >
                  <Play className="mr-2 h-5 w-5" />
                  Watch How It Works
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Video Section (VSL) */}
        <section id="video-section" ref={videoRef} className={`py-24 px-4 md:px-8 bg-white ${videoClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-gradient-to-r from-blue-50 to-purple-50 text-[#18181b] px-6 py-2 rounded-full border border-gray-200">
                <Video className="w-4 h-4 mr-2" />
                3-Minute Case Study
              </Badge>
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                See How We Transformed<br />a Business Like Yours
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Watch this real case study to understand our audit process and see the exact strategies that helped a client increase their revenue by 312% in just 90 days.
              </p>
            </div>
            
            <div className="relative max-w-5xl mx-auto">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-gray-900 to-gray-800">
                <div className="aspect-video relative">
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/dQw4w9WgXcQ?rel=0&modestbranding=1&showinfo=0"
                    title="Digital Marketing Audit Case Study - How We Increased Revenue by 312%"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
              
              {/* Video Benefits Below */}
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                  <Eye className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                    Real Results
                  </h3>
                  <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    See actual before/after data from our client transformations
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                  <Lightbulb className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                    Our Process
                  </h3>
                  <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    Understand exactly how we identify and fix critical issues
                  </p>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl border border-gray-100">
                  <Rocket className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                  <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                    Implementation
                  </h3>
                  <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    Learn how to implement recommendations for maximum impact
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Form Section */}
        <section id="audit-form" ref={formRef} className={`py-24 px-4 md:px-8 ${formClassName}`}>
          <div 
            className="max-w-6xl mx-auto relative rounded-[32px] overflow-hidden p-8 md:p-12"
            style={{
              background: `
                radial-gradient(ellipse at 20% 30%, #e0f7fa 0%, transparent 60%),
                radial-gradient(ellipse at 80% 70%, #f3e8ff 0%, transparent 55%),
                radial-gradient(ellipse at 40% 60%, #d1f5e0 0%, transparent 65%),
                linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)
              `
            }}
          >
            <div className="text-center mb-12">
              <Badge className="mb-6 bg-[#18181b] text-white px-6 py-2 rounded-full">
                <Download className="w-4 h-4 mr-2" />
                Free Comprehensive Report
              </Badge>
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Get Your Personalized<br />Marketing Audit Report
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Fill out this detailed form so we can provide you with the most accurate and valuable audit possible. The more information you provide, the better recommendations you'll receive.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-3 gap-8">
              {/* Form */}
              <div className="lg:col-span-2">
                <Card className="shadow-2xl border-0 overflow-hidden bg-white">
                  <CardHeader className="bg-white pb-6">
                    <CardTitle className="text-2xl font-normal text-center" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                      Free Digital Marketing Audit Request
                    </CardTitle>
                    <CardDescription className="text-center text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Complete this form to receive your comprehensive audit report
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Basic Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          <Users className="w-5 h-5" />
                          Basic Information
                        </h3>
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
                              className="mt-2 h-12"
                              placeholder="Enter your full name"
                              style={{ fontFamily: 'Montserrat, sans-serif' }}
                            />
                          </div>
                          <div>
                            <Label htmlFor="email" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Business Email *
                            </Label>
                            <Input
                              id="email"
                              type="email"
                              value={formData.email}
                              onChange={(e) => handleInputChange('email', e.target.value)}
                              required
                              className="mt-2 h-12"
                              placeholder="your@company.com"
                              style={{ fontFamily: 'Montserrat, sans-serif' }}
                            />
                          </div>
                          <div>
                            <Label htmlFor="company" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Company Name *
                            </Label>
                            <Input
                              id="company"
                              value={formData.company}
                              onChange={(e) => handleInputChange('company', e.target.value)}
                              required
                              className="mt-2 h-12"
                              placeholder="Your company name"
                              style={{ fontFamily: 'Montserrat, sans-serif' }}
                            />
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleInputChange('phone', e.target.value)}
                              className="mt-2 h-12"
                              placeholder="+1 (555) 123-4567"
                              style={{ fontFamily: 'Montserrat, sans-serif' }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Business Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          <Building className="w-5 h-5" />
                          Business Information
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div>
                            <Label htmlFor="website" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Website URL *
                            </Label>
                            <Input
                              id="website"
                              value={formData.website}
                              onChange={(e) => handleInputChange('website', e.target.value)}
                              required
                              className="mt-2 h-12"
                              placeholder="https://yourwebsite.com"
                              style={{ fontFamily: 'Montserrat, sans-serif' }}
                            />
                          </div>
                          <div>
                            <Label htmlFor="industry" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Industry *
                            </Label>
                            <Select value={formData.industry} onValueChange={(value) => handleInputChange('industry', value)}>
                              <SelectTrigger className="mt-2 h-12">
                                <SelectValue placeholder="Select your industry" />
                              </SelectTrigger>
                              <SelectContent>
                                {industries.map((industry) => (
                                  <SelectItem key={industry.value} value={industry.value}>
                                    <div className="flex items-center gap-2">
                                      <industry.icon className="w-4 h-4" />
                                      {industry.label}
                                    </div>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="monthlyBudget" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Monthly Marketing Budget
                            </Label>
                            <Select value={formData.monthlyBudget} onValueChange={(value) => handleInputChange('monthlyBudget', value)}>
                              <SelectTrigger className="mt-2 h-12">
                                <SelectValue placeholder="Select budget range" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="under-1k">Under $1,000</SelectItem>
                                <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                                <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                                <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                                <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                                <SelectItem value="50k-plus">$50,000+</SelectItem>
                                <SelectItem value="not-sure">Not sure yet</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="timeline" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Implementation Timeline
                            </Label>
                            <Select value={formData.timeline} onValueChange={(value) => handleInputChange('timeline', value)}>
                              <SelectTrigger className="mt-2 h-12">
                                <SelectValue placeholder="When do you want to start?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="immediately">Immediately</SelectItem>
                                <SelectItem value="1-month">Within 1 month</SelectItem>
                                <SelectItem value="2-3-months">2-3 months</SelectItem>
                                <SelectItem value="6-months">Within 6 months</SelectItem>
                                <SelectItem value="just-exploring">Just exploring options</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </div>
                      </div>

                      {/* Goals and Challenges */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          <Target className="w-5 h-5" />
                          Goals & Challenges
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <Label htmlFor="primaryGoal" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Primary Business Goal *
                            </Label>
                            <Select value={formData.primaryGoal} onValueChange={(value) => handleInputChange('primaryGoal', value)}>
                              <SelectTrigger className="mt-2 h-12">
                                <SelectValue placeholder="What's your main objective?" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="increase-traffic">Increase website traffic</SelectItem>
                                <SelectItem value="generate-leads">Generate more leads</SelectItem>
                                <SelectItem value="boost-sales">Boost online sales</SelectItem>
                                <SelectItem value="brand-awareness">Improve brand awareness</SelectItem>
                                <SelectItem value="reduce-costs">Reduce marketing costs</SelectItem>
                                <SelectItem value="improve-roi">Improve marketing ROI</SelectItem>
                                <SelectItem value="expand-market">Expand to new markets</SelectItem>
                                <SelectItem value="compete-better">Compete more effectively</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="currentChallenges" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Current Marketing Challenges *
                            </Label>
                            <Textarea
                              id="currentChallenges"
                              value={formData.currentChallenges}
                              onChange={(e) => handleInputChange('currentChallenges', e.target.value)}
                              required
                              placeholder="Describe your biggest marketing challenges, what's not working, and what you've tried before..."
                              className="mt-2 min-h-[120px]"
                              style={{ fontFamily: 'Montserrat, sans-serif' }}
                            />
                          </div>
                        </div>
                      </div>

                      {/* Services of Interest */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          <Settings className="w-5 h-5" />
                          Services of Interest
                        </h3>
                        <p className="text-sm text-[#23272f] mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          Select all services you'd like us to focus on in your audit:
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {services.map((service) => (
                            <div key={service.id} className="flex items-center space-x-3 p-3 rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors">
                              <Checkbox
                                id={service.id}
                                checked={formData.services.includes(service.id)}
                                onCheckedChange={() => handleServiceToggle(service.id)}
                              />
                              <Label htmlFor={service.id} className="flex items-center gap-2 cursor-pointer flex-1" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                                <service.icon className="w-4 h-4 text-[#18181b]" />
                                {service.label}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Additional Information */}
                      <div>
                        <h3 className="text-lg font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          <MessageSquare className="w-5 h-5" />
                          Additional Information
                        </h3>
                        <div className="space-y-6">
                          <div>
                            <Label htmlFor="hearAboutUs" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              How did you hear about us?
                            </Label>
                            <Select value={formData.hearAboutUs} onValueChange={(value) => handleInputChange('hearAboutUs', value)}>
                              <SelectTrigger className="mt-2 h-12">
                                <SelectValue placeholder="Select an option" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="google-search">Google Search</SelectItem>
                                <SelectItem value="social-media">Social Media</SelectItem>
                                <SelectItem value="referral">Referral from friend/colleague</SelectItem>
                                <SelectItem value="online-ad">Online Advertisement</SelectItem>
                                <SelectItem value="content">Blog/Content</SelectItem>
                                <SelectItem value="event">Event/Conference</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="additionalInfo" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                              Anything else you'd like us to know?
                            </Label>
                            <Textarea
                              id="additionalInfo"
                              value={formData.additionalInfo}
                              onChange={(e) => handleInputChange('additionalInfo', e.target.value)}
                              placeholder="Any specific areas of concern, previous marketing efforts, or additional context that would help us provide better recommendations..."
                              className="mt-2 min-h-[100px]"
                              style={{ fontFamily: 'Montserrat, sans-serif' }}
                            />
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-center pt-6 border-t border-gray-200">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          size="lg"
                          className="bg-[#18181b] hover:bg-[#23272f] text-white px-16 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 shadow-xl disabled:opacity-50"
                          style={{ fontFamily: 'Montserrat, sans-serif' }}
                        >
                          {isSubmitting ? (
                            <div className="flex items-center gap-2">
                              <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                              Processing Request...
                            </div>
                          ) : (
                            <>
                              Get My Free Audit Report
                              <Download className="w-5 h-5 ml-2" />
                            </>
                          )}
                        </Button>
                        <p className="text-sm text-gray-500 mt-4" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          🔒 Your information is secure • Delivered within 24-48 hours • No spam, ever
                        </p>
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Form Benefits Sidebar */}
              <div className="space-y-6">
                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      <FileText className="w-5 h-5" />
                      What You'll Receive
                    </h3>
                    <div className="space-y-4">
                      {[
                        'Comprehensive 15-20 page audit report',
                        'Technical SEO analysis & recommendations',
                        'Competitor benchmarking & insights',
                        'Conversion optimization opportunities',
                        'Prioritized action plan with timelines',
                        'Free 30-minute strategy consultation'
                      ].map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 to-purple-50">
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-4 flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      <Clock className="w-5 h-5" />
                      Quick Turnaround
                    </h3>
                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#18181b] text-white flex items-center justify-center text-sm font-semibold">1</div>
                        <span className="text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>Submit form today</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#18181b] text-white flex items-center justify-center text-sm font-semibold">2</div>
                        <span className="text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>We analyze your digital presence</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full bg-[#18181b] text-white flex items-center justify-center text-sm font-semibold">3</div>
                        <span className="text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>Receive detailed report in 24-48hrs</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-lg bg-white">
                  <CardContent className="p-6 text-center">
                    <Award className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                    <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Trusted by 850+ Businesses
                    </h3>
                    <p className="text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Join hundreds of successful businesses who've transformed their marketing with our audits.
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Why Go For Audit Section */}
        <section ref={whyAuditRef} className={`py-24 px-4 md:px-8 bg-white ${whyAuditClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Why Every Successful Business<br />Needs a Marketing Audit
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Most businesses are unknowingly leaving money on the table. Our comprehensive audit reveals exactly where you're losing potential customers and revenue, plus provides a clear roadmap to fix it.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {whyAuditReasons.map((reason, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-lg bg-white transition-all duration-500 hover:scale-[1.02] h-full group"
                  style={{
                    animationDelay: `${idx * 150}ms`
                  }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <reason.icon className="w-8 h-8 text-[#18181b]" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-3" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          {reason.title}
                        </h3>
                        <p className="text-[#23272f] leading-relaxed mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          {reason.description}
                        </p>
                        <Badge className="bg-gradient-to-r from-green-50 to-blue-50 text-[#18181b] border border-gray-200">
                          {reason.stat}
                        </Badge>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Call-to-action */}
            <div className="text-center">
              <p className="text-lg text-[#23272f] mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Don't let another day pass with suboptimal marketing performance.
              </p>
              <Button
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-3 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Start My Free Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Common Problems Section */}
        <section ref={problemsRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${problemsClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Are These Problems<br />Costing You Money?
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                These are the most common issues we discover in our audits. Each one represents lost revenue and missed opportunities.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              {commonProblems.map((problem, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-lg bg-white transition-all duration-500 hover:scale-[1.02] overflow-hidden"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <CardContent className="p-8">
                    <div className="flex items-start gap-6">
                      <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center">
                        <problem.icon className="w-8 h-8 text-red-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-3">
                          <h3 className="text-xl font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                            {problem.title}
                          </h3>
                          <Badge className="bg-red-100 text-red-700 border-red-200">
                            {problem.percentage}% affected
                          </Badge>
                        </div>
                        <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          {problem.description}
                        </p>
                        <div className="mt-4 bg-gray-100 rounded-full h-2">
                          <div 
                            className="bg-gradient-to-r from-red-400 to-orange-400 h-2 rounded-full transition-all duration-1000"
                            style={{ width: `${problem.percentage}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Audit Score Widget */}
        <section ref={widgetRef} className={`py-24 px-4 md:px-8 bg-white ${widgetClassName}`}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                What's Your Current<br />Marketing Performance Score?
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Get an instant preview of how your digital marketing might be performing. This sample demonstrates the type of analysis you'll receive in your full audit.
              </p>
            </div>
            
            <Card className="shadow-2xl border-0 overflow-hidden bg-white">
              <CardContent className="p-12 text-center">
                {!showScore ? (
                  <div>
                    <div className="w-40 h-40 mx-auto mb-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative">
                      <BarChart3 className="w-20 h-20 text-gray-600" />
                      <div className="absolute inset-0 rounded-full border-4 border-dashed border-gray-300 animate-pulse"></div>
                    </div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Discover Your Marketing Performance
                    </h3>
                    <p className="text-[#23272f] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      Click the button below to see a sample audit score and understand the depth of analysis we provide. Your actual audit will be much more comprehensive.
                    </p>
                    <Button
                      onClick={generateAuditScore}
                      size="lg"
                      className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105 shadow-xl"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      <Gauge className="w-5 h-5 mr-2" />
                      Generate Sample Score
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="relative w-40 h-40 mx-auto mb-8">
                      <div className="w-40 h-40 rounded-full bg-gradient-to-br from-orange-100 to-red-100 flex items-center justify-center relative">
                        <div className="text-center">
                          <div className="text-4xl font-bold text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {auditScore}
                          </div>
                          <div className="text-lg text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>/ 100</div>
                        </div>
                        <div className="absolute inset-0 rounded-full">
                          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke="#e5e7eb"
                              strokeWidth="8"
                              fill="none"
                            />
                            <circle
                              cx="50"
                              cy="50"
                              r="45"
                              stroke={auditScore < 60 ? "#ef4444" : auditScore < 80 ? "#f59e0b" : "#10b981"}
                              strokeWidth="8"
                              fill="none"
                              strokeDasharray={`${auditScore * 2.83} 283`}
                              strokeLinecap="round"
                              className="transition-all duration-1000"
                            />
                          </svg>
                        </div>
                      </div>
                      {auditScore < 70 && (
                        <AlertTriangle className="absolute -top-2 -right-2 w-10 h-10 text-orange-500 animate-pulse" />
                      )}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Sample Marketing Score: {auditScore < 60 ? 'Critical Issues Found' : auditScore < 80 ? 'Room for Improvement' : 'Performing Well'}
                    </h3>
                    <p className="text-[#23272f] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      {auditScore < 60 
                        ? 'This sample score indicates significant opportunities for improvement. Your actual audit will reveal specific issues and provide detailed solutions to boost your performance.'
                        : auditScore < 80 
                        ? 'This sample shows good performance with optimization opportunities. Your real audit will identify specific areas where you can gain competitive advantages.'
                        : 'This sample indicates strong performance! Your actual audit will help you maintain this excellence and identify new growth opportunities.'
                      }
                    </p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                      {[
                        { label: 'SEO Health', score: Math.floor(Math.random() * 30) + 40, icon: Search },
                        { label: 'Ad Performance', score: Math.floor(Math.random() * 30) + 45, icon: Target },
                        { label: 'Content Quality', score: Math.floor(Math.random() * 30) + 35, icon: Edit },
                        { label: 'Technical Score', score: Math.floor(Math.random() * 30) + 50, icon: Settings }
                      ].map((metric, idx) => (
                        <div key={idx} className="text-center p-4 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100">
                          <metric.icon className="w-6 h-6 mx-auto mb-2 text-[#18181b]" />
                          <div className="text-lg font-semibold text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {metric.score}
                          </div>
                          <div className="text-xs text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex flex-col md:flex-row gap-4 justify-center">
                      <Button
                        onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                        size="lg"
                        className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-4 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Get My Real Audit Score
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                      <Button
                        onClick={() => setShowScore(false)}
                        size="lg"
                        variant="outline"
                        className="border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-10 py-4 rounded-xl font-semibold text-lg"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      >
                        Try Again
                      </Button>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Competitor Benchmark Section */}
        <section ref={competitorRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${competitorClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                How Do You Stack Up<br />Against Your Competition?
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Our audit includes comprehensive competitor analysis to show you exactly where you stand in your market and what opportunities your competitors might be missing.
              </p>
            </div>
            
            <div className="bg-white rounded-3xl shadow-2xl p-8 overflow-x-auto mb-12">
              <div className="min-w-[600px]">
                <div className="grid grid-cols-4 gap-4 mb-6 pb-4 border-b border-gray-200">
                  <div className="font-semibold text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Performance Metric
                  </div>
                  <div className="text-center font-semibold text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Your Business
                  </div>
                  <div className="text-center font-semibold text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Top Competitor
                  </div>
                  <div className="text-center font-semibold text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    Industry Average
                  </div>
                </div>
                
                {competitorMetrics.map((metric, idx) => (
                  <div key={idx} className="grid grid-cols-4 gap-4 py-4 border-b border-gray-100 items-center">
                    <div className="font-medium text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {metric.metric}
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <span className="font-semibold text-blue-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          {metric.you}{metric.unit}
                        </span>
                        {metric.you < metric.competitor && <TrendingDown className="w-4 h-4 text-red-500" />}
                        {metric.you > metric.competitor && <TrendingUp className="w-4 h-4 text-green-500" />}
                      </div>
                    </div>
                    <div className="text-center font-semibold text-red-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {metric.competitor}{metric.unit}
                    </div>
                    <div className="text-center font-semibold text-gray-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      {metric.industry}{metric.unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="border-0 shadow-lg bg-white text-center p-6">
                <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-orange-500" />
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Performance Gaps
                </h3>
                <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Identify where competitors are outperforming you
                </p>
              </Card>
              <Card className="border-0 shadow-lg bg-white text-center p-6">
                <Eye className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Strategy Insights
                </h3>
                <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Understand what tactics are working in your industry
                </p>
              </Card>
              <Card className="border-0 shadow-lg bg-white text-center p-6">
                <Target className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                <h3 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Opportunity Mapping
                </h3>
                <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Discover untapped opportunities in your market
                </p>
              </Card>
            </div>
            
            <div className="text-center mt-12">
              <p className="text-lg text-[#23272f] mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Don't let competitors steal your market share. Get detailed competitive intelligence.
              </p>
              <Button
                onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                size="lg"
                className="bg-[#18181b] hover:bg-[#23272f] text-white px-10 py-3 rounded-xl font-semibold text-lg transform transition-all duration-300 hover:scale-105"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                Analyze My Competition
                <BarChart3 className="w-5 h-5 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Our Proven Path to Agency Success */}
        <section ref={pathRef} className={`py-24 px-4 md:px-8 bg-white ${pathClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Our Proven Path to<br />Marketing Success
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We've helped over 850 businesses transform their digital marketing performance. Here's our battle-tested 3-step process that delivers consistent results.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {pathSteps.map((step, idx) => (
                <div
                  key={idx}
                  className="text-center group"
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  <div className="relative mb-8">
                    <div className="w-20 h-20 mx-auto rounded-2xl bg-[#18181b] flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-xl">
                      <step.icon className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-full flex items-center justify-center border-2 border-white">
                      <span className="text-sm font-bold text-[#18181b]">{idx + 1}</span>
                    </div>
                  </div>
                  <h3 className="text-2xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                    {step.title}
                  </h3>
                  <p className="text-[#23272f] mb-6 leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    {step.description}
                  </p>
                  <div className="space-y-2">
                    {step.details.map((detail, detailIdx) => (
                      <div key={detailIdx} className="flex items-center gap-2 text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {detail}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <Card className="inline-block border-0 shadow-xl bg-gradient-to-br from-blue-50 to-purple-50 p-8">
                <div className="flex items-center gap-4">
                  <Clock className="w-12 h-12 text-[#18181b]" />
                  <div className="text-left">
                    <h3 className="text-xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Timeline: 24-48 Hours
                    </h3>
                    <p className="text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      From submission to comprehensive audit delivery
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced Our Methodology */}
        <section ref={methodologyRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${methodologyClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Our Comprehensive<br />Audit Methodology
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                We leave no stone unturned. Our audit covers 50+ critical areas across 6 key categories to ensure you get the complete picture of your digital marketing performance.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {methodologySteps.map((category, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-lg bg-white transition-all duration-500 hover:scale-[1.02] h-full"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <CardHeader className="pb-4">
                    <CardTitle className="text-lg font-semibold flex items-center gap-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      <div className="w-8 h-8 rounded-lg bg-[#18181b] flex items-center justify-center">
                        <span className="text-white text-sm font-bold">{idx + 1}</span>
                      </div>
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="space-y-3">
                      {category.items.map((item, itemIdx) => (
                        <div key={itemIdx} className="flex items-center gap-3">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span className="text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-16 text-center">
              <Card className="inline-block border-0 shadow-xl bg-white p-8">
                <div className="flex items-center gap-6">
                  <Activity className="w-16 h-16 text-[#18181b]" />
                  <div className="text-left">
                    <h3 className="text-2xl font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      360° Digital Analysis
                    </h3>
                    <p className="text-[#23272f] max-w-md" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      We analyze every touchpoint of your digital presence to identify opportunities and gaps that others miss, providing you with a complete competitive advantage.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Enhanced We Get Results Fast */}
        <section ref={resultsRef} className={`py-24 px-4 md:px-8 bg-white ${resultsClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                We Get Results Fast
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-4xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Our audits don't just identify problems—they provide actionable solutions that deliver quick wins and sustainable long-term growth for your business.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {resultStats.map((stat, idx) => (
                <div
                  key={idx}
                  className="text-center group"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                    <stat.icon className="w-10 h-10 text-[#18181b]" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.number}
                  </h3>
                  <p className="text-base font-semibold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    {stat.label}
                  </p>
                  <p className="text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    {stat.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-8 md:p-12 shadow-xl">
              <div className="text-center mb-8">
                <h3 className="text-2xl md:text-3xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  What Makes Our Audits Different?
                </h3>
              </div>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <Layers className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                  <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                    Multi-Layer Analysis
                  </h4>
                  <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    We examine technical, strategic, and creative aspects for complete optimization
                  </p>
                </div>
                <div className="text-center">
                  <Users className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                  <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                    Expert Human Review
                  </h4>
                  <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    Real marketing experts, not just automated tools, analyze your business
                  </p>
                </div>
                <div className="text-center">
                  <Rocket className="w-12 h-12 mx-auto mb-4 text-[#18181b]" />
                  <h4 className="text-lg font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                    Actionable Roadmap
                  </h4>
                  <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    Clear, prioritized steps you can implement immediately for results
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section ref={caseStudyRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${caseStudyClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-6 bg-[#18181b] text-white px-6 py-2 rounded-full">
                <Star className="w-4 h-4 mr-2" />
                Success Story
              </Badge>
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Real Results from<br />Our Audit Process
              </h2>
            </div>
            
            <Card className="shadow-2xl border-0 overflow-hidden bg-white">
              <CardContent className="p-0">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 md:p-12">
                    <Badge className="mb-4 bg-blue-100 text-blue-800 border-blue-200">
                      {caseStudyHighlight.industry}
                    </Badge>
                    <h3 className="text-2xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      {caseStudyHighlight.client}
                    </h3>
                    <div className="space-y-4 mb-6">
                      <div>
                        <h4 className="font-semibold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          Challenge:
                        </h4>
                        <p className="text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          {caseStudyHighlight.challenge}
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                          Our Solution:
                        </h4>
                        <p className="text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          {caseStudyHighlight.solution}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                      <Calendar className="w-4 h-4" />
                      <span>Timeline: {caseStudyHighlight.timeline}</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-green-50 to-blue-50 p-8 md:p-12">
                    <h4 className="text-xl font-semibold mb-6 text-center" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Results Achieved
                    </h4>
                    <div className="space-y-6">
                      {caseStudyHighlight.results.map((result, idx) => (
                        <div key={idx} className="bg-white rounded-xl p-4 shadow-sm">
                          <div className="flex justify-between items-center mb-2">
                            <span className="font-medium text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                              {result.metric}
                            </span>
                            <Badge className="bg-green-100 text-green-800 border-green-200">
                              {result.improvement}
                            </Badge>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-red-600">Before: {result.before}</span>
                            <span className="text-green-600">After: {result.after}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Enhanced Testimonials */}
        <section ref={testimonialsRef} className={`py-24 px-4 md:px-8 bg-white ${testimonialsClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                What Our Clients Say<br />About Our Audits
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Real results from real businesses. Here's what happens when you get a professional marketing audit from our team.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, idx) => (
                <Card
                  key={idx}
                  className="border-0 shadow-xl bg-white transition-all duration-500 hover:scale-[1.02] h-full relative overflow-hidden"
                  style={{ animationDelay: `${idx * 150}ms` }}
                >
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-green-100 text-green-800 border-green-200 text-xs">
                      {testimonial.results}
                    </Badge>
                  </div>
                  <CardContent className="p-8">
                    <div className="flex items-center justify-center gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <blockquote className="text-base text-[#23272f] leading-relaxed mb-6 italic" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                      "{testimonial.quote}"
                    </blockquote>
                    <div className="text-center">
                      <div className="w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center">
                        <Users className="w-6 h-6 text-[#18181b]" />
                      </div>
                      <p className="font-semibold text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {testimonial.author}
                      </p>
                      <p className="text-[#23272f] text-sm" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                        {testimonial.role}
                      </p>
                      <p className="text-[#23272f] text-sm font-medium" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                        {testimonial.company}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced FAQ Section */}
        <section ref={faqRef} className={`py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50/50 to-white ${faqClassName}`}>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-normal mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                Frequently Asked Questions
              </h2>
              <p className="text-lg md:text-xl text-[#23272f] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Got questions about our free audit? We've got detailed answers to help you understand exactly what you'll receive.
              </p>
            </div>
            
            <div className="space-y-4">
              {faqs.map((faq, idx) => (
                <Card key={idx} className="border border-gray-200 shadow-lg bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <button
                      className="w-full py-6 px-8 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                      onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                    >
                      <h3 className="text-lg font-semibold pr-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        {faq.question}
                      </h3>
                      <div className="flex-shrink-0">
                        {openFaq === idx ? (
                          <ChevronUp className="w-6 h-6 text-[#18181b]" />
                        ) : (
                          <ChevronDown className="w-6 h-6 text-[#18181b]" />
                        )}
                      </div>
                    </button>
                    {openFaq === idx && (
                      <div className="pb-6 px-8 border-t border-gray-100 pt-6">
                        <p className="text-[#23272f] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-12">
              <p className="text-lg text-[#23272f] mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Still have questions? We're here to help!
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  onClick={() => navigate('/contact')}
                  size="lg"
                  variant="outline"
                  className="border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-8 py-3 rounded-xl font-semibold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  <MessageSquare className="w-5 h-5 mr-2" />
                  Contact Us
                </Button>
                <Button
                  onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                  size="lg"
                  className="bg-[#18181b] hover:bg-[#23272f] text-white px-8 py-3 rounded-xl font-semibold"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Get Started Now
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Final Enhanced CTA */}
        <section ref={finalCtaRef} className={`py-24 px-4 md:px-8 bg-white ${finalCtaClassName}`}>
          <div className="max-w-7xl mx-auto">
            <div className="relative rounded-[48px] overflow-hidden">
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
              <div className="relative z-10 p-12 md:p-20">
                <div className="max-w-5xl mx-auto text-center">
                  <Badge className="mb-8 bg-[#18181b] text-white px-8 py-3 rounded-full text-lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Limited Time • 100% Free • No Strings Attached
                  </Badge>
                  <h2 className="text-4xl md:text-6xl font-normal mb-8 leading-tight" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400, letterSpacing: '-0.03em' }}>
                    Ready to Unlock Your<br />Marketing Potential?
                  </h2>
                  <p className="text-xl md:text-2xl text-[#23272f] mb-8 max-w-3xl mx-auto leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                    Join over 850 businesses who've transformed their digital marketing with our comprehensive audit. Get yours completely free today.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-6 mb-12 max-w-4xl mx-auto">
                    <div className="flex items-center gap-3 text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                      <Shield className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span>No cost, no commitment</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                      <Clock className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span>Delivered in 24-48 hours</span>
                    </div>
                    <div className="flex items-center gap-3 text-[#23272f]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                      <Award className="w-6 h-6 text-green-500 flex-shrink-0" />
                      <span>Expert analysis included</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <Button
                      size="lg"
                      className="bg-[#18181b] hover:bg-[#23272f] text-white px-16 py-5 rounded-xl font-semibold text-xl transform transition-all duration-300 hover:scale-105 shadow-2xl"
                      onClick={() => document.getElementById('audit-form')?.scrollIntoView({ behavior: 'smooth' })}
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif'
                      }}
                    >
                      Get My Free Audit Now
                      <Download className="ml-3 h-6 w-6" />
                    </Button>
                    <Button
                      size="lg"
                      variant="outline"
                      className="border-2 border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-16 py-5 rounded-xl font-semibold text-xl transform transition-all duration-300 hover:scale-105"
                      onClick={() => navigate('/contact')}
                      style={{ 
                        fontFamily: 'Montserrat, sans-serif', 
                        borderColor: '#18181b'
                      }}
                    >
                      <Phone className="mr-3 h-6 w-6" />
                      Talk to an Expert
                    </Button>
                  </div>
                  <p className="text-sm text-gray-600 mt-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                    🔒 Your information is secure and will never be shared • Over 850 successful audits completed
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