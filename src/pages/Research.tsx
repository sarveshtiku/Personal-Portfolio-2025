import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar, GraduationCap, Copy } from "lucide-react";
import { TypewriterEffect } from "@/components/TypewriterEffect";
import { useToast } from "@/hooks/use-toast";

export default function Research() {
  const { toast } = useToast();
  
  const papers = [
    {
      title: "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)",
      subtitle: "A Framework for Assessing Structured Retrieval and Reasoning Capabilities",
      abstract: "The integration of large language models (LLMs) into scientific research workflows presents new opportunities for AI-assisted retrieval, summarization, and hypothesis generation. However, evaluating the reliability and domain alignment of these models in real-world scientific contexts remains an open challenge. In this work, we present BioMuse, a benchmarking framework designed to assess the structured retrieval and reasoning capabilities of LLMs using researcher-curated Zotero libraries. BioMuse transforms Zotero metadata—such as collections, tags, and notes—into semantic graphs and document clusters. We define a set of benchmarking tasks including citation-based retrieval, abstract-consistent summarization, and tag prediction. Our implementation includes an automated Zotero parser, an LLM testing interface, and a metrics module to measure hallucination frequency, citation accuracy, and semantic consistency. We evaluate state-of-the-art models such as GPT-4 and Claude across multiple computational biology subdomains (e.g., cancer genomics, gene regulation). Experimental results highlight model discrepancies not captured by traditional QA benchmarks and demonstrate the utility of BioMuse in stress-testing domain-specific alignment. This framework provides a reusable pipeline for evaluating LLMs in structured research settings and supports scalable adaptation across scientific domains.",
      venue: "IEEE 8th International Conference on Multimedia Information Processing and Retrieval (IEEE MIPR 2025)",
      date: "2025-08-06",
      status: "Accepted",
      type: "Conference Paper",
      tags: ["LLMs", "semantic retrieval", "Zotero", "citation grounding", "scientific AI", "hallucination detection", "knowledge graphs"],
      link: "https://sites.google.com/view/mipr-2025/ieee-mipr",
      citation: "S. Tiku, \"Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR),\" 2025 IEEE 8th International Conference on Multimedia Information Processing and Retrieval (IEEE MIPR), San Jose, CA, USA, 2025, pp. 1-6."
    },
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

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-6">
        <div className="flex items-center justify-center gap-8 animate-fade-in">
          <h1 className="font-academic text-3xl lg:text-5xl font-bold text-primary hover:bg-gradient-to-r hover:from-primary hover:to-primary-foreground hover:bg-clip-text hover:text-transparent transition-all duration-500">
            <TypewriterEffect phrases={["Research"]} typingSpeed={150} loop={false} className="inline-block" />
          </h1>
          <Button asChild variant="outline" size="lg" className="border-primary text-primary hover:bg-primary hover:text-white hover-scale transition-all duration-300 shadow-lg hover:shadow-xl">
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
                {(paper.title === "Mitigation of User-Prompt Bias in Large Language Models" || paper.title === "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)") && (
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
                    {paper.title === "Mitigation of User-Prompt Bias in Large Language Models" && (
                      <img 
                        src="/lovable-uploads/f3241671-570e-4759-a018-899ba468d89a.png" 
                        alt="ICMI 2024 Conference Logo"
                        className="w-96 h-auto flex-shrink-0"
                      />
                    )}
                    {paper.title === "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)" && (
                      <img 
                        src="/MIPRIEEE.png" 
                        alt="IEEE MIPR 2025 Conference Banner"
                        className="w-96 h-auto flex-shrink-0"
                      />
                    )}
                  </div>
                )}
                {paper.title !== "Mitigation of User-Prompt Bias in Large Language Models" && paper.title !== "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)" && (
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
                      href={paper.title === "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)" ? "https://sites.google.com/view/mipr-2025/ieee-mipr" : "https://ieeexplore.ieee.org/xpl/conhome/10585267/proceeding"}
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
                  {paper.title === "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)" && (
                    <Button variant="outline" size="sm" asChild className="hover:bg-muted">
                      <a 
                        href="https://github.com/sarveshtiku/BioMuse-MIPR" 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="h-4 w-4 mr-2" />
                        View GitHub Repository
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}