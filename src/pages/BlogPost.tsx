import { useParams, Navigate } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CalendarDays, Clock, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BlogComments } from "@/components/BlogComments";

const blogPosts = {
  "art-of-code-review": {
    title: "The Art of Code Review: Building Better Software Through Collaboration",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "Engineering",
    author: "Your Name",
    type: "blog",
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
    title: "Stripe Sessions Conference: The Future of Commerce",
    date: "2024-01-08", 
    readTime: "15 min read",
    category: "Conference",
    author: "Sarvesh",
    type: "blog",
    content: {
      intro: "Stripe Sessions 2025 opened with a striking statistic: over 2 million U.S. businesses—6 percent of all companies, including half of the Fortune 100—now run on Stripe's platform. Here are my key takeaways from the conference.",
      sections: [
        {
          id: "1.1",
          title: "Opening Keynote – The Future of Commerce",
          image: "/lovable-uploads/fe62777b-91de-4345-ac8f-b4d2a298f0a4.png",
          imageCaption: "Patrick and John Collison explore the internet economy's rapid evolution, spotlight Stripe's fastest-growing companies, and identify AI and stablecoins as the twin tailwinds powering the next decade of global commerce.",
          content: `Patrick and John Collison explore the internet economy's rapid evolution, spotlight Stripe's fastest-growing companies, and identify AI and stablecoins as the twin tailwinds powering the next decade of global commerce.

Stripe Sessions 2025 opened with a striking statistic: over 2 million U.S. businesses—6 percent of all companies, including half of the Fortune 100—now run on Stripe's platform. The pace of scale is staggering too, with more than 80 companies each month leaping from $1M to $10M ARR in 2024 alone—a rate that's more than tripled since 2018. Even more telling, the top AI-powered businesses on Stripe retain new users slightly better over a 12-month window than their SaaS peers, underscoring AI's stickiness in real-world products. In a live demo, a Cursor-driven agent parsed "add Vercel's advanced bot protection" and instantly scaffolded the code right inside a Next.js editor. And to cap it off, they hooked up a fully functional $10/month Checkout Link hosted on Stripe inside the same workflow—no backend glue required.`
        },
        {
          id: "1.2",
          title: "Meta's Autonomy Mantra", 
          image: "/lovable-uploads/4685ec1c-467d-4eed-9286-53c7396346d4.png",
          imageCaption: '"You can\'t hire trust. You have to build it." – Mark Zuckerberg',
          content: `Zuckerberg flipped the idea that scaling means letting go. He argued real autonomy comes from a strong nucleus—a constant feedback loop of quick strategy check-ins and rapid decision reviews that keep every team aligned and prevent feature drift.

Stripe mirrors this in its architecture: Connect and Radar push intelligence out to the edge—blocking fraud and routing payments locally—yet they all report back to a central control plane. That core layer enforces policies, gathers metrics, and ensures every service stays in sync.

To me this all connected back to how AI agents work: they pull in the right context, cache hot data for speed, and run tasks in parallel, all under a governance shell that logs every move and enforces rules. Yank out that central shell, and your edge nodes—whether payment services or bots—drift apart, creating blind spots and compliance risks.

"You can't hire trust. You have to build it." – Mark Zuckerberg`
        },
        {
          id: "1.3", 
          title: "Customer-First at Amazon Pay",
          content: `Natalia Finelli De Moraes kicked off by reminding us that at Amazon, every new idea starts with the customer—not the roadmap or the org chart. Their signature "working backward" process means teams draft a mock press release and FAQ before writing a single line of code. This forces laser focus on real user value from day one. Decisions are treated as "two-way doors": reversible bets get fast feedback loops, while high-stakes launches go through rigorous peer "bar raiser" reviews. Narrative-driven memos replace slide decks in leadership meetings, ensuring clarity and context flow through every layer of the business.

She went on to show how Amazon Pay scales this by empowering small, autonomous two-pizza teams with end-to-end ownership—each squad owns its customer metrics, live dashboards, and A/B testing pipelines. Real-time analytics on transaction success rates, dispute volumes, and funnel drop-offs feed into those dashboards, so every engineer and product manager stays tuned to customer pain points.

We wrapped up the session with Werner Gropp, Senior Product Marketing Manager at Amazon, who pulled back the curtain on how Amazon Pay plugs into this customer-first engine. What struck me most was how this model scales seamlessly: Werner described a recent pilot where an AI-driven recommendations agent used payment history and browsing patterns to suggest dynamic promotions—rolled out to 5,000 users in hours, iterated on within days, and delivered a 12% lift in conversion.`
        },
        {
          id: "1.4",
          title: "API Deep Dive: Thin Events",
          content: `In the webhook deep dive, the Stripe team unveiled Thin Events, a streamlined way to receive webhook notifications with minimal payload and maximum flexibility. Instead of sending your entire object every time—often bloating your queues—Stripe now emits a lightweight event signal containing only the ID and essential metadata.

Your endpoint can then: 
• Skip version pins: You no longer need to lock your webhook URL to a specific API version. 
• Fetch on demand: Decide at runtime whether to pull the full event or directly retrieve the related API object. 
• Upgrade safely: With the payload pared down, moving between API versions becomes far less risky. 

The result is a faster, leaner webhook flow that's easier to maintain and upgrade—so you can spend less time wrestling with payload sizes and version mismatches, and more time shipping features.

I learned that Stripe's thin events strip webhook payloads down to just the IDs and essential metadata, letting you fetch full objects on demand and drop API-version pins from your endpoints. In my PermitPal agent orchestrator, I can use this pattern to receive lightweight signals for payment or permit-status changes and then call Stripe's API only when I actually need the invoice or payment-intent details.`
        },
        {
          id: "1.5",
          title: "VSaaS Growth Playbook",
          content: `"Control point dominance = high retention." — Andrew Walsh (Tidemark)

In their Tidemark benchmark session, Ethan Senturia, Andrew Walsh, and Christian DiCarlo distilled a clear three-step VSaaS playbook: win your category, expand your offerings, and extend through the value chain. The follow-up "own the control point" framework is essential to why that first win matters—owning a core touchpoint (like payments, scheduling, or analytics) directly translates into higher retention and creates multiproduct upsell paths.

My takeaways from it were to turn your core workflow into a control point, then build everything else around it. For trades businesses like plumbing and electrical services, that control point is the scheduling calendar—every job booked, every slot filled, flows into real-time insights on cash-flow, resource planning, and hiring needs. Embed Stripe's payments and reporting into that same interface, and you not only lock in stickier retention, you open doors to upsells (subscriptions, financing) without bloating your codebase.`
        },
        {
          id: "1.6",
          title: "Stablecoins: Moving Like Cash?",
          content: `"Our North Star is getting stablecoins to be treated as cash across all these different dimensions."

Ever sent money overseas only to watch it creep along for days? Stablecoins promised to change that—instant, low-cost cross-border payments on a global digital rail. 

But as our expert panel laid out, the road to true interoperability still has potholes. First, regulatory clarity is key. Erica Khalili of Lead Bank reminded us how murky rules once scared off banks and customers alike. Now, as clear standards emerge, stablecoins start to shed their "digital-asset drama" and win real-world trust. 

On the ground in Africa, Chris Maurice of Yellow Card showed how stablecoins already pave "dirt roads" into the global banking superhighways—unlocking commerce for merchants with no SWIFT connections. Looking ahead to 2030, we should expect a two-tier market: a handful of "ecosystem" stablecoins with deep liquidity alongside a long tail of app-specific tokens. But the real victory will be when it doesn't matter which token you use—you just click "pay," and your dollars move like cash.`
        },
        {
          id: "1.7",
          title: "Acknowledgments",
          content: `I owe a huge thanks to Tanisha, my CS 2110 & Grand Challenges survivor at Georgia Tech, for joining me on my official second day in San Francisco. We dived into tough questions with booth partners and had our little brain rot breaks that kept us sane and happy that we still have time to figure things out. When we spotted that 30-minute photobooth line, we laughed it off and moved on (no headshots, but plenty of gossip!), and those Klarna bonbon treats made our networking even sweeter. Thanks for keeping me energized and inspired every step of the way! I miss you Tanisha <3

• To everyone who shared a kind word
• To everyone who stopped by and listened  
• To everyone who offered genuine advice
Thank you, it truly means a lot to me!

People Mentioned: 
• Werner Gropp: https://www.linkedin.com/in/wernergropp/
• Josh Kliot: https://www.linkedin.com/in/joshkliot/`
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
    type: "blog",
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
  },
  // Newsletter content
  "newsletter/summer-reflections-june": {
    title: "Summer Reflections & New Beginnings",
    date: "2024-06-15",
    readTime: "5 min read",
    category: "Issue #1",
    author: "Your Name",
    type: "newsletter",
    content: {
      intro: "Summer internship reflections, new projects I'm excited about, and books I'm reading during the break. Plus insights into balancing research with industry work.",
      sections: [
        {
          id: "1.1",
          title: "Summer Internship Deep Dive",
          content: `This summer's internship has been a fascinating blend of cutting-edge research and practical application. Working on distributed systems at scale has given me a new appreciation for the complexity that emerges when theoretical concepts meet real-world constraints.

The most valuable lesson so far? The importance of observability. When your system spans multiple services and data centers, understanding what's happening becomes exponentially more difficult—and exponentially more critical.`
        },
        {
          id: "1.2",
          title: "Reading List & Learning",
          content: `I've been diving deep into some incredible books this summer:

• "Designing Data-Intensive Applications" by Martin Kleppmann - A masterclass in understanding the fundamentals that power modern systems
• "Atomic Habits" by James Clear - Surprisingly relevant to engineering practices and code quality
• "The Design of Everyday Things" by Don Norman - Changing how I think about user interfaces and developer tools

Each book is teaching me something different about building systems that people actually want to use.`
        },
        {
          id: "1.3",
          title: "New Projects on the Horizon",
          content: `I'm excited about several projects taking shape:

A personal dashboard for tracking reading progress and research notes - combining my love of books with some fun frontend work. Planning to use React with a clean, academic-inspired design.

Research into improving code review processes through better tooling. There's so much potential to make reviews more effective and less painful for everyone involved.

Contributing to open source projects in the distributed systems space. Nothing beats learning by doing, especially when you can give back to the community.`
        }
      ]
    }
  },
  "newsletter/distributed-systems-july": {
    title: "Deep Dive: Distributed Systems & Conference Highlights",
    date: "2024-07-15",
    readTime: "7 min read",
    category: "Issue #2", 
    author: "Your Name",
    type: "newsletter",
    content: {
      intro: "A technical deep dive into distributed systems, conference highlights from recent events, and summer coding challenges I've been tackling.",
      sections: [
        {
          id: "1.1",
          title: "The Reality of Consensus Protocols",
          content: `After months of working with distributed systems in production, I've gained a new appreciation for consensus protocols like Raft and PBFT. The gap between theory and practice is fascinating.

In theory, these protocols are elegant solutions to fundamental problems. In practice, network partitions happen at the worst possible times, clocks drift more than you expect, and debugging distributed consensus issues requires a whole new level of patience.

The key insight: design for observability from day one. If you can't understand what your consensus protocol is doing when things go wrong, you're in for a very long debugging session.`
        },
        {
          id: "1.2",
          title: "Conference Learnings: Strange Loop 2024",
          content: `Strange Loop was incredible this year. Some standout talks that changed how I think about systems:

"The Database Inside Your Database" - A deep dive into how modern databases handle concurrency and consistency. Made me realize how much magic happens under the hood of seemingly simple operations.

"Chaos Engineering: Breaking Things on Purpose" - Practical strategies for building resilient systems by intentionally introducing failures. The key is starting small and building confidence gradually.

"Performance Engineering as a Mindset" - Not just about optimization, but about designing systems that can be optimized. Architecture decisions early on determine what's possible later.`
        },
        {
          id: "1.3",
          title: "Summer Coding Challenges",
          content: `I've been working through some fascinating technical challenges:

Building a toy distributed cache to understand cache coherence protocols. Nothing teaches you about distributed systems like implementing one yourself, even if it's just for learning.

Implementing Raft consensus from scratch. The paper makes it look straightforward, but the edge cases are where the real learning happens.

Performance testing and optimization of a high-throughput message queue. Learning that sometimes the biggest performance gains come from understanding your hardware, not just your algorithms.

Each challenge is teaching me something new about the trade-offs that define distributed systems design.`
        }
      ]
    }
  },
  "newsletter/ai-ethics-august": {
    title: "Research Updates & AI Ethics in Practice",
    date: "2024-08-15",
    readTime: "6 min read",
    category: "Issue #3",
    author: "Your Name", 
    type: "newsletter",
    content: {
      intro: "Latest research updates, side project launches, and my evolving thoughts on the future of AI ethics in software development.",
      sections: [
        {
          id: "1.1",
          title: "Research Progress: Bias Detection in ML Pipelines",
          content: `My summer research project is focusing on automated bias detection in machine learning pipelines. The goal is to build tools that can catch potential fairness issues before models reach production.

The most interesting finding so far: bias often emerges not from the model itself, but from the data preprocessing steps. Feature selection, normalization, and even seemingly innocent operations like handling missing values can introduce or amplify bias in unexpected ways.

We're building a framework that tracks potential bias-introducing operations throughout the ML pipeline and suggests alternative approaches. Early results are promising, but there's still so much work to do.`
        },
        {
          id: "1.2",
          title: "Side Project: Ethical AI Toolkit",
          content: `I've been working on an open-source toolkit for developers who want to integrate ethical considerations into their AI development process. Think of it as a linter, but for ethics.

The toolkit includes:
• Bias detection tests that integrate with existing testing frameworks
• Documentation templates for model cards and data sheets
• Guidelines for ethical review processes
• Automated checks for common fairness metrics

The goal isn't to solve AI ethics (that's impossible), but to make ethical development practices as easy as possible for working developers. If it's hard to do the right thing, people won't do it.`
        },
        {
          id: "1.3",
          title: "Looking Forward: The Future of Responsible AI",
          content: `As AI becomes more integrated into everyday software, I'm convinced that ethical considerations need to become as routine as security and performance testing.

This means building tools, processes, and education that make ethical AI development the default path, not an extra burden. It means engaging with affected communities throughout the development process, not just at the end.

Most importantly, it means recognizing that ethical AI isn't just a technical problem—it's a social one that requires diverse perspectives and ongoing dialogue.

The future I'm working toward is one where ethical considerations are built into the development process so seamlessly that they feel natural rather than imposed.`
        }
      ]
    }
  },
  "newsletter/open-source-september": {
    title: "Building in Public: Lessons from Open Source",
    date: "2024-09-15",
    readTime: "8 min read",
    category: "Issue #4",
    author: "Your Name",
    type: "newsletter",
    content: {
      intro: "Reflections on contributing to open source projects, building developer tools, and the importance of community in software development.",
      sections: [
        {
          id: "1.1",
          title: "The Open Source Journey",
          content: `Contributing to open source has been one of the most rewarding aspects of my development journey. It's not just about code—it's about joining a global community of builders who believe in sharing knowledge and tools.

My first meaningful contribution was fixing a documentation bug. Simple? Yes. But it taught me the importance of clear communication, following contribution guidelines, and respecting maintainer time.

Since then, I've contributed to everything from distributed systems libraries to developer productivity tools. Each project teaches you something new about code quality, project management, and collaboration at scale.`
        },
        {
          id: "1.2",
          title: "Building Developer Tools That Matter",
          content: `Working on developer tools has given me a deep appreciation for the user experience of programming itself. Good tools disappear into the background, while bad tools make every task feel like a struggle.

Current projects I'm excited about:
• A CLI tool for managing distributed development environments
• VS Code extensions for better code review workflows  
• Performance profiling tools for Node.js applications

The key insight: the best developer tools solve problems you didn't even realize you had. They make complex tasks simple and tedious tasks automatic.`
        },
        {
          id: "1.3",
          title: "Community and Collaboration",
          content: `The open source community has taught me that great software is rarely built in isolation. Code reviews, issue discussions, and feature debates all contribute to better outcomes than any individual could achieve alone.

What makes a healthy open source project:
- Clear contribution guidelines and code of conduct
- Responsive maintainers who value community input
- Documentation that welcomes new contributors
- A culture of learning and mentorship

The goal isn't just to build software—it's to build sustainable communities that can maintain and improve that software over time.`
        }
      ]
    }
  },
  "newsletter/future-work-october": {
    title: "The Future of Work in Tech: Remote, Hybrid, and Beyond",
    date: "2024-10-15",
    readTime: "6 min read",
    category: "Issue #5",
    author: "Your Name",
    type: "newsletter",
    content: {
      intro: "Exploring the evolving landscape of remote work, collaboration tools, and what the future holds for distributed teams in technology.",
      sections: [
        {
          id: "1.1", 
          title: "The Remote Work Revolution",
          content: `Three years post-pandemic, remote work has fundamentally changed how we think about collaboration, productivity, and work-life balance. It's not just a temporary adaptation—it's a permanent shift in how software teams operate.

The benefits are clear: access to global talent, reduced commute stress, and more flexible schedules. But the challenges are real too: coordination across time zones, maintaining team culture, and ensuring junior developers get the mentorship they need.

The most successful remote teams I've worked with treat distributed collaboration as a skill to be developed, not just a constraint to be managed.`
        },
        {
          id: "1.2",
          title: "Tools That Enable Distributed Teams",
          content: `The tooling landscape for remote work has exploded in sophistication. We've moved beyond basic video calls to rich collaborative environments that can almost replicate in-person interaction.

Game-changing tools I've been using:
• Figma for real-time design collaboration
• Linear for project management that actually helps rather than hinders
• Tuple for pair programming that feels natural
• Notion for team knowledge management

The pattern I see: the best remote tools don't just digitize in-person processes—they create new workflows that are often better than what was possible in person.`
        },
        {
          id: "1.3",
          title: "What's Next for Distributed Work",
          content: `Looking ahead, I think we're moving toward a model where physical location becomes just one factor in how teams organize, rather than the defining constraint.

Emerging trends to watch:
- Async-first communication becoming the default
- Virtual reality meetings moving beyond novelty to utility
- AI assistants helping coordinate across time zones
- "Work from anywhere" policies becoming competitive advantages

The future of work isn't just remote—it's about building systems and cultures that work regardless of where people happen to be sitting.`
        }
      ]
    }
  },
  "newsletter/year-end-november": {
    title: "Year-End Reflections: Growth, Challenges, and What's Next",
    date: "2024-11-15",
    readTime: "7 min read",
    category: "Issue #6",
    author: "Your Name",
    type: "newsletter",
    content: {
      intro: "Looking back on a year of learning, the challenges that shaped my thinking, and exciting plans for the year ahead.",
      sections: [
        {
          id: "1.1",
          title: "A Year of Technical Growth",
          content: `This year has been a masterclass in learning by doing. From implementing distributed consensus algorithms to building production ML pipelines, each project has pushed me out of my comfort zone.

The biggest technical lesson: distributed systems are hard because they make visible all the assumptions you didn't realize you were making. Every network call can fail, every clock can drift, and every service can become unavailable at the worst possible moment.

But that complexity is also what makes distributed systems fascinating. Building resilient systems requires thinking carefully about failure modes, designing for observability, and embracing uncertainty rather than fighting it.`
        },
        {
          id: "1.2",
          title: "Challenges That Shaped My Thinking",
          content: `The hardest problems this year weren't technical—they were human. How do you maintain code quality when shipping fast? How do you balance technical debt against new features? How do you make technical decisions when the requirements are unclear?

These challenges taught me that engineering isn't just about building systems—it's about building systems that people can understand, maintain, and evolve over time.

The most valuable skill I've developed this year: knowing when to write more code and when to delete existing code. Sometimes the best solution is the simplest one, even if it's not the most clever.`
        },
        {
          id: "1.3",
          title: "Looking Ahead: 2025 Plans",
          content: `Next year, I'm excited to dive deeper into several areas:

Research: Continuing work on bias detection in ML pipelines, with a focus on practical tools that developers can actually use.

Open Source: Launching the ethical AI toolkit and contributing more meaningfully to distributed systems projects.

Writing: More technical deep-dives and tutorials, plus expanding this newsletter to cover emerging technologies and their social implications.

Learning: Planning to explore quantum computing fundamentals and dive deeper into systems programming with Rust.

The goal isn't just to learn more—it's to build things that matter and share knowledge that helps others build better systems too.`
        }
      ]
    }
  }
};

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const location = window.location.pathname;
  
  // Construct the full slug for newsletter articles
  const fullSlug = location.includes('/newsletter/') ? `newsletter/${slug}` : slug;
  
  if (!fullSlug || !blogPosts[fullSlug as keyof typeof blogPosts]) {
    return <Navigate to="/blog" replace />;
  }
  
  const post = blogPosts[fullSlug as keyof typeof blogPosts];
  
  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Engineering": "bg-primary-blue-light text-primary-blue",
      "Architecture": "bg-warm-orange-light text-warm-orange", 
      "AI Ethics": "bg-success/10 text-success",
      "Issue #1": "bg-warm-orange-light text-warm-orange",
      "Issue #2": "bg-warm-orange-light text-warm-orange", 
      "Issue #3": "bg-warm-orange-light text-warm-orange",
      "Issue #4": "bg-warm-orange-light text-warm-orange",
      "Issue #5": "bg-warm-orange-light text-warm-orange",
      "Issue #6": "bg-warm-orange-light text-warm-orange"
    };
    return colors[category] || "bg-warm-orange-light text-warm-orange";
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
                {(section as any).image && (
                  <div className="space-y-3">
                    <img 
                      src={(section as any).image} 
                      alt={(section as any).imageCaption || section.title}
                      className="w-full rounded-lg academic-shadow"
                    />
                    {(section as any).imageCaption && (
                      <p className="text-sm text-academic-gray italic text-center">
                        {(section as any).imageCaption}
                      </p>
                    )}
                  </div>
                )}
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

          {/* Comments Section */}
          <div className="mt-12">
            <BlogComments />
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