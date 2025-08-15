import { useEffect, useState, useCallback, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [isIsland, setIsIsland] = useState(false);
  const isMobile = useIsMobile();
  const [open, setOpen] = useState(false);
  const tickingRef = useRef(false);
  const lastScrollY = useRef(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const shouldBeIsland = scrollY > 40;
    
    // Only update state if the value actually changes and scroll position changed significantly
    if (shouldBeIsland !== isIsland && Math.abs(scrollY - lastScrollY.current) > 5) {
      setIsIsland(shouldBeIsland);
      lastScrollY.current = scrollY;
    }
  }, [isIsland]);

  useEffect(() => {
    // Improved throttling with better performance
    const throttledHandleScroll = () => {
      if (!tickingRef.current) {
        requestAnimationFrame(() => {
          handleScroll();
          tickingRef.current = false;
        });
        tickingRef.current = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, [handleScroll]);

  return (
    <nav
      aria-label="Main navigation"
      className={`fixed top-0 left-0 w-full z-50 flex justify-center transition-all duration-500 ease-in-out ${
        isIsland ? 'pointer-events-auto' : ''
      }`}
      style={{ background: 'transparent' }}
    >
      <div
        className={`flex items-center justify-between transition-all duration-500 ease-in-out backdrop-blur-lg bg-white/80
          ${isIsland
            ? 'max-w-6xl mt-4 rounded-xl shadow-2xl px-6 py-6 gap-6'
            : 'max-w-7xl mt-0 rounded-2xl px-8 md:px-20 py-12 gap-8'}
        `}
        style={{
          width: isIsland ? '95%' : '100%',
          minWidth: 0,
          overflow: 'hidden',
          boxShadow: isIsland ? '0 8px 32px 0 rgba(31, 38, 135, 0.15)' : 'none',
          transition: 'all 0.5s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {/* Logo */}
        <div className="flex items-center min-w-[120px]">
          <Link to="/">
            <img 
              src="/logo.png" 
              alt="Logo" 
              className={`${isIsland ? 'h-10 w-auto' : 'h-14 w-auto'}`}
            />
          </Link>
        </div>
        {/* Center: Nav Links or Hamburger */}
        {isMobile ? (
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="md:hidden block p-2" onClick={() => setOpen(true)}>
                <Menu size={28} />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="p-8">
              <Link to="/" className="block mb-4" onClick={() => setOpen(false)}>Home</Link>
              <Link to="/services" className="block mb-4" onClick={() => setOpen(false)}>Services</Link>
              <Link to="/pricing" className="block mb-4" onClick={() => setOpen(false)}>Pricing</Link>
              <Link to="/audit" className="block mb-4" onClick={() => setOpen(false)}>Audit</Link>
              <Link to="/case-studies" className="block mb-4" onClick={() => setOpen(false)}>Case Studies</Link>
              <Link to="/about" className="block mb-4" onClick={() => setOpen(false)}>About</Link>
              <Link to="/contact" className="block" onClick={() => setOpen(false)}>Contact</Link>
            </SheetContent>
          </Sheet>
        ) : (
          <div className="flex-1 flex justify-center min-w-0">
            <div className={`flex ${isIsland ? 'gap-4' : 'gap-6'} min-w-0 flex-wrap justify-center`}>
              <Link
                to="/"
                className={`font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-[#f3e8ff]/60 rounded-md px-2 ${isIsland ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 300 }}
              >
                Home
              </Link>
              <Link
                to="/services"
                className={`font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-[#f3e8ff]/60 rounded-md px-2 ${isIsland ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 300 }}
              >
                Services
              </Link>
              <Link
                to="/pricing"
                className={`font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-[#f3e8ff]/60 rounded-md px-2 ${isIsland ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 300 }}
              >
                Pricing
              </Link>
              <Link
                to="/audit"
                className={`font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-[#f3e8ff]/60 rounded-md px-2 ${isIsland ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 300 }}
              >
                Audit
              </Link>
              <Link
                to="/case-studies"
                className={`font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-[#f3e8ff]/60 rounded-md px-2 ${isIsland ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 300 }}
              >
                Case Studies
              </Link>
              <Link
                to="/about"
                className={`font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-[#f3e8ff]/60 rounded-md px-2 ${isIsland ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 300 }}
              >
                About
              </Link>
              <Link
                to="/contact"
                className={`font-normal transition-transform duration-300 hover:scale-105 hover:shadow-md hover:bg-[#f3e8ff]/60 rounded-md px-2 ${isIsland ? 'text-sm' : 'text-base'}`}
                style={{ fontFamily: 'Montserrat, sans-serif', color: '#18181b', fontWeight: 300 }}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
