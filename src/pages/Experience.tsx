import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, ExternalLink, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import VantaDotsBackground from "@/components/VantaDotsBackground";

export default function Experience() {
  const experiences = [
    {
      company: "Salesforce",
      position: "Software Engineering Intern",
      location: "San Francisco, CA",
      period: "May 2025 - August 2025",
      type: "Internship",
      description: "Built and deployed a full-stack sandbox platform to simulate real-world traffic and scale-test AgentForce agents, improving rollout reliability across 10k+ enterprise deployments. Scaled infrastructure to handle 100K+ concurrent requests, enabling stress testing and performance benchmarking under production-like load.",
      achievements: [
        "Developed and launched a sandbox testing platform for AgentForce agents, adopted by internal teams to validate enterprise-scale deployments",
        "Scaled infrastructure to reliably support 100K+ concurrent requests for high-fidelity stress testing",
        "Completed 3 Salesforce certifications in 2 weeks (AgentForce Specialist, AgentBlazer Champion), accelerating onboarding in multi-agent orchestration and enterprise AI workflows"
      ],
      technologies: ["Node.js", "TypeScript", "FastAPI", "Salesforce Apex", "AgentForce APIs", "React", "Lightning Web Components", "PostgreSQL", "Redis", "AWS S3", "Docker", "Kubernetes", "GitHub Actions", "Grafana", "Prometheus", "Einstein GPT", "Agentforce SDK", "LangChain"]
    },
    {
      company: "Georgia Institute of Technology",
      position: "Computational Biology Undergraduate Research Assistant",
      location: "Atlanta, GA",
      period: "Jan 2025 - Aug 2025",
      type: "Research",
      description: "Engineered AI-driven pipelines using R, LLMs (via OpenAI API), and Zotero's metadata to automate statistical analysis and literature synthesis across 500+ papers. Developed a Zotero–OpenAI integration for semantic retrieval and conversational querying of research corpora, with reusable tooling adopted across lab workflows.",
      achievements: [
        "Paper accepted to IEEE International Conference on Multimedia Information Processing and Retrieval. 2025",
        "Nominated for the GT Presidential Undergraduate Research Award to expand and formally publish ongoing research"
      ],
      technologies: ["R", "OpenAI API", "LLMs", "Zotero", "Python", "Statistical Analysis", "Literature Synthesis", "AI Pipelines"]
    },
    {
      company: "Colorado School of Mines",
      position: "Computing for Good Machine Learning Engineer",
      location: "Golden, CO",
      period: "May 2024 - July 2024",
      type: "Research",
      description: "Applied ML-driven optimization techniques for solar panel placement, improving projected energy efficiency by 85% through spatial modeling. Reduced development cycle by 40% using Agile methodology and iterative product design workflows. Partnered with 10+ stakeholders via the Google Sunroof Project to drive adoption of solar energy through accurate, accessible deployment tools. Recognized by the State of Colorado for achieving ROI prediction accuracy within <5% error margin, boosting trust in large-scale renewable investments.",
      achievements: [
        "Improved projected energy efficiency by 85% through ML-driven spatial modeling",
        "Reduced development cycle by 40% using Agile methodology and iterative workflows",
        "Partnered with 10+ stakeholders via Google Sunroof Project for solar energy adoption",
        "Recognized by State of Colorado for <5% ROI prediction accuracy in renewable investments"
      ],
      technologies: ["Machine Learning", "Spatial Modeling", "Solar Energy", "Agile Methodology", "Google Sunroof Project", "ROI Prediction", "Python", "ML Optimization", "Product Design"]
    }
  ];

  const certifications = [
    {
      name: "Salesforce Certified Agentforce Specialist",
      issuer: "Salesforce",
      issuedDate: "Mar 2025",
      credentialId: "5925054",
      link: "https://drive.google.com/file/d/1r7EwR1dkckoP6o_uWG2DG7W1mR5-_pVG/view",
      logo: "/salesforce-logo.png",
      skills: ["Salesforce", "CRM", "Business Process", "Customer Service", "Automation"]
    },
    {
      name: "Introduction to Front-End Development",
      issuer: "Meta",
      issuedDate: "Jan 2025",
      credentialId: "JTHU1GLCLMKB",
      link: "https://www.coursera.org/account/accomplishments/verify/JTHU1GLCLMKB",
      logo: "/meta-logo.png",
      skills: ["HTML", "CSS", "JavaScript", "React.js", "Bootstrap", "Responsive Design", "Web Development"]
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services Training and Certification",
      issuedDate: "Aug 2025",
      expiresDate: "Sep 2028",
      credentialId: "3f64e981-7f1f-4fd2-a633-e7cd55824d2d",
      link: "https://drive.google.com/file/d/1Ok92OAeDoXNEp5l0_dOcwl8lKFGO8enc/view?usp=sharing",
      logo: "/aws-logo.png",
      skills: ["Cloud Computing", "Cloud Services", "Amazon Web Services", "AWS", "AWS Certification", "AWS Cloud", "Cloud Certification", "Cloud Platform"]
    },
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services Training and Certification",
      issuedDate: "Sep 2025",
      expiresDate: "Sep 2028",
      credentialId: "2e3d096d-8aa5-4335-9e13-92129868cf3b",
      link: "https://drive.google.com/file/d/1ZSXkmLhZ61LG6SIqVUZCeiPltFU8o6ns/view?usp=sharing",
      logo: "/aws-logo.png",
      skills: ["Cloud Architecture", "Cloud Infrastructure", "Cloud Services", "Amazon Web Services", "AWS", "AWS Certification", "AWS Cloud", "Cloud Certification", "Cloud Data"]
    },
    {
      name: "GitHub Foundations",
      issuer: "GitHub",
      issuedDate: "Dec 2024",
      expiresDate: "Dec 2027",
      link: "https://www.credly.com/badges/631e6ea7-4e7c-40f6-b969-19d0805df2b0/linked_in_profile",
      logo: "/github-logo.png",
      skills: ["Git", "Version Control", "GitHub", "Collaboration", "Repository Management", "Open Source"]
    },
    {
      name: "AI Safety and Governance",
      issuer: "BlueDot Impact",
      issuedDate: "Apr 2025",
      credentialId: "recIhGUkgymBECS8q",
      link: "https://bluedot.org/certification?id=reclhGUkgymBECS8q",
      logo: "/bluedot-logo.png",
      skills: ["AI Governance & Regulation", "Responsible AI Practices", "Policy & Risk Analysis", "AI Safety & Ethics", "Applied Governance Frameworks", "Societal Impact of AI"]
    },
  ];

  return (
    <div className="space-y-12 relative z-20 px-4 sm:px-6 lg:px-8">
      {/* Vanta.js DOTS Background */}
      <VantaDotsBackground />
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
                <div className="flex items-center gap-3">
                  {/* Company Logo */}
                  {exp.company === "Salesforce" && (
                    <img 
                      src="/salesforce-logo.png" 
                      alt="Salesforce Logo" 
                      className="w-25 h-16 object-contain"
                    />
                  )}
                  {exp.company === "Georgia Institute of Technology" && (
                    <img 
                      src="/georgia-tech-logo.png" 
                      alt="Georgia Tech Logo" 
                      className="w-25 h-16 object-contain"
                    />
                  )}
                  {exp.company === "Colorado School of Mines" && (
                    <img 
                      src="/colorado-mines-logo.png" 
                      alt="Colorado School of Mines Logo" 
                      className="w-25 h-16 object-contain"
                    />
                  )}
                </div>
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

      {/* Certifications Section */}
      <section className="space-y-8">
        <div className="text-center space-y-4">
          <h2 className="font-academic text-3xl lg:text-4xl font-bold text-primary">
            Certifications
          </h2>
          <p className="text-lg text-academic-gray max-w-xl mx-auto">
            Professional certifications and achievements in technology and development.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          {certifications.map((cert, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
                  <div className="space-y-2">
                    <CardTitle className="font-academic text-xl text-primary">
                      {cert.name}
                    </CardTitle>
                    <h3 className="text-lg text-warm-orange font-semibold">
                      {cert.issuer}
                    </h3>
                  </div>
                  {/* Verify Button */}
                      <Button 
                        variant="outline" 
                        size="sm"
                        className="gap-1"
                        onClick={() => window.open(cert.link, '_blank')}
                      >
                        <ExternalLink className="h-3 w-3" />
                        Verify
                      </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    Obtained: {cert.issuedDate}
                  </div>
                  {cert.credentialId && (
                    <div className="mt-1">
                      ID: {cert.credentialId}
                    </div>
                  )}
                  {cert.expiresDate && (
                    <div className="mt-1 text-muted-foreground">
                      Expires: {cert.expiresDate}
                    </div>
                  )}
                  {/* Skills Tags */}
                  <div className="mt-3">
                    <div className="flex flex-wrap gap-2">
                      {cert.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  );
}