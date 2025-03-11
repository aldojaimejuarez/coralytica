import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { FaArrowLeft, FaPhone, FaEnvelope, FaLinkedin, FaYoutube, FaFacebook, FaInstagram, FaTiktok } from 'react-icons/fa';

// Import the services data
import { services } from '../data/services';

function ServiceDetail() {
  const { serviceId } = useParams();
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/company/coralytica", name: "LinkedIn" },
    { icon: <FaYoutube size={24} />, url: "https://www.youtube.com/@Coralytica", name: "YouTube" },
    { icon: <FaFacebook size={24} />, url: "https://www.facebook.com/share/15D56vEjMi/?mibextid=wwXIfr", name: "Facebook" },
    { icon: <FaInstagram size={24} />, url: "https://www.instagram.com/coralytica/", name: "Instagram" },
    { icon: <FaTiktok size={24} />, url: "https://www.tiktok.com/@coralytica?_t=ZS-8uVJXYkw7QG&_r=1", name: "TikTok" }
  ];

  useEffect(() => {
    // Find the service with the matching ID
    const foundService = services.find(s => s.id === serviceId);
    
    if (foundService) {
      setService(foundService);
      // Scroll to top when component mounts
      window.scrollTo(0, 0);
    } else {
      // If service not found, redirect to home
      navigate('/');
    }

    // Add scroll event listener to detect when to show the floating navbar
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [serviceId, navigate]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Floating Navigation Bar */}
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 bg-primary text-white shadow-lg transition-all duration-300 ${
          scrolled ? 'py-2' : 'py-2 -translate-y-full'
        }`}
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
        transition={{ duration: 0.3 }}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 
              className="text-2xl font-bold cursor-pointer hover:text-accent transition-colors"
              onClick={() => navigate('/')}
            >
              Coralytica
            </h1>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white hover:text-accent transition-colors"
            >
              <FaArrowLeft /> Back to Home
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Header */}
      <header className="bg-primary text-white py-6">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <h1 
              className="text-2xl font-bold cursor-pointer hover:text-accent transition-colors"
              onClick={() => navigate('/')}
            >
              Coralytica
            </h1>
            <button 
              onClick={() => navigate('/')}
              className="flex items-center gap-2 text-white hover:text-accent transition-colors"
            >
              <FaArrowLeft /> Back to Home
            </button>
          </div>
        </div>
      </header>

      {/* Service Detail Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="container mx-auto px-6 py-12"
      >
        <div className="max-w-4xl mx-auto">
          {/* Service Header */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div className="flex flex-col md:flex-row items-center gap-6 mb-6">
              <div className="bg-primary p-6 rounded-full">
                {service.icon}
              </div>
              <div>
                <h1 className="text-3xl font-bold mb-4">{service.title}</h1>
                <p className="text-lg text-gray-700">{service.description}</p>
              </div>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg">
              <h3 className="font-semibold text-gray-800 mb-2">Key Benefit:</h3>
              <p className="text-gray-700">{service.benefit}</p>
            </div>
          </div>

          {/* Service Full Description */}
          <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
            <div 
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: service.fullDescription }}
            />
          </div>

          {/* Call to Action */}
          <div className="bg-accent text-white p-8 rounded-lg shadow-lg mb-8">
            <h2 className="text-2xl font-bold mb-4">Ready to transform your data?</h2>
            <p className="mb-6">Contact us today to discuss how our {service.title} services can help your business.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a 
                href="tel:+61491053327"
                className="bg-white text-accent hover:bg-gray-100 font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <FaPhone /> Call Us
              </a>
              <a 
                href="mailto:info@coralytica.com.au?subject=Inquiry about Data Services"
                className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-6 rounded-full transition-colors flex items-center justify-center gap-2"
              >
                <FaEnvelope /> Email Us
              </a>
            </div>
          </div>

          {/* Back Button */}
          <div className="text-center">
            <button 
              onClick={() => navigate('/')}
              className="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-full transition-colors inline-flex items-center gap-2"
            >
              <FaArrowLeft /> Back to All Services
            </button>
          </div>
        </div>
      </motion.div>

      {/* Footer */}
      <footer className="bg-primary text-white py-6 mt-12">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0 flex items-center">
              <h2 className="text-xl font-bold mr-3">Coralytica</h2>
              <p>© 2025 Coralytica. All rights reserved.</p>
            </div>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-accent transition-colors"
                  aria-label={`Visit Coralytica on ${social.name}`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default ServiceDetail;