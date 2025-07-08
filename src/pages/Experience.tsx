import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Experience() {
  const experiences = [
    {
      company: "Tech Research Institute",
      position: "Senior Research Engineer",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      description: "Leading research initiatives at the intersection of AI and human-computer interaction. Managing a team of 5 researchers and engineers working on next-generation development tools.",
      achievements: [
        "Published 3 peer-reviewed papers in top-tier conferences",
        "Led development of an AI-assisted code review system used by 10,000+ developers",
        "Secured $2M in research funding from NSF and industry partners"
      ],
      technologies: ["Python", "React", "TensorFlow", "PostgreSQL", "Docker"]
    },
    {
      company: "InnovateSoft Solutions",
      position: "Full Stack Developer",
      location: "Remote",
      period: "2020 - 2022",
      type: "Full-time",
      description: "Developed and maintained large-scale web applications serving 50,000+ active users. Collaborated with cross-functional teams to deliver high-quality software solutions.",
      achievements: [
        "Reduced application load time by 40% through optimization",
        "Implemented CI/CD pipeline that reduced deployment time by 60%",
        "Led migration from monolith to microservices architecture"
      ],
      technologies: ["React", "Node.js", "AWS", "MongoDB", "Kubernetes"]
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Experience
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          A journey through research, development, and innovation across academic 
          and industry settings.
        </p>
      </section>

      {/* Timeline */}
      <section className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
            <CardHeader>
              <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                <div className="space-y-2">
                  <CardTitle className="font-academic text-2xl text-primary">
                    {exp.position}
                  </CardTitle>
                  <h3 className="text-xl text-warm-orange font-semibold">
                    {exp.company}
                  </h3>
                </div>
                <Badge variant="secondary">
                  {exp.type}
                </Badge>
              </div>
              
              <div className="flex flex-wrap gap-4 text-sm text-academic-gray">
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  {exp.period}
                </div>
                <div className="flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {exp.location}
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-academic-gray leading-relaxed">
                {exp.description}
              </p>
              
              <div>
                <h4 className="font-medium text-primary mb-3">Key Achievements</h4>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start gap-2 text-academic-gray text-sm">
                      <span className="w-2 h-2 bg-warm-orange rounded-full mt-2 flex-shrink-0"></span>
                      {achievement}
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
      </section>
    </div>
  );
}