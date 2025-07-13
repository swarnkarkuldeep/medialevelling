import { useState } from 'react';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  TrendingUp, 
  Target, 
  Search, 
  Video, 
  Globe, 
  ArrowRight,
  Eye,
  Users,
  DollarSign,
  Calendar,
  CheckCircle,
  Star
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useNavigate } from 'react-router-dom';

const caseStudies = [
  {
    id: 1,
    client: 'EcoTech Solutions',
    industry: 'Technology',
    services: ['SEO', 'Google Ads', 'Website Creation'],
    duration: '6 months',
    results: {
      traffic: '+245%',
      conversions: '+180%',
      revenue: '+320%',
      keywords: '+156'
    },
    description: 'A comprehensive digital transformation for a sustainable technology company, focusing on organic growth and targeted advertising.',
    challenges: [
      'Low organic visibility',
      'Poor conversion rates',
      'Outdated website design'
    ],
    solutions: [
      'Technical SEO optimization',
      'Google Ads campaign management',
      'Modern website redesign'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 2,
    client: 'FreshBite Restaurant',
    industry: 'Food & Beverage',
    services: ['Meta Ads', 'Short-form Content'],
    duration: '4 months',
    results: {
      traffic: '+189%',
      conversions: '+142%',
      revenue: '+267%',
      engagement: '+98%'
    },
    description: 'Social media marketing campaign that increased brand awareness and drove foot traffic to multiple restaurant locations.',
    challenges: [
      'Low social media engagement',
      'Limited brand awareness',
      'Seasonal business fluctuations'
    ],
    solutions: [
      'Targeted Meta Ads campaigns',
      'Engaging short-form content',
      'Local audience targeting'
    ],
    image: '/placeholder.svg',
    featured: true
  },
  {
    id: 3,
    client: 'FitLife Gym',
    industry: 'Health & Fitness',
    services: ['SEO', 'Meta Ads', 'Content Strategy'],
    duration: '8 months',
    results: {
      traffic: '+312%',
      conversions: '+198%',
      revenue: '+445%',
      memberships: '+89'
    },
    description: 'Multi-channel digital marketing strategy that transformed a local gym into a regional fitness destination.',
    challenges: [
      'Competitive local market',
      'Low online presence',
      'Seasonal membership drops'
    ],
    solutions: [
      'Local SEO optimization',
      'Targeted social media ads',
      'Content marketing strategy'
    ],
    image: '/placeholder.svg',
    featured: false
  },
  {
    id: 4,
    client: 'StyleCraft Boutique',
    industry: 'Fashion & Retail',
    services: ['Google Ads', 'Website Creation'],
    duration: '5 months',
    results: {
      traffic: '+167%',
      conversions: '+134%',
      revenue: '+289%',
      orders: '+76%'
    },
    description: 'E-commerce optimization and paid advertising campaign that significantly increased online sales and customer acquisition.',
    challenges: [
      'Poor website performance',
      'Low conversion rates',
      'High advertising costs'
    ],
    solutions: [
      'Website redesign and optimization',
      'Google Shopping campaigns',
      'Conversion rate optimization'
    ],
    image: '/placeholder.svg',
    featured: false
  },
  {
    id: 5,
    client: 'TechStart Consulting',
    industry: 'Professional Services',
    services: ['SEO', 'Content Strategy'],
    duration: '7 months',
    results: {
      traffic: '+278%',
      conversions: '+156%',
      revenue: '+234%',
      leads: '+89'
    },
    description: 'Content-driven SEO strategy that established thought leadership and generated high-quality leads for a consulting firm.',
    challenges: [
      'Low search visibility',
      'Limited content marketing',
      'Competitive B2B market'
    ],
    solutions: [
      'Comprehensive SEO strategy',
      'Content marketing development',
      'Thought leadership positioning'
    ],
    image: '/placeholder.svg',
    featured: false
  },
  {
    id: 6,
    client: 'GreenThumb Landscaping',
    industry: 'Home Services',
    services: ['Google Ads', 'Local SEO'],
    duration: '3 months',
    results: {
      traffic: '+198%',
      conversions: '+167%',
      revenue: '+312%',
      calls: '+145'
    },
    description: 'Local SEO and Google Ads campaign that dominated the local market and generated consistent leads.',
    challenges: [
      'Limited local visibility',
      'Seasonal business',
      'High competition'
    ],
    solutions: [
      'Local SEO optimization',
      'Google Ads management',
      'Review management'
    ],
    image: '/placeholder.svg',
    featured: false
  }
];

const CaseStudies = () => {
  const { ref, className } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const navigate = useNavigate();
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [selectedService, setSelectedService] = useState('all');

  const industries = ['all', 'Technology', 'Food & Beverage', 'Health & Fitness', 'Fashion & Retail', 'Professional Services', 'Home Services'];
  const services = ['all', 'SEO', 'Google Ads', 'Meta Ads', 'Short-form Content', 'Website Creation', 'Content Strategy'];

  const filteredCaseStudies = caseStudies.filter(study => {
    const industryMatch = selectedIndustry === 'all' || study.industry === selectedIndustry;
    const serviceMatch = selectedService === 'all' || study.services.includes(selectedService);
    return industryMatch && serviceMatch;
  });

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 pt-40 md:pt-48">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              Case Studies & Portfolio
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real results from real clients. Discover how we've helped businesses grow through strategic digital marketing.
            </p>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                Success Stories That<br />Drive Results
              </h2>
              <p className="text-lg md:text-xl text-[#23263a] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Every case study represents a partnership built on trust, strategy, and measurable results. See how we've transformed businesses across industries.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  500+
                </div>
                <div className="text-sm text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Projects Completed
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  98%
                </div>
                <div className="text-sm text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Client Satisfaction
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  $2.5M+
                </div>
                <div className="text-sm text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Revenue Generated
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-[#18181b] mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  50+
                </div>
                <div className="text-sm text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Industries Served
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className="py-8 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1">
                <label className="text-sm font-semibold mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Filter by Industry
                </label>
                <select
                  value={selectedIndustry}
                  onChange={(e) => setSelectedIndustry(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18181b] focus:border-transparent"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {industries.map(industry => (
                    <option key={industry} value={industry}>
                      {industry === 'all' ? 'All Industries' : industry}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex-1">
                <label className="text-sm font-semibold mb-2 block" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Filter by Service
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#18181b] focus:border-transparent"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {services.map(service => (
                    <option key={service} value={service}>
                      {service === 'all' ? 'All Services' : service}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </section>

        {/* Case Studies Grid */}
        <section ref={ref} className={`py-16 px-4 md:px-8 ${className}`}>
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((study, idx) => (
                <Card
                  key={study.id}
                  className={`group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 border-0 overflow-hidden animate-fade-in-up ${
                    study.featured ? 'ring-2 ring-[#18181b] shadow-xl' : ''
                  }`}
                  style={{ 
                    animationDelay: `${idx * 200}ms`,
                    background: study.featured 
                      ? 'linear-gradient(135deg, #f3e8ff 0%, #e0f7fa 100%)'
                      : 'white'
                  }}
                  onClick={() => navigate('/contact')}
                >
                  {study.featured && (
                    <div className="absolute top-4 right-4">
                      <Badge className="bg-[#18181b] text-white px-3 py-1 rounded-full text-xs font-semibold">
                        <Star className="w-3 h-3 mr-1" />
                        Featured
                      </Badge>
                    </div>
                  )}
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <CardTitle className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          {study.client}
                        </CardTitle>
                        <CardDescription className="text-sm text-[#23263a] mt-1" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                          {study.industry}
                        </CardDescription>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                          Duration
                        </div>
                        <div className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          {study.duration}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {study.services.map((service, serviceIdx) => (
                        <Badge key={serviceIdx} variant="secondary" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                    
                    <CardDescription className="text-sm text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                      {study.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="pt-0">
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      {Object.entries(study.results).map(([key, value]) => (
                        <div key={key} className="text-center p-3 bg-white rounded-lg">
                          <div className="text-lg font-bold text-[#18181b]" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                            {value}
                          </div>
                          <div className="text-xs text-[#23263a] capitalize" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    <div className="space-y-3 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          Challenges:
                        </h4>
                        <ul className="space-y-1">
                          {study.challenges.map((challenge, challengeIdx) => (
                            <li key={challengeIdx} className="text-xs text-[#23263a] flex items-start gap-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                              <span className="text-red-500 mt-1">•</span>
                              {challenge}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold mb-2" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                          Solutions:
                        </h4>
                        <ul className="space-y-1">
                          {study.solutions.map((solution, solutionIdx) => (
                            <li key={solutionIdx} className="text-xs text-[#23263a] flex items-start gap-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                              <CheckCircle className="w-3 h-3 text-green-500 flex-shrink-0 mt-0.5" />
                              {solution}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    
                    <Button
                      className="w-full bg-[#18181b] hover:bg-[#23272f] text-white font-semibold transition-all duration-300"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      View Full Case Study
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {filteredCaseStudies.length === 0 && (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  No case studies found
                </h3>
                <p className="text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Try adjusting your filters to see more results.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-br from-gray-50 to-white rounded-3xl p-12 shadow-lg">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                Ready to Join Our Success Stories?
              </h2>
              <p className="text-lg text-[#23263a] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Let's discuss your business goals and create a custom digital marketing strategy that delivers real results.
              </p>
              <div className="flex flex-col md:flex-row gap-4 justify-center">
                <Button
                  size="lg"
                  className="bg-[#18181b] hover:bg-[#23272f] text-white px-8 py-3 rounded-lg font-semibold text-lg"
                  onClick={() => navigate('/contact')}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Start Your Project
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-8 py-3 rounded-lg font-semibold text-lg"
                  onClick={() => navigate('/audit')}
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  Get Free Audit
                </Button>
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

export default CaseStudies; 