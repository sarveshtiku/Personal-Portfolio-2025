import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Calendar, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import VantaNetBackground from "@/components/VantaNetBackground";

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
      title: "AI-Induced Labor Market Shifts and Aging Workforce Dynamics",
      subtitle: "A Cross-National Study of Corporate Strategic Responses in Japan, USA, and India",
      abstract: "Advanced Artificial Intelligence (AI) technologies are inducing significant labor market transformations by automating an array of job roles and, in turn, disrupting traditional career advancement pathways. The rapid AI-driven automation limits entry-level job opportunities, thus curbing the upward mobility of the 'no-experience category' workforce. This phenomenon triggers a cascading effect on the aging, 'higher positioned' employees, as their accrued responsibilities and experience compel them to advocate for increased retirement ages, in a bid to sustain company dynamism in the face of AI transformations. By comparing the strategic responses of corporations across countries at different stages of implementing artificial intelligence in the workforce, such as Japan, the USA, and India, the study seeks to unravel the corporate responses to this intricate interplay, aiming to offer insights for equitable and sustainable integration strategies for AI and for addressing workforce aging and retirement policy challenges.",
      venue: "Foundation Document - United Nations HL Advisory Board on AI",
      date: "2023-08-09",
      status: "Published",
      type: "Journal Article",
      tags: ["Artificial Intelligence", "Job Automation", "Labor Market Transformations", "Aging Workforce Dynamics", "Corporate Strategic Responses", "Retirement Policy", "Cross-national Comparison", "Sustainable Integration Strategies"],
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4535534",
      citation: "Tiku, Sarvesh, AI-Induced Labor Market Shifts and Aging Workforce Dynamics: A Cross-National Study of Corporate Strategic Responses in Japan, USA, and India (August 9, 2023). Available at SSRN: https://ssrn.com/abstract=4535534 or http://dx.doi.org/10.2139/ssrn.4535534"
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
    <div className="space-y-12 relative z-20">
      <VantaNetBackground />
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Research
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          Exploring the intersection of AI, machine learning, and computational biology through rigorous research and publication.
        </p>
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
                {(paper.title === "Mitigation of User-Prompt Bias in Large Language Models" || paper.title === "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)" || paper.title === "AI-Induced Labor Market Shifts and Aging Workforce Dynamics") && (
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
                      
                      {/* Keywords below title */}
                      {paper.tags && (
                        <div className="flex flex-wrap items-center gap-2 pt-3">
                          <span className="text-sm font-medium text-muted-foreground">
                            {paper.title === "AI-Induced Labor Market Shifts and Aging Workforce Dynamics" ? "SSRN Keywords:" : "IEEE Keywords:"}
                          </span>
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
                    {paper.title === "AI-Induced Labor Market Shifts and Aging Workforce Dynamics" && (
                      <img 
                        src="/un-ai-advisory-body-logo.png" 
                        alt="United Nations AI Advisory Body Logo"
                        className="w-96 h-auto flex-shrink-0"
                      />
                    )}
                  </div>
                )}
                {paper.title !== "Mitigation of User-Prompt Bias in Large Language Models" && paper.title !== "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)" && paper.title !== "AI-Induced Labor Market Shifts and Aging Workforce Dynamics" && (
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
                      href={paper.title === "Benchmarking LLMs for Trustworthy Multimedia Retrieval in Computational Biology (BioMuse‑MIPR)" ? "https://sites.google.com/view/mipr-2025/ieee-mipr" : paper.title === "AI-Induced Labor Market Shifts and Aging Workforce Dynamics" ? "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4535534" : "https://ieeexplore.ieee.org/xpl/conhome/10585267/proceeding"}
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