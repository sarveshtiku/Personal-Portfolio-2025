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
    },
    {
      title: "The Research-Development Bridge: Translating Papers into Products",
      excerpt: "How to effectively bridge the gap between academic research and practical implementation. Strategies for staying current with research while building production systems.",
      date: "2023-12-10",
      readTime: "7 min read",
      category: "Research",
      slug: "research-development-bridge"
    },
    {
      title: "Modern JavaScript: Beyond the Hype",
      excerpt: "A pragmatic look at modern JavaScript features and frameworks. Which innovations actually improve developer experience and code quality, and which are just noise.",
      date: "2023-11-28",
      readTime: "9 min read",
      category: "JavaScript",
      slug: "modern-javascript-beyond-hype"
    },
    {
      title: "Building Inclusive Tech: Accessibility as a First-Class Citizen",
      excerpt: "Why accessibility shouldn't be an afterthought and how to build inclusive experiences from the ground up. Practical tips and tools for developers.",
      date: "2023-11-15",
      readTime: "6 min read",
      category: "Accessibility",
      slug: "building-inclusive-tech"
    }
  ];

  const categories = ["All", "Engineering", "Architecture", "AI Ethics", "Research", "JavaScript", "Accessibility"];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Engineering": "bg-primary-blue-light text-primary-blue",
      "Architecture": "bg-warm-orange-light text-warm-orange",
      "AI Ethics": "bg-success/10 text-success",
      "Research": "bg-warning/10 text-warning",
      "JavaScript": "bg-muted text-muted-foreground",
      "Accessibility": "bg-purple-100 text-purple-700"
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

      {/* Category Filter */}
      <section className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Button
            key={category}
            variant={category === "All" ? "default" : "outline"}
            size="sm"
            className={category === "All" ? "bg-warm-orange hover:bg-warm-orange/90" : ""}
          >
            {category}
          </Button>
        ))}
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

      {/* Newsletter Signup */}
      <section className="text-center py-12 bg-warm-orange-light/30 rounded-lg">
        <h3 className="font-academic text-2xl font-semibold mb-4 text-primary">
          Stay Updated
        </h3>
        <p className="text-academic-gray mb-6 max-w-lg mx-auto">
          Get notified when I publish new articles about development, research, and technology.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="flex-1 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-warm-orange"
          />
          <Button className="bg-warm-orange hover:bg-warm-orange/90">
            Subscribe
          </Button>
        </div>
      </section>
    </div>
  );
}