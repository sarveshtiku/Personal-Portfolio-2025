import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { CalendarDays, Clock, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function Blog() {
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
    </div>
  );
}