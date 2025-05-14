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
  FaLightbulb as FaLightbulbOn,
  FaTools,
  FaGraduationCap
} from 'react-icons/fa';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import ServiceDetail from './components/ServiceDetail';
import AnimatedTextCarousel from './components/AnimatedTextCarousel';

console.log("Nuevo cambio")

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
    },
    {
      id: "data-enablement",
      icon: <FaTools className="text-4xl mb-4 text-accent" />,
      title: "Data Enablement and Platform Support",
      description: "Comprehensive support and enablement services to ensure your data platforms run smoothly and efficiently.",
      benefit: "Maximize the value of your data investments with expert support, training, and optimization services."
    },
    {
      id: "data-training",
      icon: <FaGraduationCap className="text-4xl mb-4 text-accent" />,
      title: "Training and Capacitation in Data Analysis and Engineering",
      description: "Empower your team with practical knowledge and skills in data analysis and engineering through customized training programs.",
      benefit: "Build internal expertise and data-driven culture while reducing dependency on external consultants."
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
      <header className="bg-primary text-white relative overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 w-full h-full">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover opacity-20"
            style={{ filter: 'brightness(0.8)' }}
          >
            <source src="/videos/dashboard_video.mp4" type="video/mp4" />
            Tu navegador no soporta el elemento de video.
          </video>
        </div>
        
        {/* Content Overlay */}
        <div className="relative z-10">
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
              Coralytica is a data analytics and data engineering consultancy based in NSW, Australia. We help businesses harness their data through cloud and on-premise solutions, BI dashboards, ETL pipelines, and data strategy for SMBs.
              </p>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
              We provide on-site consulting in NSW and remote services across Australia, making expert data solutions accessible nationwide.
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
        </div>
      </header>

      {/* Animated Text Carousel Section */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <AnimatedTextCarousel />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-4 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl"
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
                style={{ aspectRatio: '16/9' }}
              >
                <source src="/videos/dashboard_video.mp4" type="video/mp4" />
                Tu navegador no soporta el elemento de video.
              </video>
            </motion.div>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-sm text-gray-600 text-center mt-4 italic"
            >
              Demo created using Microsoft's Contoso sample dataset for educational and demonstration purposes only. Data is fictional.
            </motion.p>
          </div>
        </div>
      </section>

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

      {/* About  Section */}
      <section id="about" className="bg-gray-100 py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold mb-8 text-center">Meet the Team</h2>
            
            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Founder Image */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img 
                      src="/images/aldo-jaime-juarez.jpg" 
                      alt="Aldo Jaime Juárez - Senior Data Engineer & Founder" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Founder Info */}
                <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold">Aldo Jaime Juárez – Senior Data Engineer & Founder</h3>
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
                      src="/images/Eduardo Maya.jpg" 
                      alt="Eduardo Maya - Senior Data Visualization Specialist" 
                      className="w-full h-full object-cover scale-110"
                    />
                  </div>
                </div>
                
                {/* Founder Info */}
                <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold">Eduardo Maya – Senior Data Visualization Specialist</h3>
                    <a 
                      href="https://www.linkedin.com/in/eduardo-maya-pbi/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0077B5] hover:text-[#005885] transition-colors"
                      aria-label="Connect with Eduardo on LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Eduardo is a senior data visualization specialist with extensive experience designing and delivering automated, insightful, and business-aligned dashboards. With a background in economics and over 5 years of experience in business intelligence, he has supported companies such as Danone, Accenture, StoreCheck, and EZCorp in transforming raw data into meaningful visual narratives that support strategic decision-making. His expertise includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><span className="font-semibold">Power BI Development & Automation</span> – Advanced DAX, Power Query, Direct Query, Import and Dual models, row-level security, paginated reports, and scheduled refreshes</li>
                    <li><span className="font-semibold">SQL & Data Modeling</span> – Design of semantic models, data cubes, and star/snowflake schemas for scalable and high-performance reporting</li>
                    <li><span className="font-semibold">Business Insight Delivery</span> – Creation of scorecards, intranet-ready menus, usage monitoring dashboards, and performance reports tailored for finance, retail, and logistics</li>
                    <li><span className="font-semibold">Datamarts & Integration</span> – Development and management of data marts and ODC connectors for Excel and enterprise reporting tools</li>
                  </ul>
                  <p className="text-gray-700">
                    Eduardo combines analytical rigor with design intuition to deliver intuitive, interactive dashboards that empower teams and drive data-informed decisions.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Founder Image */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img 
                      src="/images/Leonardo Velazquez.jpg" 
                      alt="Leonardo Velázquez - Data Engineer (Cloud & Big Data Specialist)" 
                      className="w-full h-full object-cover scale-150 object-top transform -translate-y-8"
                    />
                  </div>
                </div>
                {/* Founder Info */}
                <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold">Leonardo Velázquez – Senior Data Engineer (Cloud & Big Data Specialist)</h3>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Leonardo is a experienced data engineer with strong hands-on experience across both cloud and on-premise environments. With a background in physics and a master's degree in computer engineering, he has contributed to data-driven projects in banking, retail, and enterprise platforms, implementing scalable ETL pipelines and orchestrating complex data workflows. His expertise includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><span className="font-semibold">Cloud Data Engineering</span> – Development of ingestion and transformation pipelines using Google Cloud (Cloud Functions, Composer/Airflow, Dataform) and AWS (EMR, S3, Glue, Lambda, Athena)</li>
                    <li><span className="font-semibold">Big Data & Processing</span> – PySpark pipelines, HDFS, Hive, and Dockerized data services for batch and streaming workloads</li>
                    <li><span className="font-semibold">ETL & Orchestration</span> – Creation of bronze, silver, and gold data layers, business logic scripting, and automation of data ingestion from sources such as AS400, Salesforce, Excel, and external servers</li>
                    <li><span className="font-semibold">Data Modeling & Integration</span> – Design and implementation of semantic layers for analytics and AI use cases using PostgreSQL, OracleDB, and MongoDB</li>
                    <li><span className="font-semibold">Machine Learning R&D</span> – Experience applying deep learning, NLP, and attention mechanisms in molecular data environments using PyTorch and TensorFlow</li>
                  </ul>
                  <p className="text-gray-700">
                    Leonardo brings a blend of academic rigor and real-world experience, helping Coralytica design reliable, cloud-native data infrastructures that support advanced analytics and business growth.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Founder Image */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img 
                      src="/images/jiamin.jpeg" 
                      alt="Jiamin Sui - Senior Data Analyst & Machine Learning Specialist" 
                      className="w-full h-full object-contain object-center"
                    />
                  </div>
                </div>
                {/* Founder Info */}
                <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold">Jiamin Sui – Senior Data Analyst & Machine Learning Specialist</h3>
                    <a 
                      href="https://www.linkedin.com/in/jiaminsui/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0077B5] hover:text-[#005885] transition-colors"
                      aria-label="Connect with Jiamin on LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Jiamin is a senior data analyst and certified SAS Advanced Programmer with over 7 years of experience across finance, retail, FMCG, real estate, and automotive sectors. Holding a B.S. in Mathematics and currently pursuing a Master's in Computer Science (Machine Learning and Big Data) at the University of Wollongong, he blends analytical depth with practical experience in predictive modeling, business intelligence, and data-driven strategy. Her expertise includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><span className="font-semibold">Machine Learning & Predictive Analytics</span> – Development and deployment of classification, regression, and clustering models for churn prediction, customer scoring, and recommendation systems</li>
                    <li><span className="font-semibold">Data Modeling & Feature Engineering</span> – End-to-end model lifecycle management with RFM analysis, A/B testing, feature selection, and data leakage control</li>
                    <li><span className="font-semibold">Big Data & Programming</span> – Skilled in Python, Spark, Hadoop, and SQL for large-scale data processing and automation</li>
                    <li><span className="font-semibold">Business Intelligence & KPI Reporting</span> – Creation of actionable dashboards and performance reports for top-tier clients including McDonald's, General Motors, Dyson, and L'Oréal</li>
                    <li><span className="font-semibold">CRM & Customer Insights</span> – Advanced segmentation, behavioral analysis, and loyalty program optimization using tools like Power BI and PostgreSQL</li>
                  </ul>
                  <p className="text-gray-700">
                    Jiamin's strength lies in translating complex data into strategic business solutions, helping organizations unlock value through data science and insightful reporting.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Founder Image */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img 
                      src="/images/Adrian Nhu.jpg" 
                      alt="Adrian Nhu - Software Developer (Backend & AI Applications)" 
                      className="w-full h-full object-cover object-center scale-100"
                    />
                  </div>
                </div>
                {/* Founder Info */}
                <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold">Adrian Nhu – Software Developer (Backend & AI Applications)</h3>
                    <a 
                      href="https://www.linkedin.com/in/gia-bach-nhu-37a79b24b/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0077B5] hover:text-[#005885] transition-colors"
                      aria-label="Connect with Adrian on LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Adrian is a software developer with a strong background in backend systems, cloud integration, and AI-powered applications. With a Bachelor of Computer Science (Software Engineering, AI & Big Data) from the University of Wollongong and hands-on experience building full-stack and AI-driven platforms, Adrian brings a deep understanding of modern software development and scalable infrastructure. His expertise includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><span className="font-semibold">Backend & API Development</span> – Java Spring Boot, Node.js/Express.js, RESTful APIs, GraphQL, and optimized database interactions (PostgreSQL, Firebase, MySQL)</li>
                    <li><span className="font-semibold">Frontend Technologies</span> – React.js, Next.js, TypeScript, and Tailwind CSS for responsive and interactive user experiences</li>
                    <li><span className="font-semibold">AI & Machine Learning</span> – Applied solutions using OpenCV, TensorFlow, PyTorch, and Hugging Face, including facial recognition and GenAI-based projects</li>
                    <li><span className="font-semibold">Cloud & DevOps</span> – Deployment pipelines using CI/CD, Docker, and AWS (EC2, S3, RDS), with real-world experience in Agile and Scrum environments</li>
                    <li><span className="font-semibold">Project Highlights</span> – Facial recognition-based attendance tracking (Lectoro) and quiz delivery platforms with real-time user interaction and privacy compliance</li>
                  </ul>
                  <p className="text-gray-700">
                    Adrian combines technical excellence with innovation, supporting Coralytica's mission to deliver intelligent, scalable solutions that bridge data engineering with practical AI applications.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-lg mb-8">
              <div className="flex flex-col md:flex-row gap-8">
                {/* Founder Image */}
                <div className="md:w-1/3 flex justify-center">
                  <div className="w-56 h-56 rounded-full overflow-hidden border-4 border-accent shadow-lg">
                    <img 
                      src="/images/Poh Yamone.jpg" 
                      alt="Poh Yamone – Junior Software Developer & Data Analyst" 
                      className="w-full h-full object-cover object-center scale-125"
                    />
                  </div>
                </div>
                {/* Founder Info */}
                <div className="md:w-2/3">
                  <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
                    <h3 className="text-2xl font-bold">Poh Yamone – Junior Software Developer & Data Analyst</h3>
                    <a 
                      href="https://www.linkedin.com/in/poh-yamone-062945219/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#0077B5] hover:text-[#005885] transition-colors"
                      aria-label="Connect with Poh on LinkedIn"
                    >
                      <FaLinkedin size={28} />
                    </a>
                  </div>
                  <p className="text-gray-700 mb-4">
                    Poh is a junior software developer and data analyst currently completing a Bachelor of Computer Science at the University of Wollongong, with a focus on software engineering and data analysis. She has gained hands-on experience through internships and research projects, applying her skills in programming, data analysis, and immersive technology. Her expertise includes:
                  </p>
                  <ul className="list-disc pl-6 mb-4 text-gray-700 space-y-2">
                    <li><span className="font-semibold">Programming & Web Development</span> – Proficient in Python, C++, Java, PHP, Swift, and front-end technologies such as React, HTML, and CSS</li>
                    <li><span className="font-semibold">Data & Analytical Tools</span> – Skilled in SQL, version control with Git, and software debugging tools, with practical experience in system design and optimization</li>
                    <li><span className="font-semibold">XR & Visualization</span> – Contributed to a research project focused on extended reality (XR), developing immersive 3D environments using spatial mapping and 360° imagery</li>
                    <li><span className="font-semibold">Team Leadership & Communication</span> – Demonstrated leadership as a shift leader at Guzman y Gomez and as a mentor in e-learning platforms, with strong multilingual communication in English, Burmese, and intermediate Japanese</li>
                    <li><span className="font-semibold">Academic Excellence</span> – Recognized with a Certificate of Distinction for her performance during a medical technology internship</li>
                  </ul>
                  <p className="text-gray-700">
                    Poh brings technical curiosity, cross-cultural experience, and a collaborative spirit to Coralytica, supporting our mission to deliver forward-thinking, data-driven solutions.
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
                    <a href="mailto:info@coralytica.com.au" className="hover:text-accent transition-colors">
                      info@coralytica.com.au
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