'use client'

import { useState, useEffect } from 'react'
import { motion, useAnimation, useScroll, useTransform, useSpring } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { BarChart, Users, Zap, MessageSquare, ArrowRight, Sun, Moon } from "lucide-react"
import Link from "next/link"
import { useTheme } from "next-themes"
import { Montserrat } from 'next/font/google';
import { useRef } from 'react'

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
}

const staggerChildren = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const glowKeyframes = `
  @keyframes subtleGlow {
    0%, 100% {
      text-shadow: 0 0 10px rgba(167,139,250,0.3),
                   0 0 20px rgba(147,51,234,0.2);
    }
    50% {
      text-shadow: 0 0 15px rgba(167,139,250,0.4),
                   0 0 25px rgba(147,51,234,0.3);
    }
  }

  @keyframes shimmer {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;

const fadeUpVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const scaleUpVariant = {
  hidden: { opacity: 0, scale: 0.95 },
  visible: { 
    opacity: 1, 
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const montserrat = Montserrat({ subsets: ['latin'] });

export function LandingPageComponent() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const cursorAnimation = useAnimation()
  const { theme, setTheme } = useTheme()
  const ref = useRef(null)

  useEffect(() => {
    const mouseMove = (e: MouseEvent) => {
      // Direct position mapping without calculations
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener('mousemove', mouseMove)
    return () => window.removeEventListener('mousemove', mouseMove)
  }, [])

  useEffect(() => {
    cursorAnimation.start({
      x: mousePosition.x,
      y: mousePosition.y,
      transition: {
        duration: 0, // Remove animation delay
        ease: "linear"
      }
    })
  }, [mousePosition, cursorAnimation])

  useEffect(() => {
    const smoothScroll = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute('href');
      
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', smoothScroll);
    });

    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', smoothScroll);
      });
    };
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 items-center">
      <motion.div
        className="custom-cursor"
        animate={cursorAnimation}
        style={{
          position: 'fixed',
          top: -16, // Offset by half the cursor size
          left: -16, // Offset by half the cursor size
          width: 32,
          height: 32,
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 255, 255, 0.3)',
          zIndex: 9999,
          pointerEvents: 'none',
          mixBlendMode: 'difference',
        }}
      />
      <style jsx global>{`
        body {
          cursor: none;
        }
        a, button {
          cursor: none;
        }
        ${glowKeyframes}
        .animate-subtle-glow {
          animation: subtleGlow 3s ease-in-out infinite;
        }
        .gradient-text {
          background: linear-gradient(
            120deg,
            #fff 0%,
            #e2e8f0 25%,
            #fff 35%,
            #e2e8f0 45%,
            #fff 100%
          );
          background-size: 200% auto;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 8s linear infinite;
          text-shadow: 
            0 0 20px rgba(255,255,255,0.1),
            0 0 40px rgba(255,255,255,0.1),
            0 0 80px rgba(255,255,255,0.1);
        }
        .gradient-blur {
          backdrop-filter: blur(20px);
          background: linear-gradient(
            180deg,
            rgba(124, 58, 237, 0.1) 0%,
            rgba(0, 0, 0, 0) 100%
          );
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        .floating {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
      <header className="w-full px-8 lg:px-12 h-20 flex items-center justify-center backdrop-blur-md bg-gray-800/30 sticky top-0 z-50">
        <div className="container flex items-center justify-between max-w-7xl mx-auto">
          {/* Update the logo section with better spacing */}
          <Link 
            className="flex items-center justify-center gap-3 hover:opacity-80 transition-opacity" 
            href="#"
          >
            <Zap className="h-7 w-7" />
            <span className="ml-1 text-2xl font-bold">Bichitras</span>
          </Link>

          {/* Update the navigation with better spacing and hover effects */}
          <nav className="hidden md:flex items-center gap-12">
            <Link 
              className="text-base font-medium hover:text-purple-400 transition-colors relative group" 
              href="#services"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              className="text-base font-medium hover:text-purple-400 transition-colors relative group" 
              href="#about"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
            <Link 
              className="text-base font-medium hover:text-purple-400 transition-colors relative group" 
              href="#contact"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </Link>
          </nav>

          {/* Update the theme toggle button */}
          <Button
            variant="ghost"
            size="icon"
            className="ml-8 h-10 w-10 rounded-full hover:bg-purple-500/10"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
          >
            {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
      </header>
      <main className="flex-1 w-full">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-br from-purple-900 to-gray-900 relative overflow-hidden">
          <motion.div 
            className="absolute inset-0 opacity-30"
            style={{
              background: 'radial-gradient(circle at 50% 50%, rgba(124, 58, 237, 0.1) 0%, transparent 50%)',
            }}
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.3, 0.2, 0.3],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="container px-4 md:px-6 max-w-7xl mx-auto relative z-10"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeUpVariant}
          >
            <div className="flex flex-col items-center space-y-4 text-center">
              <motion.h1 
                className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none flex flex-col items-center gap-4"
                variants={fadeIn}
              >
                <span className="gradient-text font-extrabold">Bichitras</span>
                <span className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl text-purple-400 animate-subtle-glow font-light tracking-wide ${montserrat.className}`}>
                  Your Digital Guru
                </span>
              </motion.h1>
              <motion.p 
                className="mx-auto max-w-[700px] text-gray-400 md:text-xl"
                variants={fadeIn}
              >
                Elevate your online presence with our innovative digital marketing strategies.
              </motion.p>
              <motion.div className="space-x-4" variants={fadeIn}>
                <Button className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                  Get Started
                </Button>
                <Button variant="outline" className="text-purple-400 border-purple-400 hover:bg-purple-400/10 transition-colors">
                  Learn More
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section id="services" className="w-full py-12 md:py-24 lg:py-32 bg-gray-800 relative">
          <motion.div 
            className="container px-4 md:px-6 max-w-7xl mx-auto"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={scaleUpVariant}
          >
            <motion.h2 
              className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12 text-purple-400"
              variants={fadeIn}
            >
              Our Services
            </motion.h2>
            <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
              <motion.div 
                variants={fadeIn} 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }} 
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-400">
                      <BarChart className="h-8 w-8 mr-2" />
                      SEO Optimization
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Boost your search rankings and drive organic traffic with our expert SEO strategies.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div 
                variants={fadeIn} 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }} 
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-400">
                      <Users className="h-8 w-8 mr-2" />
                      Social Media Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Engage your audience and build brand loyalty across all social platforms.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              <motion.div 
                variants={fadeIn} 
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }} 
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <Card className="bg-gray-800/50 border-gray-700 hover:bg-gray-700/50 transition-all duration-300 group-hover:shadow-lg group-hover:shadow-purple-500/20">
                  <CardHeader>
                    <CardTitle className="flex items-center text-purple-400">
                      <MessageSquare className="h-8 w-8 mr-2" />
                      Content Marketing
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-400">
                      Create compelling content that attracts, engages, and converts your target audience.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </motion.div>
        </section>
        <section id="about" className="w-full py-12 md:py-24 lg:py-32 bg-gray-900">
          <motion.div 
            className="container px-4 md:px-6 max-w-7xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400"
                variants={fadeIn}
              >
                About Bichitras
              </motion.h2>
              <motion.p 
                className="max-w-[900px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                variants={fadeIn}
              >
                At Bichitras, we're not just digital marketers – we're your digital gurus. Our team of passionate experts 
                is dedicated to guiding your business through the complex digital landscape. With cutting-edge strategies 
                and a data-driven approach, we transform your online presence and drive real, measurable results.
              </motion.p>
            </div>
          </motion.div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-br from-gray-900 to-purple-900">
          <motion.div 
            className="container px-4 md:px-6 max-w-7xl mx-auto"
            initial="initial"
            animate="animate"
            variants={staggerChildren}
          >
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <motion.h2 
                className="text-3xl font-bold tracking-tighter sm:text-5xl text-purple-400"
                variants={fadeIn}
              >
                Get in Touch
              </motion.h2>
              <motion.p 
                className="max-w-[600px] text-gray-400 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                variants={fadeIn}
              >
                Ready to elevate your digital presence? Let's start your journey to online success together.
              </motion.p>
              <motion.div className="w-full max-w-sm space-y-2" variants={fadeIn}>
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Your name" className="bg-gray-800/50 text-gray-100 placeholder-gray-400 border-gray-700" />
                  <Input type="email" placeholder="Your email" className="bg-gray-800/50 text-gray-100 placeholder-gray-400 border-gray-700" />
                  <Button type="submit" className="bg-purple-600 text-white hover:bg-purple-700 transition-colors">
                    Send Message
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </form>
              </motion.div>
            </div>
          </motion.div>
        </section>
      </main>
      <footer className="w-full py-6 px-4 md:px-6 border-t border-gray-700 bg-gray-800/30 backdrop-blur-md">
        <div className="container flex flex-col sm:flex-row items-center justify-between gap-4 max-w-7xl mx-auto">
          <p className="text-xs text-gray-400">© 2024 Bichitras. All rights reserved.</p>
          <nav className="flex gap-4 sm:gap-6">
            <Link className="text-xs text-gray-400 hover:underline underline-offset-4" href="#">
              Terms of Service
            </Link>
            <Link className="text-xs text-gray-400 hover:underline underline-offset-4" href="#">
              Privacy Policy
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
