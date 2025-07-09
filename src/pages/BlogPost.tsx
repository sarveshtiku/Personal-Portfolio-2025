import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const blogPosts = {
  "art-of-code-review": {
    title: "The Art of Code Review: Building Better Software Through Collaboration",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Engineering",
    author: "Your Name",
    content: {
      intro: "Exploring how thoughtful code reviews can transform not just code quality, but team dynamics and knowledge sharing. A deep dive into practical strategies for meaningful peer review.",
      sections: [
        {
          id: "1.1",
          title: "The Psychology of Code Review",
          content: `Code review isn't just about catching bugs—it's fundamentally a human interaction. When done well, it becomes a powerful tool for knowledge transfer, team building, and continuous improvement.

The most effective code reviews balance technical rigor with empathy. They focus on the code, not the coder, and aim to elevate both the immediate work and the long-term capabilities of the team.`
        },
        {
          id: "1.2", 
          title: "Establishing Review Culture",
          content: `Creating a positive review culture requires intentional effort. Start by setting clear expectations: reviews should be timely, constructive, and focused on learning rather than gatekeeping.

Consider implementing these practices:
- Review code in small, digestible chunks
- Ask questions rather than making demands
- Highlight good patterns alongside areas for improvement
- Make space for discussion and learning`
        },
        {
          id: "1.3",
          title: "Technical Excellence Through Collaboration", 
          content: `The best code reviews go beyond syntax checking. They examine architecture decisions, consider maintainability, and ensure consistency with team standards.

Key areas to focus on:
- Logic and algorithmic efficiency
- Error handling and edge cases
- Code clarity and documentation
- Security considerations
- Performance implications`
        },
        {
          id: "1.4",
          title: "Tools and Workflows",
          content: `Modern development workflows provide excellent tools for code review. GitHub, GitLab, and similar platforms offer features like inline comments, suggested changes, and integration with CI/CD pipelines.

Effective use of these tools includes:
- Using templates for consistent review quality
- Leveraging automated checks to focus human attention on complex issues
- Creating clear merge criteria and approval processes`
        }
      ]
    }
  },
  "distributed-systems-lessons": {
    title: "Understanding Distributed Systems: Lessons from Building at Scale",
    date: "2024-01-08", 
    readTime: "12 min read",
    category: "Architecture",
    author: "Your Name",
    content: {
      intro: "Real-world insights from designing and implementing distributed systems that handle millions of requests. Common pitfalls, architectural decisions, and monitoring strategies.",
      sections: [
        {
          id: "1.1",
          title: "The Fundamentals of Distribution",
          content: `Distributed systems introduce complexity that single-machine applications simply don't have. Network partitions, eventual consistency, and partial failures become everyday realities rather than edge cases.

The CAP theorem isn't just academic theory—it's a practical constraint that shapes every architectural decision. Understanding when to prioritize consistency versus availability becomes crucial for system design.`
        },
        {
          id: "1.2",
          title: "Consistency Models in Practice", 
          content: `Different parts of your system may require different consistency guarantees. User profiles might need strong consistency, while recommendation engines can work with eventual consistency.

Common patterns include:
- ACID transactions for critical business logic
- Event sourcing for audit trails and replay capabilities  
- CQRS for separating read and write concerns
- Saga patterns for distributed transactions`
        },
        {
          id: "1.3", 
          title: "Monitoring and Observability",
          content: `In distributed systems, observability isn't optional—it's essential for understanding system behavior and debugging issues across service boundaries.

Key observability practices:
- Distributed tracing to follow requests across services
- Structured logging with correlation IDs
- Metrics that capture both business and technical health
- Alerting based on user impact, not just system metrics`
        },
        {
          id: "1.4",
          title: "Failure Modes and Recovery",
          content: `Distributed systems fail in ways that are often counterintuitive. Partial failures are more common than complete outages, and systems must be designed to degrade gracefully.

Essential resilience patterns:
- Circuit breakers to prevent cascade failures
- Bulkheads to isolate failure domains
- Timeouts and retries with exponential backoff
- Health checks and automatic failover mechanisms`
        }
      ]
    }
  },
  "ai-ethics-practice": {
    title: "AI Ethics in Practice: A Developer's Perspective",
    date: "2023-12-20",
    readTime: "10 min read", 
    category: "AI Ethics",
    author: "Your Name",
    content: {
      intro: "Moving beyond theoretical discussions of AI ethics to practical implementation. How to build ethical considerations into your development workflow and decision-making process.",
      sections: [
        {
          id: "1.1",
          title: "Ethics as Code",
          content: `Ethical AI development requires embedding ethical considerations directly into the development process. This means creating frameworks, checklists, and automated checks that make ethical behavior the default path.

Rather than treating ethics as an afterthought, successful teams integrate ethical review into their definition of done, just like security and performance considerations.`
        },
        {
          id: "1.2",
          title: "Bias Detection and Mitigation",
          content: `Bias in AI systems often reflects biases in training data or model design. Detecting these biases requires systematic testing across different demographic groups and use cases.

Practical approaches include:
- Diverse training datasets with careful curation
- Regular bias testing with representative user groups
- Fairness metrics integrated into model evaluation
- Ongoing monitoring of model behavior in production`
        },
        {
          id: "1.3",
          title: "Transparency and Explainability",
          content: `Users have a right to understand how AI systems make decisions that affect them. This requires both technical transparency (how the model works) and operational transparency (how it's being used).

Implementation strategies:
- Model documentation and data cards
- Explanation interfaces for end users
- Clear disclosure of AI involvement in decision-making
- Regular algorithmic audits and public reporting`
        },
        {
          id: "1.4", 
          title: "Stakeholder Engagement",
          content: `Ethical AI development isn't just a technical challenge—it's a social one. Engaging with affected communities, domain experts, and ethicists throughout the development process leads to better outcomes.

Effective engagement includes:
- User research with diverse participant groups
- Advisory boards with domain expertise
- Public consultation on high-impact applications
- Iterative feedback loops with affected communities`
        }
      ]
    }
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  
  if (!slug || !blogPosts[slug as keyof typeof blogPosts]) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = blogPosts[slug as keyof typeof blogPosts];
  
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Engineering": "bg-primary-blue-light text-primary-blue",
      "Architecture": "bg-warm-orange-light text-warm-orange", 
      "AI Ethics": "bg-success/10 text-success"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-[1fr_300px] gap-8">
        {/* Main Content */}
        <article className="space-y-8">
          {/* Back Button */}
          <Button variant="ghost" asChild className="mb-4">
            <Link to="/blog">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Blog
            </Link>
          </Button>

          {/* Header */}
          <header className="space-y-6">
            <div className="flex items-center gap-4 text-sm text-academic-gray">
              <Badge className={getCategoryColor(post.category)}>
                {post.category}
              </Badge>
              <div className="flex items-center gap-1">
                <CalendarDays className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', { 
                  year: 'numeric', 
                  month: 'long', 
                  day: 'numeric' 
                })}
              </div>
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </div>
            </div>
            
            <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary leading-tight">
              {post.title}
            </h1>
            
            <p className="text-xl text-academic-gray leading-relaxed">
              {post.content.intro}
            </p>
            
            <div className="text-sm text-academic-gray">
              by <span className="font-medium">{post.author}</span>
            </div>
          </header>

          {/* Content Sections */}
          <div className="space-y-8">
            {post.content.sections.map((section) => (
              <section key={section.id} id={`section-${section.id}`} className="space-y-4">
                <h2 className="font-academic text-2xl font-semibold text-primary">
                  {section.id} {section.title}
                </h2>
                <div className="prose prose-lg max-w-none text-academic-gray leading-relaxed">
                  {section.content.split('\n\n').map((paragraph, index) => (
                    <p key={index} className="mb-4">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>

        {/* Table of Contents Sidebar */}
        <aside className="lg:sticky lg:top-8 lg:self-start">
          <Card className="academic-shadow">
            <CardContent className="p-6">
              <h3 className="font-academic text-lg font-semibold text-primary mb-4">
                Table of Contents
              </h3>
              <nav className="space-y-2">
                {post.content.sections.map((section) => (
                  <a
                    key={section.id}
                    href={`#section-${section.id}`}
                    className="block text-sm text-academic-gray hover:text-primary transition-colors py-1 border-l-2 border-transparent hover:border-primary pl-3"
                  >
                    {section.id} {section.title}
                  </a>
                ))}
              </nav>
            </CardContent>
          </Card>
        </aside>
      </div>
    </div>
  );
}