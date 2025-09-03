import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, User, Building2, TrendingUp, Shield, Users, Code, Zap, Globe } from "lucide-react";

export default function NewsletterArchive() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold text-primary">Newsletter Archive</h1>
        <p className="text-xl text-muted-foreground">
          Insights from industry leaders and thought-provoking perspectives
        </p>
      </div>

      {/* Newsletter Issue */}
      <Card className="shadow-lg">
        <CardHeader className="border-b bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start gap-4">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  Issue #2
                </Badge>
                <Badge variant="outline" className="text-sm">
                  July 16, 2025
                </Badge>
              </div>
              <CardTitle className="text-2xl lg:text-3xl text-primary leading-tight">
                Deep Dive: Distributed Systems & Conference Highlights
              </CardTitle>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <User className="h-4 w-4" />
                  Srini Tallapragada
                </div>
                <div className="flex items-center gap-1">
                  <Building2 className="h-4 w-4" />
                  Salesforce
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="h-4 w-4" />
                  July 16, 2025
                </div>
              </div>
            </div>
          </div>
        </CardHeader>

        <CardContent className="p-6 space-y-6">
          {/* Opening Quote */}
          <blockquote className="border-l-4 border-primary pl-4 py-2 bg-blue-50 rounded-r-lg">
            <p className="text-lg italic text-primary font-medium">
              "Leaders are hired for growth—not margins. Growth is fun. Cutting isn't."
            </p>
            <p className="text-sm text-muted-foreground mt-2">
              — Srini Tallapragada, President & Chief Engineering and Customer Success Officer at Salesforce
            </p>
          </blockquote>

          <p className="text-lg leading-relaxed">
            That's Srini Tallapragada, President & Chief Engineering and Customer Success Officer at Salesforce, 
            delivered this truth with conviction—and it resonates.
          </p>

          {/* Key Insights */}
          <div className="grid gap-6">
            {/* Insight 1 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
                <h3 className="text-xl font-semibold text-primary">Growth First, Efficiency Second</h3>
              </div>
              <p className="text-base leading-relaxed pl-10">
                Srini shared a vivid anecdote: a large Indian bank CEO prioritized speed and scale above cost. 
                "Growth, not cost—my bottleneck is people," he said, ambitious to expand into 32 states and cross borders, 
                but unable to hire and train fast enough. Srini framed this as a pivotal challenge: companies must think big, 
                or risk falling into a myopic loop of endless cost-cutting.
              </p>
              <p className="text-base leading-relaxed pl-10">
                When leadership lacks vision, they "go into a native spiral of cutting, cutting, cutting"—and that's not fun. 
                As Srini states, "No CEO is hired for margin. Almost every CEO is hired for growth."
              </p>
            </div>

            {/* Insight 2 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
                <h3 className="text-xl font-semibold text-primary">Engineering with Future-proof Backward Compatibility</h3>
              </div>
              <p className="text-base leading-relaxed pl-10">
                A junior engineer asked Srini: how do you leap forward without breaking the past? His answer was elegant: 
                customers don't buy software; they hire it to get a job done—today and tomorrow.
              </p>
              <p className="text-base leading-relaxed pl-10">
                Salesforce maintains 60 supported API versions, enabling seamless upgrades and protecting customizations 
                while delivering innovation. This isn't just engineering—it's a robust promise of progressive evolution.
              </p>
            </div>

            {/* Insight 3 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
                <h3 className="text-xl font-semibold text-primary">Trust: The Foundation of AI Innovation</h3>
              </div>
              <p className="text-base leading-relaxed pl-10">
                Trust sits at the pinnacle of Salesforce's values—first, above innovation. Srini insists: "Without trust, 
                innovation is meaningless."
              </p>
              <p className="text-base leading-relaxed pl-10">
                When building AI systems like Agentforce, Salesforce invested heavily in a trust layer: ✅ rollback access, 
                attribute-based permissions, policy guardrails, regional certifications. These aren't features. 
                These are fundamental enablers of enterprise AI.
              </p>
            </div>

            {/* Insight 4 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
                <h3 className="text-xl font-semibold text-primary">Durable Culture, Adaptive Innovation</h3>
              </div>
              <p className="text-base leading-relaxed pl-10">
                Looking years ahead, Srini says the greatest challenge isn't predicting technology—it's building a culture 
                that can adapt and endure.
              </p>
              <p className="text-base leading-relaxed pl-10">
                Durable investments: psychological safety, empowerment, nimble teams, values-driven clarity—those last. 
                Technology shifts, problems evolve, but culture is the anchor.
              </p>
              <p className="text-base leading-relaxed pl-10">
                He emphasises rapid feedback loops: build → test → learn → iterate, layered across engineering stacks—from 
                infrastructure to user-facing components. At every level: fast change, no breakage.
              </p>
            </div>

            {/* Insight 5 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  5
                </div>
                <h3 className="text-xl font-semibold text-primary">AI, Accountability, and Quality in the Developer Loop</h3>
              </div>
              <p className="text-base leading-relaxed pl-10">
                On AI-assisted coding, Srini shared a sobering warning: "My nightmare is code I don't understand—that breaks 
                in production." Productivity must never override accountability.
              </p>
              <p className="text-base leading-relaxed pl-10">
                Engineers must understand the AI-generated code they review and ship. Metrics track cycle time, 
                end-to-end customer value, quality—not just speed. Tools are amplifiers, not shortcuts to responsibility.
              </p>
            </div>

            {/* Insight 6 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  6
                </div>
                <h3 className="text-xl font-semibold text-primary">Navigating Enterprise AI's Hype and Realism</h3>
              </div>
              <p className="text-base leading-relaxed pl-10">
                Enterprises face three core challenges with AI adoption:
              </p>
              <ul className="list-disc list-inside pl-10 space-y-1 text-base">
                <li>Change management—embedding new workflows.</li>
                <li>Trust—can it be deployed safely?</li>
                <li>Cost—what's the ROI?</li>
              </ul>
              <p className="text-base leading-relaxed pl-10">
                Srini advises starting small: deploy agents for simple, high-impact use-cases like answering FAQs or 
                resetting passwords. Let internal evangelism and ROI guide expansion.
              </p>
              <p className="text-base leading-relaxed pl-10">
                He believes we're still in AI's hype cycle. The real transformation—true GDP uplift—arrives when realistic, 
                responsible solutions rise beyond flash.
              </p>
            </div>

            {/* Insight 7 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  7
                </div>
                <h3 className="text-xl font-semibold text-primary">Platform Power: Metadata Enables Adaptation</h3>
              </div>
              <p className="text-base leading-relaxed pl-10">
                Salesforce isn't just software—it's a platform. Srini emphasized metadata's magic: each customer, 
                department, company has unique workflows. Metadata creates a powerful level of indirection—abstracting 
                differences while enabling deep customization.
              </p>
              <p className="text-base leading-relaxed pl-10">
                That's how Salesforce serves 10 million companies with one core codebase.
              </p>
            </div>

            {/* Insight 8 */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-primary text-white rounded-full flex items-center justify-center text-sm font-bold">
                  8
                </div>
                <h3 className="text-xl font-semibold text-primary">Location, Community, and Emerging Talent</h3>
              </div>
              <p className="text-base leading-relaxed pl-10">
                Finally, Srini addressed engineers wondering if San Francisco still matters. His answer: yes—if you can choose, 
                be in SF. The proximity to infrastructure, AI, and chip ecosystems is invaluable.
              </p>
              <p className="text-base leading-relaxed pl-10">
                Yet, he assures global teams are thriving across Bellevue, Hyderabad, Bangalore, Tel Aviv, Vancouver. 
                With hubs and distributed engineering, Salesforce ensures inclusion without sacrificing innovation.
              </p>
            </div>
          </div>

          {/* Summary Table */}
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-primary mb-4">In Summary: Srini's Unique Perspective</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-primary/10">
                    <th className="border border-border p-3 text-left font-semibold">Insight</th>
                    <th className="border border-border p-3 text-left font-semibold">Core Message</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-border p-3 font-medium">Growth > Efficiency</td>
                    <td className="border border-border p-3">Leaders live by growth. Don't fixate on cost.</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3 font-medium">Compatibility in Innovation</td>
                    <td className="border border-border p-3">Maintain stability while modernizing.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">Trust as a Value</td>
                    <td className="border border-border p-3">AI must be built on ethical, secure foundations.</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3 font-medium">Culture Endures</td>
                    <td className="border border-border p-3">People-first culture trumps tech shifts.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">AI with Accountability</td>
                    <td className="border border-border p-3">Speed isn't value—responsible delivery is.</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3 font-medium">Smart Adoption of AI</td>
                    <td className="border border-border p-3">Start small, build trust, scale with results.</td>
                  </tr>
                  <tr>
                    <td className="border border-border p-3 font-medium">Metadata as Magic</td>
                    <td className="border border-border p-3">Platform-level abstraction enables customization.</td>
                  </tr>
                  <tr className="bg-muted/30">
                    <td className="border border-border p-3 font-medium">SF Matters, But So Do Hubs</td>
                    <td className="border border-border p-3">Local ecosystem fuels innovation, global scale fuels reach.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-6 border-t border-border text-center text-muted-foreground">
            <p className="text-sm">
              This newsletter captures key insights from industry leaders and thought-provoking perspectives 
              on technology, leadership, and innovation.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
