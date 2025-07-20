import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter, X, FileText, Calendar, GraduationCap, Copy } from "lucide-react";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { useToast } from "@/hooks/use-toast";

export default function Projects() {
  const { toast } = useToast();
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
  const [showAllSkills, setShowAllSkills] = useState(false);

  const papers = [
    {
      title: "Mitigation of User-Prompt Bias in Large Language Models",
      subtitle: "A Natural Language Processing and Deep Learning Based Framework",
      abstract: "The advent of large language models has opened new frontiers in the field of automated text generation, enabling more refined engagement with complex language-based tasks. Concurrently, this advancement has revealed a potential vulnerability: the inadvertent amplification of biases from user prompts, which may lead to the reinforcement of detrimental stereotypes and misinformation by these large language models. Addressing this multifaceted challenge, this paper delineates a framework that integrates natural language processing and deep learning, designed to detect, and neutralize bias in user prompts in real time. The core of this system is a carefully formulated algorithm, the result of rigorous training, validation, and testing on the CrowS-Pairs dataset, specifically aimed at measuring the degree to which U.S. stereotypical biases are present in language models. The framework achieved an accuracy of 93% and an F1Score of 0.92 in pinpointing and alleviating biases.",
      venue: "2024 IEEE 3rd International Conference on Computing and Machine Intelligence (ICMI)",
      date: "2024-04-13",
      status: "Published",
      type: "Conference Paper",
      tags: ["Deep learning", "Training", "Large language models", "Computational modeling", "Prevention and mitigation", "Transformers", "Real-time systems"],
      link: "https://ieeexplore.ieee.org/abstract/document/10585628",
      citation: "S. Tiku, \"Mitigation of User-Prompt Bias in Large Language Models: A Natural Langauge Processing and Deep Learning Based Framework,\" 2024 IEEE 3rd International Conference on Computing and Machine Intelligence (ICMI), Mt Pleasant, MI, USA, 2024, pp. 1-5, doi: 10.1109/ICMI60790.2024.10585628. keywords: {Deep learning;Training;Large language models;Computational modeling;Prevention and mitigation;Transformers;Real-time systems;Artificial Intelligence;Deep Learning;Natural Language Processing;Bias Detection Mitigation;Computational Linguistics;Predictive Modeling;Bidirectional Encoder Representations from Transformers (BERT);Robustly Optimized BERT Approach},"
    },
    {
      title: "Ethical Considerations in Automated Code Review Systems",
      abstract: "As automated code review systems become prevalent, questions of bias, fairness, and transparency emerge. This paper analyzes 10 popular code review tools for potential biases and proposes an ethical framework for their development and deployment.",
      venue: "Software Engineering Ethics Workshop",
      date: "2023-11-20",
      status: "Published",
      type: "Workshop Paper",
      link: "#"
    }
  ];

  const handleCiteCopy = async (citation: string) => {
    try {
      await navigator.clipboard.writeText(citation);
      toast({
        title: "Citation copied!",
        description: "The citation has been copied to your clipboard.",
      });
    } catch (err) {
      toast({
        title: "Copy failed",
        description: "Failed to copy citation to clipboard.",
        variant: "destructive",
      });
    }
  };

  const projects = [
    {
      title: "Research Data Platform",
      description: "A comprehensive platform for managing and analyzing research data with real-time collaboration features. Built for academic institutions to streamline their research workflows.",
      technologies: ["React", "Node.js", "PostgreSQL", "WebSocket", "Docker"],
      status: "Production",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "AI Ethics Framework",
      description: "An open-source framework for evaluating AI systems against ethical guidelines. Includes automated testing tools and comprehensive documentation.",
      technologies: ["Python", "TensorFlow", "FastAPI", "React", "MongoDB"],
      status: "Beta",
      links: {
        github: "#",
        demo: "#"
      }
    },
    {
      title: "Developer Portfolio Template",
      description: "A beautiful, responsive portfolio template for developers and researchers. Features markdown blog support and project showcases.",
      technologies: ["Next.js", "TypeScript", "TailwindCSS", "MDX"],
      status: "Active Development",
      links: {
        github: "#",
        demo: "#"
      }
    }
  ];

  // Get all unique technologies for filter options
  const allSkills = useMemo(() => {
    const skillsSet = new Set<string>();
    projects.forEach(project => {
      project.technologies.forEach(tech => skillsSet.add(tech));
    });
    return Array.from(skillsSet).sort();
  }, []);

  // Filter and sort projects based on selected skills
  const filteredProjects = useMemo(() => {
    if (selectedSkills.length === 0) {
      return projects;
    }
    
    return projects
      .filter(project => 
        selectedSkills.some(skill => project.technologies.includes(skill))
      )
      .sort((a, b) => {
        // Sort by number of matching skills (descending)
        const aMatches = a.technologies.filter(tech => selectedSkills.includes(tech)).length;
        const bMatches = b.technologies.filter(tech => selectedSkills.includes(tech)).length;
        return bMatches - aMatches;
      });
  }, [selectedSkills]);

  const toggleSkill = (skill: string) => {
    setSelectedSkills(prev => 
      prev.includes(skill)
        ? prev.filter(s => s !== skill)
        : [...prev, skill]
    );
  };

  const clearFilters = () => {
    setSelectedSkills([]);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production":
        return "bg-success/10 text-success border-success/20";
      case "Beta":
        return "bg-warning/10 text-warning border-warning/20";
      case "Active Development":
        return "bg-primary-blue-light text-primary-blue border-primary-blue/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Projects & Research
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          A collection of projects spanning research tools, open source contributions, 
          production applications, and academic research that solve real-world problems.
        </p>
      </section>

      {/* Skills Filter */}
      <section className="space-y-6">
        <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
          <div className="flex items-center gap-2">
            <Filter className="h-5 w-5 text-primary" />
            <h2 className="font-academic text-xl font-semibold text-primary">
              Filter by Skills
            </h2>
            {selectedSkills.length > 0 && (
              <span className="text-sm text-academic-gray">
                ({filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''} found)
              </span>
            )}
          </div>
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              onClick={() => setShowAllSkills(!showAllSkills)} 
              size="sm"
            >
              {showAllSkills ? "Show Moving" : "View All"}
            </Button>
            {selectedSkills.length > 0 && (
              <Button variant="outline" onClick={clearFilters} size="sm">
                Clear Filters
              </Button>
            )}
          </div>
        </div>
        
        {/* Selected Skills Display */}
        {selectedSkills.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedSkills.map((skill) => (
              <Badge
                key={skill}
                variant="default"
                className="bg-primary text-primary-foreground flex items-center gap-1 pr-1"
              >
                {skill}
                <button
                  onClick={() => toggleSkill(skill)}
                  className="ml-1 hover:bg-primary-foreground/20 rounded-full p-0.5 transition-colors"
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
          </div>
        )}
        
        {/* Skills Selection */}
        {showAllSkills ? (
          // Grid view of all skills
          <div className="flex flex-wrap gap-2">
            {allSkills.map((skill) => (
              <Badge
                key={skill}
                variant={selectedSkills.includes(skill) ? "default" : "outline"}
                className={`cursor-pointer transition-all duration-200 hover:scale-105 ${
                  selectedSkills.includes(skill)
                    ? "bg-primary text-primary-foreground hover:bg-primary/90"
                    : "hover:bg-accent"
                }`}
                onClick={() => toggleSkill(skill)}
              >
                {skill}
              </Badge>
            ))}
          </div>
        ) : (
          // Moving marquee view
          <div className="relative overflow-hidden">
            <div className="animate-marquee hover:[animation-play-state:paused] flex gap-2 w-max">
              {/* First set of skills */}
              {allSkills.map((skill) => (
                <Badge
                  key={skill}
                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 hover:scale-105 whitespace-nowrap ${
                    selectedSkills.includes(skill)
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </Badge>
              ))}
              {/* Duplicate set for seamless loop */}
              {allSkills.map((skill) => (
                <Badge
                  key={`${skill}-duplicate`}
                  variant={selectedSkills.includes(skill) ? "default" : "outline"}
                  className={`cursor-pointer transition-all duration-200 hover:scale-105 whitespace-nowrap ${
                    selectedSkills.includes(skill)
                      ? "bg-primary text-primary-foreground hover:bg-primary/90"
                      : "hover:bg-accent"
                  }`}
                  onClick={() => toggleSkill(skill)}
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        )}
      </section>

      {/* Projects Grid */}
      <section className="grid lg:grid-cols-2 gap-6">
        {filteredProjects.map((project, index) => (
          <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="font-academic text-xl text-primary">
                  {project.title}
                </CardTitle>
                <Badge className={getStatusColor(project.status)}>
                  {project.status}
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-academic-gray leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <Badge key={tech} variant="outline" className="text-xs">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-2 pt-2">
                {project.links.github && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.github}>
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                )}
                {project.links.demo && (
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.links.demo}>
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </section>

      {/* Research Section */}
      <section className="space-y-8 pt-16 border-t border-border">
        <div className="text-center space-y-6">
          <div className="flex items-center justify-center gap-8 animate-fade-in">
            <h2 className="font-academic text-3xl lg:text-4xl font-bold text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-foreground hover:bg-clip-text hover:text-transparent transition-all duration-500">
              <TypewriterEffect phrases={["Research"]} typingSpeed={150} loop={false} className="inline-block" />
            </h2>
            <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white hover-scale transition-all duration-300 shadow-lg hover:shadow-xl">
              <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4xxpk46Nnyc6_R33u0nGUbSJXUY7rgCHhjK5seT4-urV0y3qz48kkfj8FfSsDLaEC3_x4U51pkPORGnbw&user=KB6pL-sAAAAJ" target="_blank" rel="noopener noreferrer">
                <GraduationCap className="mr-2 h-5 w-5" />
                Google Scholar Profile
              </a>
            </Button>
          </div>
        </div>

        {/* Publications */}
        <div>
          <h3 className="font-academic text-2xl font-semibold mb-8 text-primary">
            Recent Publications
          </h3>
          <div className="space-y-6">
            {papers.map((paper, index) => (
              <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
                <CardHeader className="relative">
                  {paper.title === "Mitigation of User-Prompt Bias in Large Language Models" && (
                    <div className="flex items-start gap-4 mb-4">
                      <div className="flex-1">
                        <CardTitle className="font-academic text-xl text-primary">
                          {paper.title}
                        </CardTitle>
                        {paper.subtitle && (
                          <p className="font-academic text-base text-muted-foreground italic mt-1">
                            {paper.subtitle}
                          </p>
                        )}
                        
                        {/* IEEE Keywords below title */}
                        {paper.tags && (
                          <div className="flex flex-wrap items-center gap-2 pt-3">
                            <span className="text-sm font-medium text-muted-foreground">IEEE Keywords:</span>
                            {paper.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        )}
                      </div>
                      <img 
                        src="/lovable-uploads/f3241671-570e-4759-a018-899ba468d89a.png" 
                        alt="ICMI 2024 Conference Logo"
                        className="w-96 h-auto flex-shrink-0"
                      />
                    </div>
                  )}
                  {paper.title !== "Mitigation of User-Prompt Bias in Large Language Models" && (
                    <>
                      <CardTitle className="font-academic text-xl text-primary">
                        {paper.title}
                      </CardTitle>
                      {/* Tags for other papers */}
                      {paper.tags && (
                        <div className="flex flex-wrap gap-2 pt-3">
                          {paper.tags.map((tag, tagIndex) => (
                            <Badge key={tagIndex} variant="secondary" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      )}
                    </>
                  )}
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <span className="font-semibold text-primary font-garamond">Abstract: </span>
                    <span className="text-academic-gray leading-relaxed text-justify font-garamond">
                      {paper.abstract}
                    </span>
                  </div>
                  
                  {/* Conference Info */}
                  <div className="flex items-center gap-4 text-sm text-academic-gray pt-2">
                    <div className="flex items-center gap-1">
                      <FileText className="h-4 w-4" />
                      <a 
                        href="https://ieeexplore.ieee.org/xpl/conhome/10585267/proceeding" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="hover:text-primary hover:underline transition-colors"
                      >
                        {paper.venue}
                      </a>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(paper.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long' 
                      })}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={paper.link}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Read Paper
                      </a>
                    </Button>
                    {paper.citation && (
                      <Button 
                        variant="outline" 
                        size="sm" 
                        onClick={() => handleCiteCopy(paper.citation!)}
                        className="hover:bg-muted"
                      >
                        <Copy className="h-4 w-4 mr-2" />
                        Cite This
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}