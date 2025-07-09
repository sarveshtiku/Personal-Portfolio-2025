import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Book, FileText, Music, MapPin, Heart, ExternalLink } from "lucide-react";

export default function Shelf() {
  const currentReads = [
    {
      title: "Atomic Habits",
      author: "James Clear",
      progress: "60%",
      genre: "Self-Help"
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      progress: "25%",
      genre: "Design"
    },
    {
      title: "Clean Architecture",
      author: "Robert C. Martin",
      progress: "80%",
      genre: "Programming"
    }
  ];

  const currentBlogs = [
    {
      title: "The State of JS 2024",
      author: "StateOfJS",
      source: "stateofjs.com",
      category: "Technology"
    },
    {
      title: "How to Build Better Products",
      author: "Julie Zhuo",
      source: "thefutureofwork.com",
      category: "Product"
    }
  ];

  const currentPapers = [
    {
      title: "Attention Is All You Need",
      authors: "Vaswani et al.",
      venue: "NIPS 2017",
      field: "AI/ML"
    },
    {
      title: "The Design Space of Construction Grammars",
      authors: "Kay & Fillmore",
      venue: "Cognitive Science",
      field: "Linguistics"
    },
    {
      title: "BERT: Pre-training of Deep Bidirectional Transformers",
      authors: "Devlin et al.",
      venue: "NAACL 2019",
      field: "NLP"
    },
    {
      title: "ResNet: Deep Residual Learning for Image Recognition",
      authors: "He et al.",
      venue: "CVPR 2016",
      field: "Computer Vision"
    },
    {
      title: "Generative Adversarial Networks",
      authors: "Goodfellow et al.",
      venue: "NIPS 2014",
      field: "AI/ML"
    },
    {
      title: "The Mythical Man-Month",
      authors: "Brooks Jr.",
      venue: "Essays on Software Engineering",
      field: "Software Engineering"
    },
    {
      title: "MapReduce: Simplified Data Processing",
      authors: "Dean & Ghemawat",
      venue: "OSDI 2004",
      field: "Distributed Systems"
    },
    {
      title: "Bitcoin: A Peer-to-Peer Electronic Cash System",
      authors: "Nakamoto",
      venue: "Bitcoin Whitepaper",
      field: "Blockchain"
    },
    {
      title: "The PageRank Citation Ranking",
      authors: "Page et al.",
      venue: "Stanford InfoLab",
      field: "Web Search"
    },
    {
      title: "Dynamo: Amazon's Highly Available Key-value Store",
      authors: "DeCandia et al.",
      venue: "SOSP 2007",
      field: "Distributed Systems"
    }
  ];

  const currentSongs = [
    {
      title: "As It Was",
      artist: "Harry Styles",
      album: "Harry's House",
      mood: "Nostalgic"
    },
    {
      title: "Heat Waves",
      artist: "Glass Animals",
      album: "Dreamland",
      mood: "Chill"
    },
    {
      title: "Blinding Lights",
      artist: "The Weeknd",
      album: "After Hours",
      mood: "Energetic"
    },
    {
      title: "Levitating",
      artist: "Dua Lipa",
      album: "Future Nostalgia",
      mood: "Upbeat"
    },
    {
      title: "Good 4 U",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      mood: "Angry"
    },
    {
      title: "Watermelon Sugar",
      artist: "Harry Styles",
      album: "Fine Line",
      mood: "Happy"
    },
    {
      title: "drivers license",
      artist: "Olivia Rodrigo",
      album: "SOUR",
      mood: "Melancholic"
    },
    {
      title: "Stay",
      artist: "The Kid LAROI & Justin Bieber",
      album: "F*CK LOVE 3",
      mood: "Romantic"
    },
    {
      title: "Anti-Hero",
      artist: "Taylor Swift",
      album: "Midnights",
      mood: "Introspective"
    },
    {
      title: "Flowers",
      artist: "Miley Cyrus",
      album: "Endless Summer Vacation",
      mood: "Empowering"
    },
    {
      title: "Unholy",
      artist: "Sam Smith ft. Kim Petras",
      album: "Gloria",
      mood: "Dark"
    },
    {
      title: "Bad Habit",
      artist: "Steve Lacy",
      album: "Gemini Rights",
      mood: "Groovy"
    }
  ];

  const travelWishlist = [
    {
      place: "Kyoto, Japan",
      reason: "Cherry blossoms and temples",
      season: "Spring"
    },
    {
      place: "Santorini, Greece",
      reason: "Sunset views and architecture",
      season: "Summer"
    },
    {
      place: "Iceland",
      reason: "Northern lights and landscapes",
      season: "Winter"
    },
    {
      place: "New Zealand",
      reason: "Lord of the Rings filming locations",
      season: "Fall"
    }
  ];

  const nostalgicMoments = [
    {
      memory: "Late night coding sessions in college",
      feeling: "Focused determination",
      vibe: "Warm coffee and dim lighting"
    },
    {
      memory: "Summer camp adventures",
      feeling: "Carefree excitement",
      vibe: "Campfire stories and stargazing"
    },
    {
      memory: "Family road trips",
      feeling: "Comfortable togetherness",
      vibe: "Playlist on repeat and scenic routes"
    }
  ];

  return (
    <div className="space-y-12">
      {/* Header */}
      <section className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          My Shelf
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto">
          A collection of books, articles, music, and dreams that currently fill my world.
        </p>
      </section>

      {/* Shelf Sections */}
      <div className="space-y-8">
        {/* Books Currently Reading */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Book className="h-6 w-6 text-primary" />
            <h2 className="font-academic text-2xl font-semibold text-primary">Currently Reading</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {currentReads.map((book, index) => (
              <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-primary">{book.title}</h3>
                      <p className="text-sm text-academic-gray">by {book.author}</p>
                    </div>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline" className="text-xs">{book.genre}</Badge>
                      <span className="text-xs text-warm-orange font-medium">{book.progress}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Current Articles/Blogs */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="font-academic text-2xl font-semibold text-primary">Articles & Blogs</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {currentBlogs.map((blog, index) => (
              <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-primary">{blog.title}</h3>
                      <p className="text-sm text-academic-gray">by {blog.author}</p>
                      <p className="text-xs text-warm-orange">{blog.source}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{blog.category}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Research Papers */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="font-academic text-2xl font-semibold text-primary">Research Papers</h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll-left">
              {[...currentPapers, ...currentPapers].map((paper, index) => (
                <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300 flex-shrink-0 w-80">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-primary text-sm">{paper.title}</h3>
                        <p className="text-sm text-academic-gray">{paper.authors}</p>
                        <p className="text-xs text-warm-orange">{paper.venue}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{paper.field}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Current Music */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Music className="h-6 w-6 text-primary" />
            <h2 className="font-academic text-2xl font-semibold text-primary">On Repeat</h2>
          </div>
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-scroll-right">
              {[...currentSongs, ...currentSongs].map((song, index) => (
                <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300 flex-shrink-0 w-72">
                  <CardContent className="p-4">
                    <div className="space-y-3">
                      <div>
                        <h3 className="font-semibold text-primary">{song.title}</h3>
                        <p className="text-sm text-academic-gray">{song.artist}</p>
                        <p className="text-xs text-warm-orange">{song.album}</p>
                      </div>
                      <Badge variant="outline" className="text-xs">{song.mood}</Badge>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Travel Wishlist */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="font-academic text-2xl font-semibold text-primary">Places to Go</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {travelWishlist.map((destination, index) => (
              <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
                <CardContent className="p-4">
                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold text-primary">{destination.place}</h3>
                      <p className="text-sm text-academic-gray">{destination.reason}</p>
                    </div>
                    <Badge variant="outline" className="text-xs">{destination.season}</Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Nostalgic Moments */}
        <section>
          <div className="flex items-center gap-3 mb-6">
            <Heart className="h-6 w-6 text-primary" />
            <h2 className="font-academic text-2xl font-semibold text-primary">Life I Miss</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {nostalgicMoments.map((moment, index) => (
              <Card key={index} className="academic-shadow hover:warm-shadow transition-all duration-300">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-semibold text-primary">{moment.memory}</h3>
                    <div className="space-y-2">
                      <p className="text-sm text-academic-gray">
                        <span className="font-medium text-warm-orange">Feeling:</span> {moment.feeling}
                      </p>
                      <p className="text-sm text-academic-gray">
                        <span className="font-medium text-warm-orange">Vibe:</span> {moment.vibe}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}