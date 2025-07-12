import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar, GraduationCap } from "lucide-react";

export default function Research() {
  const papers = [
    {
      title: "Human-AI Collaboration in Software Development: A Mixed-Methods Study",
      abstract: "This study examines how AI tools are reshaping collaborative practices in software development teams. Through interviews with 50 developers and analysis of 100+ projects, we identify key patterns in human-AI interaction and propose design guidelines for future AI-assisted development tools.",
      venue: "CHI 2024 - Conference on Human Factors in Computing Systems",
      date: "2024-03-15",
      status: "Published",
      type: "Conference Paper",
      link: "#"
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

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Research
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          Exploring the intersection of human behavior, technology, and ethics through 
          rigorous research and empirical studies.
        </p>
        <div className="flex justify-center pt-4">
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white">
            <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4xxpk46Nnyc6_R33u0nGUbSJXUY7rgCHhjK5seT4-urV0y3qz48kkfj8FfSsDLaEC3_x4U51pkPORGnbw&user=KB6pL-sAAAAJ" target="_blank" rel="noopener noreferrer">
              <GraduationCap className="mr-2 h-5 w-5" />
              Google Scholar Profile
            </a>
          </Button>
        </div>
      </section>

      {/* Publications */}
      <section>
        <h2 className="font-academic text-2xl font-semibold mb-8 text-primary">
          Recent Publications
        </h2>
        <div className="space-y-6">
          {papers.map((paper, index) => (
            <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
              <CardHeader>
                <CardTitle className="font-academic text-xl text-primary">
                  {paper.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-academic-gray leading-relaxed">
                  {paper.abstract}
                </p>
                <div className="flex items-center gap-4 text-sm text-academic-gray">
                  <div className="flex items-center gap-1">
                    <FileText className="h-4 w-4" />
                    {paper.venue}
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    {new Date(paper.date).toLocaleDateString('en-US', { 
                      year: 'numeric', 
                      month: 'long' 
                    })}
                  </div>
                </div>
                <Button variant="outline" size="sm" asChild>
                  <a href={paper.link}>
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Read Paper
                  </a>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}