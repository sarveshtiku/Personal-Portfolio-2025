import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=800&h=600&fit=crop",
    title: "Urban Exploration",
    category: "Street",
    description: "Capturing moments in the city"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=800&h=600&fit=crop",
    title: "Tech Workspace",
    category: "Technology",
    description: "Modern workspace aesthetics"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
    title: "Circuit Beauty",
    category: "Macro",
    description: "The art in technology"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=800&h=600&fit=crop",
    title: "Code in Motion",
    category: "Technology",
    description: "Programming in action"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
    title: "Creative Flow",
    category: "Lifestyle",
    description: "Finding inspiration everywhere"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop",
    title: "Digital Native",
    category: "Portrait",
    description: "The modern workspace"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    title: "Future Vision",
    category: "Abstract",
    description: "Where technology meets art"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
    title: "Digital Matrix",
    category: "Abstract",
    description: "The beauty of code"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
    title: "Minimal Setup",
    category: "Lifestyle",
    description: "Clean and focused"
  }
];

const categories = ["All", "Technology", "Street", "Macro", "Lifestyle", "Portrait", "Abstract"];

export default function Gallery() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          Gallery
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto leading-relaxed">
          A collection of moments captured through my lens - exploring the intersection 
          of technology, creativity, and everyday beauty.
        </p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <Badge
            key={category}
            variant={category === "All" ? "default" : "outline"}
            className="cursor-pointer hover:bg-accent transition-colors px-4 py-2"
          >
            {category}
          </Badge>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="group overflow-hidden academic-shadow hover:warm-shadow transition-all duration-300 cursor-pointer">
            <div className="relative overflow-hidden">
              <img
                src={image.src}
                alt={image.title}
                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-academic text-lg font-semibold">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
                <Badge variant="secondary" className="mt-2 text-xs">
                  {image.category}
                </Badge>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Stats Section */}
      <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-border">
        <div className="text-center">
          <div className="font-academic text-3xl font-bold text-primary">{galleryImages.length}</div>
          <div className="text-academic-gray">Photos Captured</div>
        </div>
        <div className="text-center">
          <div className="font-academic text-3xl font-bold text-primary">{categories.length - 1}</div>
          <div className="text-academic-gray">Categories</div>
        </div>
        <div className="text-center">
          <div className="font-academic text-3xl font-bold text-primary">∞</div>
          <div className="text-academic-gray">Stories to Tell</div>
        </div>
      </div>
    </div>
  );
}