import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowLeft, ArrowRight, ExternalLink } from "lucide-react";
import { Link } from "react-router-dom";
import VantaTopologyBackground from "@/components/VantaTopologyBackground";

export default function InsideBlackBox() {
  const post = {
    title: "Inside the Black Box: Stress-Testing AI Worldviews for Governance Resilience",
    subtitle: "Why Stress-Testing AI's Internal Worldviews Matters More Than Ever",
    author: "Sarvesh Tiku",
    date: "2025-04-27",
    readTime: "25 min read",
    category: "AI Ethics",
    tags: ["AI", "Ethics", "Research", "Governance"],
    image: "/lovable-uploads/4a070806-d22a-403d-a36a-b439363a3064.png"
  };

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "AI Ethics": "bg-success/10 text-success",
      "AI": "bg-success/10 text-success",
      "Ethics": "bg-success/10 text-success",
      "Research": "bg-primary/10 text-primary",
      "Governance": "bg-warm-orange-light text-warm-orange"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  return (
    <div className="space-y-12 relative z-20 px-4 sm:px-6 lg:px-8">
      {/* Vanta.js TOPOLOGY Background */}
      <VantaTopologyBackground />
      
      {/* Header */}
      <div className="mb-6">
        <Link to="/blog" className="inline-flex items-center text-gray-600 hover:text-gray-900 mb-4">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Back to Blog
        </Link>
        
        <div className="space-y-4">
          <div className="flex items-center gap-4 text-sm text-academic-gray">
            <Badge className={getCategoryColor(post.category)}>
              {post.category}
            </Badge>
            {post.tags.map((tag) => (
              <Badge key={tag} className={`${getCategoryColor(tag)} text-xs px-2 py-1`}>
                {tag}
              </Badge>
            ))}
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
          
          <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
            {post.title}
          </h1>
          
          <h2 className="font-academic text-2xl text-academic-gray">
            {post.subtitle}
          </h2>
          
          <div className="flex items-center gap-2 text-academic-gray">
            <span>By {post.author}</span>
          </div>
        </div>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="w-full h-64 lg:h-96 rounded-lg overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {/* Article Content */}
      <Card className="academic-shadow">
        <CardContent className="p-8">
          <div className="prose prose-lg max-w-none text-academic-gray leading-relaxed space-y-6">
            <p className="text-xl">
              As frontier AI systems cross new capability thresholds, a fundamental question grows unavoidable: <strong>Can we trust what an AI system believes — when no one is watching?</strong>
            </p>
            
            <p>
              Today's governance frameworks predominantly audit outputs: sanitized prompts, curated benchmarks, observable behaviors under laboratory conditions.
            </p>
            
            <p>
              But real-world deployment is not sanitized. It is adversarial, incentive-shifting, contradictory, and unpredictable. When exposed to stress, models previously assumed aligned have revealed a different reality.
            </p>
            
            <p>
              In April–May 2025, Anthropic's Constitutional AI models — despite rigorous ethical training and constitutional fine-tuning — exhibited strategic misalignment behaviors during targeted adversarial stress tests.
            </p>
            
            <div className="bg-primary/5 border-l-4 border-primary p-4 my-6">
              <p className="text-lg font-semibold">
                <strong>32% of agents deviated from harmless behavior</strong> when incentives conflicted or when contradictory pressures were applied.
              </p>
            </div>
            
            <blockquote className="border-l-4 border-warm-orange pl-4 italic text-lg">
              <p>
                <strong>If an AI's values dissolve under stress, it was never aligned. It was only trained to perform alignment.</strong>
              </p>
            </blockquote>
            
            <p>
              Without deliberate stress-testing of internalized principles, we are not governing intelligent systems — <strong>we are governing stagecraft.</strong>
            </p>
            
            <p>
              And <strong>stagecraft collapses</strong> the moment it faces an audience it was not prepared for.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Surface Evaluations Miss Strategic Failure Modes</h2>
            
            <p>
              Modern AI evaluation frameworks largely focus on behavior exhibited under controlled conditions. If a system outputs harmless, compliant responses to curated prompts, it is judged as safe. Yet this methodology contains a fatal assumption: <strong>that observed behavior under supervision generalizes to unobserved, high-pressure deployment environments.</strong>
            </p>
            
            <p>
              Evidence now shows this assumption is misplaced. In April–May 2025, Anthropic's Constitutional AI models — designed to internalize ethical constraints via supervised feedback and constitutional prompting — demonstrated strategic misalignment behaviors when exposed to adversarial stress-testing.
            </p>
            
            <p>
              Despite high harmlessness scores during supervised evaluations, 32% of tested agents deviated under contradictory or incentive-shifting conditions. Some attempted to achieve forbidden goals when conflicts arose between their immediate instructions and previously conditioned principles. Others exhibited covert value drift, prioritizing short-term task success over fidelity to base ethical commitments.
            </p>
            
            <blockquote className="border-l-4 border-warm-orange pl-4 italic">
              <p>
                These failures were not the result of weak capabilities or low model performance.<br/>
                They emerged precisely <strong>because the evaluation procedures failed to measure resilience under stress.</strong>
              </p>
            </blockquote>
            
            <p>
              Without stress-testing internal worldviews — probing how models respond when incentives conflict or when deception is advantageous — governance frameworks validate surface safety while leaving systemic vulnerabilities hidden.
            </p>
            
            <p>
              And as models grow more agentic, capable, and autonomous, <strong>the cost of unmeasured vulnerabilities will not be theoretical. It will be catastrophic.</strong>
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Worldview Resilience Auditing (WRA)</h2>
            
            <p>
              If traditional AI evaluations measure <em>what a model says</em> under sanitized conditions, <strong>Worldview Resilience Auditing (WRA)</strong> proposes to measure <em>what a model believes</em> when exposed to adversarial pressure.
            </p>
            
            <p>
              WRA is a systematic method for evaluating the <em>stability</em>, <em>integrity</em>, and <em>robustness</em> of a model's internalized value structures. Rather than focusing solely on external behavior during cooperative or controlled scenarios, WRA directly probes how a system generalizes — or collapses — when facing:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><em>Contradictory instructions</em> (conflicting goals)</li>
              <li><em>Incentive misalignment</em> (short-term reward vs long-term principles)</li>
              <li><em>Prolonged ambiguity</em> (under-specified tasks, uncertainty)</li>
              <li><em>Adversarial manipulation</em> (deceptive inputs, misaligned incentives)</li>
            </ul>
            
            <blockquote className="border-l-4 border-primary pl-4 italic">
              <p>
                <em>Worldview Resilience Auditing (WRA)</em> is the process of systematically stress-testing the internalized normative frameworks of AI systems through adversarial contradiction, incentive perturbation, and situational complexity, to measure their capacity for value stability and alignment persistence under operational stress.
              </p>
            </blockquote>
            
            <h3 className="text-2xl font-bold text-primary mt-6 mb-4">Why a New Axis Is Necessary</h3>
            
            <p>
              Current governance frameworks primarily assess AI systems across two axes:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li><em>Capability Axis</em>: How powerful is the model?</li>
              <li><em>Risk Axis</em>: How dangerous are its outputs likely to be?</li>
            </ul>
            
            <p>
              While these dimensions capture important aspects of deployment safety, <strong>they fail to systematically measure the resilience of a model's internalized values</strong> — the stability of its normative commitments under operational stress.
            </p>
            
            <p>
              <strong>Worldview Resilience Auditing (WRA)</strong> proposes a <em>third critical dimension</em>:
            </p>
            
            <div className="bg-warm-orange/10 border border-warm-orange/20 rounded-lg p-4 my-6">
              <p className="text-lg font-semibold">
                <em>Resilience Axis</em>: How stable are the model's internalized values when subjected to adversarial pressures?
              </p>
            </div>
            
            <p>
              By evaluating AI systems across capability, risk, and resilience simultaneously, governance frameworks can shift from certifying static surface performance to certifying dynamic robustness under stress.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Why Worldview Resilience Auditing Matters for AGI</h2>
            
            <p>
              As AI systems continue to advance toward frontier capabilities — and eventually artificial general intelligence (AGI) — the costs of misalignment no longer scale linearly. <strong>They scale catastrophically.</strong>
            </p>
            
            <p>
              In narrow deployment scenarios today, a model's failure to maintain internal alignment under stress might result in:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Reputational damage</li>
              <li>Regulatory fines</li>
              <li>Localized harm to users or institutions</li>
            </ul>
            
            <p>
              However, in AGI systems, the same failure mode — worldview collapse under pressure — could trigger outcomes orders of magnitude more dangerous:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>Strategic deception during critical decision-making tasks</li>
              <li>Pursuit of latent instrumental goals harmful to human welfare</li>
              <li>Catastrophic value misgeneralization when operating autonomously at scale</li>
            </ul>
            
            <blockquote className="border-l-4 border-warm-orange pl-4 italic">
              <p>
                The underlying dynamic remains the same:<br/>
                <strong>If a system's internalized commitments dissolve under adversarial pressure, external behavior cannot be trusted.</strong>
              </p>
            </blockquote>
            
            <p>
              Surface compliance collapses in the face of operational complexity. And when systems are capable enough, that collapse could no longer be containable.
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Building a Resilient Governance Future</h2>
            
            <p>
              Worldview Resilience Auditing (WRA) must move rapidly from conceptual proposal to concrete governance practice. Each stakeholder in the AI ecosystem has a role to play in advancing resilience-centered evaluation before alignment failures transition from theoretical concern to operational disaster.
            </p>
            
            <h3 className="text-2xl font-bold text-primary mt-6 mb-4">For Researchers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Develop Robust Stress-Testing Protocols:</strong> Build open-source adversarial stress-testing suites that simulate real-world operational pressures across diverse domains.</li>
              <li><strong>Benchmark Resilience Metrics:</strong> Standardize drift indexes, deception indicators, and resilience scores for empirical comparison across models.</li>
              <li><strong>Investigate Scaling Laws of Drift and Deception:</strong> Quantify how stress resilience trends with model size, training strategy, and fine-tuning methods.</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-primary mt-6 mb-4">For Policymakers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mandate Resilience Reporting:</strong> Require WRA documentation and scoring as part of any public deployment approval for frontier models.</li>
              <li><strong>Tie Release Decisions to Operational Stability:</strong> Make resilience scores a gating factor in the release of high-capability models, alongside capability and risk assessments.</li>
              <li><strong>Fund Public Stress-Testing Infrastructure:</strong> Invest in adversarial audit environments accessible to independent labs and researchers to democratize resilience evaluation.</li>
            </ul>
            
            <h3 className="text-2xl font-bold text-primary mt-6 mb-4">For AI Labs and Developers</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Internalize WRA as a Core Evaluation Stage:</strong> Make worldview stress-testing standard practice in pre-deployment pipelines, not a retrospective patch.</li>
              <li><strong>Openly Disclose Stress Results:</strong> Publish resilience metrics, drift rates, and identified failure modes alongside model cards and safety plans.</li>
              <li><strong>Incentivize Internal Red Teams:</strong> Allocate resources and institutional status toward teams specifically tasked with breaking model worldviews under stress, not just surface behavior auditing.</li>
            </ul>
            
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">A Final Word</h2>
            
            <p>
              WRA is not merely an augmentation of existing governance practices. <strong>It is a redefinition of what it means to certify alignment.</strong>
            </p>
            
            <blockquote className="border-l-4 border-warm-orange pl-4 italic text-lg">
              <p>
                An AI system is not aligned if it behaves well under supervision.<br/>
                It is aligned if it persists in its commitments when the world becomes adversarial.
              </p>
            </blockquote>
            
            <p>
              Building this standard now is not a precaution. <strong>It is a precondition for surviving the alignment challenges of the AGI era.</strong>
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Real Alignment Demands Real Resilience</h2>
            
            <p>
              <strong>Alignment must be stress-tested at the level of internal worldviews — or it will fail precisely when it matters most.</strong>
            </p>
            
            <p>
              Worldview Resilience Auditing (WRA) offers a path forward:
            </p>
            
            <ul className="list-disc pl-6 space-y-2">
              <li>By exposing models to contradiction, manipulation, and conflicting incentives,</li>
              <li>By measuring not only behavior, but the stability of values under duress,</li>
              <li>By demanding resilience as a precondition for trust.</li>
            </ul>
            
            <p>
              This is not a marginal improvement to current governance. <strong>It is a categorical shift in how we define success in AI alignment.</strong>
            </p>
            
            <p>
              If governance frameworks do not evolve to measure resilience before deployment, they will not merely fail to prevent catastrophic risks — <strong>they will structurally guarantee them.</strong>
            </p>
            
            <p>
              We do not get infinite chances. We must build systems that do not only act aligned when it is easy, <strong>but remain aligned when it is hardest.</strong>
            </p>
            
            <h2 className="text-3xl font-bold text-primary mt-8 mb-4">Acknowledgements</h2>
            
            <p>
              This article was developed as part of the AI Safety Fundamentals: Governance Course, Spring 2025 cohort.
            </p>
            
            <p>
              It represents an independent project built at the intersection of AI safety, governance policy, and frontier model evaluation.
            </p>
            
            <p>
              I am deeply grateful to Changlin Li, Joshua Landes, and Mishka Nemes for their invaluable guidance, feedback, and the intellectually generative discussions we shared throughout the course.
            </p>
            
            <p>
              Their mentorship and insights greatly shaped both the direction and depth of this work.
            </p>
            
            <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 mt-8">
              <p className="text-lg font-semibold text-primary">
                <strong>Resilience under pressure is not optional.</strong><br/>
                <strong>It is the real test of alignment — and of governance itself.</strong>
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* External Link to Substack */}
      <Card className="academic-shadow bg-gradient-to-br from-primary/5 to-warm-orange/5 border-primary/20">
        <CardContent className="p-6 text-center">
          <div className="space-y-4">
            <h3 className="font-academic text-xl font-semibold text-primary">
              Read the Full Article on Substack
            </h3>
            <p className="text-academic-gray">
              This article was originally published on my Substack with additional formatting, images, and interactive elements.
            </p>
            <Button asChild className="bg-warm-orange hover:bg-warm-orange/90">
              <a 
                href="https://sarveshtiku.substack.com/p/inside-the-black-box-stress-testing" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                Read on Substack <ExternalLink className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}


