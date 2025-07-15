import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowLeft, Play, TrendingUp, Code, Link as LinkIcon, GraduationCap, ExternalLink, Linkedin, Users, Database, BookOpen, FlaskConical } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlogComments } from "@/components/BlogComments";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const blogPosts = {
  "art-of-code-review": {
    title: "The Art of Code Review: Building Better Software Through Collaboration",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Engineering",
    author: "Your Name",
    type: "blog",
    coverImage: undefined,
    tags: undefined,
    location: undefined,
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
  "ai-finance-conference": {
    title: "AI and Future of Finance",
    date: "2025-05-22",
    readTime: "15 min read", 
    category: "Conference",
    location: "Atlanta, Georgia",
    tags: ["FinTech"],
    author: "Sarvesh Tiku",
    type: "blog",
    coverImage: "/lovable-uploads/115f906d-35e9-456b-9154-cc254bbf56d3.png",
    content: {
      intro: "Last week, I attended Georgia Tech's AI & Future of Finance Conference organised by the Scheller College of Business—and it exceeded all my expectations. Over two days, I connected with fellow students, researchers, and C-suite leaders. Each conversation helped me understand and hear for myself the ways with which finance and technology intersect and how much potential for innovation still lies ahead.",
      sections: [
        {
          id: "1.1",
          title: "Introduction",
          content: `Hello! I'm Sarvesh Tiku, a Computer Science student at Georgia Tech with a passion for large language models, natural language processing, and—most recently—AI agents and agentic workflows. Writing this article, I was struck by just how seamlessly technology and finance intertwine, and I'm excited to share the insights I gathered at the conference.`
        },
        {
          id: "1.2",
          title: "How I Earned My Seat",
          content: `I'm constantly inspired by Georgia Tech's relentless drive for innovation. Special thanks to Jesse Sammons, Director of Corporate Engagement at Georgia Tech, for bringing Truist and AWS together for an Immersive Learning Experience. This event brought together interdisciplinary student teams to build AI-driven prototypes in just four hours. I'm grateful to Gauri Sharma for sharing this opportunity with me and for my selection to the Truist ILE program. My teammates—Vedika Singh, Anika Nallur, and I—created an AI-powered tour automation tool using Amazon S3 and Bedrock's generative AI architecture. We pitched our solution to Chandra Kapireddy, Firmwide Head of Gen AI, ML and Analytics @Truist and Truist design leaders, alongside AWS Solution architects. With support from Jesse, Eric Fender, Stephanie Ray, and Darren Price, we were later invited to the AI and Future of Finance Conference, where we shared the stage with Truist CEO Bill Rogers following Tech Talks Business, hosted by Scheller College of Business Dean Anuj Mehrotra.

(Side Note: I might have almost lost my iPad at the event if not for Jesse. Thanks a lot to you & Dev Patel for being my one call away friend with the most trustworthy driving skills!)`
        },
        {
          id: "1.3",
          title: "Fireside Chat with Andrew Schlossberg, Invesco CEO",
          content: `<img src="/lovable-uploads/72294e58-94dc-41fd-bfb0-16f632c96bbf.png" alt="Fireside chat with executives" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Tech Talks Business fireside chat featuring industry executives at Georgia Tech's Scheller College of Business AI & Future of Finance Conference</p>

Andrew Schlossberg, CEO of Invesco, laid out a practical playbook for deploying AI in asset management: start small, measure everything, and integrate compliance from the beginning. He opened with an example—a $500M bond portfolio pilot where a compact team leveraged a generative AI model to draft allocation summaries. By benchmarking AI outputs against analyst write-ups, they cut the reporting cycle from 48 hours to just six. Crucially, Invesco's legal and risk teams were embedded in weekly standups, vetting data sources, establishing guardrails, and ensuring end-to-end audit trails. "We avoided months of rework by building the compliance framework before the model," Schlossberg said.

He highlighted three fundamentals for leadership: balance principles with adaptability, maintain rigorous oversight in volatile markets, and be honest about setbacks. The session explored how AI, while still slow to integrate, is driving operational efficiency in asset management—especially when coupled with tight human oversight. Schlossberg discussed the emerging role of tokenization in democratizing investment access, emphasizing its potential to broaden private asset participation.

Market volatility, he noted, creates both risk and new opportunities for corporate spending and investment. Digital assets and ETFs are gaining traction, underlining the need for strong financial literacy. On geopolitical risk, he stressed that firms must adapt investment strategies to rapidly shifting global conditions.

In audience Q&A, Schlossberg forecasted that AI's greatest impact would be in personalized portfolios, but warned that success hinges on striking a balance between advanced technology and sound human judgment. He closed with a reminder: "Admit failure fast—your quickest course corrections become your biggest breakthroughs."`
        },
        {
          id: "1.4",
          title: "Fireside Chat with Bill Rogers, CEO of Truist",
          content: `<img src="/lovable-uploads/4a070806-d22a-403d-a36a-b439363a3064.png" alt="Bill Rogers CEO Truist at podium" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Bill Rogers, CEO of Truist, delivering insights on AI and financial services at Georgia Tech's AI & Future of Finance Conference</p>

Bill Rogers shared some refreshing thoughts on how they're approaching AI at Truist—not as a disruptor to fear, but as a tool that amplifies human capabilities. He emphasized that they're building AI to make their teammates more effective, not to replace them. "We're not automating people out," he said. "We're automating them up."

Rogers walked through Truist's measured approach to generative AI. They started with internal pilots—like using AI to help customer service reps quickly access account information and draft responses. The results? Faster resolution times and higher customer satisfaction scores. But what impressed me most was their focus on governance from day one. Every AI model goes through their "responsible AI" framework, which evaluates bias, fairness, and explainability before deployment.

When asked about the competitive landscape, Rogers was pragmatic. He acknowledged that smaller fintech startups can move faster on AI experimentation, but he sees Truist's scale and regulatory experience as advantages in building sustainable, compliant AI systems. "We're playing the long game," he noted. "When you're managing $550 billion in assets, you can't afford to break things and move fast."

The conversation touched on talent retention too. Rogers shared how Truist is investing in upskilling programs to help their workforce adapt to AI-augmented roles. Rather than fearing job displacement, he's seeing employees embrace AI tools that eliminate mundane tasks and let them focus on higher-value client interactions.

What struck me was his emphasis on partnership over competition. Truist collaborates with fintech companies and AI startups rather than trying to build everything in-house. "We're not trying to be a tech company," Rogers said. "We're trying to be the best bank we can be, enhanced by technology."`
        },
        {
          id: "1.5",
          title: "Keynote: Dr. Mark Riedl, Georgia Tech",
          content: `<img src="/lovable-uploads/abeea4d0-5cf9-4be3-a634-c509390e1996.png" alt="Dr. Mark Riedl presenting" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Dr. Mark Riedl, Professor at Georgia Tech's School of Interactive Computing, delivering his keynote on Human-Centered AI</p>

Dr. Mark Riedl's keynote was a masterclass in human-centered AI design. As a professor in Georgia Tech's School of Interactive Computing and director of the Entertainment Intelligence Lab, he brought a unique perspective on making AI systems that truly serve human needs.

His core message: "AI isn't about replacing human judgment—it's about augmenting human capabilities." He illustrated this with examples from his research on AI systems that help creative professionals. Rather than generating art or stories automatically, these tools help artists explore new ideas, overcome creative blocks, and iterate faster on their concepts.

Riedl emphasized the importance of explainable AI, especially in high-stakes domains like finance. "If an AI system recommends a trading strategy or flags a transaction as suspicious, we need to understand why," he said. He demonstrated techniques for making neural networks more interpretable, showing how attention mechanisms can highlight which data points influenced a model's decision.

The talk dove into the challenges of AI alignment—ensuring that AI systems behave in ways that align with human values and intentions. Riedl shared research on constitutional AI, where systems are trained to follow a set of principles that guide their behavior. "It's not enough for AI to be accurate," he noted. "It needs to be trustworthy, fair, and aligned with human goals."

One particularly interesting segment focused on AI's role in financial decision-making. Riedl discussed how human biases can creep into AI systems through training data and how careful design can actually help reduce these biases rather than amplify them. He showed examples of AI systems that prompt users to consider alternative perspectives before making decisions.

The keynote concluded with a call for interdisciplinary collaboration. "The best AI systems come from teams that include computer scientists, domain experts, ethicists, and end users," Riedl said. "We need diverse perspectives to build AI that truly serves humanity."`
        },
        {
          id: "1.6",
          title: "Panel: Regulating AI in Financial Services",
          content: `<img src="/lovable-uploads/56548e5e-77e7-4957-9afb-f84f7f734d21.png" alt="Regulatory panel discussion" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Panel discussion on AI regulation in financial services featuring industry experts and regulatory perspectives</p>

The regulatory panel brought together perspectives from banks, fintech companies, and policy experts to discuss the evolving landscape of AI governance in financial services. The conversation was moderated by Dr. Sudheer Chava from Georgia Tech's Scheller College of Business.

The panel opened with a discussion of existing regulatory frameworks and how they apply to AI systems. Panelists noted that while there isn't specific AI legislation yet, existing financial regulations around fairness, transparency, and risk management already provide substantial guidance for AI deployment.

A key theme was the balance between innovation and protection. One panelist from a major bank described their approach: "We're not waiting for perfect regulations. We're building responsible AI practices now, using existing frameworks as our foundation." They shared examples of internal governance structures, including AI ethics committees and regular model audits.

The fintech perspective was particularly interesting. A representative from a digital lending platform explained how they're using AI to expand access to credit while maintaining strict fairness standards. "AI allows us to consider non-traditional data sources that can help underserved populations," they said. "But we're constantly testing for bias and ensuring our models don't perpetuate historical inequities."

The discussion touched on international coordination too. Panelists noted that AI regulation needs to consider global financial markets and the risk of regulatory arbitrage. They emphasized the importance of industry standards and best practices that can evolve faster than formal legislation.

One of the most practical insights came from a discussion of explainable AI in regulatory contexts. Panelists agreed that financial institutions need to be able to explain AI-driven decisions to regulators, customers, and internal stakeholders. This is driving investment in interpretable models and explanation techniques.

The panel concluded with a call for continued dialogue between industry and regulators. "Regulation should enable innovation, not stifle it," one panelist noted. "We need ongoing conversation to ensure that AI governance keeps pace with technological advancement."`
        },
        {
          id: "1.7",
          title: "Student Perspectives on AI in Finance",
          content: `<img src="/lovable-uploads/968ba52c-8c72-4e2d-acd9-d0ef483b9a10.png" alt="Student panel discussion" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Student panel featuring diverse perspectives on AI applications in finance and career opportunities</p>

The student panel was one of my favorite sessions—it felt like a glimpse into the future of finance through the eyes of the next generation. Students from different backgrounds shared their perspectives on AI, from computer science majors building trading algorithms to business students exploring AI applications in wealth management.

One CS student presented her work on using natural language processing to analyze earnings call transcripts and predict stock movements. What impressed me wasn't just the technical sophistication, but her thoughtful approach to bias and overfitting. "Markets are complex," she said. "AI can find patterns, but we need to be careful not to confuse correlation with causation."

A business student shared his summer internship experience at a hedge fund, where he worked on an AI system for portfolio optimization. He described the challenge of balancing multiple objectives—returns, risk, ESG factors—and how AI helps explore the vast space of possible portfolio configurations. "It's not about letting AI make decisions," he explained. "It's about giving portfolio managers better tools to understand their options."

The panel also featured international students who brought global perspectives on AI adoption in finance. One student from India discussed how AI is democratizing financial services in emerging markets, enabling micro-lending and mobile banking for populations that traditional banks couldn't serve profitably.

Career advice was a major focus. Panelists emphasized the importance of interdisciplinary skills—combining technical knowledge with domain expertise and communication abilities. "You don't need to be the best programmer or the best finance student," one panelist noted. "But you need to speak both languages and understand how they connect."

The discussion also touched on ethics and responsibility. Students expressed genuine concern about ensuring AI systems are fair and beneficial. "We're going to inherit these systems," one student said. "We need to build them right from the start."

What struck me most was the optimism and pragmatism of these students. They see AI as a powerful tool for solving real problems, but they're also realistic about its limitations and risks. They're the generation that will shape how AI transforms finance.`
        },
        {
          id: "1.8",
          title: "Research Showcase: AI Applications",
          content: `<img src="/lovable-uploads/b34abccf-a523-4e06-ba5f-8a673c79e426.png" alt="Research poster session" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Research poster session showcasing cutting-edge AI applications in finance from Georgia Tech faculty and students</p>

The research showcase was a deep dive into the cutting-edge work happening at Georgia Tech and partner institutions. Faculty and graduate students presented posters on everything from algorithmic trading to fraud detection to sustainable finance.

One standout project used reinforcement learning to optimize trade execution. The researchers showed how their AI agent learns to minimize market impact when executing large orders, adapting to changing market conditions in real-time. What impressed me was their focus on real-world constraints—transaction costs, regulatory requirements, and market microstructure effects that academic models often ignore.

Another fascinating project applied graph neural networks to detect money laundering. By modeling financial transactions as a graph, the researchers could identify suspicious patterns that traditional rule-based systems miss. They showed how their approach catches previously undetected schemes while reducing false positives by 40%.

I spent significant time at a poster on AI-driven ESG (Environmental, Social, and Governance) investing. The researchers used satellite imagery and natural language processing to assess companies' environmental impact in real-time, going beyond self-reported data. "Companies can claim to be sustainable," the lead researcher explained, "but satellite data shows what's actually happening at their facilities."

A project on AI in insurance particularly caught my attention. The team developed a computer vision system that assesses property damage from photos, speeding up claims processing from weeks to hours. They emphasized the importance of fairness, showing how they tested their system across different geographic regions and property types to ensure equitable treatment.

The showcase also featured work on AI interpretability in finance. One project developed techniques for explaining the decisions of deep learning models used in credit scoring. "Regulation requires explainability," the researcher noted, "but we also think it makes better business sense. If you can't explain why a model made a decision, how can you trust it?"

What tied all these projects together was a focus on real-world impact and responsible deployment. These weren't just academic exercises—they were solutions to genuine problems in financial services, designed with careful attention to fairness, transparency, and regulatory compliance.`
        },
        {
          id: "1.9",
          title: "Networking and Industry Connections",
          content: `<img src="/lovable-uploads/f824f7f5-b38a-4fc8-b26c-829c3a25fffb.png" alt="Networking reception" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Networking reception bringing together students, faculty, and industry professionals to discuss AI innovations in finance</p>

The networking sessions were where the real magic happened. Over coffee breaks and the evening reception, I had conversations that shifted my perspective on AI in finance and opened doors I didn't even know existed.

I connected with a portfolio manager from a major asset management firm who shared insights on how AI is changing investment research. "We're not replacing analysts," he explained, "we're giving them superpowers. AI helps us process information faster and spot patterns we might miss, but human judgment is still crucial for making investment decisions."

A conversation with a fintech startup founder was particularly inspiring. She described building an AI-powered financial advisor for younger investors, focusing on education and long-term wealth building rather than just returns. "AI allows us to provide personalized advice at scale," she said, "but we're careful to build financial literacy, not just manage money."

I also met several Georgia Tech alumni working in AI roles at financial institutions. They emphasized the value of the interdisciplinary education they received and how it prepared them to bridge technical and business domains. "Understanding both the AI and the finance side makes you incredibly valuable," one alumnus noted.

The diversity of perspectives was striking. I talked with people working on everything from high-frequency trading to microfinance, from regulatory compliance to customer service. Each conversation revealed new applications of AI and new challenges to solve.

One of the most valuable discussions was with a group of students planning to start an AI-focused fintech company. We brainstormed ideas, discussed regulatory considerations, and talked about the importance of building diverse teams. "The best AI systems come from diverse perspectives," one student noted, "especially when you're dealing with financial decisions that affect people's lives."

The networking also led to concrete opportunities. I received invitations to visit several companies, offers to collaborate on research projects, and connections to alumni working in areas I'm interested in. But beyond the immediate benefits, these conversations gave me a clearer picture of where the field is heading and how I can contribute.`
        },
        {
          id: "1.10",
          title: "Key Takeaways and Future Outlook",
          content: `<img src="/lovable-uploads/c2718822-9515-40af-aebf-f7b833b9b12b.png" alt="Conference closing session" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Conference closing session summarizing key insights and future directions for AI in financial services</p>

As the conference wrapped up, several key themes emerged that I believe will shape the future of AI in finance:

**Human-AI Collaboration is the Future:** Every speaker emphasized that AI isn't replacing human expertise—it's augmenting it. The most successful applications combine AI's pattern recognition capabilities with human judgment, creativity, and ethical reasoning.

**Regulation is Evolution, Not Revolution:** Rather than waiting for new AI-specific regulations, financial institutions are adapting existing frameworks around fairness, transparency, and risk management. This pragmatic approach is enabling innovation while maintaining appropriate safeguards.

**Interdisciplinary Skills are Essential:** The professionals who will thrive in this space combine technical AI knowledge with deep domain expertise in finance. Communication skills are equally important—the ability to explain AI systems to stakeholders, regulators, and customers.

**Ethical AI is Good Business:** Beyond regulatory compliance, building fair and transparent AI systems is a competitive advantage. Companies that prioritize responsible AI development are building stronger customer relationships and reducing operational risks.

**Data Quality Trumps Algorithm Sophistication:** Multiple speakers emphasized that the most advanced AI algorithms are useless without high-quality, unbiased data. Significant investment in data infrastructure and governance is crucial for AI success.

**Personalization at Scale:** AI is enabling financial services to provide personalized experiences and advice at unprecedented scale. This democratization of financial services could significantly expand access to quality financial products.

Looking ahead, I'm excited about the possibilities. AI has the potential to make financial services more accessible, efficient, and fair. But realizing this potential requires thoughtful development, careful governance, and ongoing collaboration between technologists, financial professionals, and regulators.

The conference reinforced my passion for working at the intersection of AI and finance. I'm eager to contribute to building AI systems that not only generate returns but also create positive impact for individuals and society.`
        },
        {
          id: "1.11",
          title: "People Mentioned",
          content: "people-mentioned-section"
        }
      ]
    }
  }
};

// People mentioned data for the AI Finance Conference
const peopleMentioned = [
  {
    name: "Sudipta Sengupta",
    role: "Technology Professional",
    linkedin: "https://www.linkedin.com/in/sudiptasengupta/",
    category: "Industry Leaders"
  },
  {
    name: "Robbie Birbeck", 
    role: "Tech Professional",
    linkedin: "https://www.linkedin.com/in/robertbirbeck/",
    category: "Industry Leaders"
  },
  {
    name: "Allen Stewart",
    role: "Technology Executive",
    linkedin: "https://www.linkedin.com/in/allen-stewart/",
    category: "Industry Leaders"
  },
  {
    name: "Mark Riedl",
    role: "Professor, Georgia Tech School of Interactive Computing",
    linkedin: "https://www.linkedin.com/in/markriedl/",
    category: "Academic Leaders"
  },
  {
    name: "Andrew Schlossberg",
    role: "CEO, Invesco",
    linkedin: "#",
    category: "Executive Leaders"
  },
  {
    name: "Bill Rogers",
    role: "CEO, Truist",
    linkedin: "#",
    category: "Executive Leaders"
  },
  {
    name: "Jesse Sammons",
    role: "Director of Corporate Engagement, Georgia Tech",
    linkedin: "#",
    category: "Academic Leaders"
  },
  {
    name: "Chandra Kapireddy",
    role: "Firmwide Head of Gen AI, ML and Analytics, Truist",
    linkedin: "#",
    category: "Industry Leaders"
  }
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = slug ? blogPosts[slug as keyof typeof blogPosts] : null;

  if (!post) {
    return <Navigate to="/404" replace />;
  }

  const renderPeopleMentioned = () => {
    // Group people by category
    const categories = peopleMentioned.reduce((acc, person) => {
      if (!acc[person.category]) {
        acc[person.category] = [];
      }
      acc[person.category].push(person);
      return acc;
    }, {} as Record<string, typeof peopleMentioned>);

    return (
      <div className="space-y-8">
        {Object.entries(categories).map(([category, people]) => (
          <div key={category}>
            <h3 className="text-xl font-semibold mb-4 text-foreground">{category}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {people.map((person, index) => (
                <Card key={index} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h4 className="font-semibold text-foreground text-base">{person.name}</h4>
                        <p className="text-sm text-muted-foreground mt-1">{person.role}</p>
                      </div>
                      {person.linkedin !== "#" && (
                        <a
                          href={person.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-3 p-2 text-blue-600 hover:text-blue-800 transition-colors"
                          aria-label={`View ${person.name}'s LinkedIn profile`}
                        >
                          <Linkedin className="h-5 w-5" />
                        </a>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderSection = (section: any) => {
    if (section.content === "people-mentioned-section") {
      return renderPeopleMentioned();
    }
    
    return (
      <div 
        className="prose prose-gray max-w-none dark:prose-invert"
        dangerouslySetInnerHTML={{ __html: section.content }}
      />
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Back button */}
        <Link to="/blog" className="inline-flex items-center text-muted-foreground hover:text-foreground mb-6 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>

        {/* Header */}
        <header className="mb-8">
          {post.coverImage && (
            <img 
              src={post.coverImage} 
              alt={post.title}
              className="w-full h-64 object-cover rounded-lg mb-6"
            />
          )}
          
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary">{post.category}</Badge>
            {post.tags?.map((tag) => (
              <Badge key={tag} variant="outline">{tag}</Badge>
            ))}
          </div>
          
          <h1 className="text-4xl font-bold text-foreground mb-4">{post.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 text-muted-foreground text-sm">
            <div className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4" />
              <span>{new Date(post.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <span>By {post.author}</span>
            </div>
            {post.location && (
              <div className="flex items-center gap-2">
                <span>{post.location}</span>
              </div>
            )}
          </div>
        </header>

        {/* Content */}
        <article className="prose prose-gray max-w-none dark:prose-invert">
          <div className="text-lg text-muted-foreground mb-8 leading-relaxed">
            {post.content.intro}
          </div>

          {post.content.sections.map((section, index) => (
            <section key={section.id} className="mb-12">
              <h2 className="text-2xl font-semibold text-foreground mb-6" id={section.id}>
                {section.title}
              </h2>
              {renderSection(section)}
            </section>
          ))}
        </article>

        {/* Comments */}
        <div className="mt-16 pt-8 border-t border-border">
          <BlogComments />
        </div>
      </div>
    </div>
  );
}