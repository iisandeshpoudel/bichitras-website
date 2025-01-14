import React, { useState, useEffect } from 'react';
import { Smartphone, Palette, Database, Layout, Code, Brain, Users, Clock, Calendar, Award, Briefcase } from 'lucide-react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const Internship = () => {
  const careerFields = [
    {
      title: "Flutter Intern",
      icon: <Smartphone className="w-8 h-8 text-[var(--accent-secondary)]" />,
      description: "Dive into mobile app development with Flutter, Google's UI toolkit. Build cross-platform applications that deliver seamless user experiences on iOS and Android.",
      skills: [
        "Mobile App Development using Flutter",
        "Cross-Platform Application Design (iOS & Android)",
        "UI/UX Integration with Responsive Designs",
        "State Management Implementation (Provider, Bloc)",
        "Debugging and Performance Optimization"
      ]
    },
    {
      title: "UI/UX Intern",
      icon: <Palette className="w-8 h-8 text-[var(--accent-secondary)]" />,
      description: "Design intuitive and engaging user interfaces that create memorable digital experiences.",
      skills: [
        "Wireframe and Prototype Creation",
        "User-Centered Design Implementation",
        "Visual Design using Tools (Figma, Adobe XD, Sketch)",
        "Usability Testing and Feedback Analysis",
        "Responsive and Adaptive Design Principles"
      ]
    },
    {
      title: "Backend Intern",
      icon: <Database className="w-8 h-8 text-[var(--accent-secondary)]" />,
      description: "Develop robust, secure backend systems to ensure seamless communication between the database, server, and user interface.",
      skills: [
        "Backend Development and API Design",
        "Database Management (SQL/NoSQL)",
        "Server Optimization for Performance and Scalability",
        "API Integration (REST, GraphQL)",
        "Authentication and Security Protocols"
      ]
    },
    {
      title: "Frontend Intern",
      icon: <Layout className="w-8 h-8 text-[var(--accent-secondary)]" />,
      description: "Bring user interfaces to life by developing visually appealing and interactive web applications.",
      skills: [
        "Modern JavaScript Frameworks (React, Vue)",
        "Responsive Web Design",
        "State Management and API Integration",
        "Performance Optimization",
        "Cross-browser Compatibility"
      ]
    },
    {
      title: "Full Stack Intern",
      icon: <Code className="w-8 h-8 text-[var(--accent-secondary)]" />,
      description: "Master both frontend and backend development to build complete web applications from start to finish.",
      skills: [
        "Full Stack JavaScript Development",
        "Database Design and Management",
        "RESTful API Development",
        "Frontend Framework Mastery",
        "DevOps and Deployment"
      ]
    },
    {
      title: "AI/ML Intern",
      icon: <Brain className="w-8 h-8 text-[var(--accent-secondary)]" />,
      description: "Dive into the world of artificial intelligence and machine learning. Develop intelligent solutions and implement cutting-edge algorithms.",
      skills: [
        "Machine Learning Model Development",
        "Data Processing and Analysis",
        "Deep Learning Implementation",
        "Model Optimization and Deployment",
        "AI Integration with Applications"
      ]
    }
  ];

  const benefits = [
    {
      icon: <Users className="w-8 h-8 text-[var(--accent-secondary)]" />,
      title: "Coaching & Support",
      description: "You will be supported by a team of expert coaches to guide you towards career success."
    },
    {
      icon: <Clock className="w-8 h-8 text-[var(--accent-secondary)]" />,
      title: "Save Time",
      description: "Tell us what remote internship you want - we match you based on your preferences."
    },
    {
      icon: <Calendar className="w-8 h-8 text-[var(--accent-secondary)]" />,
      title: "Complete Flexibility",
      description: "You choose your start date, internship length, and weekly commitment of hours."
    },
    {
      icon: <Award className="w-8 h-8 text-[var(--accent-secondary)]" />,
      title: "Guaranteed Placement",
      description: "No matter your degree, location, or experience - we'll find you the right internship."
    },
    {
      icon: <Briefcase className="w-8 h-8 text-[var(--accent-secondary)]" />,
      title: "Real Experience",
      description: "Work remotely with one of 13,000 companies looking for ambitious talent like you."
    }
  ];

  const faqs = [
    {
      question: "Can I extend the internship duration?",
      answer: "Yes, our internships are designed to be completed within 1 month to ensure a structured and focused learning experience. After a successful interview, you will be considered for further hiring."
    },
    {
      question: "What kind of tasks will I be assigned during the internship?",
      answer: "Tasks will vary depending on the track you choose but will be designed to provide hands-on learning experiences and align with industry practices."
    },
    {
      question: "Can I reapply if I fail to complete the internship?",
      answer: "Yes, you are welcome to reapply for future batches if you couldn't complete the internship. Each application will be reviewed independently."
    },
    {
      question: "When will I receive the offer letter?",
      answer: "Offer letters are processed in batches at the middle and end of the month. Check your spam folder if you have received the Task Submission Email but not the Offer Letter. If you still face issues, feel free to reach out to us via email."
    },
    {
      question: "Are there any prerequisites or prior knowledge required for the internship?",
      answer: "No prior experience is necessary. A willingness to learn and grow is all that's required."
    },
    {
      question: "Can I switch tracks after the internship begins?",
      answer: "Unfortunately, you cannot switch tracks once the internship has started. We recommend carefully choosing a track that aligns with your interests and goals."
    },
    {
      question: "Is there any mentorship or guidance provided during the internship?",
      answer: "Yes, you will receive guidance and support from our mentors throughout the internship to help you navigate tasks and challenges."
    },
    {
      question: "Will I receive a recommendation letter along with the certificate?",
      answer: "Recommendation letters are not part of the internship program. However, your Certificate of Completion will showcase your efforts and achievements."
    },
    {
      question: "Are there any group activities or collaborations during the internship?",
      answer: "While most tasks are individual, certain tracks may include collaborative activities to enhance team-building and problem-solving skills."
    },
    {
      question: "When will I get the certificate of completion?",
      answer: "Certificates are issued after the internship ends: For batches starting on the 1st of the month, certificates are sent from the 1st of the next month. For batches starting on the 15th, certificates are sent from the 16th of the next month. Note: New submissions may take up to 1 day to process."
    }
  ];

  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % careerFields.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="internship" className="pt-32 pb-20 px-4 md:px-8 bg-[var(--bg-primary)]">
      {/* Career Fields */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">Career Fields</h2>
        <p className="text-royal-celestial/80 max-w-2xl mx-auto text-center mb-12">
          Discover Your Path: Explore a range of dynamic career fields with Virtual Internships
        </p>
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-xl transform transition-all duration-500">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-royal-celestial to-royal-violet p-3 mb-6">
                {careerFields[activeIndex].icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-white">
                {careerFields[activeIndex].title}
              </h3>
              <p className="text-lg mb-8 text-[var(--text-secondary)]">
                {careerFields[activeIndex].description}
              </p>
              <div className="space-y-3">
                {careerFields[activeIndex].skills.map((skill, index) => (
                  <div
                    key={index}
                    className="bg-royal-deep/30 backdrop-blur-sm rounded-lg p-3 text-[var(--text-secondary)]"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Custom Navigation */}
          <div className="flex justify-center mt-12">
            <div className="bg-gradient-to-r from-royal-deep/30 to-royal-violet/30 backdrop-blur-sm p-4 rounded-full shadow-lg">
              <div className="flex space-x-3">
                {careerFields.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`relative ${
                      index === activeIndex 
                        ? 'w-16 h-4 bg-gradient-to-r from-royal-celestial via-royal-violet to-purple-500' 
                        : 'w-4 h-4 bg-white/20 hover:bg-white/40'
                    } rounded-full shadow-lg hover:scale-110 transition-all duration-300 group overflow-hidden`}
                    aria-label={`Go to internship ${index + 1}`}
                  >
                    {index === activeIndex && (
                      <div 
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-shimmer"
                        style={{
                          backgroundSize: '200% 100%',
                          animation: 'shimmer 5s linear infinite'
                        }}
                      />
                    )}
                    <span className={`absolute -top-10 left-1/2 transform -translate-x-1/2 bg-royal-deep px-3 py-1.5 rounded-lg text-xs text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap shadow-xl`}>
                      {careerFields[index].title}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-6xl mx-auto mb-20">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">Why Choose Us</h2>
          <p className="text-royal-celestial/80 max-w-2xl mx-auto text-center mb-12">
            Discover the advantages of starting your career journey with us
          </p>
          
          <div className="relative max-w-5xl mx-auto overflow-hidden">
            <Swiper
              modules={[Autoplay, Pagination]}
              spaceBetween={30}
              slidesPerView={3}
              initialSlide={0}
              loop={true}
              centeredSlides={true}
              pagination={{
                clickable: true,
                bulletActiveClass: 'swiper-pagination-bullet-active !bg-[var(--accent-secondary)]',
                bulletClass: 'swiper-pagination-bullet !bg-white/30 !w-3 !h-3',
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 3,
                },
              }}
              className="benefits-slider !pb-16"
            >
              {benefits.map((benefit, index) => (
                <SwiperSlide key={index} className="!w-[300px] md:!w-[350px]">
                  <div className="bg-gradient-to-br from-royal-deep/50 to-royal-violet/30 backdrop-blur-lg rounded-2xl p-6 h-full transform transition-all duration-300">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-royal-celestial to-royal-violet p-2 mx-auto mb-6">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
                      {benefit.title}
                    </h3>
                    <p className="text-royal-celestial/80">
                      {benefit.description}
                    </p>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Call to Action */}
        <div className="max-w-3xl mx-auto text-center mb-20">
          <h2 className="text-4xl font-bold mb-4">Start your journey</h2>
          <p className="text-[var(--text-secondary)] mb-8">
            Complete your application in just 15 mins and guarantee yourself an internship!<br />
            Submit your application today.
          </p>
          <div className="flex justify-center gap-4">
            <button 
              onClick={() => window.open('https://forms.gle/5ix75X1B6sWo2GHg6', '_blank')}
              className="bg-[var(--accent-primary)] text-white px-8 py-3 rounded-full hover:bg-[var(--accent-secondary)] transition-colors"
            >
              Enroll Now
            </button>
            <button className="bg-white/10 text-white px-8 py-3 rounded-full hover:bg-white/20 transition-colors">
              How it works
            </button>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-white to-royal-celestial bg-clip-text text-transparent">
            Frequently Asked <span className="text-[var(--accent-secondary)]">Questions</span>
          </h2>
          <p className="text-royal-celestial/80 max-w-2xl mx-auto text-center mb-12">
            Find answers to common questions about our virtual internship program
          </p>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-white/5 backdrop-blur-lg rounded-xl hover:bg-white/10 transition-all duration-300 border border-white/10"
              >
                <button 
                  onClick={() => toggleFaq(index)}
                  className="w-full p-6 flex items-start justify-between gap-4 text-left"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-[var(--accent-secondary)] text-lg font-bold">Q.</span>
                    <h3 className="text-lg font-bold text-white">{faq.question}</h3>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-[var(--accent-secondary)] transform transition-transform duration-300 ${openFaq === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div 
                  className={`overflow-hidden transition-all duration-300 ${
                    openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="px-6 pb-6 text-[var(--text-secondary)] leading-relaxed ml-10">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

    </section>
  );
};

export default Internship;