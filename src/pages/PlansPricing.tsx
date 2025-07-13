import { useState } from 'react';
import { Check, X, Star, ArrowRight } from 'lucide-react';
import { useInViewAnimation } from '@/hooks/use-in-view-animation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import BackToTop from '@/components/BackToTop';
import { useNavigate } from 'react-router-dom';

const servicePlans = {
  'media-levelling-package': {
    title: 'Media Levelling Package',
    description: 'Transform your brand\'s presence with engaging short-form videos for Instagram Reels, YouTube Shorts, and TikTok. Capture attention, drive engagement, and grow your audience with creative, high-quality content.',
    icon: '📦',
    plans: [
      {
        name: 'Starter',
        price: 25999,
        description: 'Perfect for small businesses or influencers for starting a good start',
        features: [
          'Starter (search engine optimisation)',
          'Meta ads',
          'PPC(Pay-per-click)',
          'Basic short-form content creation',
          'Platform optimization for Instagram, YouTube Shorts, and TikTok',
          'Email support for campaign management'
        ],
        notIncluded: [
          'Advanced targeting',
          'A/B testing',
          'Custom audiences',
          'Premium editing features'
        ]
      },
      {
        name: 'Growth',
        price: 54999,
        description: 'Great for businesses looking to boost their social media presence with consistent content',
        features: [
          '16 videos/month (15-60 seconds each)',
          'Advanced editing with effects, captions, and music sync',
          'Optimized for Instagram, YouTube Shorts, and Facebook',
          'Bi-weekly performance feedback and support',
          'Enhanced SEO optimization',
          'Advanced Meta ads campaigns',
          'Comprehensive PPC management',
          'WhatsApp support for optimization'
        ],
        notIncluded: [
          'Dedicated account manager',
          'Custom reporting',
          'Unlimited revisions'
        ]
      },
      {
        name: 'Premium',
        price: 89999,
        description: 'For established brands seeking high-impact, premium content across platforms',
        features: [
          '24 videos/month (15-60 seconds each)',
          'Professional editing with custom animations, effects, and storytelling',
          'Content strategy consultation for creative direction',
          'Priority support with unlimited revisions',
          'Comprehensive SEO strategy',
          'Advanced Meta ads with Reels and Stories',
          'Full PPC campaign management',
          '24/7 priority support with dedicated account manager',
          'Weekly strategy calls and performance reviews'
        ],
        notIncluded: []
      }
    ]
  },
  'meta-ads': {
    title: 'Meta Ads',
        description: 'Our Meta Ads service is designed to grow your brand by targeting the right audience on Facebook and Instagram. With strategic campaigns, tailored creatives, and data-driven optimization, we ensure your business gets the visibility and conversions it deserves',
    icon: '🎯',
    plans: [
      {
        name: 'Starter',
        price: 9999,
        description: 'Perfect for small businesses or those just starting with Meta Ads',
        features: [
          '3 campaign with basic audience targeting and static ad creatives',
          'Weekly performance tracking and budget monitoring',
          'Email support for campaign management'
        ],
        notIncluded: [
          'Advanced targeting',
          'A/B testing',
          'Custom audiences'
        ]
      },
      {
        name: 'Growth',
        price: 24999,
        description: 'Ideal for scaling businesses looking to boost engagement',
        features: [
          'Up to 5 campaigns with advanced targeting and A/B testing',
          'Carousel, video, and static ad creation with conversion tracking',
          'Email and WhatsApp support for optimization'
        ],
        notIncluded: [
          'Dedicated account manager',
          'Custom reporting'
        ]
      },
      {
        name: 'Premium',
        price: 49999,
        description: 'Best for established businesses seeking maximum ROI',
        features: [
          'Unlimited campaigns with advanced ad formats (Reels, Stories)',
          'Comprehensive analytics, competitor analysis, and weekly strategy calls',
          '24/7 priority support with a dedicated account manager'
        ],
        notIncluded: []
      }
    ]
  },
  'google-ads': {
    title: 'Google Ads',
    description: ' Drive targeted traffic to your business with expertly crafted Google Ads campaigns. From search to display and shopping ads, we ensure your brand stays at the forefront with optimized strategies and measurable results.',
    icon: '🔍',
    plans: [
      {
        name: 'Starter',
        price: 9999,
        description: 'Perfect for small businesses exploring Google Ads',
        features: [
          '1 campaign setup (Search or Display)',
          'Keyword research and basic targeting',
          'Weekly performance tracking with budget insights',
          'Support: Email support to guide your campaigns'
        ],
        notIncluded: [
          'Display campaigns',
          'Remarketing',
          'Advanced bidding'
        ]
      },
      {
        name: 'Growth',
        price: 24999,
        description: 'Designed for businesses ready to expand their online reach',
        features: [
          'Up to 3 campaigns (Search, Display, or Shopping)',
          'A/B testing and advanced keyword strategies',
          'Bi-weekly performance reports with actionable insights',
          'Email and WhatsApp support for optimization'
        ],
        notIncluded: [
          'Dedicated account manager',
          'Custom automation'
        ]
      },
      {
        name: 'Premium',
        price: 49999,
        description: 'Best for established businesses driving higher ROI',
        features: [
          'Unlimited campaigns across all Google ad formats',
          'Retargeting, competitor analysis, and advanced optimization',
          'Weekly reports with strategy calls',
          '24/7 priority support and a dedicated account manager'
        ],
        notIncluded: []
      }
    ]
  },
  'seo': {
    title: 'SEO',
    description: 'Enhance your online visibility and drive organic traffic with our expert SEO solutions. From on-page optimization to advanced strategies, we help your business rank higher and grow faster.',
    icon: '📈',
    plans: [
      {
        name: 'Starter',
        price: 7999,
        description: 'Best for small businesses starting with SEO',
        features: [
          'Keyword research and basic on-page optimization',
          'Meta tags, titles, and descriptions setup',
          'Monthly performance tracking and reporting',
          'Email support for SEO-related queries'
        ],
        notIncluded: [
          'Link building',
          'Content creation',
          'Local SEO'
        ]
      },
      {
        name: 'Growth',
        price: 19999,
        description: 'Designed for businesses aiming to improve search engine rankings',
        features: [
          'Keyword strategy with competitive analysis',
          'On-page and technical SEO (site speed, schema, etc.)',
          'Backlink building and local SEO optimization',
          'Bi-weekly performance reports with recommendations'
        ],
        notIncluded: [
          'Dedicated SEO specialist',
          'Custom content creation'
        ]
      },
      {
        name: 'Premium',
        price: 39999,
        description: 'Perfect for established brands seeking top rankings',
        features: [
          'Advanced keyword strategy with competitor insights',
          'Comprehensive on-page, off-page, and technical SEO',
          'Monthly backlink audits and high-quality link building',
          'Weekly strategy calls with 24/7 support'
        ],
        notIncluded: []
      }
    ]
  },
  'short-form-content': {
    title: 'Short-form Content',
    description: ' Transform your brand’s presence with engaging short-form videos for Instagram Reels, YouTube Shorts, and TikTok. Capture attention, drive engagement, and grow your audience with creative, high-quality content',
    icon: '📱',
    plans: [
      {
        name: 'Starter',
        price: 9999,
        description: 'Perfect for small businesses or influencers just starting with short-form content',
        features: [
          '8 videos/month (15-30 seconds each)',
          'Basic editing with captions and transitions',
          'Platform-optimized for Instagram or YouTube Shorts',
          'Email support for revisions'
        ],
        notIncluded: [
          'Custom music',
          'Advanced effects',
          'Multiple platforms'
        ]
      },
      {
        name: 'Growth',
        price: 24999,
        description: 'Great for businesses looking to boost their social media presence with consistent content',
        features: [
          '16 videos/month (15-60 seconds each)',
          'Advanced editing with effects, captions, and music sync',
          'Optimized for Instagram, YouTube Shorts, and Facebook',
          'Bi-weekly performance feedback and support'
        ],
        notIncluded: [
          'Dedicated content creator',
          'Custom branding'
        ]
      },
      {
        name: 'Premium',
        price: 39999,
        description: 'For established brands seeking high-impact, premium content across platforms',
        features: [
          '24 videos/month (15-60 seconds each)',
          'Professional editing with custom animations, effects, and storytelling',
          'Content strategy consultation for creative direction',
          'Priority support with unlimited revisions'
        ],
        notIncluded: []
      }
    ]
  },
  'website-creation': {
    title: 'Website Creation',
    description: 'Build a powerful online presence with our professional website development services. From stunning designs to seamless functionality, we create websites that convert visitors into customers and drive your business growth.',
    icon: '🌐',
    plans: [
      {
        name: 'Starter',
        price: 14999,
        description: 'Perfect for small businesses and solo entrepreneurs getting online',
        features: [
          '1-Page or 3-Page Static Website',
          'Mobile-Responsive Design',
          'Basic SEO Setup',
          'Contact Form Integration',
          'Delivery in 5–7 Days',
          '1 Round of Revisions',
          'Email Support'
        ],
        notIncluded: [
          'Custom design',
          'E-commerce features',
          'Advanced functionality'
        ]
      },
      {
        name: 'Growth',
        price: 29999,
        description: 'Ideal for brands ready to scale their digital presence and drive results',
        features: [
          'Upto 7 Dynamic Pages (Home, Services, Blog, etc.)',
          'CMS Integration (WordPress / Custom)',
          'Mobile + Tablet Responsive',
          'SEO Setup + Speed Optimization',
          'Basic Copywriting (up to 500 words/page)',
          'WhatsApp Chat, Lead Forms, CTA Buttons',
          '2 Rounds of Revisions',
          'Support: Email + Priority Chat'
        ],
        notIncluded: [
          'E-commerce functionality',
          'Custom development'
        ]
      },
      {
        name: 'Premium',
        price: 49999,
        description: 'For established brands seeking high-impact, premium content across platforms',
        features: [
          '10+ Custom Pages or E-Commerce (upto 25 products)',
          'UI/UX Strategy + Premium Design',
          'Advanced SEO + Analytics + Tracking Setup',
          'Payment Gateway, Booking, or Forms',
          'Admin Dashboard + Video Training',
          'High-speed Hosting & SSL Setup (1st month free)',
          '15 Days Unlimited Revisions',
          '30 Days Maintenance',
          'Support: Email + Chat + Phone'
        ],
        notIncluded: []
      }
    ]
  }
};

const PlansPricing = () => {
  const { ref, className } = useInViewAnimation<HTMLDivElement>('animate-fade-in-up');
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState('media-levelling-package');

  return (
    <>
      <header>
        <Navigation />
      </header>
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="w-full flex items-center justify-center min-h-[60vh] py-8 px-4 md:px-8 mt-24 md:mt-32 overflow-hidden">
          <div className="relative w-full max-w-7xl mx-auto rounded-[48px] md:rounded-[48px] bg-white flex flex-col items-center justify-center px-6 md:px-16 py-16 md:py-24 overflow-hidden"
            style={{
              minHeight: 400,
              background: `
                radial-gradient(ellipse at 10% 20%, #e0f7fa 0%, transparent 50%),
                radial-gradient(ellipse at 90% 80%, #f3e8ff 0%, transparent 55%),
                radial-gradient(ellipse at 30% 70%, #d1f5e0 0%, transparent 65%),
                radial-gradient(ellipse at 70% 40%, #ffe4fa 0%, transparent 60%),
                linear-gradient(135deg, #f7fafc 0%, #f8fafc 100%)
              `
            }}
          >
            {/* Gradient overlay */}
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
            {/* Centered content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center w-full">
              <h1
                className="text-3xl md:text-5xl font-extrabold mb-8"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#18181b',
                  letterSpacing: '-0.03em',
                  fontWeight: 400
                }}
              >
                Plans & Pricing
              </h1>
              <p
                className="text-lg md:text-xl font-normal mb-6 max-w-2xl mx-auto"
                style={{
                  fontFamily: 'Montserrat, sans-serif',
                  color: '#23272f',
                  fontWeight: 300
                }}
              >
                Choose the perfect plan for each service that fits your business needs and budget
              </p>
            </div>
          </div>
          <style>{`
            @keyframes gradient-move {
              0% { 
                background-position: 0% 0%, 100% 0%, 50% 100%, 60% 60%;
                opacity: 0.8;
              }
              50% { 
                background-position: 20% 40%, 80% 30%, 50% 80%, 60% 60%;
                opacity: 1;
              }
              100% { 
                background-position: 0% 0%, 100% 0%, 50% 100%, 60% 60%;
                opacity: 0.8;
              }
            }
          `}</style>
        </section>
        
        {/* Service Selection & Pricing */}
        <section ref={ref} className={`py-16 px-4 md:px-8 bg-white ${className}`}>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                Select Your Service
              </h2>
              <p className="text-lg text-[#23263a] max-w-2xl mx-auto mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                Choose a service to view detailed pricing plans and features
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-12">
                {Object.entries(servicePlans).map(([key, service]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedService(key)}
                    className={`px-6 py-3 rounded-full border transition-all duration-300 ${
                      selectedService === key
                        ? 'bg-[#18181b] text-white border-[#18181b]'
                        : 'bg-white text-[#18181b] border-gray-300 hover:border-[#18181b] hover:bg-gray-50'
                    }`}
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                  >
                    {service.title}
                  </button>
                ))}
              </div>
              
              <div className="text-center mb-12">
                <h3 className="text-2xl md:text-3xl font-bold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                  {servicePlans[selectedService as keyof typeof servicePlans].title} Pricing
                </h3>
                <p className="text-lg text-[#23263a] max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  {servicePlans[selectedService as keyof typeof servicePlans].description}
                </p>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {servicePlans[selectedService as keyof typeof servicePlans].plans.map((plan, idx) => (
                <div
                  key={plan.name}
                  className={`rounded-2xl border border-gray-200 flex flex-col items-center px-4 py-8 ${
                    plan.name === 'Growth'
                      ? 'bg-[#18181b] text-white scale-105 z-10'
                      : 'bg-white text-[#18181b]'
                  } animate-fade-in-up`}
                  style={{ 
                    minHeight: 440, 
                    animationDelay: `${idx * 180 + 200}ms`,
                    fontFamily: 'Montserrat, sans-serif'
                  }}
                >
                  <div className="w-full text-center mb-6">
                    <div className="text-lg font-semibold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 500 }}>
                      {plan.name}
                    </div>
                    <div className="flex flex-col items-center mb-6">
                      <div
                        className="rounded-xl px-12 py-5 min-w-[220px] text-4xl font-bold flex flex-col items-center"
                        style={{
                          background: 'linear-gradient(90deg, #e0f7fa 0%, #f3e8ff 50%, #ffe4fa 100%)',
                          color: plan.name === 'Growth' ? '#18181b' : '#18181b',
                          fontFamily: 'Montserrat, sans-serif',
                          fontWeight: 700,
                        }}
                      >
                        <span>Rs.{plan.price}<span className="text-lg font-medium ml-1" style={{ fontWeight: 400 }}></span></span>
                        <span className="text-base font-normal mt-1" style={{ color: '#23263a', fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>{plan.description}</span>
                      </div>
                    </div>
                  </div>
                  <ul className="w-full flex-1 mb-8 space-y-4">
                    {plan.features.map((feature, i) => (
                      <li key={i} className={`flex items-center gap-3 text-base ${plan.name === 'Growth' ? 'text-white' : 'text-[#18181b]'}`} style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                        <Check size={20} className={plan.name === 'Growth' ? 'text-green-400' : 'text-green-500'} />
                        {feature}
                      </li>
                    ))}
                    {plan.notIncluded.length > 0 && plan.notIncluded.map((feature, i) => (
                      <li key={`not-${i}`} className="flex items-center gap-3 text-base text-gray-400 line-through" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}>
                        <X size={20} className="text-gray-300" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`px-8 py-3 rounded-lg font-semibold text-base md:text-lg transition-transform duration-300 hover:scale-105 hover:shadow-lg ${plan.name === 'Growth' ? 'bg-white text-[#18181b] hover:bg-gray-100' : 'bg-[#18181b] text-white hover:bg-[#23272f]'}`}
                    style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
                    onClick={() => navigate('/contact')}
                  >
                    Choose {plan.name}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 px-4 md:px-8 bg-white">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                Frequently Asked Questions
              </h2>
            </div>
            
            <div className="space-y-8">
              <div className="border-b border-gray-200 pb-8 animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                  Can I switch between plans?
                </h3>
                <p className="text-[#23263a] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8 animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                  Do you offer custom plans?
                </h3>
                <p className="text-[#23263a] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Yes, we offer custom plans for businesses with specific needs. Contact us to discuss your requirements.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8 animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                  What's included in the support?
                </h3>
                <p className="text-[#23263a] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Support includes email communication, regular check-ins, and performance reviews. Premium plans include dedicated account management.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8 animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                  How long does it take to see results?
                </h3>
                <p className="text-[#23263a] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Results vary by service and plan. SEO typically shows improvements in 3-6 months, while paid advertising can show immediate results. We provide regular reports to track progress.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-8 animate-fade-in-up">
                <h3 className="text-xl font-semibold mb-4" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
                  What makes the Media Levelling Package different?
                </h3>
                <p className="text-[#23263a] leading-relaxed" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
                  Our Media Levelling Package combines multiple services (SEO, Meta ads, PPC, and short-form content) into one comprehensive solution. This integrated approach ensures all your digital marketing efforts work together for maximum impact.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="pt-12 pb-24 px-4 md:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6" style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 400 }}>
              Ready to Get Started?
            </h2>
            <p className="text-lg text-[#23263a] mb-8 max-w-2xl mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 300 }}>
              Contact us today to discuss your needs and find the perfect plan for your business growth.
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-[#18181b] hover:bg-[#23272f] text-white px-8 py-3 rounded-lg font-semibold text-lg"
                onClick={() => navigate('/contact')}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-[#18181b] text-[#18181b] hover:bg-[#f3f4f6] px-8 py-3 rounded-lg font-semibold text-lg"
                onClick={() => navigate('/audit')}
                style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 400 }}
              >
                Get Free Audit
              </Button>
            </div>
          </div>
        </section>

        <BackToTop />
      </main>
      <Footer />
    </>
  );
};

export default PlansPricing; 