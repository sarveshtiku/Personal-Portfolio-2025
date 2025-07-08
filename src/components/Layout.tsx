import { Sidebar } from "./Sidebar";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-background flex">
      <Sidebar />
      <main className="flex-1 lg:ml-0">
        <div className="max-w-4xl mx-auto px-6 py-8 lg:px-12 lg:py-12">
          {children}
        </div>
      </main>
    </div>
  );
}