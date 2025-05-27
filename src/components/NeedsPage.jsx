import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { FaBars, FaTimes, FaChevronRight, FaChevronLeft, FaCheck, FaPaperPlane } from 'react-icons/fa';

function NeedsPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentTab, setCurrentTab] = useState(0);
  const [showSubmitButton, setShowSubmitButton] = useState(false);
  const navigate = useNavigate();
  const [selectedOptions, setSelectedOptions] = useState({
    'automate-reports': false,
    'real-time-dashboards': false,
    'match-numbers': false,
    'reconcile-info': false,
    'manual-data-cleaning': false,
    'automate-data-process': false,
    'data-spread': false,
    'centralize-data': false,
    'make-sense-data': false,
    'business-insights': false,
    'cloud-migration': false,
    'scalable-structure': false,
    'platform-support': false,
    'system-optimization': false,
    'team-confidence': false,
    'team-training': false
  });
  const [otherNeeds, setOtherNeeds] = useState('');

  const categories = [
    {
      title: "Reporting & Business Visibility",
      questions: [
        {
          id: 'automate-reports',
          text: "Do you need to automate your daily, weekly, or monthly reports — like sales, inventory, or operations?"
        },
        {
          id: 'real-time-dashboards',
          text: "Would you like real-time dashboards to better track your business performance?"
        }
      ]
    },
    {
      title: "Data Consistency & Reconciliation",
      questions: [
        {
          id: 'match-numbers',
          text: "Are you struggling to match numbers across different systems — like sales, inventory, finance, or operations?"
        },
        {
          id: 'reconcile-info',
          text: "Do you have trouble reconciling information from Excel files, your POS, or online platforms?"
        }
      ]
    },
    {
      title: "Automation & Data Pipelines",
      questions: [
        {
          id: 'manual-data-cleaning',
          text: "Are you spending too much time cleaning and preparing data manually?"
        },
        {
          id: 'automate-data-process',
          text: "Would you like to automate how your data is collected, cleaned, and transformed?"
        }
      ]
    },
    {
      title: "Data Integration & Centralization",
      questions: [
        {
          id: 'data-spread',
          text: "Is your business data spread across spreadsheets, software, and systems that don't talk to each other?"
        },
        {
          id: 'centralize-data',
          text: "Would it help to bring everything together into one place for easier access and decision-making?"
        }
      ]
    },
    {
      title: "Analytics & Business Insights",
      questions: [
        {
          id: 'make-sense-data',
          text: "Do you need help making sense of your sales, customers, inventory, or operations data?"
        },
        {
          id: 'business-insights',
          text: "Would you like clear insights that help you make faster, smarter business decisions?"
        }
      ]
    },
    {
      title: "Cloud Migration & Scalability",
      questions: [
        {
          id: 'cloud-migration',
          text: "Are you planning to move your data from on-premise systems to the cloud?"
        },
        {
          id: 'scalable-structure',
          text: "Do you need help creating a scalable structure for long-term growth and reporting?"
        }
      ]
    },
    {
      title: "Data Platform Support & Optimization",
      questions: [
        {
          id: 'platform-support',
          text: "Do you already use a BI or data platform but need help managing or optimizing it?"
        },
        {
          id: 'system-optimization',
          text: "Would you benefit from ongoing support to keep your data systems running smoothly?"
        }
      ]
    },
    {
      title: "Training for Your Team",
      questions: [
        {
          id: 'team-confidence',
          text: "Would you like your team to be more confident working with data?"
        },
        {
          id: 'team-training',
          text: "Are you interested in training or workshops on data analysis or engineering?"
        }
      ]
    }
  ];

  // Agrupar categorías en grupos de 3
  const groupedCategories = categories.reduce((acc, category, index) => {
    const groupIndex = Math.floor(index / 3);
    if (!acc[groupIndex]) acc[groupIndex] = [];
    acc[groupIndex].push(category);
    return acc;
  }, []);

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

  // Contar selecciones totales incluyendo Others
  const totalSelections = Object.values(selectedOptions).filter(Boolean).length + (otherNeeds.trim().length > 0 ? 1 : 0);

  useEffect(() => {
    // Mostrar el botón de envío si hay al menos una selección o texto en Others
    setShowSubmitButton(totalSelections > 0);
  }, [totalSelections]);

  const toggleOption = (optionId) => {
    setSelectedOptions(prev => ({
      ...prev,
      [optionId]: !prev[optionId]
    }));
  };

  const nextTab = () => {
    setCurrentTab((prev) => (prev + 1) % groupedCategories.length);
  };

  const prevTab = () => {
    setCurrentTab((prev) => (prev - 1 + groupedCategories.length) % groupedCategories.length);
  };

  const handleSubmit = () => {
    // Obtener las categorías y preguntas seleccionadas
    const selectedItems = Object.entries(selectedOptions)
      .filter(([_, isSelected]) => isSelected)
      .map(([id]) => {
        // Encontrar la categoría y pregunta correspondiente
        const category = categories.find(cat => 
          cat.questions.some(q => q.id === id)
        );
        const question = category?.questions.find(q => q.id === id);
        return {
          category: category?.title,
          question: question?.text
        };
      });

    // Crear el cuerpo del correo
    const emailBody = `
Dear Coralytica Team,

I would like to request a Free Consultation regarding the following data needs:

${selectedItems.map(item => `
Category: ${item.category}
Question: ${item.question}
`).join('\n')}

${otherNeeds ? `Additional Needs:
${otherNeeds}` : ''}

I look forward to discussing how Coralytica can help address these challenges.

Best regards,
`;

    // Crear el enlace mailto
    const mailtoLink = `mailto:info@coralytica.com.au?subject=Free Consultation Request - Data Needs Assessment&body=${encodeURIComponent(emailBody)}`;

    // Abrir el cliente de correo
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation Bar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-primary text-white shadow-md">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center">
              <Link to="/" className="text-2xl font-bold text-white hover:text-accent transition-colors">
                Coralytica
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              <Link to="/#services" className="text-white hover:text-accent transition-colors">Services</Link>
              <Link to="/#about" className="text-white hover:text-accent transition-colors">About</Link>
              <Link to="/#contact" className="text-white hover:text-accent transition-colors">Contact</Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white hover:text-accent focus:outline-none"
              >
                {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-primary border-t border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/#services" 
                className="block px-3 py-2 text-white hover:text-accent hover:bg-white/5 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/#about" 
                className="block px-3 py-2 text-white hover:text-accent hover:bg-white/5 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/#contact" 
                className="block px-3 py-2 text-white hover:text-accent hover:bg-white/5 rounded-md"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </nav>

      {/* Main Content */}
      <div className="pt-20 pb-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Main Title */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl font-bold text-primary mb-4">Tell Us Your Data Needs</h1>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Select the areas that best describe your current data challenges and requirements
            </p>
            <div className="mt-4 text-sm text-gray-500">
              Selected items: {totalSelections}
            </div>
          </motion.div>

          {/* Progress Indicator */}
          <div className="flex justify-center mb-8">
            <div className="flex space-x-2">
              {groupedCategories.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTab(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    currentTab === index ? 'bg-primary w-6' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between mb-8">
            <button
              onClick={prevTab}
              className="flex items-center text-primary hover:text-accent transition-colors"
            >
              <FaChevronLeft className="mr-2" />
              Previous
            </button>
            <button
              onClick={nextTab}
              className="flex items-center text-primary hover:text-accent transition-colors"
            >
              Next
              <FaChevronRight className="ml-2" />
            </button>
          </div>

          {/* Cards Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTab}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {groupedCategories[currentTab].map((category, index) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300"
                >
                  {/* Card Header */}
                  <div className="bg-primary text-white px-4 py-3">
                    <h2 className="text-lg font-bold">{category.title}</h2>
                  </div>

                  {/* Card Content */}
                  <div className="p-4 space-y-3">
                    {category.questions.map((question) => (
                      <button
                        key={question.id}
                        onClick={() => toggleOption(question.id)}
                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 text-sm flex items-center ${
                          selectedOptions[question.id]
                            ? 'bg-accent text-white'
                            : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                        }`}
                      >
                        <span className="flex-grow">{question.text}</span>
                        {selectedOptions[question.id] && (
                          <FaCheck className="ml-2 flex-shrink-0" />
                        )}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ))}

              {/* Others Section (only in last tab) */}
              {currentTab === groupedCategories.length - 1 && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="bg-white rounded-xl shadow-lg overflow-hidden h-full hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="bg-primary text-white px-4 py-3">
                    <h2 className="text-lg font-bold">Others?</h2>
                  </div>
                  <div className="p-4">
                    <textarea
                      value={otherNeeds}
                      onChange={(e) => setOtherNeeds(e.target.value)}
                      placeholder="Describe your problems or needs"
                      className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-accent focus:border-transparent resize-none text-sm"
                      rows={4}
                    />
                  </div>
                </motion.div>
              )}
            </motion.div>
          </AnimatePresence>

          {/* Submit Button */}
          <AnimatePresence>
            {showSubmitButton && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                className="fixed bottom-8 right-8"
              >
                <button
                  onClick={handleSubmit}
                  className="bg-accent text-white px-6 py-3 rounded-full shadow-lg hover:bg-accent/90 transition-colors flex items-center space-x-2"
                >
                  <span>Submit Your Needs</span>
                  <FaPaperPlane />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

export default NeedsPage; 