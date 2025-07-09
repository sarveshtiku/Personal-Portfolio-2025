import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarDays, Clock, ArrowRight, Mail, Send } from "lucide-react";
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
      title: "Understanding Distributed Systems: Lessons from Building at Scale",
      excerpt: "Real-world insights from designing and implementing distributed systems that handle millions of requests. Common pitfalls, architectural decisions, and monitoring strategies.",
      date: "2024-01-08",
      readTime: "12 min read",
      category: "Architecture",
      slug: "distributed-systems-lessons"
    },
    {
      title: "AI Ethics in Practice: A Developer's Perspective",
      excerpt: "Moving beyond theoretical discussions of AI ethics to practical implementation. How to build ethical considerations into your development workflow and decision-making process.",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "AI Ethics",
      slug: "ai-ethics-practice"
    }
  ];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Engineering": "bg-primary-blue-light text-primary-blue",
      "Architecture": "bg-warm-orange-light text-warm-orange",
      "AI Ethics": "bg-success/10 text-success"
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
        <div className="grid md:grid-cols-2 gap-6">
          {posts.slice(1).map((post, index) => (
            <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
              <CardHeader>
                <div className="flex items-center gap-3 text-sm text-academic-gray mb-2">
                  <Badge className={getCategoryColor(post.category)}>
                    {post.category}
                  </Badge>
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
                <CardTitle className="font-academic text-xl text-primary leading-tight">
                  {post.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-academic-gray leading-relaxed">
                  {post.excerpt}
                </p>
                <Button variant="outline" asChild>
                  <Link to={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
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
                  Summer Newsletter
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