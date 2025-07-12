import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar, GraduationCap } from "lucide-react";

export default function Research() {
  const papers = [
    {
      title: "Mitigation of User-Prompt Bias in Large Language Models",
      subtitle: "A Natural Language Processing and Deep Learning Based Framework",
      abstract: "The advent of large language models has opened new frontiers in the field of automated text generation, enabling more refined engagement with complex language-based tasks. Concurrently, this advancement has revealed a potential vulnerability: the inadvertent amplification of biases from user prompts, which may lead to the reinforcement of detrimental stereotypes and misinformation by these large language models. Addressing this multifaceted challenge, this paper delineates a framework that integrates natural language processing and deep learning, designed to detect, and neutralize bias in user prompts in real time. The core of this system is a carefully formulated algorithm, the result of rigorous training, validation, and testing on the CrowS-Pairs dataset, specifically aimed at measuring the degree to which U.S. stereotypical biases are present in language models. The framework achieved an accuracy of 93% and an F1Score of 0.92 in pinpointing and alleviating biases.",
      venue: "2024 IEEE 3rd International Conference on Computing and Machine Intelligence (ICMI)",
      date: "2024-04-13",
      status: "Published",
      type: "Conference Paper",
      tags: ["Deep Learning", "Large Language Models", "Bias Mitigation", "Natural Language Processing", "Transformers", "BERT", "Real-time Systems"],
      link: "https://ieeexplore.ieee.org/abstract/document/10585628"
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
              <CardHeader className="relative">
                {paper.title === "Mitigation of User-Prompt Bias in Large Language Models" && (
                  <>
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
                      </div>
                      <img 
                        src="/lovable-uploads/f3241671-570e-4759-a018-899ba468d89a.png" 
                        alt="ICMI 2024 Conference Logo"
                        className="w-32 h-auto flex-shrink-0"
                      />
                    </div>
                    <img 
                      src="/lovable-uploads/4a070806-d22a-403d-a36a-b439363a3064.png" 
                      alt="ICMI 2024 Circle Logo"
                      className="absolute bottom-4 right-4 w-12 h-auto opacity-20"
                    />
                  </>
                )}
                {paper.title !== "Mitigation of User-Prompt Bias in Large Language Models" && (
                  <CardTitle className="font-academic text-xl text-primary">
                    {paper.title}
                  </CardTitle>
                )}
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-academic-gray leading-relaxed">
                  {paper.abstract}
                </p>
                
                {/* Tags */}
                {paper.tags && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {paper.tags.map((tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
                
                <div className="flex items-center gap-4 text-sm text-academic-gray">
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