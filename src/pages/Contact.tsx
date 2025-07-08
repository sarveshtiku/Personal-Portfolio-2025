import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Mail, Github, Linkedin, Twitter, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted");
  };

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Get In Touch
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          I'm always interested in discussing new opportunities, collaborations, 
          or just connecting with fellow developers and researchers.
        </p>
      </section>

      <div className="grid lg:grid-cols-3 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-2">
          <Card className="academic-shadow">
            <CardHeader>
              <CardTitle className="font-academic text-2xl text-primary">
                Send a Message
              </CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="your.email@example.com" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What would you like to discuss?" required />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea 
                    id="message" 
                    placeholder="Tell me about your project, collaboration idea, or just say hello!"
                    className="min-h-[120px]"
                    required 
                  />
                </div>
                
                <Button type="submit" className="w-full bg-warm-orange hover:bg-warm-orange/90">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Contact Info & Social */}
        <div className="space-y-6">
          {/* Contact Information */}
          <Card className="academic-shadow">
            <CardHeader>
              <CardTitle className="font-academic text-xl text-primary">
                Contact Information
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3 text-academic-gray">
                <Mail className="h-5 w-5 text-warm-orange" />
                <div>
                  <p className="font-medium text-primary">Email</p>
                  <p className="text-sm">hello@yourname.dev</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-academic-gray">
                <MapPin className="h-5 w-5 text-warm-orange" />
                <div>
                  <p className="font-medium text-primary">Location</p>
                  <p className="text-sm">San Francisco, CA</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3 text-academic-gray">
                <Calendar className="h-5 w-5 text-warm-orange" />
                <div>
                  <p className="font-medium text-primary">Availability</p>
                  <p className="text-sm">Open to new opportunities</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Social Links */}
          <Card className="academic-shadow">
            <CardHeader>
              <CardTitle className="font-academic text-xl text-primary">
                Connect Online
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Github className="h-5 w-5 text-academic-gray" />
                <div>
                  <p className="font-medium text-primary">GitHub</p>
                  <p className="text-sm text-academic-gray">@yourusername</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Linkedin className="h-5 w-5 text-academic-gray" />
                <div>
                  <p className="font-medium text-primary">LinkedIn</p>
                  <p className="text-sm text-academic-gray">Professional Profile</p>
                </div>
              </a>
              
              <a href="#" className="flex items-center gap-3 p-3 rounded-lg hover:bg-muted transition-colors">
                <Twitter className="h-5 w-5 text-academic-gray" />
                <div>
                  <p className="font-medium text-primary">Twitter</p>
                  <p className="text-sm text-academic-gray">@yourusername</p>
                </div>
              </a>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}