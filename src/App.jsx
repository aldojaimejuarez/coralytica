import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import { 
  FaDatabase, 
  FaChartLine, 
  FaCogs, 
  FaLightbulb, 
  FaBars, 
  FaTimes, 
  FaLinkedin, 
  FaYoutube, 
  FaFacebook, 
  FaInstagram, 
  FaTiktok,
  FaPhone,
  FaEnvelope,
  FaExchangeAlt,
  FaStream,
  FaCubes,
  FaChartBar,
  FaCloud,
  FaPuzzlePiece,
  FaArrowRight,
  FaRocket,
  FaHandshake,
  FaUsers,
  FaLightbulb as FaLightbulbOn
} from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ServiceDetail from './components/ServiceDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services/:serviceId" element={<ServiceDetail />} />
      </Routes>
    </Router>
  );
}

function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
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
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const services = [
    {
      id: "data-integration",
      icon: <FaExchangeAlt className="text-4xl mb-4 text-accent" />,
      title: "Data Integration",
      description: "Consolidate data from spreadsheets, CRMs, POS systems, e-commerce platforms, and  Cloud & On-Premises databases into a single, unified view.",
      benefit: "Save time, eliminate errors, and ensure all your data is accessible and ready for decision-making."
    },
    {
      id: "etl-pipelines",
      icon: <FaStream className="text-4xl mb-4 text-accent" />,
      title: "ETL and Automated Data Pipelines",
      description: "Automate the cleaning, transformation, and loading of data into analysis-ready systems.",
      benefit: "Reduce manual tasks, ensure real-time updates, and maintain consistent data accuracy."
    },
    {
      id: "data-modeling",
      icon: <FaCubes className="text-4xl mb-4 text-accent" />,
      title: "Data Architecture, Modeling & Scalable Data Warehouses & Data Lakes",
      description: "Build scalable, structured data warehouses optimized for reporting and analysis.",
      benefit: "Enable faster, more accurate insights by organizing and optimizing your data for seamless reporting, analytics, and business intelligence."
    },
    {
      id: "dashboard-design",
      icon: <FaChartBar className="text-4xl mb-4 text-accent" />,
      title: "Dashboard Design & Business Insights",
      description: "Create interactive, user-friendly dashboards to visualize pre-defined KPIs and monitor business performance in real time.",
      benefit: "Empower teams with intuitive, visually compelling dashboards that provide instant business insights—without needing technical expertise."
    },
    {
      id: "cloud-analytics",
      icon: <FaCloud className="text-4xl mb-4 text-accent" />,
      title: "Cloud-Based & On-Premises Analytics",
      description: "Make smarter business decisions with data-driven insights, whether your analytics run on-premise, in the cloud, or both.",
      benefit: "Give your business the power of real-time, easy-to-use analytics, accessible from anywhere—without needing a dedicated IT team."
    },
    {
      id: "data-migration",
      icon: <FaPuzzlePiece className="text-4xl mb-4 text-accent" />,
      title: "Data Migration from On-Premise to the Cloud",
      description: "Seamlessly migrate your on-premise data and applications to the cloud with minimal disruption and maximum security.",
      benefit: "Reduce infrastructure costs, improve scalability, and enhance data accessibility while ensuring business continuity during migration."
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedin size={24} />, url: "https://linkedin.com/company/coralytica", name: "LinkedIn" },
    { icon: <FaYoutube size={24} />, url: "https://www.youtube.com/@Coralytica", name: "YouTube" },
    { icon: <FaFacebook size={24} />, url: "https://www.facebook.com/share/15D56vEjMi/?mibextid=wwXIfr", name: "Facebook" },
    { icon: <FaInstagram size={24} />, url: "https://www.instagram.com/coralytica/", name: "Instagram" },
    { icon: <FaTiktok size={24} />, url: "https://www.tiktok.com/@coralytica?_t=ZS-8uVJXYkw7QG&_r=1", name: "TikTok" }
  ];

  const coreValues = [
    {
      icon: <FaRocket className="text-4xl text-accent" />,
      title: "Innovation",
      description: "We continuously explore cutting-edge tools and methodologies to deliver future-ready analytics solutions that keep our clients ahead of the competition."
    },
    {
      icon: <FaHandshake className="text-4xl text-accent" />,
      title: "Integrity",
      description: "We believe in honesty, transparency, and trust, ensuring that our partnerships and solutions are built on a strong ethical foundation."
    },
    {
      icon: <FaUsers className="text-4xl text-accent" />,
      title: "Collaboration",
      description: "Every business is unique. We work side by side with our clients, crafting tailored solutions that align with their specific challenges and goals."
    },
    {
      icon: <FaLightbulbOn className="text-4xl text-accent" />,
      title: "Empowerment",
      description: "Data should be a powerful asset, not a burden. We equip our clients with the knowledge, tools, and confidence to make smarter, data-driven decisions."
    }
  ];

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
            <div className="flex items-center">
              <h1 
                className="text-2xl font-bold cursor-pointer hover:text-accent transition-colors"
                onClick={scrollToTop}
              >
                Coralytica
              </h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 justify-end">
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden relative flex justify-end">
              <button 
                className="text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
              
              {/* Mobile Menu - Positioned to the right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
                className={`absolute top-0 right-10 bg-primary p-4 rounded-lg shadow-lg z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
                style={{ minWidth: '150px' }}
              >
                <div className="space-y-4">
                  <a 
                    href="#services" 
                    className="block hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="#about" 
                    className="block hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#contact" 
                    className="block hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <header className="bg-primary text-white relative">
        <nav className="container mx-auto px-6 py-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <h1 
                className="text-2xl font-bold cursor-pointer hover:text-accent transition-colors"
                onClick={scrollToTop}
              >
                Coralytica
              </h1>
            </div>
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8 justify-end">
              <a href="#services" className="hover:text-accent transition-colors">Services</a>
              <a href="#about" className="hover:text-accent transition-colors">About</a>
              <a href="#contact" className="hover:text-accent transition-colors">Contact</a>
            </div>
            {/* Mobile Menu Button */}
            <div className="md:hidden relative flex justify-end">
              <button 
                className="text-white focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
              
              {/* Mobile Menu - Positioned to the right */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ 
                  opacity: isMenuOpen ? 1 : 0,
                  x: isMenuOpen ? 0 : 20
                }}
                transition={{ duration: 0.3 }}
                className={`absolute top-0 right-10 bg-primary p-4 rounded-lg shadow-lg z-50 ${isMenuOpen ? 'block' : 'hidden'}`}
                style={{ minWidth: '150px' }}
              >
                <div className="space-y-4">
                  <a 
                    href="#services" 
                    className="block hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Services
                  </a>
                  <a 
                    href="#about" 
                    className="block hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    About
                  </a>
                  <a 
                    href="#contact" 
                    className="block hover:text-accent transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Contact
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </nav>
        
        <div className="container mx-auto px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.h1 className="text-5xl font-bold mb-6">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="inline-block"
              >
                Transform
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-block"
              >
                Your
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="inline-block"
              >
                Data
              </motion.span>{" "}
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="inline-block"
              >
                Into
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ 
                  duration: 0.8, 
                  delay: 1.0,
                  type: "spring",
                  stiffness: 200
                }}
                className="gradient-text inline-block"
              >
                Business Value
              </motion.span>
            </motion.h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Expert data analytics and data engineering consultancy helping businesses harness the power of their data.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#contact" className="bg-accent hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full transition-colors">
                Schedule a Free Consultation
              </a>
              <a href="#services" className="bg-transparent hover:bg-white/10 text-white border-2 border-white font-bold py-3 px-8 rounded-full transition-colors">
                Get to Know Our Services
              </a>
            </div>
          </motion.div>
        </div>
      </header>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-16">Our Services</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow flex flex-col"
              >
                <div className="text-center mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4 text-center">{service.title}</h3>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-700 mb-2">What We Do:</h4>
                  <p className="text-gray-600">{service.description}</p>
                </div>
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-700 mb-2">Benefit:</h4>
                  <p className="text-gray-600">{service.benefit}</p>
                </div>
                <div className="mt-auto">
                  <button 
                    onClick={() => navigate(`/services/${service.id}`)}
                    className="w-full bg-accent hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center justify-center gap-2"
                  >
                    More information <FaArrowRight size={14} />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Meet the Founders</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Founder Image */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img 
                      src="/images/aldo-jaime-juarez.jpg" 
                      alt="Aldo Jaime Juárez - Senior Data Engineer & Co-Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Founder Info */}
                <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold">Aldo Jaime Juárez – Senior Data Engineer & Co-Founder</h3>
                    <a 
                      href="https://www.linkedin.com/in/aldo-jaime-ju%C3%A1rez-269997114/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0077B5] hover:text-[#005885] transition-colors"
                      aria-label="Connect with Aldo on LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Aldo is a senior data engineer with strong experience designing and optimizing data pipelines, cloud architectures, and analytics solutions. He has worked with leading companies such as MSC Industrial Supply Co., INETUM, FEMSA, and NTT Data, developing scalable data infrastructure with Google Cloud, AWS, and Azure. His expertise includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><span className="font-semibold">Big Data & Cloud Technologies</span> – GCP (BigQuery, Dataflow, Airflow, Cloud Functions), AWS (Glue, RDS), and Azure</li>
                    <li><span className="font-semibold">ETL & Data Pipelines</span> – Batch & streaming data processing with PySpark, Hadoop, Apache Beam</li>
                    <li><span className="font-semibold">Advanced Data Modeling & SQL</span> – Performance optimization, stored procedures, and database migration</li>
                    <li><span className="font-semibold">Orchestration & Automation</span> – Airflow, Cloud Composer, CI/CD with Cloud Build</li>
                  </ul>
                  <p className="text-gray-700">
                    Passionate about data-driven decision-making, Aldo helps businesses streamline their data workflows, improve efficiency, and turn raw data into strategic insights.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Founder Image */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img 
                      src="/images/ana-luisa-zepeda.jpg" 
                      alt="Ana Luisa Zepeda de Alba - Data Analyst & Co-Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Founder Info */}
                <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold">Ana Luisa Zepeda de Alba – Data Analyst & Co-Founder</h3>
                    <a 
                      href="https://www.linkedin.com/in/ana-luisa-zepeda-de-alba-42a93026b/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0077B5] hover:text-[#005885] transition-colors"
                      aria-label="Connect with Ana on LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Ana is a data analyst with expertise in data pipeline development, ETL automation, and business intelligence. With experience at Nielsen, Notaria 16, and Cyclopata, she has built and optimized data architectures across industries. Her core skills include:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><span className="font-semibold">ETL & Data Pipelines</span> – Designing batch data pipelines with Azure Data Factory, SQL Server, and Databricks (Apache Spark)</li>
                    <li><span className="font-semibold">Cloud & Data Storage</span> – Experienced in GCP and Azure, including Azure Data Lake & Blob Storage for scalable data management</li>
                    <li><span className="font-semibold">Data Analysis & Visualization</span> – Creating interactive dashboards with Power BI & Tableau to translate data into clear business insights</li>
                    <li><span className="font-semibold">Automation & CI/CD</span> – Implementing Power Automate and GitHub Actions to streamline data processes</li>
                  </ul>
                  <p className="text-gray-700">
                    With a strong analytical mindset, Ana specializes in making complex data accessible, ensuring that businesses not only collect data but leverage it to drive better decision-making.
                  </p>
                </div>
              </div>
            </div>

            {/* Core Values Section */}
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <h2 className="text-3xl font-bold mb-8 text-center">Core Values at Coralytica</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {coreValues.map((value, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex flex-col items-center text-center p-6 rounded-lg bg-gray-50"
                  >
                    <div className="mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-gray-700">{value.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">Why Choose Coralytica?</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">✅</span>
                  <span className="text-gray-700"><span className="font-semibold">7+ Years of Combined Experience</span> in data engineering, analytics, and business intelligence</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">✅</span>
                  <span className="text-gray-700"><span className="font-semibold">Tailored Data Solutions for SMEs</span>, helping businesses optimize operations with data-driven strategies</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">✅</span>
                  <span className="text-gray-700"><span className="font-semibold">End-to-End Expertise</span>, from data integration and automation to dashboarding and insights</span>
                </li>
              </ul>
              <p className="text-gray-700">
                Whether you need to centralize your data, automate reporting, or enhance decision-making with interactive dashboards, Coralytica is your trusted partner in transforming raw data into business value.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-8">Get In Touch</h2>
            <p className="text-lg text-gray-700 text-center mb-8">
              Ready to start your data journey? Contact us for a free consultation.
            </p>
            
            <div className="grid md:grid-cols-1 gap-12">
              {/* Contact Information */}
              <div className="bg-primary text-white p-8 rounded-lg shadow-lg mb-8">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <FaPhone className="mr-4 text-accent" />
                    <a href="tel:+61491053327" className="hover:text-accent transition-colors">
                      +61 0491 053 327
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaPhone className="mr-4 text-accent" />
                    <a href="tel:+61491053200" className="hover:text-accent transition-colors">
                      +61 0491 053 200
                    </a>
                  </div>
                  <div className="flex items-center">
                    <FaEnvelope className="mr-4 text-accent" />
                    <a href="mailto:info@coralytica.com" className="hover:text-accent transition-colors">
                      info@coralytica.com
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Follow Us</h3>
                <div className="flex flex-wrap gap-4">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-100 hover:bg-accent hover:text-white text-gray-700 p-3 rounded-full transition-all duration-300"
                      aria-label={`Visit Coralytica on ${social.name}`}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-8">
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

export default App;