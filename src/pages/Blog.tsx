import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, ArrowRight, Mail, Send, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Blog() {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();
  const posts = [
    {
      title: "The Art of Code Review: Building Better Software Through Collaboration",
      excerpt: "Exploring how thoughtful code reviews can transform not just code quality, but team dynamics and knowledge sharing. A deep dive into practical strategies for meaningful peer review.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "Engineering",
      slug: "art-of-code-review"
    },
    {
      title: "Stripe Sessions Conference: The Future of Commerce",
      excerpt: "Stripe Sessions 2025 opened with a striking statistic: over 2 million U.S. businesses—6 percent of all companies, including half of the Fortune 100—now run on Stripe's platform. Here are my key takeaways from the conference.",
      date: "2025-05-08",
      readTime: "15 min read",
      category: "Conference",
      slug: "distributed-systems-lessons",
      image: "/lovable-uploads/f824f7f5-b38a-4fc8-b26c-829c3a25fffb.png"
    },
    {
      title: "AI and the Future of Finance Conference",
      excerpt: "Last week, I attended Georgia Tech's AI & Future of Finance Conference organised by the Scheller College of Business—and it exceeded all my expectations. Over two days, I connected with fellow students, researchers, and C-suite leaders.",
      date: "2025-05-22",
      readTime: "15 min read",
      category: "Conference",
      slug: "ai-finance-conference",
      image: "/lovable-uploads/115f906d-35e9-456b-9154-cc254bbf56d3.png",
      tags: ["FinTech"],
      location: "Atlanta, Georgia"
    }
  ];

  const newsletters = [
    {
      title: "Summer Reflections & New Beginnings",
      excerpt: "Summer internship reflections, new projects I'm excited about, and books I'm reading during the break. Plus insights into balancing research with industry work.",
      date: "2024-06-15",
      readTime: "5 min read",
      issue: "Issue #1",
      slug: "newsletter/summer-reflections-june"
    },
    {
      title: "Innovating with Trust, Fueling Growth: Srini Tallapragada's Vision at Salesforce",
      excerpt: "Leaders are hired for growth—not margins. Growth is fun. Cutting isn't. That's Srini Tallapragada, President & Chief Engineering and Customer Success Officer at Salesforce, delivered this truth with conviction—and it resonates.",
      date: "2025-07-16",
      readTime: "12 min read",
      issue: "Issue #2", 
      slug: "srini-salesforce-july"
    },
    {
      title: "Research Updates & AI Ethics in Practice",
      excerpt: "Latest research updates, side project launches, and my evolving thoughts on the future of AI ethics in software development.",
      date: "2024-08-15",
      readTime: "6 min read",
      issue: "Issue #3",
      slug: "newsletter/ai-ethics-august"
    },
    {
      title: "Building in Public: Lessons from Open Source",
      excerpt: "Reflections on contributing to open source projects, building developer tools, and the importance of community in software development.",
      date: "2024-09-15",
      readTime: "8 min read",
      issue: "Issue #4",
      slug: "newsletter/open-source-september"
    },
    {
      title: "The Future of Work in Tech: Remote, Hybrid, and Beyond",
      excerpt: "Exploring the evolving landscape of remote work, collaboration tools, and what the future holds for distributed teams in technology.",
      date: "2024-10-15",
      readTime: "6 min read",
      issue: "Issue #5",
      slug: "newsletter/future-work-october"
    },
    {
      title: "Year-End Reflections: Growth, Challenges, and What's Next",
      excerpt: "Looking back on a year of learning, the challenges that shaped my thinking, and exciting plans for the year ahead.",
      date: "2024-11-15",
      readTime: "7 min read",
      issue: "Issue #6",
      slug: "newsletter/year-end-november"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Engineering": "bg-primary-blue-light text-primary-blue",
      "Architecture": "bg-warm-orange-light text-warm-orange",
      "AI Ethics": "bg-success/10 text-success",
      "Conference": "bg-primary/10 text-primary",
      "FinTech": "bg-success/10 text-success"
    };
    return colors[category] || "bg-muted text-muted-foreground";
  };

  const handleNewsletterSignup = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email) {
      toast({
        title: "Error",
        description: "Please enter your email address",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      // TODO: Implement newsletter subscription with Supabase
      // For now, just show success message
      toast({
        title: "Success!",
        description: "Thank you for subscribing to the newsletter!",
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to subscribe. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Blog
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          Thoughts on software development, research, technology ethics, and the 
          intersection of academia and industry.
        </p>
      </section>

      {/* Featured Post */}
      <section>
        <h2 className="font-academic text-2xl font-semibold mb-6 text-primary">
          Featured Post
        </h2>
        <Card className="academic-shadow hover:warm-shadow transition-all duration-300">
          <CardContent className="p-8">
            <div className="space-y-4">
              <div className="flex items-center gap-4 text-sm text-academic-gray">
                <Badge className={getCategoryColor(posts[0].category)}>
                  {posts[0].category}
                </Badge>
                <div className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" />
                  {new Date(posts[0].date).toLocaleDateString('en-US', { 
                    year: 'numeric', 
                    month: 'long', 
                    day: 'numeric' 
                  })}
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="h-4 w-4" />
                  {posts[0].readTime}
                </div>
              </div>
              
              <h3 className="font-academic text-2xl font-semibold text-primary">
                {posts[0].title}
              </h3>
              
              <p className="text-academic-gray leading-relaxed text-lg">
                {posts[0].excerpt}
              </p>
              
              <Button asChild className="bg-warm-orange hover:bg-warm-orange/90">
                <Link to={`/blog/${posts[0].slug}`}>
                  Read Full Article <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* All Posts */}
      <section>
        <h2 className="font-academic text-2xl font-semibold mb-8 text-primary">
          Recent Posts
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {posts.slice(1).map((post, index) => (
            <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300 p-3">
              <div className="space-y-3">
                {post.image && (
                  <div className="w-full h-32 rounded-lg overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-academic-gray">
                  <Badge className={`${getCategoryColor(post.category)} text-xs px-2 py-1`}>
                    {post.category}
                  </Badge>
                  {(post as any).tags && (post as any).tags.map((tag: string) => (
                    <Badge key={tag} className={`${getCategoryColor(tag)} text-xs px-2 py-1`}>
                      {tag}
                    </Badge>
                  ))}
                  <div className="flex items-center gap-1">
                    <CalendarDays className="h-3 w-3" />
                    {new Date(post.date).toLocaleDateString('en-US', { 
                      month: 'short', 
                      day: 'numeric' 
                    })}
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-3 w-3" />
                    {post.readTime}
                  </div>
                </div>
                <h3 className="font-academic text-lg text-primary leading-tight">
                  {post.title}
                </h3>
                <p className="text-academic-gray leading-relaxed text-sm">
                  {post.excerpt}
                </p>
                <Button variant="outline" size="sm" asChild>
                  <Link to={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </section>

      {/* Past Newsletter Content */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <Mail className="h-6 w-6 text-primary" />
          <h2 className="font-academic text-2xl font-semibold text-primary">My Newsletter Archives</h2>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="sm" className="ml-auto">
                View All <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-96 max-h-96 overflow-y-auto bg-background border border-border z-50">
              <div className="p-2 space-y-2">
                {newsletters.map((newsletter, index) => (
                  <Link key={index} to={`/blog/${newsletter.slug}`} className="block">
                    <div className="p-3 hover:bg-accent rounded-md cursor-pointer">
                      <div className="space-y-1">
                        <h4 className="font-medium text-primary text-sm">{newsletter.title}</h4>
                        <p className="text-xs text-academic-gray">{newsletter.excerpt.substring(0, 80)}...</p>
                        <div className="flex justify-between items-center">
                          <p className="text-xs text-warm-orange">{new Date(newsletter.date).toLocaleDateString('en-US', { month: 'short', year: 'numeric' })}</p>
                          <Badge className="bg-warm-orange-light text-warm-orange text-xs">{newsletter.issue}</Badge>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        <div className="overflow-hidden">
          <div className="flex gap-4 animate-scroll-right">
            {[...newsletters, ...newsletters].map((newsletter, index) => (
              <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300 flex-shrink-0 w-80">
                <CardHeader>
                  <div className="flex items-center gap-3 text-sm text-academic-gray mb-2">
                    <Badge className="bg-warm-orange-light text-warm-orange">
                      {newsletter.issue}
                    </Badge>
                    <div className="flex items-center gap-1">
                      <CalendarDays className="h-3 w-3" />
                      {new Date(newsletter.date).toLocaleDateString('en-US', { 
                        month: 'short', 
                        day: 'numeric' 
                      })}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      {newsletter.readTime}
                    </div>
                  </div>
                  <CardTitle className="font-academic text-lg text-primary leading-tight">
                    {newsletter.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-academic-gray leading-relaxed text-sm">
                    {newsletter.excerpt.substring(0, 120)}...
                  </p>
                  <Button variant="outline" asChild size="sm">
                    <Link to={`/blog/${newsletter.slug}`}>
                      Read Newsletter <ArrowRight className="ml-2 h-3 w-3" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section>
        <Card className="academic-shadow bg-gradient-to-br from-primary/5 to-warm-orange/5 border-primary/20">
          <CardContent className="p-8 text-center">
            <div className="space-y-6 max-w-2xl mx-auto">
              <div className="space-y-3">
                <div className="flex justify-center">
                  <Mail className="h-12 w-12 text-warm-orange" />
                </div>
                <h2 className="font-academic text-3xl font-semibold text-primary">
                  My Newsletter
                </h2>
                <p className="text-lg text-academic-gray">
                  Join my monthly newsletter for insights on software development, research discoveries, 
                  and behind-the-scenes thoughts on building technology that matters.
                </p>
              </div>
              
              <form onSubmit={handleNewsletterSignup} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  disabled={isLoading}
                  className="bg-warm-orange hover:bg-warm-orange/90 text-white"
                >
                  {isLoading ? (
                    "Subscribing..."
                  ) : (
                    <>
                      Subscribe <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
              </form>
              
              <p className="text-sm text-academic-gray">
                Monthly updates • No spam • Unsubscribe anytime
              </p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}