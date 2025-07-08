import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, FileText, Users, Calendar } from "lucide-react";

export default function Research() {
  const publications = [
    {
      title: "Ethical Frameworks for AI Development: A Practical Approach",
      authors: ["Your Name", "Dr. Jane Smith", "Prof. John Doe"],
      venue: "International Conference on AI Ethics",
      year: "2024",
      type: "Conference Paper",
      status: "Published",
      abstract: "This paper presents a comprehensive framework for integrating ethical considerations into AI development workflows. We propose practical methodologies for developers and organizations to ensure responsible AI deployment.",
      links: {
        paper: "#",
        code: "#"
      }
    },
    {
      title: "Scalable Distributed Systems: Performance Analysis and Optimization",
      authors: ["Your Name", "Team Collaborators"],
      venue: "Journal of Distributed Computing",
      year: "2023",
      type: "Journal Article", 
      status: "Published",
      abstract: "An in-depth analysis of performance characteristics in distributed systems, presenting novel optimization techniques that improve throughput by 40% while maintaining consistency guarantees.",
      links: {
        paper: "#",
        dataset: "#"
      }
    },
    {
      title: "Human-Computer Interaction in Developer Tools: A User Study",
      authors: ["Your Name", "UX Research Team"],
      venue: "CHI Conference on Human Factors",
      year: "2023",
      type: "Conference Paper",
      status: "Under Review",
      abstract: "A comprehensive user study examining how developers interact with modern development tools, identifying key usability patterns and proposing design improvements.",
      links: {
        preprint: "#"
      }
    }
  ];

  const projects = [
    {
      title: "Open Source AI Ethics Toolkit",
      description: "A comprehensive toolkit for evaluating AI systems against ethical guidelines, used by 50+ organizations worldwide.",
      status: "Active",
      collaborators: 12,
      impact: "500+ downloads/month"
    },
    {
      title: "Developer Experience Research Initiative",
      description: "Longitudinal study tracking developer productivity and satisfaction across different tool ecosystems.",
      status: "Ongoing",
      collaborators: 8,
      impact: "3 publications planned"
    },
    {
      title: "Distributed Systems Benchmarking Suite",
      description: "Industry-standard benchmarking tools for comparing distributed database performance and consistency.",
      status: "Complete",
      collaborators: 6,
      impact: "Adopted by 5 major tech companies"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-success/10 text-success border-success/20";
      case "Under Review":
        return "bg-warning/10 text-warning border-warning/20";
      case "Active":
        return "bg-primary-blue-light text-primary-blue border-primary-blue/20";
      case "Ongoing":
        return "bg-warm-orange-light text-warm-orange border-warm-orange/20";
      case "Complete":
        return "bg-success/10 text-success border-success/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Research
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          Bridging the gap between academic research and practical software development. 
          Exploring AI ethics, distributed systems, and human-computer interaction.
        </p>
      </section>

      {/* Research Areas */}
      <section>
        <h2 className="font-academic text-2xl font-semibold mb-8 text-primary">
          Research Areas
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="academic-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="font-academic text-xl font-semibold mb-3 text-primary">AI Ethics</h3>
              <p className="text-academic-gray text-sm">
                Developing practical frameworks for ethical AI development and deployment
              </p>
            </CardContent>
          </Card>
          <Card className="academic-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="font-academic text-xl font-semibold mb-3 text-primary">Distributed Systems</h3>
              <p className="text-academic-gray text-sm">
                Performance optimization and consistency guarantees in large-scale systems
              </p>
            </CardContent>
          </Card>
          <Card className="academic-shadow">
            <CardContent className="p-6 text-center">
              <h3 className="font-academic text-xl font-semibold mb-3 text-primary">Developer Experience</h3>
              <p className="text-academic-gray text-sm">
                Understanding and improving how developers interact with tools and systems
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2 className="font-academic text-2xl font-semibold mb-8 text-primary">
          Publications
        </h2>
        <div className="space-y-6">
          {publications.map((pub, index) => (
            <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="font-academic text-xl text-primary mb-2">
                      {pub.title}
                    </CardTitle>
                    <div className="flex flex-wrap items-center gap-3 text-sm text-academic-gray">
                      <div className="flex items-center gap-1">
                        <Users className="h-4 w-4" />
                        {pub.authors.join(", ")}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        {pub.venue}, {pub.year}
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Badge className={getStatusColor(pub.status)}>
                      {pub.status}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      {pub.type}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-academic-gray leading-relaxed">
                  {pub.abstract}
                </p>
                <div className="flex gap-2">
                  {pub.links.paper && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.links.paper}>
                        <FileText className="h-4 w-4 mr-2" />
                        Paper
                      </a>
                    </Button>
                  )}
                  {pub.links.preprint && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.links.preprint}>
                        <FileText className="h-4 w-4 mr-2" />
                        Preprint
                      </a>
                    </Button>
                  )}
                  {pub.links.code && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.links.code}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                  {pub.links.dataset && (
                    <Button variant="outline" size="sm" asChild>
                      <a href={pub.links.dataset}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Dataset
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Research Projects */}
      <section>
        <h2 className="font-academic text-2xl font-semibold mb-8 text-primary">
          Active Research Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="font-academic text-lg text-primary">
                    {project.title}
                  </CardTitle>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-academic-gray">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="font-medium text-primary">Collaborators:</span>
                    <span className="text-academic-gray ml-2">{project.collaborators}</span>
                  </div>
                  <div>
                    <span className="font-medium text-primary">Impact:</span>
                    <span className="text-academic-gray ml-2">{project.impact}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Collaboration */}
      <section className="text-center py-12 bg-primary-blue-light/30 rounded-lg">
        <h3 className="font-academic text-2xl font-semibold mb-4 text-primary">
          Interested in Collaboration?
        </h3>
        <p className="text-academic-gray mb-6 max-w-2xl mx-auto">
          I'm always open to collaborating on interesting research projects, especially those 
          that bridge academia and industry. Let's discuss how we can work together.
        </p>
        <Button className="bg-primary-blue hover:bg-primary-blue/90">
          Get In Touch
        </Button>
      </section>
    </div>
  );
}