import { useParams } from 'react-router-dom';

interface BlogSection {
  id: string;
  title: string;
  content: string;
}

export default function BlogPost() {
  const { sectionId } = useParams<{ sectionId: string }>();

  const sections: BlogSection[] = [
        {
          id: "1.1",
          title: "AI & Future of Finance Conference at Georgia Tech",
          content: `<div class="mb-6">
  <div class="text-sm text-gray-500 mb-2">March 2025</div>
  <div class="prose prose-lg">
    <p>This past Friday, I had the incredible opportunity to attend the <strong>AI & Future of Finance Conference</strong> at Georgia Tech's Scheller College of Business. As a freshman still finding my footing in the world of finance and technology, this event was both eye-opening and inspiring.</p>
    
    <p>The conference brought together industry leaders, academics, and students to explore how artificial intelligence is reshaping the financial services landscape. From algorithmic trading to risk management, the discussions covered cutting-edge applications that are already transforming how we think about money, markets, and financial decision-making.</p>
    
    <p>What struck me most was the collaborative spirit—seeing seasoned professionals share insights with curious students like myself, and witnessing the genuine excitement about what's possible when AI meets finance.</p>
  </div>
</div>`
        },
        {
          id: "1.2",
          title: "The Truist Immersive Learning Experience",
          content: `The day began with something truly special: the <strong>Truist Immersive Learning Experience</strong>. This wasn't your typical corporate presentation—it was an interactive journey into how one of the country's largest banks is leveraging AI to transform customer experiences and operations.

<img src="/lovable-uploads/4685ec1c-467d-4eed-9286-53c7396346d4.png" alt="Truist Immersive Learning Experience presentation" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">The Truist Immersive Learning Experience showcased cutting-edge AI applications in banking, featuring interactive demonstrations of virtual assistants, predictive analytics, and personalized financial services at the AI & Future of Finance Conference.</p>

The experience featured live demonstrations of AI-powered tools that Truist is developing, including:

• **Conversational AI assistants** that can help customers navigate complex financial decisions
• **Predictive analytics** for personalized investment recommendations  
• **Risk assessment algorithms** that adapt in real-time to market conditions
• **Automated compliance monitoring** that ensures regulatory adherence while streamlining operations

What impressed me most was how human-centered their approach felt. Rather than replacing human advisors, these AI tools were designed to augment human expertise, giving financial professionals superpowers to serve their clients better.

The hands-on nature of the experience meant we could actually interact with some of these tools, getting a feel for how intuitive and responsive they've become. It was a perfect way to start the conference—grounding abstract AI concepts in real, tangible applications that are already helping millions of customers.`
        },
        {
          id: "1.3",
          title: "Opening Remarks: Setting the Stage",
          content: `The formal conference opened with welcoming remarks from **Steve McLaughlin**, Provost and Executive Vice President for Academic Affairs at Georgia Tech, and **Anuj Mehrotra**, Dean of the Scheller College of Business.

<img src="/lovable-uploads/e1061868-c1fd-454c-ab55-6b0681d22d6a.png" alt="Conference opening with academic leadership" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Steve McLaughlin, Provost and Executive Vice President for Academic Affairs at Georgia Tech, and Anuj Mehrotra, Dean of the Scheller College of Business, deliver opening remarks at the AI & Future of Finance Conference, setting the stage for a day of innovation and collaboration.</p>

Their remarks emphasized Georgia Tech's commitment to bridging the gap between cutting-edge research and practical industry applications. They highlighted how the university's interdisciplinary approach—bringing together computer science, business, and engineering—creates the perfect environment for exploring AI's role in finance.

Key themes from the opening:
• The importance of **responsible AI development** in financial services
• Georgia Tech's role as a **convening force** for industry and academia
• The need for **ethical frameworks** as AI becomes more prevalent in finance
• **Student opportunities** to engage with industry leaders and real-world challenges

What resonated with me was their emphasis on students not just learning about these technologies, but actively participating in shaping their development and implementation. It set an inclusive tone that made even freshman like me feel like we had a voice in these important conversations.`
        },
        {
          id: "1.4",
          title: "Industry Fireside Chats: Leadership Perspectives",
          content: `The conference featured intimate fireside chats with two of the most influential leaders in financial services: **Bill Rogers**, CEO of Truist, and **Andrew Schlossberg**, President and CEO of Invesco.

<img src="/lovable-uploads/bce9274b-6770-4719-b136-4397838df642.png" alt="CEO fireside chats at the conference" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Industry leaders Bill Rogers (CEO, Truist) and Andrew Schlossberg (President & CEO, Invesco) share insights during fireside chats about AI transformation in financial services, discussing strategy, innovation, and the future of banking and asset management.</p>

## Bill Rogers, CEO of Truist

Rogers shared Truist's journey of digital transformation, particularly focusing on how AI is enabling the bank to deliver more personalized and efficient services. His key insights included:

• **AI as an enabler of human connection**, not a replacement for it
• The importance of **change management** when implementing AI across large organizations  
• **Data quality and governance** as foundational elements for successful AI deployment
• The need for **continuous learning and adaptation** in a rapidly evolving technological landscape

What struck me about Rogers' perspective was his emphasis on culture. He talked about how introducing AI isn't just a technology challenge—it's about helping tens of thousands of employees understand and embrace new ways of working.

## Andrew Schlossberg, President and CEO of Invesco

Schlossberg provided insights into how AI is transforming asset management and investment strategies. His discussion covered:

• **Algorithmic trading** and how AI is changing market dynamics
• **Portfolio optimization** using machine learning to identify patterns humans might miss
• **Risk management** through real-time analysis of vast datasets
• **Client engagement** via AI-powered insights and recommendations

One of his most compelling points was about the democratization of sophisticated investment strategies. AI tools that were once only available to large institutional investors are now being adapted for broader markets, potentially leveling the playing field for smaller investors.

## Common Themes

Both leaders emphasized several shared perspectives:
- The critical importance of **trust and transparency** when deploying AI in financial services
- The need for **regulatory collaboration** to ensure innovation happens responsibly  
- **Talent development** as organizations need people who understand both finance and technology
- The **long-term view** required for successful AI transformation

Their conversations made it clear that we're still in the early stages of AI adoption in finance, and the leaders who succeed will be those who can balance innovation with responsibility, efficiency with human touch, and disruption with stability.`
        },
        {
          id: "1.5",
          title: "Chandra Kapireddy: The AI Revolution at Truist",
          content: `**Chandra Kapireddy**, Head of Gen AI, ML & Analytics at Truist, delivered one of the most technically detailed and practically grounded presentations of the day. Her session provided a deep dive into how Truist is operationalizing AI across the enterprise.

<img src="/lovable-uploads/b77e6ce9-824c-4f8c-b0df-85a72e913480.png" alt="Chandra Kapireddy presenting Truist's AI strategy" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Chandra Kapireddy, Head of Gen AI, ML & Analytics at Truist, presents the bank's comprehensive AI strategy, showcasing real-world implementations and the practical challenges of deploying AI at enterprise scale in financial services.</p>

## The Scale of Truist's AI Ambition

Kapireddy opened by contextualizing Truist's position in the market—serving over 12 million consumer households and managing $550 billion in assets. At this scale, even small improvements in efficiency or customer experience translate to massive impact.

## Key AI Applications at Truist

**Customer Service Enhancement:**
• **Intelligent routing** that directs customer inquiries to the right specialist based on natural language processing
• **Predictive support** that anticipates customer needs before they even reach out
• **Real-time sentiment analysis** during customer interactions to improve satisfaction

**Risk Management:**
• **Fraud detection algorithms** that can identify suspicious patterns in milliseconds
• **Credit risk assessment** using alternative data sources beyond traditional credit scores
• **Compliance monitoring** that automatically flags potential regulatory issues

**Operational Efficiency:**
• **Document processing** using computer vision to extract and validate information from forms
• **Process automation** for routine back-office tasks
• **Workforce optimization** to predict staffing needs across different locations and times

## The Technology Stack

What impressed me most was Kapireddy's transparency about the technical infrastructure required. She discussed:

• **Data architecture** challenges when dealing with petabytes of financial data
• **Model governance** frameworks to ensure AI decisions are explainable and auditable
• **A/B testing methodologies** for safely deploying AI features to millions of customers
• **Cloud infrastructure** considerations for both performance and security

## Responsible AI at Scale

Kapireddy spent significant time on Truist's approach to responsible AI deployment:

**Bias Detection and Mitigation:**
• Regular auditing of AI models for discriminatory outcomes
• Diverse training datasets that represent all customer demographics
• Human oversight loops for high-stakes decisions

**Explainability:**
• Tools that can provide clear reasoning for AI-driven decisions
• Customer-facing explanations for recommendations or automated actions
• Regulatory reporting capabilities for all AI-driven processes

**Privacy Protection:**
• Advanced encryption and anonymization techniques
• Minimal data collection principles
• Customer control over how their data is used for AI training

## Challenges and Lessons Learned

Kapireddy was refreshingly honest about the challenges:

• **Change management** across a 50,000+ person organization
• **Legacy system integration** when implementing cutting-edge AI tools
• **Regulatory uncertainty** as rules struggle to keep pace with technology
• **Talent acquisition** in a competitive market for AI experts

## Looking Forward

Her vision for the future was both ambitious and grounded:
• AI becoming invisible infrastructure that simply makes banking better
• Hyper-personalized financial services that adapt to individual customer contexts
• Predictive financial health tools that help customers avoid problems before they occur
• Seamless integration between digital and human interaction channels

What made Kapireddy's presentation special was her ability to bridge the gap between high-level strategy and implementation details. As someone just starting to learn about both finance and AI, I left with a much clearer understanding of what it actually takes to deploy these technologies responsibly at massive scale.`
        },
        {
          id: "1.6",
          title: "BlackRock's Tina Zhao: LLMs in Asset Management",
          content: `**Tianjiao (Tina) Zhao**, Director and Head of Applied AI Modeling at BlackRock, delivered what might have been the most technically sophisticated presentation of the day. Her insights into how the world's largest asset manager is deploying Large Language Models (LLMs) provided a fascinating glimpse into the future of investment management.

<img src="/lovable-uploads/c2718822-9515-40af-aebf-f7b833b9b12b.png" alt="Tina Zhao presenting BlackRock's LLM applications" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Tianjiao (Tina) Zhao, Director and Head of Applied AI Modeling at BlackRock, demonstrates how Large Language Models are revolutionizing investment research and portfolio management at the world's largest asset manager, with applications spanning market analysis, risk assessment, and investment decision-making.</p>

## BlackRock's LLM Revolution

Managing over $10 trillion in assets, BlackRock processes an unimaginable amount of information daily—earnings reports, market research, economic indicators, news articles, social media sentiment, and alternative data sources. Zhao showed how LLMs are transforming this information processing challenge into a competitive advantage.

## Key Applications of LLMs

**Research Augmentation:**
Traditional analysts can only read and process a limited number of documents per day. BlackRock's LLMs can simultaneously analyze thousands of earnings transcripts, research reports, and news articles, extracting key insights and identifying patterns that might escape human attention.

**Investment Signal Generation:**
LLMs don't just process information—they generate actionable investment signals by:
• Analyzing sentiment across multiple data sources
• Identifying emerging themes before they become consensus views
• Detecting inconsistencies between management statements and market expectations
• Correlating alternative data with traditional financial metrics

**Automated Trading Workflows:**
Zhao described sophisticated systems where LLMs:
• Generate trade ideas based on multi-source analysis
• Perform preliminary risk assessments
• Draft trade rationales for human review
• Monitor position performance and suggest adjustments

## Technical Architecture

What set Zhao's presentation apart was her detailed discussion of the technical infrastructure:

**Data Pipeline:**
• Real-time ingestion from hundreds of data sources
• Advanced preprocessing to handle different formats and languages
• Quality scoring systems to weight information by reliability
• Vector databases for efficient similarity search across vast document collections

**Model Training and Fine-tuning:**
• Custom financial domain training on proprietary datasets
• Continuous learning from market outcomes and analyst feedback
• Multi-model ensembles that combine different LLM architectures
• A/B testing frameworks for model performance evaluation

**Risk Management:**
• Hallucination detection systems to identify when models generate unreliable information
• Human oversight loops for all high-stakes decisions
• Stress testing of AI-generated recommendations against historical scenarios
• Regular model auditing for bias and performance drift

## Specific Use Cases

**Earnings Call Analysis:**
Zhao demonstrated a system that:
• Transcribes earnings calls in real-time
• Identifies key topics and sentiment shifts
• Compares management responses to analyst questions across quarters
• Generates investment implications within minutes of call completion

**ESG Research:**
LLMs help BlackRock analyze:
• Sustainability reports across thousands of companies
• Social media sentiment around corporate environmental practices
• Regulatory filing language that might indicate ESG risks
• Supply chain analysis for environmental and social impact assessment

**Market Regime Detection:**
By analyzing patterns in news, regulatory announcements, and market data, LLMs help identify:
• Early signals of market regime changes
• Sector rotation opportunities
• Currency and commodity trend shifts
• Central bank policy implications

## Responsible AI in Asset Management

Zhao emphasized BlackRock's commitment to responsible AI deployment:

**Explainability:**
Every LLM-generated recommendation includes:
• Clear reasoning chains showing how conclusions were reached
• Source attribution for all key information
• Confidence scores for different aspects of the analysis
• Alternative scenarios and their probability assessments

**Bias Mitigation:**
• Regular testing for demographic, geographic, and sector biases
• Diverse training data that represents global markets fairly
• Human oversight from analysts with different backgrounds and perspectives
• Continuous monitoring of model decisions for unexpected patterns

**Client Transparency:**
• Clear disclosure when AI tools contribute to investment decisions
• Educational materials helping clients understand AI's role in their portfolios
• Option for clients to see the data sources and reasoning behind recommendations

## Performance and Impact

While Zhao couldn't share specific performance numbers, she indicated that LLM integration has led to:
• Significant improvements in research productivity
• Earlier identification of investment opportunities
• More comprehensive risk assessment
• Enhanced client communication and reporting

## Future Developments

Zhao outlined several exciting areas of development:
• Multi-modal models that can analyze charts, images, and satellite data alongside text
• Real-time market simulation using LLMs to test investment strategies
• Personalized research generation tailored to specific client interests
• Cross-asset pattern recognition that identifies opportunities across different markets

## Key Takeaways

What made Zhao's presentation particularly valuable was her balance of technical depth with practical implementation insights. She demonstrated how BlackRock approaches AI deployment with the rigor and risk management you'd expect from a fiduciary managing trillions in client assets.

For someone like me, just beginning to understand both finance and AI, her presentation illuminated how these technologies aren't just academic exercises—they're already reshaping how the world's largest investment decisions are made.

The session reinforced that we're witnessing a fundamental transformation in how financial markets operate, with LLMs serving as force multipliers for human expertise rather than replacements for human judgment.`
        },
        {
          id: "1.7",
          title: "Quantamental Research in Snowflake — Jonathan Regenstein",
          content: `Jonathan Regenstein, Head of Financial Services AI at Snowflake, demonstrated how Snowflake is operationalizing quantamental research by embedding LLM-powered analytics directly into the financial data pipeline.

<img src="/lovable-uploads/08a013d5-bc91-4e5e-9192-933146cd530f.png" alt="Jonathan Regenstein presenting Snowflake financial services solutions" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">Jonathan Regenstein, Head of Financial Services AI at Snowflake, presenting quantamental research capabilities with a focus on financial services verticals including Wealth & Asset Management, Ecosystem, Payments, and Insurance at the AI & Future of Finance Conference.</p>

**Key Takeaways from the S&P Market Intelligence QuickStart:**

**Earnings Call Analysis, Automated:**
Regenstein's demo centered on analyzing earnings transcripts with LLMs via Snowflake Cortex AI. By comparing analyst questions, executive responses, and LLM-generated answers, users can quantitatively score "on-topicness" and "proactiveness"—two behavioral metrics proven to generate alpha. Proactive, on-topic management correlates to +515bps of annualized outperformance.

**Modern Data Stack, End-to-End:**
The workflow starts by ingesting machine-readable transcripts (from S&P Global Market Intelligence), storing them in Snowflake tables, and applying SQL/Python Cortex functions—all within Snowflake Notebooks.

Key steps:<br/>
• Create database objects and load transcript data from S3.<br/>
• Generate text embeddings for questions and answers.<br/>
• Use cosine similarity to compare how closely executive answers track analyst queries.<br/>
• Leverage LLMs (via Cortex) to benchmark executive answers against ideal model-generated responses.

**Snowflake Cortex: AI/ML at Scale, Natively**
Snowflake Cortex is a fully managed platform for deploying LLM and ML functions via SQL and Python. It allows analysts and quants to run NLP workflows, build embeddings, perform sentiment analysis, and deploy generative models—without leaving the data warehouse environment.

**Why This Matters:**
Traditional financial research workflows are manual and fragmented. By running NLP and LLM-driven analysis natively in Snowflake, teams gain speed, scalability, and reproducibility—critical for modern quantamental strategies.

**What You Can Build:**<br/>
• Automated scoring of management communication quality for any public company.<br/>
• Systematic signals for alpha generation based on real language data, not just numbers.<br/>
• A unified, version-controlled workflow using Snowflake Notebooks—integrated with GitHub for collaboration.

**Broader Implications:**
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
          content: `**Future of Gen AI**
The "Future of Gen AI" panel brought together leaders from AWS, Salesforce, and Microsoft to debate where generative AI is heading next. Panelists discussed practical enterprise adoption, emerging risks, and how foundational models are changing the pace of software and business innovation. The session emphasized the need for responsible deployment, cross-industry collaboration, and continuous research to keep up with rapid advances.

<img src="/lovable-uploads/5a0743b9-a0d9-4a8e-9243-237920ac12b2.png" alt="Future of Gen AI panel discussion" class="w-full rounded-lg mb-4 mt-6" />
<p class="text-sm text-gray-600 italic text-center mb-6">The "Future of Gen AI" panel featuring leaders from AWS, Salesforce, and Microsoft discussing enterprise AI adoption and innovation at the Georgia Tech Scheller College of Business.</p>

Panel included:<br/>
• Sudipta Sengupta, Vice President and Distinguished Scientist, Amazon AWS<br/>
• Robbie Birbeck, Vice President of BT Customer Zero, Salesforce<br/>
• Allen Stewart, Partner Director of Software Engineering, Microsoft<br/>
• Moderator: Mark Riedl, Professor, Georgia Tech School of Interactive Computing

Hearing from Robbie Birbeck was a highlight for me, especially since I had just accepted my offer to intern at Salesforce this summer. It was exciting to get an insider's perspective on the Customer Zero Experience—where Salesforce employees are the platform's first users. Later, I had a great conversation with Robbie and he introduced me to the Agentforce Specialist Certification, which is free for students. I jumped on the opportunity and am now officially Agentforce Specialized. I can't wait to learn even more with Salesforce this summer!

**Panel: View from the C-Suite: Promises and Challenges of AI in Finance**
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

<div class="grid grid-cols-1 lg:grid-cols-2 gap-8">
  <!-- Column 1 -->
  <div class="space-y-4">
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🔗 Leadership</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/steve-mclaughlin-3420893/" target="_blank" class="text-blue-600 hover:underline">Steve McLaughlin</a></div>
            <div class="text-xs text-gray-600">Provost & Executive VP, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/anuj-mehrotra-631b8847/" target="_blank" class="text-blue-600 hover:underline">Anuj Mehrotra</a></div>
            <div class="text-xs text-gray-600">Dean, Georgia Tech Scheller College</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🔥 Fireside Chat CEOs</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/bill-rogers-48543b6/" target="_blank" class="text-blue-600 hover:underline">Bill Rogers</a></div>
            <div class="text-xs text-gray-600">CEO, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/andrew-schlossberg-4a43196/" target="_blank" class="text-blue-600 hover:underline">Andrew Schlossberg</a></div>
            <div class="text-xs text-gray-600">President & CEO, Invesco</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🤝 Corporate Partners</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/jesse-sammons/" target="_blank" class="text-blue-600 hover:underline">Jesse Sammons</a></div>
            <div class="text-xs text-gray-600">Corporate Partnerships, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/ericfender/" target="_blank" class="text-blue-600 hover:underline">Eric Fender</a></div>
            <div class="text-xs text-gray-600">SVP Innovation, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/stephanie-ray-833a7021/" target="_blank" class="text-blue-600 hover:underline">Stephanie Ray</a></div>
            <div class="text-xs text-gray-600">VP Senior Project Manager, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/darrenprice/" target="_blank" class="text-blue-600 hover:underline">Darren Price</a></div>
            <div class="text-xs text-gray-600">Enterprise Account Executive, AWS</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">⚙️ Gen AI Panel</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/sudipta-sengupta-9b4603/" target="_blank" class="text-blue-600 hover:underline">Sudipta Sengupta</a></div>
            <div class="text-xs text-gray-600">VP & Distinguished Scientist, AWS</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/robbie-birbeck/" target="_blank" class="text-blue-600 hover:underline">Robbie Birbeck</a></div>
            <div class="text-xs text-gray-600">VP BT Customer Zero, Salesforce</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/allen-stewart/" target="_blank" class="text-blue-600 hover:underline">Allen Stewart</a></div>
            <div class="text-xs text-gray-600">Partner Director, Microsoft</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm">Mark Riedl</div>
            <div class="text-xs text-gray-600">Professor, Georgia Tech (Moderator)</div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Column 2 -->
  <div class="space-y-4">
    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">👔 C-Suite Panel</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/shannonajohnston/" target="_blank" class="text-blue-600 hover:underline">Shannon Johnston</a></div>
            <div class="text-xs text-gray-600">CIO & COO, Invesco</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/christopher-edmonds-483037a/" target="_blank" class="text-blue-600 hover:underline">Christopher Edmonds</a></div>
            <div class="text-xs text-gray-600">President, Fixed Income & Data Services, ICE</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/deepika-mahajan-cfa-4015944b/" target="_blank" class="text-blue-600 hover:underline">Deepika Mahajan</a></div>
            <div class="text-xs text-gray-600">Chief Data Officer, Federal Reserve Bank of NY</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">💼 Finance Leaders</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/andy-dietderich/" target="_blank" class="text-blue-600 hover:underline">Andrew Dietderich</a></div>
            <div class="text-xs text-gray-600">Co-Head Global Finance, Sullivan and Cromwell</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/brettmwilson/" target="_blank" class="text-blue-600 hover:underline">Brett Wilson</a></div>
            <div class="text-xs text-gray-600">Partner, McKinsey & Company</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/manavmisra/" target="_blank" class="text-blue-600 hover:underline">Manav Misra</a></div>
            <div class="text-xs text-gray-600">Chief Data Officer, Regions Bank</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/stephen-markwell/" target="_blank" class="text-blue-600 hover:underline">Stephen Markwell</a></div>
            <div class="text-xs text-gray-600">Head of Fintech Partnerships, JPMorgan</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/kumananramanathan/" target="_blank" class="text-blue-600 hover:underline">Kumanan Ramanathan</a></div>
            <div class="text-xs text-gray-600">Co-Head of Crypto, Alvarez & Marsal</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/john-neubauer-20078612/" target="_blank" class="text-blue-600 hover:underline">John Neubauer</a></div>
            <div class="text-xs text-gray-600">Managing Director, JPMorgan</div>
          </div>
        </div>
      </div>
    </div>

    <div>
      <h4 class="text-lg font-semibold mb-3 text-gray-800 flex items-center gap-2">🎤 Additional Speakers</h4>
      <div class="space-y-2">
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/sudheerchava/" target="_blank" class="text-blue-600 hover:underline">Sudheer Chava</a></div>
            <div class="text-xs text-gray-600">Professor & Lab Director, Georgia Tech</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm">Chandra Kapireddy</div>
            <div class="text-xs text-gray-600">Head of Gen AI, Truist</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm">Thomas Bodenski</div>
            <div class="text-xs text-gray-600">COO, TS Imagine</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm"><a href="https://www.linkedin.com/in/deepsrivastavinnovate/" target="_blank" class="text-blue-600 hover:underline">Deep Ratna Srivastav</a></div>
            <div class="text-xs text-gray-600">Chief AI Officer, Franklin Templeton</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm">Tianjiao (Tina) Zhao</div>
            <div class="text-xs text-gray-600">Director, BlackRock</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm">Jonathan Regenstein</div>
            <div class="text-xs text-gray-600">Head of Financial Services AI, Snowflake</div>
          </div>
        </div>
        <div class="flex items-center gap-2 p-2 bg-white rounded-lg border">
          <div class="flex-1">
            <div class="font-medium text-sm">Gauri Sharma</div>
            <div class="text-xs text-gray-600">CS @ Georgia Tech</div>
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
      ];

  const currentSection = sections.find(section => section.id === sectionId);

  if (!currentSection) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <h2 className="text-xl font-semibold text-red-800 mb-2">Section Not Found</h2>
          <p className="text-red-600">The requested section could not be found.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{currentSection.title}</h1>
          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: currentSection.content }}
          />
        </div>
      </div>
    </div>
  );
};