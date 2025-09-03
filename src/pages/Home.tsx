import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, Twitter, FileText, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import VantaGlobeBackground from "@/components/VantaGlobeBackground";


export default function Home() {
  return (
    <div className="space-y-12 relative">
      {/* Vanta.js Globe Background */}
      <VantaGlobeBackground />
      {/* Hero Section */}
      <section className="relative text-center space-y-6 py-12 z-20">
        <div className="space-y-4">
          <h1 className="font-academic text-5xl lg:text-6xl font-bold text-gray-800 hero-text">
            Hi, I'm Sarvesh!
          </h1>
          <div className="text-xl text-blue-600 font-medium min-h-[2rem] hero-text">
            <TypewriterEffect 
              phrases={[
                "AI Safety Researcher",
                "Software Developer", 
                "Building a Better Future"
              ]}
              className="font-academic text-2xl lg:text-3xl text-blue-600"
            />
          </div>
          <p className="text-xl text-academic-gray max-w-2xl mx-auto leading-relaxed hero-text">
            Exploring the intersection of technology, research, and human-centered design. 
            Building solutions that matter through code, curiosity, and collaboration.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6 hero-text">
          <Button asChild variant="outline" size="lg" className="border-warm-orange text-warm-orange hover:bg-warm-orange hover:text-white">
            <Link to="/blog">Read My Blog</Link>
          </Button>
          <Button asChild size="lg" className="bg-warm-orange hover:bg-warm-orange/90">
            <Link to="/projects">
              View My Work <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link to="/about">Learn About Me</Link>
          </Button>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-4 w-4" />
              View Resume
            </a>
          </Button>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 pt-8 hero-text">
          <a href="https://github.com/sarveshtiku" target="_blank" rel="noopener noreferrer" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Github className="h-8 w-10" />
          </a>
          <a href="https://www.linkedin.com/in/sarveshtiku/" target="_blank" rel="noopener noreferrer" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Linkedin className="h-8 w-10" />
          </a>
          <a href="https://scholar.google.com/citations?user=KB6pL-sAAAAJ&hl=en" target="_blank" rel="noopener noreferrer" className="text-academic-gray hover:text-warm-orange transition-colors">
            <GraduationCap className="h-8 w-10" />
          </a>
          <a href="/contact" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Mail className="h-8 w-10" />
          </a>
          <a href="https://x.com/sarveshtiku" target="_blank" rel="noopener noreferrer" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Twitter className="h-8 w-10" />
          </a>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="grid md:grid-cols-3 gap-6 relative z-20">
        <Card className="academic-shadow hover:warm-shadow transition-all duration-300 relative z-10">
          <CardContent className="p-6">
            <h3 className="font-academic text-xl font-semibold mb-3 text-primary">Recent Projects</h3>
            <p className="text-academic-gray mb-4">
              Innovative solutions built with modern technologies and thoughtful design.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/projects">Explore Projects</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="academic-shadow hover:warm-shadow transition-all duration-300 relative z-10">
          <CardContent className="p-6">
            <h3 className="font-academic text-xl font-semibold mb-3 text-primary">Research & Writing</h3>
            <p className="text-academic-gray mb-4">
              Deep dives into technology, research methodologies, and industry insights.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/research">Read Research</Link>
            </Button>
          </CardContent>
        </Card>

        <Card className="academic-shadow hover:warm-shadow transition-all duration-300 relative z-10">
          <CardContent className="p-6">
            <h3 className="font-academic text-xl font-semibold mb-3 text-primary">Latest Thoughts</h3>
            <p className="text-academic-gray mb-4">
              Reflections on development, design patterns, and the future of technology.
            </p>
            <Button asChild variant="outline" size="sm">
              <Link to="/blog">Read Blog</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      {/* Quote Section */}
      <section className="text-center py-12 relative z-20">
        <blockquote className="font-academic text-2xl italic text-primary-blue max-w-3xl mx-auto">
          be gentle with everyone, it's their first time living too
        </blockquote>
      </section>
    </div>
  );
}
