import { useState } from 'react';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
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
  MessageSquare
} from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useNavigate } from 'react-router-dom';

const auditServices = [
  {
    icon: Search,
    title: 'SEO Audit',
    description: 'Comprehensive analysis of your website\'s search engine optimization',
    features: [
      'Technical SEO analysis',
      'Keyword research',
      'On-page optimization review',
      'Competitor analysis',
      'Performance recommendations'
    ]
  },
  {
    icon: Target,
    title: 'Meta Ads Audit',
    description: 'Review of your Facebook and Instagram advertising campaigns',
    features: [
      'Campaign structure analysis',
      'Audience targeting review',
      'Ad creative assessment',
      'Performance optimization',
      'Budget allocation review'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Google Ads Audit',
    description: 'Analysis of your search and display advertising performance',
    features: [
      'Account structure review',
      'Keyword performance analysis',
      'Quality score optimization',
      'Bidding strategy review',
      'ROI improvement suggestions'
    ]
  },
  {
    icon: Video,
    title: 'Content Strategy Audit',
    description: 'Evaluation of your content marketing and social media presence',
    features: [
      'Content performance analysis',
      'Social media strategy review',
      'Brand voice assessment',
      'Engagement optimization',
      'Content calendar planning'
    ]
  },
  {
    icon: Globe,
    title: 'Website Audit',
    description: 'Comprehensive review of your website\'s performance and user experience',
    features: [
      'User experience analysis',
      'Conversion optimization review',
      'Technical performance audit',
      'Mobile responsiveness check',
      'Security and speed analysis'
    ]
  }
];

const Audit = () => {
  const { ref, className } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
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
    // Handle form submission
    navigate('/contact');
  };

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-screen bg-white">
        <div className="container mx-auto px-4 pt-40 md:pt-48">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-normal text-gray-900 mb-6">
              Free Digital Marketing Audit
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get a comprehensive analysis of your digital marketing performance and discover opportunities for growth
            </p>
          </div>
        </div>
        
        {/* Hero Section */}
        <section className="py-16 px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                Unlock Your Business<br />Growth Potential
              </h2>
              <p className="text-lg md:text-xl text-[#23263a] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Our expert team will analyze your digital marketing efforts and provide actionable insights to improve your online presence, increase traffic, and boost conversions.
              </p>
            </div>
          </div>
        </section>

        {/* What We Audit */}
        <section ref={ref} className={`py-16 px-4 md:px-8 ${className}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                What We Audit
              </h2>
              <p className="text-lg text-[#23263a] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Comprehensive analysis across all digital marketing channels
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {auditServices.map((service, idx) => {
                const IconComponent = service.icon;
                return (
                  <Card
                    key={service.title}
                    className="group cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105 border-0 overflow-hidden animate-fade-in-up"
                    style={{ animationDelay: `${idx * 200}ms` }}
                  >
                    <CardHeader className="pb-4">
                      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br from-blue-500 to-purple-600">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        {service.title}
                      </CardTitle>
                      <CardDescription className="text-base text-[#23263a] mt-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="space-y-3">
                        {service.features.map((feature, featureIdx) => (
                          <div key={featureIdx} className="flex items-center gap-3">
                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-24 px-4 md:px-8 bg-gradient-to-br from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-8" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                Why Get a Free Audit?
              </h2>
              <p className="text-lg md:text-xl text-[#23263a] max-w-3xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Discover hidden opportunities and optimize your digital marketing strategy
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Identify Opportunities
                </h3>
                <p className="text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Uncover hidden potential in your current digital marketing efforts and find new growth opportunities.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-600 flex items-center justify-center mx-auto mb-6">
                  <BarChart3 className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Data-Driven Insights
                </h3>
                <p className="text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Get actionable recommendations based on real data and industry best practices.
                </p>
              </div>
              
              <div className="text-center p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-orange-500 to-red-600 flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Quick Implementation
                </h3>
                <p className="text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Receive prioritized recommendations that you can implement immediately for fast results.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Audit Form */}
        <section className="py-24 px-4 md:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                Request Your Free Audit
              </h2>
              <p className="text-lg text-[#23263a] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                Fill out the form below and we'll provide you with a comprehensive digital marketing audit within 48 hours.
              </p>
            </div>
            
            <Card className="shadow-2xl border-0 overflow-hidden">
              <CardHeader className="bg-gradient-to-br from-gray-50 to-white pb-8">
                <CardTitle className="text-2xl font-bold text-center" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                  Digital Marketing Audit Request
                </CardTitle>
                <CardDescription className="text-center text-[#23263a]" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                  Tell us about your business and we'll create a custom audit plan
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
                        Website URL
                      </Label>
                      <Input
                        id="website"
                        value={formData.website}
                        onChange={(e) => handleInputChange('website', e.target.value)}
                        className="mt-2"
                        style={{ fontFamily: 'Montserrat, sans-serif' }}
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="service" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Primary Service Interest
                      </Label>
                      <Select value={formData.service} onValueChange={(value) => handleInputChange('service', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select a service" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="seo">SEO</SelectItem>
                          <SelectItem value="meta-ads">Meta Ads</SelectItem>
                          <SelectItem value="google-ads">Google Ads</SelectItem>
                          <SelectItem value="content">Content Strategy</SelectItem>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="comprehensive">Comprehensive Audit</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                        Monthly Marketing Budget
                      </Label>
                      <Select value={formData.budget} onValueChange={(value) => handleInputChange('budget', value)}>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under-1k">Under $1,000</SelectItem>
                          <SelectItem value="1k-5k">$1,000 - $5,000</SelectItem>
                          <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                          <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                          <SelectItem value="25k-plus">$25,000+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="description" className="text-sm font-semibold" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Tell us about your business and goals
                    </Label>
                    <Textarea
                      id="description"
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      placeholder="Describe your business, current challenges, and what you hope to achieve..."
                      className="mt-2 min-h-[120px]"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    />
                  </div>
                  
                  <div>
                    <Label className="text-sm font-semibold mb-4 block" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b' }}>
                      Which areas would you like us to audit? (Select all that apply)
                    </Label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {auditServices.map((service) => (
                        <div key={service.title} className="flex items-center space-x-3">
                          <Checkbox
                            id={service.title}
                            checked={formData.services.includes(service.title)}
                            onCheckedChange={() => handleServiceToggle(service.title)}
                          />
                          <Label
                            htmlFor={service.title}
                            className="text-sm cursor-pointer"
                            style={{ fontFamily: 'Montserrat, sans-serif', color: '#23263a', fontWeight: 400 }}
                          >
                            {service.title}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="text-center pt-6">
                    <Button
                      type="submit"
                      size="lg"
                      className="bg-[#18181b] hover:bg-[#23272f] text-white px-8 py-3 rounded-lg font-semibold text-lg"
                      style={{ fontFamily: 'Montserrat, sans-serif' }}
                    >
                      Request Free Audit
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>

        <BackToTop />
      </main>
      <Footer />
    </>
  );
};

export default Audit; 