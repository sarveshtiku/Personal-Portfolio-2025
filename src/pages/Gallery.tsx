import { Card } from "@/components/ui/card";

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=600&fit=crop",
    title: "Coffee & Code",
    description: "Late night coding sessions"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=600&h=400&fit=crop",
    title: "My Setup",
    description: "Where the magic happens"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=500&fit=crop",
    title: "Circuit Patterns",
    description: "Beauty in complexity"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=500&h=700&fit=crop",
    title: "Deep Work",
    description: "In the zone"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=600&h=450&fit=crop",
    title: "Creative Process",
    description: "Building something new"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=550&fit=crop",
    title: "Focus Mode",
    description: "Getting things done"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=400&fit=crop",
    title: "Future Dreams",
    description: "What's next?"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=600&fit=crop",
    title: "Digital World",
    description: "Living in the matrix"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=600&h=400&fit=crop",
    title: "Clean Desk",
    description: "Organized chaos"
  },
  {
    id: 10,
    src: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=500&fit=crop",
    title: "Code Poetry",
    description: "Art meets logic"
  }
];

export default function Gallery() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="text-center space-y-4">
        <h1 className="font-academic text-4xl lg:text-5xl font-bold text-primary">
          My Gallery
        </h1>
        <p className="text-xl text-academic-gray max-w-2xl mx-auto leading-relaxed">
          Personal moments, inspiration, and the world through my eyes. 
          A visual diary of my journey in tech and life.
        </p>
      </div>

      {/* Pinterest-style Masonry Grid */}
      <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
        {galleryImages.map((image) => (
          <Card key={image.id} className="group break-inside-avoid academic-shadow hover:warm-shadow transition-all duration-300 cursor-pointer overflow-hidden">
            <div className="relative">
              <img
                src={image.src}
                alt={image.title}
                className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="font-academic text-lg font-semibold">{image.title}</h3>
                <p className="text-sm opacity-90">{image.description}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Simple Stats */}
      <div className="text-center pt-8 border-t border-border">
        <div className="space-y-2">
          <div className="font-academic text-3xl font-bold text-primary">{galleryImages.length}</div>
          <div className="text-academic-gray">Moments Captured</div>
        </div>
      </div>
    </div>
  );
}