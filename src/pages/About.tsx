import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function About() {
  const skills = [
    "React", "TypeScript", "Node.js", "Python", "PostgreSQL", "AWS",
    "Docker", "GraphQL", "Next.js", "TailwindCSS", "Machine Learning", "Research"
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          About Me
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          A passionate developer and researcher driven by the desire to solve complex problems 
          through elegant code and rigorous inquiry.
        </p>
      </section>

      {/* Main Content */}
      <section className="grid lg:grid-cols-3 gap-8">
        {/* Bio */}
        <div className="lg:col-span-2 space-y-6">
          <Card className="academic-shadow">
            <CardContent className="p-8">
              <h2 className="font-academic text-2xl font-semibold mb-4 text-primary">My Story</h2>
              <div className="prose prose-gray max-w-none space-y-4 text-academic-gray leading-relaxed">
                <p>
                  I'm a software developer and researcher with a deep fascination for the intersection 
                  of technology and human behavior. My journey began with a simple question: how can 
                  we build technology that not only works efficiently but also enhances human capability 
                  and understanding?
                </p>
                <p>
                  With over 5 years of experience in full-stack development, I've had the privilege 
                  of working on projects ranging from consumer applications to research tools used 
                  by academic institutions. My approach combines rigorous engineering practices with 
                  a researcher's curiosity for understanding the 'why' behind every decision.
                </p>
                <p>
                  When I'm not coding, you'll find me diving into research papers, contributing to 
                  open source projects, or writing about the latest developments in technology and 
                  their implications for society.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="academic-shadow">
            <CardContent className="p-8">
              <h2 className="font-academic text-2xl font-semibold mb-4 text-primary">Philosophy</h2>
              <div className="text-academic-gray leading-relaxed space-y-4">
                <p>
                  I believe in building software that is not just functional, but thoughtful. 
                  Every line of code should serve a purpose, every feature should solve a real problem, 
                  and every project should contribute positively to the world.
                </p>
                <p>
                  My development philosophy centers around three core principles: <strong className="text-primary">simplicity</strong>, 
                  <strong className="text-primary"> accessibility</strong>, and <strong className="text-primary">sustainability</strong>. 
                  I strive to write clean, maintainable code that can be understood and improved by future developers, 
                  while ensuring that the solutions I create are inclusive and environmentally conscious.
                </p>
                <p>
                  In research, I approach problems with intellectual curiosity and methodological rigor. 
                  I believe that the best solutions emerge from deep understanding of both the technical constraints 
                  and the human context in which technology operates.
                </p>
                <blockquote className="border-l-4 border-warm-orange pl-4 italic mt-4 text-primary-blue">
                  "Technology is best when it brings people together and amplifies human intelligence, 
                  not when it replaces human connection and judgment."
                </blockquote>
                <p>
                  This philosophy drives my commitment to ethical AI development, user-centered design, 
                  and building systems that enhance rather than diminish human capability and agency.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card className="academic-shadow">
            <CardHeader>
              <CardTitle className="font-academic text-xl text-primary">Skills & Technologies</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <Badge key={skill} variant="secondary" className="bg-warm-orange-light text-warm-orange">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="academic-shadow">
            <CardHeader>
              <CardTitle className="font-academic text-xl text-primary">Education</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 text-academic-gray text-sm">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-primary-blue-light flex items-center justify-center flex-shrink-0">
                  <span className="text-primary-blue font-bold text-xs">GT</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary">B.S. Computer Science</h4>
                  <p>Georgia Tech</p>
                  <p className="text-xs text-academic-gray">Graduating May 2027</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-warm-orange-light flex items-center justify-center flex-shrink-0">
                  <span className="text-warm-orange font-bold text-xs">FH</span>
                </div>
                <div>
                  <h4 className="font-medium text-primary">High School Diploma</h4>
                  <p>Fairview High School</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="academic-shadow">
            <CardHeader>
              <CardTitle className="font-academic text-xl text-primary">Interests</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-academic-gray">
              <div>
                <h4 className="font-medium text-primary">Research Areas</h4>
                <p className="text-sm">Human-Computer Interaction, AI Ethics, Distributed Systems</p>
              </div>
              <div>
                <h4 className="font-medium text-primary">Personal</h4>
                <p className="text-sm">Reading, Photography, Chess, Hiking</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}