import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, MapPin, Building } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading development of distributed systems serving 10M+ users. Architected microservices platform reducing deployment time by 60%. Mentored junior developers and established engineering best practices.",
      achievements: [
        "Designed and implemented distributed cache system improving response times by 40%",
        "Led cross-functional team of 8 engineers on major platform migration",
        "Established code review processes adopted company-wide",
        "Reduced infrastructure costs by 30% through optimization initiatives"
      ],
      technologies: ["React", "Node.js", "Kubernetes", "PostgreSQL", "Redis", "AWS"]
    },
    {
      title: "Research Software Developer", 
      company: "University Research Lab",
      location: "Stanford, CA",
      period: "2021 - 2022",
      type: "Contract",
      description: "Developed research tools and data analysis platforms for academic research. Collaborated with researchers to translate requirements into scalable software solutions.",
      achievements: [
        "Built data processing pipeline handling 100TB+ research datasets",
        "Created visualization tools used by 200+ researchers globally",
        "Published 2 papers on software tools for research",
        "Established open source development practices for lab"
      ],
      technologies: ["Python", "Django", "React", "D3.js", "Docker", "PostgreSQL"]
    },
    {
      title: "Full Stack Developer",
      company: "StartupXYZ",
      location: "New York, NY", 
      period: "2019 - 2021",
      type: "Full-time",
      description: "Early-stage startup building developer tools. Wore multiple hats from frontend development to DevOps. Helped grow user base from 0 to 50,000 developers.",
      achievements: [
        "Built entire frontend application from scratch using React",
        "Implemented real-time collaboration features using WebSocket",
        "Set up CI/CD pipeline reducing deployment time from hours to minutes",
        "Contributed to product strategy and user experience decisions"
      ],
      technologies: ["React", "Node.js", "MongoDB", "Redis", "Docker", "Heroku"]
    },
    {
      title: "Software Engineer Intern",
      company: "BigTech Inc",
      location: "Seattle, WA",
      period: "Summer 2018",
      type: "Internship",
      description: "Worked on internal tools for developer productivity. Learned large-scale software development practices and enterprise architecture patterns.",
      achievements: [
        "Developed VS Code extension improving developer workflow efficiency",
        "Contributed to internal design system used by 500+ engineers",
        "Presented project to executive leadership team",
        "Received return offer for full-time position"
      ],
      technologies: ["TypeScript", "React", "C#", ".NET", "Azure"]
    }
  ];

  const skills = {
    "Programming Languages": ["JavaScript/TypeScript", "Python", "Go", "Java", "C++"],
    "Frontend": ["React", "Vue.js", "Next.js", "TailwindCSS", "D3.js"],
    "Backend": ["Node.js", "Django", "FastAPI", "Express", "GraphQL"],
    "Databases": ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch"],
    "Cloud & DevOps": ["AWS", "Docker", "Kubernetes", "Terraform", "CI/CD"],
    "Tools & Methods": ["Git", "Agile", "TDD", "Code Review", "Mentoring"]
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full-time":
        return "bg-success/10 text-success border-success/20";
      case "Contract":
        return "bg-primary-blue-light text-primary-blue border-primary-blue/20";
      case "Internship":
        return "bg-warm-orange-light text-warm-orange border-warm-orange/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Experience
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          Over 5 years of experience building scalable software solutions, from early-stage 
          startups to large-scale enterprise systems.
        </p>
      </section>

      {/* Professional Experience */}
      <section>
        <h2 className="font-academic text-2xl font-semibold mb-8 text-primary">
          Professional Experience
        </h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="font-academic text-xl text-primary">
                      {exp.title}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-academic-gray">
                      <div className="flex items-center gap-1">
                        <Building className="h-4 w-4" />
                        {exp.company}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {exp.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <CalendarDays className="h-4 w-4" />
                        {exp.period}
                      </div>
                    </div>
                  </div>
                  <Badge className={getTypeColor(exp.type)}>
                    {exp.type}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-academic-gray leading-relaxed">
                  {exp.description}
                </p>
                
                <div>
                  <h4 className="font-medium text-primary mb-3">Key Achievements</h4>
                  <ul className="space-y-2 text-academic-gray">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-warm-orange mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="font-medium text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <Badge key={tech} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section>
        <h2 className="font-academic text-2xl font-semibold mb-8 text-primary">
          Technical Skills
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, skillList]) => (
            <Card key={category} className="academic-shadow">
              <CardHeader>
                <CardTitle className="font-academic text-lg text-primary">
                  {category}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {skillList.map((skill) => (
                    <Badge key={skill} variant="secondary" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Certifications & Education */}
      <section className="grid md:grid-cols-2 gap-8">
        <Card className="academic-shadow">
          <CardHeader>
            <CardTitle className="font-academic text-xl text-primary">
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-primary">M.S. Computer Science</h4>
              <p className="text-academic-gray text-sm">Stanford University, 2019</p>
              <p className="text-academic-gray text-xs">Focus: Distributed Systems & HCI</p>
            </div>
            <div>
              <h4 className="font-medium text-primary">B.S. Software Engineering</h4>
              <p className="text-academic-gray text-sm">UC Berkeley, 2017</p>
              <p className="text-academic-gray text-xs">Magna Cum Laude</p>
            </div>
          </CardContent>
        </Card>

        <Card className="academic-shadow">
          <CardHeader>
            <CardTitle className="font-academic text-xl text-primary">
              Certifications
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h4 className="font-medium text-primary">AWS Solutions Architect</h4>
              <p className="text-academic-gray text-sm">Amazon Web Services, 2023</p>
            </div>
            <div>
              <h4 className="font-medium text-primary">Kubernetes Administrator</h4>
              <p className="text-academic-gray text-sm">CNCF, 2022</p>
            </div>
            <div>
              <h4 className="font-medium text-primary">Scrum Master</h4>
              <p className="text-academic-gray text-sm">Scrum Alliance, 2021</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}