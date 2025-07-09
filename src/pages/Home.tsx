import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Github, Linkedin, Mail, Instagram, Twitter, FileText, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-geometric.jpg";
import { TypewriterEffect } from "@/components/TypewriterEffect";

export default function Home() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="relative text-center space-y-6 py-12">
        {/* Hero Image */}
        <div className="absolute inset-0 -z-10 rounded-lg overflow-hidden">
          <img 
            src={heroImage} 
            alt="Abstract geometric patterns" 
            className="w-full h-full object-cover opacity-10"
          />
        </div>
        
        <div className="space-y-4">
          <h1 className="font-academic text-5xl lg:text-6xl font-bold text-primary">
            Hi, I'm Sarvesh
          </h1>
          <div className="text-xl text-warm-orange font-medium min-h-[2rem]">
            <TypewriterEffect 
              phrases={[
                "AI Safety Researcher",
                "Software Developer", 
                "Tech Entrepreneur",
                "Building the Future"
              ]}
              className="font-academic text-2xl lg:text-3xl"
            />
          </div>
          <p className="text-xl text-academic-gray max-w-2xl mx-auto leading-relaxed">
            Exploring the intersection of technology, research, and human-centered design. 
            Building solutions that matter through code, curiosity, and collaboration.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
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
        <div className="flex justify-center space-x-6 pt-8">
          <a href="#" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Github className="h-6 w-6" />
          </a>
          <a href="#" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Linkedin className="h-6 w-6" />
          </a>
          <a href="#" className="text-academic-gray hover:text-warm-orange transition-colors">
            <GraduationCap className="h-6 w-6" />
          </a>
          <a href="#" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Mail className="h-6 w-6" />
          </a>
          <a href="#" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Instagram className="h-6 w-6" />
          </a>
          <a href="#" className="text-academic-gray hover:text-warm-orange transition-colors">
            <Twitter className="h-6 w-6" />
          </a>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="grid md:grid-cols-3 gap-6">
        <Card className="academic-shadow hover:warm-shadow transition-all duration-300">
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

        <Card className="academic-shadow hover:warm-shadow transition-all duration-300">
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

        <Card className="academic-shadow hover:warm-shadow transition-all duration-300">
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
      <section className="text-center py-12">
        <blockquote className="font-academic text-2xl italic text-primary-blue max-w-3xl mx-auto">
          "The best way to predict the future is to invent it, but the wisest way is to 
          understand the principles that guide its creation."
        </blockquote>
        <cite className="block mt-4 text-academic-gray">— Personal Philosophy</cite>
      </section>
    </div>
  );
}