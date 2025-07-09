import { Navbar } from "./Navbar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <div className="max-w-6xl mx-auto px-6 py-8 lg:px-12 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}