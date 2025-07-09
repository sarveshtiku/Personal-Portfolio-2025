import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1">
        <div className="max-w-6xl mx-auto px-6 py-8 lg:px-12 lg:py-12">
          {children}
        </div>
      </main>
      <footer className="border-t border-border bg-background/50">
        <div className="max-w-6xl mx-auto px-6 py-6">
          <p className="text-center text-sm text-muted-foreground">
            made with love by sarvesh in cafes at san francisco &lt;3
          </p>
        </div>
      </footer>
    </div>
  );
}