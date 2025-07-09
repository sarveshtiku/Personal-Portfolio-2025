import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Filter } from "lucide-react";

export default function Projects() {
  const [selectedSkills, setSelectedSkills] = useState<string[]>([]);

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
          Projects
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          A collection of projects spanning research tools, open source contributions, 
          and production applications that solve real-world problems.
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
          {selectedSkills.length > 0 && (
            <Button variant="outline" onClick={clearFilters} size="sm">
              Clear Filters
            </Button>
          )}
        </div>
        
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
    </div>
  );
}