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
    date: "2025-05-09", 
    readTime: "15 min read",
    category: "Conference",
    author: "Sarvesh",
    location: "San Francisco, California",
    type: "blog",
    content: {
      intro: "Stripe Sessions 2025 opened with a striking statistic: over 2 million U.S. businesses—6 percent of all companies, including half of the Fortune 100—now run on Stripe's platform. Here are my key takeaways from the conference.",
      sections: [
        {
          id: "1.1",
          title: "Opening Keynote – The Future of Commerce",
          image: "/lovable-uploads/fe62777b-91de-4345-ac8f-b4d2a298f0a4.png",
          imageCaption: "Patrick and John Collison chart the internet economy's rapid evolution, spotlight Stripe's breakout firms, and name AI and stablecoins the engines driving the next decade of commerce.",
          content: `Stripe Sessions 2025 opened with a striking statistic: over 2 million U.S. businesses—6 percent of all companies, including half of the Fortune 100—now run on Stripe's platform. The pace of scale is staggering too, with more than 80 companies each month leaping from $1M to $10M ARR in 2024 alone—a rate that's more than tripled since 2018. Even more telling, the top AI-powered businesses on Stripe retain new users slightly better over a 12-month window than their SaaS peers, underscoring AI's stickiness in real-world products. In a live demo, a Cursor-driven agent parsed "add Vercel's advanced bot protection" and instantly scaffolded the code right inside a Next.js editor. And to cap it off, they hooked up a fully functional $10/month Checkout Link hosted on Stripe inside the same workflow—no backend glue required.`
        },
        {
          id: "1.2",
          title: "Meta's Autonomy Mantra", 
          image: "/lovable-uploads/4685ec1c-467d-4eed-9286-53c7396346d4.png",
          imageCaption: '"You can\'t hire trust. You have to build it." – Mark Zuckerberg',
          content: `Zuckerberg flipped the idea that scaling means letting go. He argued real autonomy comes from a strong nucleus—a constant feedback loop of quick strategy check-ins and rapid decision reviews that keep every team aligned and prevent feature drift.

Stripe mirrors this in its architecture: Connect and Radar push intelligence out to the edge—blocking fraud and routing payments locally—yet they all report back to a central control plane. That core layer enforces policies, gathers metrics, and ensures every service stays in sync.

To me this all connected back to how AI agents work: they pull in the right context, cache hot data for speed, and run tasks in parallel, all under a governance shell that logs every move and enforces rules. Yank out that central shell, and your edge nodes—whether payment services or bots—drift apart, creating blind spots and compliance risks.`
        },
        {
          id: "1.3", 
          title: "Customer-First at Amazon Pay",
          image: "/lovable-uploads/b77e6ce9-824c-4f8c-b0df-85a72e913480.png",
          imageCaption: "Left: Me, Werner Gropp, and Tanisha catching up at the Amazon Pay booth | Right: Natalia Finelli De Moraes on the Stripe Sessions main stage, sharing how Amazon's \"working backward\" process keeps every feature relentlessly focused on customer value.",
          content: `Natalia Finelli De Moraes kicked off by reminding us that at Amazon, every new idea starts with the customer—not the roadmap or the org chart. Their signature "working backward" process means teams draft a mock press release and FAQ before writing a single line of code. This forces laser focus on real user value from day one. Decisions are treated as "two-way doors": reversible bets get fast feedback loops, while high-stakes launches go through rigorous peer "bar raiser" reviews. Narrative-driven memos replace slide decks in leadership meetings, ensuring clarity and context flow through every layer of the business.

She went on to show how Amazon Pay scales this by empowering small, autonomous two-pizza teams with end-to-end ownership—each squad owns its customer metrics, live dashboards, and A/B testing pipelines. Real-time analytics on transaction success rates, dispute volumes, and funnel drop-offs feed into those dashboards, so every engineer and product manager stays tuned to customer pain points.

We wrapped up the session with Werner Gropp, Senior Product Marketing Manager at Amazon, who pulled back the curtain on how Amazon Pay plugs into this customer-first engine. What struck me most was how this model scales seamlessly: Werner described a recent pilot where an AI-driven recommendations agent used payment history and browsing patterns to suggest dynamic promotions—rolled out to 5,000 users in hours, iterated on within days, and delivered a 12% lift in conversion.`
        },
        {
          id: "1.4",
          title: "API Deep Dive: Thin Events",
          image: "/lovable-uploads/0ce3ca2c-0ce9-4f10-82b7-790853f1e061.png",
          imageCaption: "Stripe's Thin Events presentation showcasing the streamlined approach to webhook notifications with minimal payload and maximum flexibility.",
          content: `In the webhook deep dive, the Stripe team unveiled Thin Events, a streamlined way to receive webhook notifications with minimal payload and maximum flexibility. Instead of sending your entire object every time—often bloating your queues—Stripe now emits a lightweight event signal containing only the ID and essential metadata.

Your endpoint can then:

1. <strong>Skip version pins:</strong> You no longer need to lock your webhook URL to a specific API version.

2. <strong>Fetch on demand:</strong> Decide at runtime whether to pull the full event or directly retrieve the related API object.

3. <strong>Upgrade safely:</strong> With the payload pared down, moving between API versions becomes far less risky.

The result is a faster, leaner webhook flow that's easier to maintain and upgrade—so you can spend less time wrestling with payload sizes and version mismatches, and more time shipping features.

I learned that Stripe's thin events strip webhook payloads down to just the IDs and essential metadata, letting you fetch full objects on demand and drop API-version pins from your endpoints. I've been building <a href="/projects" class="text-blue-600 hover:text-blue-800 underline">PermitPal</a>—an agent that automates permit applications and tracks their progress for San Francisco homeowners. After hearing the talk, it occurred to me that PermitPal's orchestrator can subscribe to lightweight signals for payment or permit-status changes and only invoke Stripe's API when it actually needs full invoice or payment-intent details.`
        },
        {
          id: "1.5",
          title: "VSaaS Growth Playbook",
          image: "/lovable-uploads/5f2745fb-077e-4e1d-b337-215a384fb375.png",
          imageCaption: "\"Control point dominance = high retention.\" — Andrew Walsh (Tidemark)",
          content: `In their Tidemark benchmark session, Ethan Senturia, Andrew Walsh, and Christian DiCarlo distilled a clear three-step VSaaS playbook: win your category, expand your offerings, and extend through the value chain. The follow-up "own the control point" framework is essential to why that first win matters—owning a core touchpoint (like payments, scheduling, or analytics) directly translates into higher retention and creates multiproduct upsell paths.

My takeaways from it were to turn your core workflow into a control point, then build everything else around it. For trades businesses like plumbing and electrical services, that control point is the scheduling calendar—every job booked, every slot filled, flows into real-time insights on cash-flow, resource planning, and hiring needs. Embed Stripe's payments and reporting into that same interface, and you not only lock in stickier retention, you open doors to upsells (subscriptions, financing) without bloating your codebase.`
        },
        {
          id: "1.6",
          title: "Stablecoins: Moving Like Cash?",
          image: "/lovable-uploads/bce9274b-6770-4719-b136-4397838df642.png",
          imageCaption: "\"Our North Star is getting stablecoins to be treated as cash across all these different dimensions.\"",
          content: `Ever sent money overseas only to watch it creep along for days? Stablecoins promised to change that—instant, low-cost cross-border payments on a global digital rail. 

But as our expert panel laid out, the road to true interoperability still has potholes. First, regulatory clarity is key. Erica Khalili of Lead Bank reminded us how murky rules once scared off banks and customers alike. Now, as clear standards emerge, stablecoins start to shed their "digital-asset drama" and win real-world trust. 

On the ground in Africa, Chris Maurice of Yellow Card showed how stablecoins already pave "dirt roads" into the global banking superhighways—unlocking commerce for merchants with no SWIFT connections. Looking ahead to 2030, we should expect a two-tier market: a handful of "ecosystem" stablecoins with deep liquidity alongside a long tail of app-specific tokens. But the real victory will be when it doesn't matter which token you use—you just click "pay," and your dollars move like cash.`
        },
        {
            id: "1.7",
            title: "Acknowledgments",
            image: "/lovable-uploads/e1061868-c1fd-454c-ab55-6b0681d22d6a.png",
            content: `I owe a huge thanks to Tanisha, my CS 2110 & Grand Challenges survivor at Georgia Tech, for joining me on my official second day in San Francisco. We dived into tough questions with booth partners and had our little brain rot breaks that kept us sane and happy that we still have time to figure things out. When we spotted that 30-minute photobooth line, we laughed it off and moved on (no headshots, but plenty of gossip!), and those Klarna bonbon treats made our networking even sweeter. Thanks for keeping me energized and inspired every step of the way! I miss you Tanisha <3

To everyone who shared a kind word; To everyone who stopped by and listened; To everyone who offered genuine advice; Thank you, it truly means a lot to me!`
          },
        {
          id: "1.8",
          title: "People Mentioned",
          content: "people-mentioned-section"
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

(PS: Almost lost my iPad at the Truist ILE event. Thanks a lot to Jesse for keeping it safe. Big shoutout to Gauri & Dev Patel being my literal one call away friends, my baby iPad would not have made if not for the both of you!)`
        },
        {
          id: "1.3",
          title: "Fireside Chat with Andrew Schlossberg, Invesco CEO",
          content: `<img src="/lovable-uploads/72294e58-94dc-41fd-bfb0-16f632c96bbf.png" alt="Fireside chat with executives" class="w-full rounded-lg mb-4" />
<p class="text-sm text-gray-600 italic text-center mb-6">Tech Talks Business fireside chat featuring Invesco CEO, Andrew Schlossberg and Dean fo Scheller College of Busniness Anuj Mehrotra</p>

Andrew Schlossberg, CEO of Invesco, laid out a practical playbook for deploying AI in asset management: start small, measure everything, and integrate compliance from the beginning. He opened with an example—a $500M bond portfolio pilot where a compact team leveraged a generative AI model to draft allocation summaries. By benchmarking AI outputs against analyst write-ups, they cut the reporting cycle from 48 hours to just six. Crucially, Invesco's legal and risk teams were embedded in weekly standups, vetting data sources, establishing guardrails, and ensuring end-to-end audit trails. "We avoided months of rework by building the compliance framework before the model," Schlossberg said.

He highlighted three fundamentals for leadership: balance principles with adaptability, maintain rigorous oversight in volatile markets, and be honest about setbacks. The session explored how AI, while still slow to integrate, is driving operational efficiency in asset management—especially when coupled with tight human oversight. Schlossberg discussed the emerging role of tokenization in democratizing investment access, emphasizing its potential to broaden private asset participation.

Market volatility, he noted, creates both risk and new opportunities for corporate spending and investment. Digital assets and ETFs are gaining traction, underlining the need for strong financial literacy. On geopolitical risk, he stressed that firms must adapt investment strategies to rapidly shifting global conditions.

In audience Q&A, Schlossberg forecasted that AI's greatest impact would be in personalized portfolios, but warned that success hinges on striking a balance between advanced technology and sound human judgment. He closed with a reminder: "Admit failure fast—your quickest course corrections become your biggest breakthroughs."

If you want to listen to the whole talk: <a href="https://www.youtube.com/watch?v=34cEgLpKJUg" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Watch on YouTube</a>`
        },
        {
          id: "1.4",
          title: "Fireside Chat with Bill Rogers, CEO of Truist",
          content: `Bill Rogers, CEO of Truist, approached AI and banking transformation with a clear, principle-driven mindset. He opened by framing Truist as a "merger of equals," now the seventh-largest U.S. bank, focused on building better communities and embedding happiness as a core corporate value. For Rogers, purpose isn't just a slogan—it's operationalized through investment in technology, culture, and service.

Rogers emphasized AI's dual impact: boosting both client experience and risk governance. He drew a sharp line between "artificial intelligence" and "augmented intelligence," underscoring that in finance, technology is only as good as the human oversight and purpose backing it. The risk governance conversation was frank: AI brings powerful tools for fraud detection and defense, but must be tightly integrated with compliance, especially as threats evolve.

On investment strategy, Rogers explained how Truist takes an "offensive" approach—deploying AI to improve client service, personalize advice, and enhance employee tools in wealth management. But he was clear: this must be balanced with robust data privacy, giving clients full control and opt-out options.

Looking ahead, Rogers sees the future of banking as uncertain and volatile—AI will drive disruption, but institutions must remain agile and keep the human element at the center. He highlighted the critical need for inclusivity, both in technology adoption and access to financial services, advocating for a broader, more equitable approach to banking.

Rogers closed by speaking directly to students and early-career professionals: align your work with personal purpose, take ownership of your career, and stay engaged in driving innovation—not just within organizations, but across the industry.

If you want to listen to the whole talk: <a href="https://www.youtube.com/watch?v=-G1skt3qNBE" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Watch on YouTube</a>

<img src="/lovable-uploads/a2bba184-e7f0-43e2-9cde-5b5e12d439aa.png" alt="Bill Rogers fireside chat and student group photo" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Left: Bill Rogers, CEO of Truist, during his fireside chat at the AI & Future of Finance Conference. Right: Students from the Truist Immersive Learning Experience, alongside Anuj Mehrotra (Dean, Scheller College of Business) and Bill Rogers (CEO, Truist, third from right). I am on the far right.</p>`
        },
        {
          id: "1.5",
          title: "Technical Demonstrations: GraphRAG",
          content: `At the conference, the GraphRAG notebook cut through the hype around retrieval-augmented generation (RAG) with a demonstration that was both technical and practical. The diagrams I captured—layering vector search, graph analytics, and LLM reasoning—show how GraphRAG fuses two worlds: the flexibility of dense vector embeddings and the precision of knowledge graphs. This isn't just stacking methods for the sake of novelty. The system actually grounds LLM outputs in compositional, queryable facts, so answers aren't just plausible—they're traceable.

<img src="/lovable-uploads/b34abccf-a523-4e06-ba5f-8a673c79e426.png" alt="GraphRAG technical architecture and methodology" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Technical diagrams from the GraphRAG demonstration showing: (top left) knowledge graph modeling with entity relationships, (top right) comparison between vector retrieval and graph retrieval approaches, and (bottom) the complete pipeline from unstructured data sources through NLP parsing, entity extraction, and triple generation to final graph database storage.</p>

Unlike standard RAG pipelines, which can surface context but rarely explain relationships, GraphRAG pulls meaning into explicit triples (think: "Larry Fink, is_ceo_of, BlackRock"), builds a structured map of the knowledge space, and enables true multi-hop reasoning. Suddenly, the LLM can move beyond "retrieve and regurgitate" to perform graph-based synthesis: connecting facts across documents, disambiguating entities, and making logic chains transparent. This kind of architecture isn't academic—it's the difference between getting an answer and understanding why it's the answer. For finance, compliance, and high-stakes domains, GraphRAG marks a real step toward explainable AI systems that work with both scale and rigor.

Google Colab notebooks:
- <a href="https://colab.research.google.com/drive/1O1dClDV_5DBgoy6lwvKEGHfo2EJVsugC?usp=sharing#scrollTo=crSFYwOTpNa3" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">GraphRAG Implementation Tutorial</a>
- <a href="https://colab.research.google.com/drive/11CQP1yOoSz942r3mina7WRB-KJDHeQN2?usp=sharing#scrollTo=QQwkqqKIlXMX" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Advanced GraphRAG Examples</a>`
        },
        {
          id: "1.6",
          title: "LLM Applications in Investment Management — Tina Zhao, BlackRock",
          content: `Tianjiao (Tina) Zhao, Head of Applied AI Modeling at BlackRock, delivered a grounded and pragmatic overview of how large language models are reshaping investment management at scale. Her talk made it clear: LLMs are not hype—they are already operational across the investment lifecycle.

<img src="/lovable-uploads/abeea4d0-5cf9-4be3-a634-c509390e1996.png" alt="Tina Zhao presenting at Georgia Tech" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Tianjiao (Tina) Zhao, Head of Applied AI Modeling at BlackRock, presenting "LLM Applications in Investment Management" at the AI & Future of Finance Conference</p>

<strong>AI Applications Across BlackRock</strong>
Zhao outlined how LLMs drive impact in these core areas:

<strong>Client Experience and Sales:</strong>
Tools like Aladdin Copilot leverage LLMs to shorten onboarding, automate manual compliance, and deliver instant "how to" and "where" answers for portfolio analytics. Client intelligence is becoming actionable, surfacing recommendations and meeting prep with less friction.

<strong>Operational Efficiency:</strong>
LLMs automate everything from business operational workflows to employee empowerment. For engineers, AI copilots are optimizing internal tooling and streamlining software development lifecycles.

<strong>Investments:</strong>
LLMs now augment research assistants, generate trading signals, and automate key aspects of market and trading workflows—driving both research depth and performance.

<strong>AI Foundations and Responsible Deployment</strong>
She emphasized the foundational investments enabling this scale: custom AI infrastructure, robust data platforms for unstructured and alternative data, and—crucially—responsible AI frameworks that prioritize guardrails, explainability, and trust.

<strong>Overcoming Human Analyst Limits</strong>
Zhao didn't sidestep the analyst challenges: bounded rationality, recency bias, and overconfidence. LLMs can ingest a firehose of earnings reports, market research, and alternative data (even Reddit threads), surfacing non-obvious anomalies and reducing cognitive blind spots.

<strong>LLM Techniques and Multi-Agent Systems</strong>
From sentiment analysis and knowledge graph extraction to agentic workflows for risk analytics, Zhao's team deploys LLMs in all asset classes—equities, fixed income, security lending, and private markets. She highlighted experiments with multi-agent systems, where specialized agents (fundamental, sentiment, valuation) debate and converge on investment recommendations—bringing transparency and robustness to automated decision pipelines.

<strong>Key Takeaway:</strong>
Tina Zhao showed that LLMs are no longer "just" research. At BlackRock, they are deeply integrated—amplifying analyst capacity, compressing manual workflows, and, most importantly, enforcing a high bar for responsible AI deployment in finance.`
        },
        {
          id: "1.7",
          title: "Quantamental Research in Snowflake — Jonathan Regenstein",
          content: `Jonathan Regenstein, Head of Financial Services AI at Snowflake, demonstrated how Snowflake is operationalizing quantamental research by embedding LLM-powered analytics directly into the financial data pipeline.

<img src="/lovable-uploads/08a013d5-bc91-4e5e-9192-933146cd530f.png" alt="Jonathan Regenstein presenting Snowflake financial services solutions" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Jonathan Regenstein, Head of Financial Services AI at Snowflake, presenting quantamental research capabilities with a focus on financial services verticals including Wealth & Asset Management, Ecosystem, Payments, and Insurance at the AI & Future of Finance Conference.</p>

<strong>Key Takeaways from the S&P Market Intelligence QuickStart:</strong>

<strong>Earnings Call Analysis, Automated:</strong>
Regenstein's demo centered on analyzing earnings transcripts with LLMs via Snowflake Cortex AI. By comparing analyst questions, executive responses, and LLM-generated answers, users can quantitatively score "on-topicness" and "proactiveness"—two behavioral metrics proven to generate alpha. Proactive, on-topic management correlates to +515bps of annualized outperformance.

<strong>Modern Data Stack, End-to-End:</strong>
The workflow starts by ingesting machine-readable transcripts (from S&P Global Market Intelligence), storing them in Snowflake tables, and applying SQL/Python Cortex functions—all within Snowflake Notebooks.

Key steps:<br/>
• Create database objects and load transcript data from S3.<br/>
• Generate text embeddings for questions and answers.<br/>
• Use cosine similarity to compare how closely executive answers track analyst queries.<br/>
• Leverage LLMs (via Cortex) to benchmark executive answers against ideal model-generated responses.

<strong>Snowflake Cortex: AI/ML at Scale, Natively</strong>
Snowflake Cortex is a fully managed platform for deploying LLM and ML functions via SQL and Python. It allows analysts and quants to run NLP workflows, build embeddings, perform sentiment analysis, and deploy generative models—without leaving the data warehouse environment.

<strong>Why This Matters:</strong>
Traditional financial research workflows are manual and fragmented. By running NLP and LLM-driven analysis natively in Snowflake, teams gain speed, scalability, and reproducibility—critical for modern quantamental strategies.

<strong>What You Can Build:</strong><br/>
• Automated scoring of management communication quality for any public company.<br/>
• Systematic signals for alpha generation based on real language data, not just numbers.<br/>
• A unified, version-controlled workflow using Snowflake Notebooks—integrated with GitHub for collaboration.

<strong>Broader Implications:</strong>
Regenstein's talk made it clear: the next generation of financial research is natively AI-driven and cloud-first. Analysts can now move from fragmented scripts and spreadsheets to unified, production-grade pipelines—directly connected to their firm's data cloud.

If you want to try out the earnings transcripts lab yourself: <a href="https://quickstarts.snowflake.com/guide/s_and_p_market_intelligence_analyze_earnings_transcripts_in_cortex_ai/index.html#0" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline font-medium">Try the Snowflake Lab</a>`
        },
        {
          id: "1.8",
          title: "Personal Connections and Conversations",
          content: `As much as I enjoyed digging into new AI workflows and infrastructure, the real highlights were the conversations that happened in between. Here's where the conference moved beyond technology and became something much more personal:

<img src="/lovable-uploads/ff2e4e67-0587-443e-ab1f-be9e144c6d62.png" alt="Conference networking and personal connections" class="w-full rounded-lg mb-4 mt-6" />

Honestly, the most memorable part of the day wasn't even on the official agenda. Right before lunch, I introduced Gauri (who had actually tipped me off about the Truist Immersive Learning Experience) to Astrid, and somehow we ended up sharing a table with Nancy Razzouk from Invesco and Anqi Zou from Truist. The conversation drifted from casual intros to Nancy's story—what it was like growing up in the Middle East, how those roots shaped her, and the reality of building a career so far from home. Hearing her talk about balancing identity with the demands of finance felt unexpectedly personal. For a moment, I didn't feel like just another face at a conference—I realized this is exactly why we decided to attend such a conference!

We also got honest advice from Anqi Zou, Head of Fair & Responsible Banking Analytics at Truist. What started as small talk turned into a real discussion about the challenges of being an international student figuring things out in the corporate world. We shared those small victories and setbacks you never see on LinkedIn—the kind of real talk that makes you feel less alone in the process. Gauri and I both walked away from lunch feeling lighter, almost reassured every time someone reminded us that there's no rush, that we still have time. After a morning packed with talks—some that clicked, some that flew over our heads—it was exactly the kind of conversation we needed to keep us going.

Thank you to everyone who took the time to stop by and share a conversation with a group of excited freshmen like us. Your genuine advice and encouragement meant more than you know. As someone attending one of my very first professional conferences, I'll remember your words and kindness every time I walk into a new event. If there's one thing I've learned, it's that humility and generosity really do go a long way.`
        },
        {
          id: "1.9",
          title: "Panel Discussions and Executive Insights",
          content: `<strong>Future of Gen AI</strong>
The "Future of Gen AI" panel brought together leaders from AWS, Salesforce, and Microsoft to debate where generative AI is heading next. Panelists discussed practical enterprise adoption, emerging risks, and how foundational models are changing the pace of software and business innovation. The session emphasized the need for responsible deployment, cross-industry collaboration, and continuous research to keep up with rapid advances.

<img src="/lovable-uploads/5a0743b9-a0d9-4a8e-9243-237920ac12b2.png" alt="Future of Gen AI panel discussion" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">The "Future of Gen AI" panel featuring leaders from AWS, Salesforce, and Microsoft discussing enterprise AI adoption and innovation at the Georgia Tech Scheller College of Business.</p>

Panel included:<br/>
• Sudipta Sengupta, Vice President and Distinguished Scientist, Amazon AWS<br/>
• Robbie Birbeck, Vice President of BT Customer Zero, Salesforce<br/>
• Allen Stewart, Partner Director of Software Engineering, Microsoft<br/>
• Moderator: Mark Riedl, Professor, Georgia Tech School of Interactive Computing

Hearing from Robbie Birbeck was a highlight for me, especially since I had just accepted my offer to intern at Salesforce this summer. It was exciting to get an insider's perspective on the Customer Zero Experience—where Salesforce employees are the platform's first users. Later, I had a great conversation with Robbie and he introduced me to the Agentforce Specialist Certification, which is free for students. I jumped on the opportunity and am now officially Agentforce Specialized. I can't wait to learn even more with Salesforce this summer!

<strong>Panel: View from the C-Suite: Promises and Challenges of AI in Finance</strong>
The "View from the C-Suite" panel featured top executives from Invesco, ICE, and the New York Fed, offering an unfiltered look at how AI is transforming finance from the inside. Panelists shared both the strategic opportunities—like risk management, automation, and unlocking new data-driven insights—and the regulatory and operational challenges that come with AI adoption. The discussion made clear that success in AI for finance will require not just technology, but also leadership, governance, and trust.

<img src="/lovable-uploads/968ba52c-8c72-4e2d-acd9-d0ef483b9a10.png" alt="C-Suite panel on AI in Finance" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">The "View from the C-Suite: Promises and Challenges of AI in Finance" panel featuring Shannon Johnston (Invesco), Christopher Edmonds (ICE), and Deepika Mahajan (Federal Reserve Bank of New York) with moderator Prof. Sudheer Chava at Georgia Tech.</p>

Panel included:<br/>
• Shannon Johnston, Senior Managing Director and Chief Information and Operations Officer, Invesco<br/>
• Christopher Edmonds, President, Fixed Income & Data Services, Intercontinental Exchange<br/>
• Deepika Mahajan, Chief Data and Analytics Officer, Federal Reserve Bank of New York<br/>
• Moderator: Sudheer Chava, Alton M. Costley Chair, Professor of Finance, Georgia Tech Scheller College of Business, Georgia Tech Financial Services Innovation Lab

Hearing from C-suite leaders and industry veterans brought a new level of realism to the whole event. Their candid take on the promises and challenges of AI in finance made it clear: building the future of finance will take more than just new tools—it's about people, leadership, and trust.`
        },
        {
          id: "1.10",
          title: "People Mentioned",
          content: `<h3 class="text-2xl font-bold mb-6">People Mentioned</h3>

<div class="bg-gray-50 border-l-4 border-gray-300 p-4 mb-6 italic text-gray-700">
  <p><strong>Disclaimer:</strong> The individuals mentioned below did not contribute to any of the thoughts or views expressed in this conference summary. All opinions and interpretations are my own, and these people should not be held responsible for any views presented here.</p>
</div>

<div class="mb-4">
  <p class="text-gray-600 flex items-center gap-2">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    Special thanks to everyone who made this conference insightful and memorable:
  </p>
</div>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- Column 1 -->
  <div class="space-y-6">
    <!-- Leadership -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🔗 Leadership</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/steve-mclaughlin-3420893/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Steve McLaughlin</a></div>
            <div class="text-xs text-gray-600">Provost & Executive VP, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/anuj-mehrotra-631b8847/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Anuj Mehrotra</a></div>
            <div class="text-xs text-gray-600">Dean, Georgia Tech Scheller College of Business</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fireside Chat CEOs -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🔥 Fireside Chat CEOs</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/bill-rogers-48543b6/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Bill Rogers</a></div>
            <div class="text-xs text-gray-600">CEO, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/andrew-schlossberg-4a43196/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Andrew Schlossberg</a></div>
            <div class="text-xs text-gray-600">President & CEO, Invesco</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Finance Innovation Lab -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🧠 Finance Innovation Lab</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/sudheerchava/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Sudheer Chava</a></div>
            <div class="text-xs text-gray-600">Alton M. Costley Chair Professor, Georgia Tech</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Corporate Partners -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🤝 Corporate Partners</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/jesse-sammons/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Jesse Sammons</a></div>
            <div class="text-xs text-gray-600">Corporate Partnerships, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/ericfender/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Eric Fender</a></div>
            <div class="text-xs text-gray-600">SVP Innovation & Immersive Experiences, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/stephanie-ray-833a7021/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Stephanie Ray</a></div>
            <div class="text-xs text-gray-600">VP Senior Project Manager, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/darrenprice/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Darren Price</a></div>
            <div class="text-xs text-gray-600">Enterprise Account Executive, AWS</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Future of Gen AI Panel -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">⚙️ Future of Gen AI Panel</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/sudipta-sengupta-9b4603/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Sudipta Sengupta</a></div>
            <div class="text-xs text-gray-600">VP & Distinguished Scientist, Amazon AWS</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/robbie-birbeck/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Robbie Birbeck</a></div>
            <div class="text-xs text-gray-600">VP BT Customer Zero, Salesforce</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/allen-stewart/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Allen Stewart</a></div>
            <div class="text-xs text-gray-600">Partner Director, Microsoft</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Mark Riedl</div>
            <div class="text-xs text-gray-600">Professor, Georgia Tech (Moderator)</div>
          </div>
        </div>
      </div>
    </div>

    <!-- C-Suite Panel -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">👔 C-Suite Panel</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/shannonajohnston/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Shannon Johnston</a></div>
            <div class="text-xs text-gray-600">CIO & COO, Invesco</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/christopher-edmonds-483037a/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Christopher Edmonds</a></div>
            <div class="text-xs text-gray-600">President, Fixed Income & Data Services, ICE</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/deepika-mahajan-cfa-4015944b/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Deepika Mahajan</a></div>
            <div class="text-xs text-gray-600">Chief Data & Analytics Officer, Federal Reserve Bank of NY</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Column 2 -->
  <div class="space-y-6">
    <!-- Additional Speakers -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🎤 Additional Speakers</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Chandra Kapireddy</div>
            <div class="text-xs text-gray-600">Head of Gen AI, ML & Analytics, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Thomas Bodenski</div>
            <div class="text-xs text-gray-600">COO & Chief Data & Analytics Officer, TS Imagine</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/deepsrivastavinnovate/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Deep Ratna Srivastav</a></div>
            <div class="text-xs text-gray-600">Chief AI Officer, Franklin Templeton</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Tianjiao (Tina) Zhao</div>
            <div class="text-xs text-gray-600">Director, Head of Applied AI Modeling, BlackRock</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Jonathan Regenstein</div>
            <div class="text-xs text-gray-600">Head of Financial Services AI, Snowflake</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Finance & Investment Professionals -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">💼 Finance & Investment Professionals</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/andy-dietderich/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Andrew Dietderich</a></div>
            <div class="text-xs text-gray-600">Co-Head Global Finance & Restructuring, Sullivan and Cromwell</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/brettmwilson/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Brett Wilson</a></div>
            <div class="text-xs text-gray-600">Partner, McKinsey & Company</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/manavmisra/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Manav Misra</a></div>
            <div class="text-xs text-gray-600">Chief Data and Analytics Officer, Regions Bank</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/stephen-markwell/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Stephen Markwell</a></div>
            <div class="text-xs text-gray-600">Head of Fintech Partnerships, Global Banking, JPMorgan Chase</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/kumananramanathan/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Kumanan Ramanathan</a></div>
            <div class="text-xs text-gray-600">Co-Head of Crypto, Alvarez & Marsal</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/john-neubauer-20078612/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">John Neubauer</a></div>
            <div class="text-xs text-gray-600">Managing Director, Global Head of Corporate Equity Derivatives, JPMorgan</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/mitchell-sonkin-7ba25b8a/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Mitchell Sonkin</a></div>
            <div class="text-xs text-gray-600">Independent Director, FTX Bankruptcy</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Brett Kotch</div>
            <div class="text-xs text-gray-600">Head of Trading Technology, Millennium</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/scott-ferber/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Scott Ferber</a></div>
            <div class="text-xs text-gray-600">Partner, Raj Ferber PLLC</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technology & AI Professionals -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🤖 Technology & AI Professionals</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/vasiloglou/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Nick Vasiloglou</a></div>
            <div class="text-xs text-gray-600">VP of Research ML, RelationalAI</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/che-guan-60117717/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Che Guan</a></div>
            <div class="text-xs text-gray-600">Principal Data Scientist, Alliance Bernstein</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Georgia Tech Students -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🎓 Georgia Tech Students</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Agam Shah</div>
            <div class="text-xs text-gray-600">Ph.D. Candidate, Georgia Tech College of Computing</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Michael Galarnyk</div>
            <div class="text-xs text-gray-600">Ph.D. Student, Georgia Tech College of Engineering</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Glenn Matlin</div>
            <div class="text-xs text-gray-600">Ph.D. Student, Georgia Tech College of Computing</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Nikita Tatarinov</div>
            <div class="text-xs text-gray-600">PhD student, College of Computing, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Gauri Sharma</div>
            <div class="text-xs text-gray-600">CS @ Georgia Tech</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conference Connections -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🤝 Conference Connections</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Nancy Razzouk</div>
            <div class="text-xs text-gray-600">Invesco</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Anqi Zou</div>
            <div class="text-xs text-gray-600">Head of Fair & Responsible Banking Analytics, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Astrid</div>
            <div class="text-xs text-gray-600">Georgia Tech</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`

<div class="bg-gray-50 border-l-4 border-gray-300 p-4 mb-6 italic text-gray-700">
  <p><strong>Disclaimer:</strong> The individuals mentioned below did not contribute to any of the thoughts or views expressed in this conference summary. All opinions and interpretations are my own, and these people should not be held responsible for any views presented here.</p>
</div>

<div class="mb-4">
  <p class="text-gray-600 flex items-center gap-2">
    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>
    Special thanks to everyone who made this conference insightful and memorable:
  </p>
</div>

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- Column 1 -->
  <div class="space-y-6">
    <!-- Leadership -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🔗 Leadership</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/steve-mclaughlin-3420893/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Steve McLaughlin</a></div>
            <div class="text-xs text-gray-600">Provost & Executive VP, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/anuj-mehrotra-631b8847/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Anuj Mehrotra</a></div>
            <div class="text-xs text-gray-600">Dean, Georgia Tech Scheller College of Business</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Fireside Chat CEOs -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🔥 Fireside Chat CEOs</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/bill-rogers-48543b6/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Bill Rogers</a></div>
            <div class="text-xs text-gray-600">CEO, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/andrew-schlossberg-4a43196/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Andrew Schlossberg</a></div>
            <div class="text-xs text-gray-600">President & CEO, Invesco</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Finance Innovation Lab -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🧠 Finance Innovation Lab</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/sudheerchava/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Sudheer Chava</a></div>
            <div class="text-xs text-gray-600">Alton M. Costley Chair Professor, Georgia Tech</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Corporate Partners -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🤝 Corporate Partners</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/jesse-sammons/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Jesse Sammons</a></div>
            <div class="text-xs text-gray-600">Corporate Partnerships, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/ericfender/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Eric Fender</a></div>
            <div class="text-xs text-gray-600">SVP Innovation & Immersive Experiences, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/stephanie-ray-833a7021/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Stephanie Ray</a></div>
            <div class="text-xs text-gray-600">VP Senior Project Manager, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/darrenprice/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Darren Price</a></div>
            <div class="text-xs text-gray-600">Enterprise Account Executive, AWS</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Future of Gen AI Panel -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">⚙️ Future of Gen AI Panel</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/sudipta-sengupta-9b4603/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Sudipta Sengupta</a></div>
            <div class="text-xs text-gray-600">VP & Distinguished Scientist, Amazon AWS</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/robbie-birbeck/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Robbie Birbeck</a></div>
            <div class="text-xs text-gray-600">VP BT Customer Zero, Salesforce</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/allen-stewart/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Allen Stewart</a></div>
            <div class="text-xs text-gray-600">Partner Director, Microsoft</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/mark-riedl/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Mark Riedl</a></div>
            <div class="text-xs text-gray-600">Professor, Georgia Tech (Moderator)</div>
          </div>
        </div>
      </div>
    </div>

    <!-- C-Suite Panel -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">👔 C-Suite Panel</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/shannonajohnston/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Shannon Johnston</a></div>
            <div class="text-xs text-gray-600">CIO & COO, Invesco</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/christopher-edmonds-483037a/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Christopher Edmonds</a></div>
            <div class="text-xs text-gray-600">President, Fixed Income & Data Services, ICE</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/deepika-mahajan-cfa-4015944b/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Deepika Mahajan</a></div>
            <div class="text-xs text-gray-600">Chief Data & Analytics Officer, Federal Reserve Bank of NY</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Additional Speakers -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🎤 Additional Speakers</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Chandra Kapireddy</div>
            <div class="text-xs text-gray-600">Head of Gen AI, ML & Analytics, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Thomas Bodenski</div>
            <div class="text-xs text-gray-600">COO & Chief Data & Analytics Officer, TS Imagine</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/deepsrivastavinnovate/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Deep Ratna Srivastav</a></div>
            <div class="text-xs text-gray-600">Chief AI Officer, Franklin Templeton</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Tianjiao (Tina) Zhao</div>
            <div class="text-xs text-gray-600">Director, Head of Applied AI Modeling, BlackRock</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Jonathan Regenstein</div>
            <div class="text-xs text-gray-600">Head of Financial Services AI, Snowflake</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Column 2 -->
  <div class="space-y-6">
    <!-- Finance & Investment Professionals -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">💼 Finance & Investment Professionals</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/andy-dietderich/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Andrew Dietderich</a></div>
            <div class="text-xs text-gray-600">Co-Head Global Finance & Restructuring, Sullivan and Cromwell</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/brettmwilson/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Brett Wilson</a></div>
            <div class="text-xs text-gray-600">Partner, McKinsey & Company</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/manavmisra/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Manav Misra</a></div>
            <div class="text-xs text-gray-600">Chief Data and Analytics Officer, Regions Bank</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/stephen-markwell/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Stephen Markwell</a></div>
            <div class="text-xs text-gray-600">Head of Fintech Partnerships, Global Banking, JPMorgan Chase</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/kumananramanathan/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Kumanan Ramanathan</a></div>
            <div class="text-xs text-gray-600">Co-Head of Crypto, Alvarez & Marsal</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/john-neubauer-20078612/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">John Neubauer</a></div>
            <div class="text-xs text-gray-600">Managing Director, Global Head of Corporate Equity Derivatives, JPMorgan</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/mitchell-sonkin-7ba25b8a/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Mitchell Sonkin</a></div>
            <div class="text-xs text-gray-600">Independent Director, FTX Bankruptcy</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Brett Kotch</div>
            <div class="text-xs text-gray-600">Head of Trading Technology, Millennium</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/scott-ferber/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Scott Ferber</a></div>
            <div class="text-xs text-gray-600">Partner, Raj Ferber PLLC</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Technology & AI Professionals -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🤖 Technology & AI Professionals</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/vasiloglou/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Nick Vasiloglou</a></div>
            <div class="text-xs text-gray-600">VP of Research ML, RelationalAI</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm"><a href="https://www.linkedin.com/in/che-guan-60117717/" target="_blank" rel="noopener noreferrer" class="text-blue-600 hover:underline">Che Guan</a></div>
            <div class="text-xs text-gray-600">Principal Data Scientist, Alliance Bernstein</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Georgia Tech Students -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🎓 Georgia Tech Students</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Agam Shah</div>
            <div class="text-xs text-gray-600">Ph.D. Candidate, Georgia Tech College of Computing</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Michael Galarnyk</div>
            <div class="text-xs text-gray-600">Ph.D. Student, Georgia Tech College of Engineering</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Glenn Matlin</div>
            <div class="text-xs text-gray-600">Ph.D. Student, Georgia Tech College of Computing</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Nikita Tatarinov</div>
            <div class="text-xs text-gray-600">PhD student, College of Computing, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Gauri Sharma</div>
            <div class="text-xs text-gray-600">CS @ Georgia Tech</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Conference Connections -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🤝 Conference Connections</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Nancy Razzouk</div>
            <div class="text-xs text-gray-600">Invesco</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Anqi Zou</div>
            <div class="text-xs text-gray-600">Head of Fair & Responsible Banking Analytics, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Astrid</div>
            <div class="text-xs text-gray-600">Georgia Tech</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
        },
            <div class="text-xs text-gray-600 truncate">VP & Distinguished Scientist, Amazon AWS</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-xs">RB</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Robbie Birbeck</div>
            <div class="text-xs text-gray-600 truncate">VP BT Customer Zero, Salesforce</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-xs">AS</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Allen Stewart</div>
            <div class="text-xs text-gray-600 truncate">Partner Director Software Engineering, Microsoft</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-xs">MR</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Mark Riedl</div>
            <div class="text-xs text-gray-600 truncate">Professor, Georgia Tech (Moderator)</div>
          </div>
        </div>
      </div>
    </div>

    <!-- C-Suite Panel -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800">C-Suite Panel</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">SJ</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Shannon Johnston</div>
            <div class="text-xs text-gray-600 truncate">CIO & COO, Invesco</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-xs">CE</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Christopher Edmonds</div>
            <div class="text-xs text-gray-600 truncate">President Fixed Income & Data Services, ICE</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-xs">DM</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Deepika Mahajan</div>
            <div class="text-xs text-gray-600 truncate">Chief Data & Analytics Officer, Fed Reserve NY</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Other Key Speakers -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800">Other Key Speakers</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-xs">CK</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Chandra Kapireddy</div>
            <div class="text-xs text-gray-600 truncate">Head of AI, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-xs">TB</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Thomas Bodenski</div>
            <div class="text-xs text-gray-600 truncate">COO, TS Imagine</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center text-pink-600 font-semibold text-xs">DS</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Deep Ratna Srivastav</div>
            <div class="text-xs text-gray-600 truncate">Chief AI Officer, Franklin Templeton</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Column 3: Industry Professionals & Students -->
  <div class="space-y-6">
    <!-- Finance Industry Leaders -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800">Finance Industry Leaders</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">AD</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Andrew Dietderich</div>
            <div class="text-xs text-gray-600 truncate">Co-Head Global Finance, Sullivan & Cromwell</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-xs">BW</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Brett Wilson</div>
            <div class="text-xs text-gray-600 truncate">Partner, McKinsey & Company</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-xs">MM</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Manav Misra</div>
            <div class="text-xs text-gray-600 truncate">Chief Data & Analytics Officer, Regions Bank</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-xs">SM</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Stephen Markwell</div>
            <div class="text-xs text-gray-600 truncate">Head Fintech Partnerships, JPMorgan Chase</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-teal-100 rounded-full flex items-center justify-center text-teal-600 font-semibold text-xs">KR</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Kumanan Ramanathan</div>
            <div class="text-xs text-gray-600 truncate">Co-Head of Crypto, Alvarez & Marsal</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-semibold text-xs">JR</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Jonathan Regenstein</div>
            <div class="text-xs text-gray-600 truncate">Head Financial Services AI, Snowflake</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-red-600 font-semibold text-xs">JN</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">John Neubauer</div>
            <div class="text-xs text-gray-600 truncate">Managing Director, JPMorgan</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 font-semibold text-xs">MS</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Mitchell Sonkin</div>
            <div class="text-xs text-gray-600 truncate">Independent Director, FTX Bankruptcy</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-cyan-100 rounded-full flex items-center justify-center text-cyan-600 font-semibold text-xs">BK</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Brett Kotch</div>
            <div class="text-xs text-gray-600 truncate">Head Trading Technology, Millennium</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-semibold text-xs">SF</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Scott Ferber</div>
            <div class="text-xs text-gray-600 truncate">Partner, Raj Ferber PLLC</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600 font-semibold text-xs">TZ</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Tianjiao (Tina) Zhao</div>
            <div class="text-xs text-gray-600 truncate">Head Applied AI Modeling, BlackRock</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-lime-100 rounded-full flex items-center justify-center text-lime-600 font-semibold text-xs">NV</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Nick Vasiloglou</div>
            <div class="text-xs text-gray-600 truncate">VP Research ML, RelationalAI</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center text-amber-600 font-semibold text-xs">CG</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Che Guan</div>
            <div class="text-xs text-gray-600 truncate">Principal Data Scientist, Alliance Bernstein</div>
          </div>
        </div>
      </div>
    </div>

    <!-- Georgia Tech Students & Researchers -->
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800">Georgia Tech Community</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 font-semibold text-xs">GS</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Gauri Sharma</div>
            <div class="text-xs text-gray-600 truncate">CS @ Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-semibold text-xs">AS</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Agam Shah</div>
            <div class="text-xs text-gray-600 truncate">PhD Candidate, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600 font-semibold text-xs">MG</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Michael Galarnyk</div>
            <div class="text-xs text-gray-600 truncate">PhD Student, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center text-purple-600 font-semibold text-xs">GM</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Glenn Matlin</div>
            <div class="text-xs text-gray-600 truncate">PhD Student, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border border-gray-200">
          <div class="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 font-semibold text-xs">NT</div>
          <div class="flex-1 min-w-0">
            <div class="font-medium text-gray-900 text-sm">Nikita Tatarinov</div>
            <div class="text-xs text-gray-600 truncate">PhD Student, Georgia Tech</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`
        },
        {
          id: "1.11",
          title: "Gratitude and Acknowledgments",
          content: `I want to end this post with a huge amount of gratitude—for Georgia Tech and for everyone, seen and unseen, who helped make this conference happen. It takes real effort to bring so many brilliant minds together and to keep things running smoothly. Special thanks to Prof. Sudheer Chava—I barely got a chance to speak with you, but your humility and genuine passion for creating this kind of platform for students to learn and connect came through in every detail. The Scheller College of Business and the Financial Services Innovation Lab both deserve a shoutout for supporting and elevating student voices.

<img src="/lovable-uploads/56548e5e-77e7-4957-9afb-f84f7f734d21.png" alt="Conference attendees and networking" class="w-full rounded-lg mb-4 mt-6" />

And finally, the biggest thanks goes to Gauri—for sharing these resources with me in the first place, for being my 6am wake-up call over spring break, and for sprinting across Ferst Center with me in uncomfortable shoes at sunrise just to make it on time. I've never been more grateful to have a friend like you in my life.`
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
      "Conference": "bg-primary-blue-light text-primary-blue",
      "Issue #1": "bg-warm-orange-light text-warm-orange",
      "Issue #2": "bg-warm-orange-light text-warm-orange", 
      "Issue #3": "bg-warm-orange-light text-warm-orange",
      "Issue #4": "bg-warm-orange-light text-warm-orange",
      "Issue #5": "bg-warm-orange-light text-warm-orange",
      "Issue #6": "bg-warm-orange-light text-warm-orange"
    };
    return colors[category] || "bg-warm-orange-light text-warm-orange";
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map(word => word.charAt(0).toUpperCase())
      .slice(0, 2)
      .join('');
  };

  const peopleMentioned = [
    // Leadership
    {
      name: "Steven W. McLaughlin",
      role: "Provost and Executive Vice President for Academic Affairs, Georgia Tech",
      linkedin: "https://www.linkedin.com/in/steve-mclaughlin-505464100",
      category: "Leadership"
    },
    {
      name: "Anuj Mehrotra",
      role: "Dean, Georgia Tech Scheller College of Business",
      linkedin: "https://www.linkedin.com/in/anuj-mehrotra-13b5154",
      category: "Leadership"
    },
    
    // Fireside Chat
    {
      name: "Bill Rogers",
      role: "CEO, Truist",
      linkedin: "https://www.linkedin.com/posts/billhrogers_truist-oneteam-iwd25-activity-7303746376209739776-31xA",
      category: "Fireside Chat"
    },
    {
      name: "Andrew Schlossberg",
      role: "President and Chief Executive Officer, Invesco",
      linkedin: "https://www.linkedin.com/in/andrew-schlossberg-invesco",
      category: "Fireside Chat"
    },
    
    // Future of Gen AI Panel
    {
      name: "Sudipta Sengupta",
      role: "VP & Distinguished Scientist, Amazon AWS",
      linkedin: "https://www.linkedin.com/in/sudiptasengupta/",
      category: "Future of Gen AI Panel"
    },
    {
      name: "Robbie Birbeck",
      role: "VP of BT Customer Zero, Salesforce",
      linkedin: "https://www.linkedin.com/in/robertbirbeck/",
      category: "Future of Gen AI Panel"
    },
    {
      name: "Allen Stewart",
      role: "Partner Director, Microsoft",
      linkedin: "https://www.linkedin.com/in/allen-stewart/",
      category: "Future of Gen AI Panel"
    },
    {
      name: "Mark Riedl",
      role: "Professor, Georgia Tech (Moderator)",
      linkedin: "https://www.linkedin.com/in/markriedl",
      category: "Future of Gen AI Panel"
    },
    
    // Other Speakers
    {
      name: "Chandra Kapireddy",
      role: "Head of Gen AI, ML & Analytics, Truist",
      linkedin: "https://www.linkedin.com/in/chandra-kapireddy",
      category: "Other Speakers"
    },
    {
      name: "Thomas Bodenski",
      role: "COO & Chief Data & Analytics Officer, TS Imagine",
      linkedin: "https://www.linkedin.com/in/tbodenski",
      category: "Other Speakers"
    },
    
    // C-Suite Panel
    {
      name: "Shannon Johnston",
      role: "CIO & COO, Invesco",
      linkedin: "https://www.linkedin.com/in/shannonajohnston",
      category: "C-Suite Panel"
    },
    {
      name: "Christopher Edmonds",
      role: "President, Fixed Income & Data Services, ICE",
      linkedin: "https://www.linkedin.com/in/christopher-edmonds-483037a",
      category: "C-Suite Panel"
    },
    {
      name: "Deepika Mahajan",
      role: "Chief Data & Analytics Officer, Federal Reserve Bank of NY",
      linkedin: "https://www.linkedin.com/in/deepika-mahajan-cfa-4015944b",
      category: "C-Suite Panel"
    },
    {
      name: "Sudheer Chava",
      role: "Professor & Lab Director, Georgia Tech (Moderator)",
      linkedin: "https://www.linkedin.com/in/sudheer-chava-b5883021",
      category: "C-Suite Panel"
    },
    
    // Additional Speakers
    {
      name: "Deep Ratna Srivastav",
      role: "Chief AI Officer, Franklin Templeton",
      linkedin: "https://www.linkedin.com/in/deepsrivastavinnovate",
      category: "Additional Speakers"
    },
    
    // Industry Leaders
    {
      name: "Andrew Dietderich",
      role: "Co-Head of Global Finance & Restructuring Group, Sullivan and Cromwell",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Brett Wilson",
      role: "Partner, McKinsey & Company",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Manav Misra",
      role: "Chief Data and Analytics Officer, Regions Bank",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Stephen Markwell",
      role: "Head of Fintech Partnerships, Global Banking, JPMorgan Chase",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Kumanan Ramanathan",
      role: "Co-Head of Crypto, Alvarez & Marsal",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Jonathan Regenstein",
      role: "Head of Financial Services AI, Snowflake",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "John Neubauer",
      role: "Managing Director, Global Head of Corporate Equity Derivatives, Structured Lending and Convertible Bond Trading, JPMorgan",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Mitchell Sonkin",
      role: "Independent Director, FTX Bankruptcy",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Brett Kotch",
      role: "Head of Trading Technology, Millennium",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Scott Ferber",
      role: "Partner, Raj Ferber PLLC",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Tianjiao (Tina) Zhao",
      role: "Director, Head of Applied AI Modeling, BlackRock",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Nick Vasiloglou",
      role: "VP of Research ML, RelationalAI",
      linkedin: "",
      category: "Industry Leaders"
    },
    {
      name: "Che Guan",
      role: "Principal Data Scientist, Alliance Bernstein",
      linkedin: "",
      category: "Industry Leaders"
    },
    
    // Georgia Tech Team
    {
      name: "Jesse Sammons",
      role: "Corporate Partnerships, Georgia Tech",
      linkedin: "",
      category: "Georgia Tech Team"
    },
    {
      name: "Eric Fender",
      role: "SVP, Director of Innovation and Immersive Experiences at Truist",
      linkedin: "",
      category: "Georgia Tech Team"
    },
    {
      name: "Stephanie Ray",
      role: "VP | Senior Project Manager | Innovation & Immersive Experiences Truist",
      linkedin: "",
      category: "Georgia Tech Team"
    },
    {
      name: "Darren Price",
      role: "Ent. Account Executive AWS",
      linkedin: "",
      category: "Georgia Tech Team"
    },
    
    // Students & Researchers
    {
      name: "Agam Shah",
      role: "Ph.D. Candidate, Georgia Tech College of Computing, Georgia Tech Financial Services Innovation Lab",
      linkedin: "",
      category: "Students & Researchers"
    },
    {
      name: "Michael Galarnyk",
      role: "Ph.D. Student, Georgia Tech College of Engineering, Georgia Tech Financial Services Innovation Lab",
      linkedin: "",
      category: "Students & Researchers"
    },
    {
      name: "Glenn Matlin",
      role: "Ph.D. Student, Georgia Tech College of Computing, Georgia Tech Financial Services Innovation Lab",
      linkedin: "",
      category: "Students & Researchers"
    },
    {
      name: "Nikita Tatarinov",
      role: "PhD student, College of Computing, Georgia Tech; Georgia Tech Financial Services Innovation Lab",
      linkedin: "",
      category: "Students & Researchers"
    },
    
    // Friends & Colleagues
    {
      name: "Gauri Sharma",
      role: "CS @ Georgia Tech",
      linkedin: "https://www.linkedin.com/in/gs-softwaredev",
      category: "Friends & Colleagues"
    }
  ];

  const renderPeopleMentioned = () => {
    console.log("Total people:", peopleMentioned.length);
    console.log("People data:", peopleMentioned);
    
    const groupedPeople = peopleMentioned.reduce((acc, person) => {
      if (!acc[person.category]) {
        acc[person.category] = [];
      }
      acc[person.category].push(person);
      return acc;
    }, {} as Record<string, typeof peopleMentioned>);

    console.log("Grouped people:", groupedPeople);
    console.log("Categories found:", Object.keys(groupedPeople));

    return (
      <div className="space-y-6">
        <div className="p-3 bg-muted/50 rounded-lg border-l-4 border-primary/30 mb-4">
          <p className="text-xs text-muted-foreground italic">
            <strong>Disclaimer:</strong> The individuals mentioned below did not contribute to any of the thoughts or views expressed in this conference summary. All opinions and interpretations are my own, and these people should not be held responsible for any views presented here.
          </p>
        </div>
        
        <div className="flex items-center gap-2 mb-6">
          <Users className="h-5 w-5 text-primary" />
          <p className="text-academic-gray">
            Special thanks to everyone who made this conference insightful and memorable:
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {Object.entries(groupedPeople).map(([category, people]) => (
            <div key={category} className="space-y-3">
              <h4 className="text-sm font-semibold text-foreground flex items-center gap-2 px-1">
                <div className="h-px bg-border flex-1" />
                {category}
                <div className="h-px bg-border flex-1" />
              </h4>
              <div className="space-y-2">
                {people.map((person, index) => (
                  <Card key={index} className="border border-muted/30 bg-gradient-to-br from-card/50 to-muted/20 transition-all duration-200 hover:border-primary/30 hover:shadow-sm">
                    <CardContent className="p-3">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 min-w-0 flex-1">
                          <Avatar className="h-8 w-8 bg-primary/10 border border-primary/20 flex-shrink-0">
                            <AvatarFallback className="text-xs font-medium text-primary bg-primary/10">
                              {getInitials(person.name)}
                            </AvatarFallback>
                          </Avatar>
                          <div className="min-w-0 flex-1">
                            <h4 className="text-sm font-medium leading-none truncate">{person.name}</h4>
                            <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{person.role}</p>
                          </div>
                        </div>
                        <Button
                          variant="ghost"
                          size="sm"
                          asChild
                          className="h-8 w-8 p-0 text-muted-foreground hover:text-primary hover:bg-primary/10 flex-shrink-0 ml-2"
                        >
                          <a href={person.linkedin} target="_blank" rel="noopener noreferrer">
                            <Linkedin className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
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
              {(post as any).location && (
                <div className="flex items-center gap-1">
                  📍 {(post as any).location}
                </div>
              )}
            </div>
            
            {(post as any).tags && (post as any).tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {(post as any).tags.map((tag: string) => (
                  <Badge key={tag} variant="secondary" className="text-xs">
                    {tag}
                  </Badge>
                ))}
              </div>
            )}
            
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

          {/* Cover Image */}
          {(post as any).coverImage && (
            <div className="space-y-3">
              <img 
                src={(post as any).coverImage} 
                alt={`Cover image for ${post.title}`}
                className="w-full rounded-lg academic-shadow"
              />
            </div>
          )}

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
                  {section.content === 'people-mentioned-section' ? (
                    renderPeopleMentioned()
                  ) : (
                    section.content.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="mb-4" dangerouslySetInnerHTML={{ __html: paragraph }} />
                    ))
                  )}
                </div>
              </section>
            ))}
          </div>

        </article>

        {/* Table of Contents Sidebar */}
        <aside className="lg:sticky lg:top-8 lg:self-start space-y-6">
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

          {/* Resources Section */}
          <Card className="academic-shadow">
            <CardContent className="p-6">
              <h3 className="font-academic text-lg font-semibold text-primary mb-4">
                Resources
              </h3>
              <nav className="space-y-3">
                <a
                  href="https://www.youtube.com/watch?v=-G1skt3qNBE&t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-academic-gray hover:text-primary transition-colors py-1 group"
                >
                  <Play className="h-4 w-4 flex-shrink-0" />
                  <span>Tech Talks Business Features Bill Rogers, Chairman and CEO of Truist</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
                <a
                  href="https://www.youtube.com/watch?v=34cEgLpKJUg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-academic-gray hover:text-primary transition-colors py-1 group"
                >
                  <Play className="h-4 w-4 flex-shrink-0" />
                  <span>Tech Talks Business Featuring Andrew Schlossberg, President and CEO of Invesco</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
                <a
                  href="https://quickstarts.snowflake.com/guide/s_and_p_market_intelligence_analyze_earnings_transcripts_in_cortex_ai/index.html#0"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-academic-gray hover:text-primary transition-colors py-1 group"
                >
                  <Database className="h-4 w-4 flex-shrink-0" />
                  <span>S&P Market Intelligence: Analyze Earnings Transcripts with LLMs in Cortex AI</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
                <a
                  href="https://docs.snowflake.com/en/user-guide/ui-snowsight/notebooks#explore-notebooks"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-academic-gray hover:text-primary transition-colors py-1 group"
                >
                  <BookOpen className="h-4 w-4 flex-shrink-0" />
                  <span>Experience Snowflake with notebooks</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
                <a
                  href="https://colab.research.google.com/drive/1O1dClDV_5DBgoy6lwvKEGHfo2EJVsugC?usp=sharing#scrollTo=crSFYwOTpNa3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-academic-gray hover:text-primary transition-colors py-1 group"
                >
                  <FlaskConical className="h-4 w-4 flex-shrink-0" />
                  <span>Test Time Scaling Inference using CoT and PoT on Llama Model</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
                <a
                  href="https://colab.research.google.com/drive/11CQP1yOoSz942r3mina7WRB-KJDHeQN2?usp=sharing#scrollTo=QQwkqqKIlXMX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-academic-gray hover:text-primary transition-colors py-1 group"
                >
                  <TrendingUp className="h-4 w-4 flex-shrink-0" />
                  <span>Graph Retrieval Augmented Generation</span>
                  <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity ml-auto" />
                </a>
              </nav>
            </CardContent>
          </Card>
        </aside>
      </div>

      {/* Comments Section */}
      <div className="mt-12">
        <BlogComments />
      </div>
    </div>
  );
}